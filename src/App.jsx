import meal from "./Services/meal";
import Card from "./components/Card";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
const App = () => {
  const [randomMeal, setRandomMeal] = useState([])
  useEffect(() => {
    meal.getRandom().then(res => { setRandomMeal(res.meals) })
  }, [])
  return (
    <div className="bg-[#F5FBEF] w-full overflow-hidden">
      <Nav />
      <Hero />
      <Categories />
      <h1 className="text-center text-xl md:text-4xl mt-3">Top recommended Recipes</h1>      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {randomMeal.map((rand) => (
          <Card key={rand.id} meal={rand} className="flex" />
        ))}
      </div>
    </div>
  )
}

export default App;
