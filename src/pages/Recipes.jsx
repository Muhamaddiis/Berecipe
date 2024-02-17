import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import meal from "../Services/meal";
import Card from "../components/Card";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import group from "../Assets/Chef.svg";
import b from "../Assets/b.svg";
import Nav from "../components/Nav"
import { Link } from "react-router-dom";
import Auth from "./Auth"
const Recipe = () => {
  const [food, setFood] = useState([]);
  const [cache, setCache] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [newFood, setNewFood] = useState('');

  let authToken = false

  useEffect(() => {
    meal.getAll().then(res => {
      setFood(res);
      setCache(res)
      // Added this line to set the initial food state
    });
  }, []);

  const handleFilter = (category) => {
    let filteredResults = [];
    if (category === "All") {
      filteredResults = cache;
    } else {
      filteredResults = cache.filter((item) =>
        item.category.toLowerCase() === category.toLowerCase()
      );
    }
    setFiltered(filteredResults); // Update the food state with filtered results
  };
  const renderContent = () => {
    if (filtered.length > 0) {
      return filtered.map((val) => (
        <Link key={val.id} to={`/recipe/${val.id}`}>
          <Card meal={val} />
        </Link>
      ));
    } else {
      return food.filter((val) => {
        if (newFood === "") {
          return val;
        } else if (val.title.toLowerCase().includes(newFood.toLowerCase())) {
          return val;
        }
      })
      .map((val) => (
        <Link key={val.id} to={`/recipe/${val.id}`}>
          <Card meal={val} />
        </Link>
      ));
    }
  };
    const slides = [group, b]
  
  
    return (
      <div className="bg-[#F5FBEF] w-full overflow-hidden">
        {!authToken && <Auth />}
        {authToken && (
          <>
              <Nav />
              <div className="flex">
                <Carousel image={slides}/>
              </div>
              <div className="flex flex-col md:flex-row justify-between mx-auto my-12">
                <div className="flex md:flex-col space-x-10 md:space-y-10 sm:ml-5 overflow-auto">
                  <h1 className="hidden md:block">Recipes</h1>
                  <Button text={"All"} handleClick={() => handleFilter("All")} />
                  <Button text={"breakfast"} handleClick={() => handleFilter('Breakfast')} />
                  <Button text={"Lunch"} handleClick={() => handleFilter('Lunch')} />
                  <Button text={"Dinner"} handleClick={() => handleFilter('Dinner')} />
                  <Button text={"Pasteries"} handleClick={() => handleFilter('Pasteries')} />
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex  items-center">
                    <form className="relative">
                      <input
                        type="text"
                        value={newFood}
                        className="shadow-search border border-solid border-black sm:w-[470px] mt-5 p-4  bg-[#f5fbef] focus:ring-gray-400 focus:ring-2"
                        placeholder="Search recipes"
                        onChange={(e) => { setNewFood(e.target.value) }}
                      />
                      <button className="absolute right-1 top-2/3 -translate-y-1/2 p-4 text-xsm">
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_2_1765)">
                            <path d="M26.6203 24.7535L18.9 17.0332C20.3396 15.1875 21.1148 12.9094 21.1148 10.5732C21.1148 4.75135 16.3793 0.0158081 10.5574 0.0158081C4.73555 0.0158081 0 4.75135 0 10.5732C0 16.3951 4.73555 21.1307 10.5574 21.1307C12.9146 21.1307 15.2033 20.3449 17.0543 18.8894L24.7693 26.6045C25.302 27.0949 26.1246 27.058 26.615 26.5254C27.0738 26.0244 27.0738 25.2545 26.6203 24.7535ZM2.61035 10.5732C2.61035 6.191 6.1752 2.63143 10.5521 2.63143C14.9291 2.63143 18.4939 6.19628 18.4939 10.5732C18.4939 14.9502 14.9291 18.515 10.5521 18.515C6.1752 18.515 2.61035 14.9502 2.61035 10.5732Z" fill="#4D4D4D" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2_1765">
                              <rect width="27" height="27" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </form>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {renderContent()}
                  </div>
                  <button className="bg-[#84c318] px-4 py-2 mt-5 rounded text-white button-style transition-colors hover:text-black">Load More</button>
                </div>
              
              </div>
              <Footer />
          </>
        )}
        
      </div>
    )
  }

export default Recipe