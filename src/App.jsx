import meal from "./Services/meal";
import Card from "./components/Card";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const App = () => {
  const [randomMeal, setRandomMeal] = useState([])
  useEffect(() => {
    meal.getAll().then(res => { setRandomMeal(res) })
  }, [])
  return (
    <div className="bg-[#F5FBEF] w-full overflow-hidden" id="home">
      <Nav />
      <Hero />
      <Categories />
      <h1 className="text-center text-xl md:text-4xl mt-3">Top recommended Recipes</h1> 
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center items-center">
          {randomMeal?.map((rand) => (
            <Link key={rand.id} to={`/recipe/${rand.id}`}>
            <Card meal={rand}/>
          </Link>
          ))}
        </div>
        <button className="bg-[#84c318] px-4 py-2 mt-5 rounded text-black button-style transition-colors">View All</button>
      </div>
      <Footer />
    </div>
  )
}

export default App;
