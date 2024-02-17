import Footer from "../components/Footer"
import Auth from "./Auth"

const Contacts = () => {
  const authToken = false
  return (
      <div className="flex flex-col justify-center items-center text-xl text-pretty w-full overflow-hidden">
        {!authToken && <Auth/>}
        {authToken && (
          <>
            <h1 className="my-12">Add Recipe</h1>
            <div className="my-12 border border-solid border-black shadow-custom w-3/4 flex flex-col items-center">
                <form className="flex justify-between">
                    <div className="flex flex-col my-12 gap-4 mx-12">
                      <label>Name of Recipe</label>
                      <input type="text" className="border border-solid border-black" />
                      <label>Name of Author</label>
                      <input type="text" className="border border-solid border-black" />
                      <label>Ingredients</label>
                      <input type="" />
                      <label>Image</label>
                      <input type="file"/>
                    </div>
                    <div>
                      <textarea autoFocus name="" id="" cols="30" rows="10" className="rounded border border-green-600 dark:bg-emerald-300/20 border-solid mx-12 my-12 w-[524px] h-[382px] focus:outline-0 p-3"></textarea>
                    </div>
                </form>
                <button className="px-5 rounded my-9 bg-[#84c314]">Submit</button>
            </div>  
            <Footer />
          </>
        )}
          
    </div>
  )
}

export default Contacts