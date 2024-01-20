/* eslint-disable react/prop-types */
import Break from "../Assets/Frame 9.svg"
import Dinner from "../Assets/Frame 10.svg"
import Lunch from "../Assets/Frame 8.svg"
import Pastries from "../Assets/Frame 11.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
const Categories = ({handleClick}) => {
  return (
    <div className="mt-8">
        <div className="relative text-center">
            <div className="w-full border-t-2 border-gray-400"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#84c318] h-[8rem] w-[8rem] rounded-full border-4 border-white"></div>
            <h2 className="text-white relative z-10 text-xl -translate-y-1/2 font-[400]">Get Recipes</h2>
          </div>
        
        <div className="flex md:flex-row flex-col justify-center items-center mx-auto my-12">
        <table className="w-[80%] shadow-search">
<tbody>
    <tr>      
      <td className="border border-black p-4">
        <img src={Break} alt="Image 1" className="w-16 h-16 object-cover mr-4" />
        <h2 className="text-xl font-bold mb-2">Heading 1</h2>
        <p className="text-gray-700">This is a paragraph of text for the first table cell.</p>
        <button className="space-x-10" onClick={handleClick}>View more <span><FontAwesomeIcon icon={faArrowRight} style={{color: "#000000",}} /></span></button>
      </td>
      <td className="border border-black p-4">
        <img src={Dinner} alt="Image 2" className="w-16 h-16 object-contain mr-4" />
        <h2 className="text-xl font-bold mb-2">Heading 2</h2>
        <p className="text-gray-700">This is a paragraph of text for the second table cell.</p>
        <button className="space-x-10" onClick={handleClick}>View more <span><FontAwesomeIcon icon={faArrowRight} style={{color: "#000000",}} /></span></button>        
      </td>
    </tr>
    <tr>
      <td className="border border-black p-4">
        <img src={Lunch} alt="Image 3" className="w-16 h-16 object-cover mr-4" />
        <h2 className="text-xl font-bold mb-2">Heading 3</h2>
        <p className="text-gray-700">This is a paragraph of text for the third table cell.</p>
        <button className="space-x-10" onClick={handleClick}>View more <span><FontAwesomeIcon icon={faArrowRight} style={{color: "#000000",}} /></span></button>        
      </td>
      <td className="border border-black p-4">
        <img src={Pastries} alt="Image 4" className="w-16 h-16 object-contain mr-4" />
        <h2 className="text-xl font-bold mb-2">Heading 4</h2>
        <p className="text-gray-700">This is a paragraph of text for the fourth table cell.</p>
        <button className="space-x-10" onClick={handleClick}>View more <span><FontAwesomeIcon icon={faArrowRight} style={{color: "#000000",}} /></span></button>        
      </td>
    </tr>
  </tbody>
</table>     
        </div>  
        
    </div>
  )
}

export default Categories