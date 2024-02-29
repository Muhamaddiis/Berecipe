const PORT = process.env.PORT ?? 8000
const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')
const uuid4 = require('uuid4')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


app.use(cors());
app.use(express.json());


//get all recipes
app.get('/recipes', (req, res) => {
    fs.readFile(__dirname + "/" + "db.json", 'utf-8', (err, data) => {
        console.error(err);
        res.end(data)
    })
});
//post a new recipe
// app.post('/recipes', (req, res) => {
//     console.log("body", req.body);
//     const { title, category, ingredients, image_url, instructions } = req.body
//     const id = uuid4();
//     const recipeData = {
//         id,
//         email,
//         title,
//         category,
//         ingredients,
//         image_url,
//         instructions
//     }
//     console.log(recipeData);
//     try {
//         fs.readFile(__dirname + '/' + 'db.json', 'utf-8', (err, data) => {
//             if (err) {
//                 console.error('Error reading file:', err);
//                 res.status(500).send('Internal Server Error');
//                 return;
//             }
//             let initialData;
//             try {
//                 initialData = JSON.parse(data)
//                 console.log(initialData);

//             } catch (err) {
//                 console.error(err)
//             }
//             initialData.meal.push(recipeData);
//             console.log("added data", initialData);
//         })
//         fs.writeFile(__dirname + "/db.json", JSON.stringify(initialData, null, 2), (err) => {
//             if (err) {
//                 console.error('Error writing file:', err);
//                 res.status(500).send('Internal Server Error');
//                 return;
//             }
//             console.log('Recipe addded successfully.');
//             res.status(200).send('Recipe added successfully.');
//         });
//     } catch (error) {
//         console.error(error)
//     }
// })
app.post('/recipes', async (req, res) => {
    console.log("body", req.body);
    const { title, category, ingredients, image_url, instructions, email } = req.body;
    const id = uuid4();
    const recipeData = {
        id,
        email,
        title,
        category,
        ingredients: ingredients.split(','),
        image_url,
        instructions: instructions.split('.')
    };
    console.log(recipeData);
    try {
        let data = await fs.promises.readFile(__dirname + '/' + 'db.json', 'utf-8');
        let initialData = JSON.parse(data);
        initialData.meal.push(recipeData);
        console.log("added data", initialData);
        await fs.promises.writeFile(__dirname + "/db.json", JSON.stringify(initialData, null, 2));
        console.log('Recipe added successfully.');
        res.status(200).send('Recipe added successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

//get recipe by id
app.get('/recipes/id/:id', (req, res) => {
    const { id } = req.params
    fs.readFile(__dirname + "/" + "db.json", 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        try {
            const meals = JSON.parse(data)
            const recipe = meals.meal.find(meal => meal.id == id)
            if (recipe) {
                res.json(recipe)
            } else {
                res.status(404).send('Recipe Not Found')
            }
        } catch (err) {
            console.error('Error parsing JSON data:', err);
            res.status(500).send('Internal Server Error');
        }
    });
})

app.get('/recipes/email/:email', (req, res) => {
    const { email } = req.params
    fs.readFile(__dirname + "/" + "db.json", 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        try {
            const meals = JSON.parse(data);
            console.log("meals",meals);
            const recipe = meals.meal.filter(meal => meal.email == email)
            console.log("recipe",recipe);
            if (recipe.length > 0) {
                res.json(recipe)
            } else {
                res.status(404).send('Recipe Not Found')
            }

        } catch (err) {
            console.error('Error parsing JSON data:', err);
            res.status(500).send('Internal Server Error');
        }
    });
})


//delete a recipe
app.delete('/recipes/id/:id', (req, res) => {
    const { id } = req.params
    console.log("this is to be deleted", id);
    fs.readFile(__dirname +  "/db.json", 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        try {
            const meals = JSON.parse(data)
            console.log("data", meals.meal);
            const recipesWithoutDeleted = meals.meal.filter(ml => ml.id !== id);
            // console.log("recipe without deleted",recipesWithoutDeleted);
            // meals.meal = recipesWithoutDeleted

            fs.writeFile(__dirname + "/db.json", JSON.stringify({meal: recipesWithoutDeleted}, null, 2), (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                    res.status(500).send('Internal Server Error');
                    return;
                }
                console.log('Recipe deleted successfully.');
                res.status(200).send('Recipe deleted successfully.');
            });


        } catch (err) {
            console.error("Error parsing json data", err);
            res.status(500).send('Internal Server Error')
        }
    });
});

// signup user
app.post("/recipes/signup", async (req, res) => {
    const { email, password, username } = req.body
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const id = uuid4();
    const userData = {
        id,
        email,
        hashedPassword,
        username
    }
    

    try {
        let data = await fs.promises.readFile(__dirname + '/' + 'users.json', 'utf-8');
        let initialData = JSON.parse(data);
        const existingUser = initialData.users.filter(user => user.email === email);
        if (existingUser.length > 0) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        initialData.users.push(userData);
        console.log("added data", initialData);
        await fs.promises.writeFile(__dirname + "/users.json", JSON.stringify(initialData, null, 2));
        console.log('User added successfully.');

        const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' })
        
        res.status(200).send({ email, token });
        
    } catch (err) {
        console.error(err)
    }
})

//login user
app.post("/recipes/login", async (req, res) => {
    console.log("requesBody", req.body);
    const {password, email } = req.body
    const id = uuid4();
    const userData = {
        id,
        password,
        email
    }
    try {
        let data = await fs.promises.readFile(__dirname + '/' + 'users.json', 'utf-8');
        let usersData = JSON.parse(data);

        const user = usersData.users.find(user => user.email === email);

        console.log("user", user);
        
        if (!user) {
            return res.status(404).json({error: "User not found"})
        }

        const passwordMatch = await bcrypt.compare(password, user.hashedPassword);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' });

        res.status(200).send({ email, token });
    } catch (err) {
        console.error(err)
    }
})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
