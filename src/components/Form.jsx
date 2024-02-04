/* eslint-disable react/prop-types */

const Form = ({handleSubmit, recipe, setRecipe}) => {
  return (
    <div>
                  <form onSubmit={handleSubmit} className="relative">
                    <input
                        type="text"
                        value={recipe}
                        className="shadow-search border border-solid border-black max-w-[470px] mt-5 p-4 px-8 sm:w-1/2 bg-[#f5fbef] focus:ring-gray-400 focus:ring-2"
                        placeholder="Search recipes"
                        onChange={(e) => { setRecipe(e.target.value) }}  
                      />
                      <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4">
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2_1765)">
                                    <path d="M26.6203 24.7535L18.9 17.0332C20.3396 15.1875 21.1148 12.9094 21.1148 10.5732C21.1148 4.75135 16.3793 0.0158081 10.5574 0.0158081C4.73555 0.0158081 0 4.75135 0 10.5732C0 16.3951 4.73555 21.1307 10.5574 21.1307C12.9146 21.1307 15.2033 20.3449 17.0543 18.8894L24.7693 26.6045C25.302 27.0949 26.1246 27.058 26.615 26.5254C27.0738 26.0244 27.0738 25.2545 26.6203 24.7535ZM2.61035 10.5732C2.61035 6.191 6.1752 2.63143 10.5521 2.63143C14.9291 2.63143 18.4939 6.19628 18.4939 10.5732C18.4939 14.9502 14.9291 18.515 10.5521 18.515C6.1752 18.515 2.61035 14.9502 2.61035 10.5732Z" fill="#4D4D4D"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_1765">
                                    <rect width="27" height="27" fill="white"/>
                                    </clipPath>
                                </defs>
                        </svg>
                      </button>
                  </form>
              </div>
  )
}

export default Form