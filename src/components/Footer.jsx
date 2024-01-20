import {  } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div className="tex-sm text-[#503D42]">
        <div className="flex flex-col sm:flex-row gap-6 text-center justify-around">
          <div>
                  <p className="text-4xl">Ready to get Started</p>
                  <button className="bg-[#84c318] px-4 py-2 mt-5 rounded text-white button-style transition-colors hover:text-black">Get Started</button>
          </div>
          <div>
            <ul>
                <li className="text-[#84c318]">Services</li>
                <li>Email Marketing</li>
                <li>Campaigns</li>
                <li>Branding</li>        
            </ul>     
          </div>
          <div>
            <ul>
                <li className="text-[#84c318]">Services</li>
                <li>Email Marketing</li>
                <li>Campaigns</li>
                <li>Branding</li>        
            </ul>      
          </div>
         <div>
            <ul>
                <li className="text-[#84c318]">Services</li>
                <li>Email Marketing</li>
                <li>Campaigns</li>
                <li>Branding</li>       
            </ul>              
         </div>
        </div>
        <div className="flex justify-around mx-auto my-16">
            <div>
                <p>Terms and Conditions <span className='ml-6'>Privacy Policy</span></p> 
            </div>
            <div>
               <img src="../Assets/Social.jpg" alt="socials" />
            </div>
        </div>
      </div>
  )
}

export default Footer