/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'



const Card = ({ meal }) => {
  return (
    <div className="p-4 text-center">
          <div className="flex justify-between flex-shrink-0 flex-col p-4 rounded w-[263px] h-[409px] md:ml-10 sm:mr-5 mr-0 my-5 border-2 border-r-3 border-b-3 border-black border-solid space-y-4">
              <img src={meal.strMealThumb} alt="" className="border rounded-md object-cover object-center max-w-[240px] max-h-[154px]" />
              <h1 className='text-[20px] font-mono font-bold'>{meal.strMeal}</h1>
              <p className='mt-2  text-sm font-inherit max-w-[183px] max-h-[60px] overflow-hidden text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, accusamus.</p>
              <hr className='border-t border-[#D9D9D9]' />
              <div className="flex justify-between text-sm">
                  <p>Time <br /> 20-30mins</p>
                  <p>Rate <br /> <span className='space-x-2'><FontAwesomeIcon icon={faStar} style={{ color: "#84c318", }} /></span>4.5</p>
              </div>
          </div>
    </div>
  )
}

export default Card