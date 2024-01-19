import Break from "../Assets/Frame 9.svg"
const Categories = () => {
  return (
    <div className="mt-8">
        <div className="relative text-center">
            <div className="w-full border-t-2 border-gray-400"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#84c318] h-[6rem] w-[6rem] rounded-full border-4 border-white"></div>
            <h2 className="text-white relative z-10">Get Recipes</h2>
          </div>
        
        <div className="mt-8 flex md:flex-row flex-col justify-center items-center">
        <table className="">
<tbody>
    <tr>
      <td className="border border-black p-4 flex flex-col">
        <img src={Break} alt="Image 1" className="w-16 h-16 object-cover mr-4" />
        <h2 className="text-xl font-bold mb-2">Heading 1</h2>
        <p className="text-gray-700">This is a paragraph of text for the first table cell.</p>
      </td>
      <td className="border border-black p-4">
        <img src="image2.jpg" alt="Image 2" className="w-16 h-16 object-cover mr-4" />
        <h2 className="text-xl font-bold mb-2">Heading 2</h2>
        <p className="text-gray-700">This is a paragraph of text for the second table cell.</p>
      </td>
    </tr>
    <tr>
      <td className="border border-black p-4">
        <img src="image3.jpg" alt="Image 3" className="w-16 h-16 object-cover mr-4" />
        <h2 className="text-xl font-bold mb-2">Heading 3</h2>
        <p className="text-gray-700">This is a paragraph of text for the third table cell.</p>
      </td>
      <td className="border border-black p-4">
        <img src={""} alt="Image 4" className="w-16 h-16 object-cover mr-4" />
        <h2 className="text-xl font-bold mb-2">Heading 4</h2>
        <p className="text-gray-700">This is a paragraph of text for the fourth table cell.</p>
      </td>
    </tr>
  </tbody>
</table>     
        </div>  
        
    </div>
  )
}

export default Categories