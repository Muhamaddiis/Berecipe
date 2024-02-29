import meal from "./Services/meal";
import Card from "./components/Card";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Plate from './Assets/Plate.svg'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [randomMeal, setRandomMeal] = useState([]);
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    meal.getAll().then(res => { setRandomMeal(res.meal); })
  }, []);
  const shuffledData = randomMeal.sort(() => Math.random() - 0.5);
  const slicedData = shuffledData.slice(0, 8)
  const gettingRecipeId = () => {
    if (typeof recipe !== 'string') {
      return null;
    }
    const foundRecipe = randomMeal.find(item => item.title.toLowerCase() === recipe.toLowerCase());
      return foundRecipe ? foundRecipe.id : null;
  }
  
  const recipeId = gettingRecipeId();
  return (
    <div className="bg-[#F5FBEF] w-full overflow-hidden" id="home">
      <Nav />
      <section id="home" className="flex md:flex-row flex-col justify-between sm:py-16 mx-10 my-12">
          <div className="flex flex-col">
              <div>
                <h1 className="text-bold-xl font-Nasalization">Every Meal Tells a Story</h1>   
              </div>
              <div className="font-Poppins text-[18px] leading-[30.8px] max-w-[470px] mt-5">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deserunt, facilis tenetur harum expedita culpa! Praesentium, voluptatum consequuntur</p>  
          </div>
          <form className="relative"  action={`/recipe/${recipeId}`}>
                      <input
                          type="text"
                          value={recipe}
                          className="shadow-search border border-solid border-black sm:w-[470px] mt-5 p-4  bg-[#f5fbef] focus:ring-gray-400 focus:ring-2"
                          placeholder="Search recipes"
                          onChange={(e) => { setRecipe(e.target.value)}}  
                        />
                        {/* <button className="absolute right-1 top-2/3 -translate-y-1/2 p-4 text-xsm">
                          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2_1765)">
                                    <path d="M26.6203 24.7535L18.9 17.0332C20.3396 15.1875 21.1148 12.9094 21.1148 10.5732C21.1148 4.75135 16.3793 0.0158081 10.5574 0.0158081C4.73555 0.0158081 0 4.75135 0 10.5732C0 16.3951 4.73555 21.1307 10.5574 21.1307C12.9146 21.1307 15.2033 20.3449 17.0543 18.8894L24.7693 26.6045C25.302 27.0949 26.1246 27.058 26.615 26.5254C27.0738 26.0244 27.0738 25.2545 26.6203 24.7535ZM2.61035 10.5732C2.61035 6.191 6.1752 2.63143 10.5521 2.63143C14.9291 2.63143 18.4939 6.19628 18.4939 10.5732C18.4939 14.9502 14.9291 18.515 10.5521 18.515C6.1752 18.515 2.61035 14.9502 2.61035 10.5732Z" fill="#4D4D4D"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_1765">
                                    <rect width="27" height="27" fill="white"/>
                                    </clipPath>
                                </defs>
                          </svg>
                        </button> */}
                </form>
          </div>
          <div>
              <img src={Plate} alt="plate" className="w-[100%] h-[100%] relative z-[5]" />
          </div>
    </section>
      <Categories />
      <h1 className="text-center text-xl md:text-4xl mt-3">Top recommended Recipes</h1> 
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center items-center">
          {slicedData?.map((rand) => (
            <Link key={rand.id} to={`/recipe/${rand.id}`}>
              <Card meal={rand}/>
            </Link>
          ))}
        </div>
        <button className="bg-[#84c318] px-4 py-2 mt-5 rounded text-black button-style transition-colors">
          <Link to={'/recipes'}>View ALL</Link>
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default App;
