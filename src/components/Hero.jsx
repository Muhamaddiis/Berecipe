import { useState } from "react"
import Plate from "../Assets/Plate.svg"
import Form from "./Form";
const Hero = () => {
    const [recipe, setRecipe] = useState([]);
    const handleSubmit = () => {
        
    }
  return (
      <section id="home" className="flex md:flex-row flex-col justify-between sm:py-16 mx-10 my-12">
          <div className="flex flex-col">
              <div>
                <h1 className="text-bold-xl font-Nasalization">Lorem ipsum dolor sit amet consectetur.</h1>   
              </div>
              <div className="font-Poppins text-[18px] leading-[30.8px] max-w-[470px] mt-5">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deserunt, facilis tenetur harum expedita culpa! Praesentium, voluptatum consequuntur</p>  
          </div>
          <Form handleSubmit={handleSubmit} recipe={recipe} setRecipe={setRecipe} />
          </div>
          <div>
              <img src={Plate} alt="plate" className="w-[100%] h-[100%] relative z-[5]" />
          </div>
    </section>
  )
}

export default Hero