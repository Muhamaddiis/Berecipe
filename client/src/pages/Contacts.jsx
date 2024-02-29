import { useState } from "react"
import { useCookies } from "react-cookie"
import Footer from "../components/Footer"
import Auth from "./Auth"
import meal from "../Services/meal"

const Contacts = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies()
  const authToken = cookies.AuthToken
  const email = cookies.Email
  const [data, setData] = useState({
    id : "",
    email: email,
    title: "",
    category: "",
    image_url: "",
    ingredients: [],
    instructions: "",
  });
  const createPost = (e) => {
    e.preventDefault()
    meal.createRecipe(data).then(res => console.log("data to be submitted", res));
    setData("")
    window.location.href = '/my'
  }
  const handlechange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setData(data => ({
      ...data,
      [name] : value
    }))

    console.log(data);
  }
 
  return (
      <div className="flex flex-col justify-center items-center  text-pretty w-full overflow-hidden bg-[#F5FBEF]">
        {!authToken && <Auth/>}
        {authToken && (
          <>
            <h1 className="my-12">Add Recipe</h1>
            <div className="flex flex-col items-center">
              <div className="flex flex-col md:flex-row justify-between shadow-custom border border-black">
                <div>
                  <form action="" method="post" className="flex flex-col space-y-3 my-12 mx-4 text-sm md:text-lg">
                    <label>Name of recipe</label>
                    <input type="text" className="border border-solid border-black p-1" 
                    onChange={handlechange}
                    required
                    placeholder="Tiltle"
                    name="title"
                    value={data.title}
                  />
                    <label>Category</label>
                    <input type="text" className="border border-solid border-black p-1"
                    required
                    placeholder="category"
                    name="category"
                    onChange={handlechange}
                    value={data.category}
                    />
                    <label>Ingredients</label>
                    <input type="text" className="border border-solid border-black p-1" onChange={handlechange} required
                    placeholder="ingredients"
                    name="ingredients"
                    value={data.ingredients}
                    />
                    <label>Image url</label>
                    <input type="url" className="border border-solid border-black p-1" onChange={handlechange} required
                    placeholder="image_url"
                    name="image_url"
                    value={data.image_url}
                    />
                  </form>
                </div>
                <div className="mx-4 rounded border border-green-600 p-3 my-12">
                  <textarea name="instructions" id="" cols="30" rows="10" className="focus:outline-0" placeholder="Instructions" onChange={handlechange} value={data.instructions}></textarea>
                </div>
              </div>
              <button className="px-5 rounded my-9 bg-[#84c314]" onClick={createPost}>Submit</button>
            </div>  
            <Footer />
          </>
        )}
          
    </div>
  )
}

export default Contacts