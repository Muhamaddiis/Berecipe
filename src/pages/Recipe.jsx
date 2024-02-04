/* eslint-disable react/prop-types */
import Nav from "../components/Nav"
import recipe from "../Assets/Frame 22.svg"
import Footer from "../components/Footer"
import { useEffect, useState } from "react";
import meal from "../Services/meal";
import { useParams } from "react-router-dom";
const Recipe = () => {
    const [recipeDetails, setRecipeDetails] = useState({});
    const {id} = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const res = await meal.getById(id);
            setRecipeDetails(res);
        }
        fetchData();
    }, [id]);
    
  return (
    <div>
          <Nav />
          <div className="flex justify-center my-12">
              <img src={recipe} alt="recipe-img" className="max-w-[50%]" />
          </div>
          <hr className="border-b-2 border-[#84c318]"/>
          <div className="my-12">
              <div className="flex flex-col justify-center items-center gap-8">
                  <h1>{recipeDetails.title}</h1>
                  <img src={recipeDetails.image} alt="recipe-image" className="rounded max-w-[50%]" />
                  <p className="w-[750px]">{recipeDetails.instructions}</p>
                  <table className="border border-solid border-[#333] w-[300px] md:w-[874px] shadow-custom">
                    <thead>
                        <tr>
                        <th className="border-b border-solid border-[#333] text-2xl">A very SOS friendly ingredients list</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            {recipeDetails?.ingredients?.map((recipeDetail, i) => (
                                <li key={i}>{recipeDetail}</li>
                            ))}

                            </td>
                        </tr>
                    </tbody>
                </table>

              </div>
          </div>
          <Footer/>
    </div>
  )
}

export default Recipe