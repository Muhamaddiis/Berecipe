/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react"

const Carousel = ({ image }) => {
    const [imageIndex, setImageIndex] = useState(0);
    const handleNext = () => {
        setImageIndex(index => {
            if (index === image.length - 1) return 0
            return index + 1
        });
    };
    const handlePrev = () => {
        setImageIndex(index => {
            if (index === 0) return image.length - 1
            return index - 1
        });
    }
  return (
    <div className="bg-[#748B75] lg:w-[1239px] lg:h-[356px] w-3/4 h-34  mx-auto  flex flex-col items-center justify-around space-y-5 rounded-[34px] text-center relative">
          <img src={image[imageIndex]} alt="Chef" className="sm:w-[70%] sm:h-[70%] transition ease-in-out" />
          <div className="flex gap-4">
            <button onClick={handleNext}><FontAwesomeIcon icon={faCircle} style={{ color: imageIndex === 0 ? "#84c318" : "#c4d5c2" }} /></button>
            <button onClick={handlePrev}><FontAwesomeIcon icon={faCircle} style={{ color: imageIndex === 1 ? "#84c318" : "#c4d5c2" }} /></button>
          </div>
          
    </div>
  )
}

export default Carousel