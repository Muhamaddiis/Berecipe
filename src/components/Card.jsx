/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Card = ({ meal }) => {
  return (
    <div className="sm:p-4  text-center">
          <div className="flex flex-col p-4 items-center rounded w-[263px] h-[409px] md:ml-10 sm:mr-5 mr-0 my-5 border-2 border-r-3 border-b-3 border-black border-solid space-y-4">
              <img src={meal.image} alt="" className="border rounded-md object-cover object-center max-w-[240px] max-h-[154px]" />
              <h1 className='text-[20px] font-mono font-bold'>{meal.title}</h1>
              <p className='mt-2  text-sm font-inherit max-w-[183px] max-h-[60px] overflow-hidden text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, accusamus.</p>
              <hr className='border-t-2 border-gray-300 w-full' />
              <div className="flex space-x-20">
                  <p>Time <br /> 20-30mins</p>
                  <p>Rate <br /> <span className='space-x-4'><FontAwesomeIcon icon={faStar} style={{ color: "#84c318", }} /></span>4.5</p>
              </div>
          </div>
    </div>
  )
}

export default Card