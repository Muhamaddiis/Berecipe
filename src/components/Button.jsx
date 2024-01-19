/* eslint-disable react/prop-types */

const Button = ({text, handleClick, isACtive}) => {
  return (
      <button className={`px-4 rounded shadow-custom hover:shadow-hover border-solid border border-black ${isACtive ? "bg-[#84c318]" : ""}`} onClick={handleClick}>{text}</button>
  )
}

export default Button