import Card from "../components/Card"
import axios from "axios";
import { useEffect, useState } from "react"
import meal from "../Services/meal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import Auth from "./Auth";
const Myrecipes = () => {
    const [myRecipe, setMyRecipe] = useState([])
    const [cookies, setCookie, removeCookie] = useCookies()
    const authToken = cookies.AuthToken
    const fetchByEmail = async () => {
        const email = cookies.Email
        console.log(email);
        const request = await axios.get(`http://localhost:8000/recipes/email/${email}`)
        const response = await request.data
        setMyRecipe(response)
    };
    useEffect(() => {
        fetchByEmail();
    }, []);

    const handleDelete = async(id) => {
        try {
            await meal.deleteById(id);
            setMyRecipe(myRecipe.filter(myrecip => myrecip.id !== id))
        } catch (error) {
            console.error('Error deleting recipe:', error);
        }
    }

    return (
        <div className="bg-[#F5FBEF]">
            {!authToken && <Auth />}
            {authToken && (
                <>
                    <h1 className="text-center">Your Recipes</h1>
                    <div className="flex flex-col items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center items-center">
                            {myRecipe.map(myrecip => <div key={myrecip.id} className="flex flex-col">
                                <Link key={myrecip.id} to={`/recipe/${myrecip.id}`}>
                                    <Card meal={myrecip} />
                                </Link>
                                <button onClick={() => handleDelete(myrecip.id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                                </div>)
                            }
                        </div>
                    </div>
                </>
            )}     
        </div>
    )
    }

export default Myrecipes