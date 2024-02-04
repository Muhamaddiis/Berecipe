import Footer from "../components/Footer"

const Contacts = () => {
  return (
      <div className="flex flex-col justify-center items-center text-xl text-pretty">
          <h1 className="my-12">Add Recipe</h1>
          <div className="my-12 border border-solid border-black shadow-custom w-3/4 flex flex-col items-center">
              <form className="flex justify-between">
                  <div className="flex flex-col my-12 gap-4 mx-12">
                    Name of Recipe
                    <input type="text" className="border border-solid border-black" />
                    Name of Author
                    <input type="text" className="border border-solid border-black" />
                    Company
                    <input type="text" className="border border-solid border-black" />
                  </div>
                  <div>
                    <textarea name="" id="" cols="30" rows="10" className="border border-solid border-black mx-12 my-12 w-[524px] h-[382px]"></textarea>
                  </div>
              </form>
              <button className="px-5 rounded my-9 bg-[#84c314]">Submit</button>
          </div>  
          <Footer />
    </div>
  )
}

export default Contacts