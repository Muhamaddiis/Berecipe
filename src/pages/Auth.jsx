import { useState } from "react"
import Nav from "../components/Nav";

const Auth = () => {
  const [isLogged, setIsLogged] = useState(false);
  const viewLogin = (status) => {
    setIsLogged(status)
  }
  return (
    <div className="w-full overflow-hidden h-[100vh]">
        <Nav/>
        <div className="flex flex-col  gap-6 items-center">
              <div>
                  <h1 className="text-lime-600 mt-5">{isLogged?"Login": "Signup"}</h1>
              </div>
              <div className="border border-neutral-950 shadow-custom mx-4">
                <form action="" className="space-y-6 p-6 md:w-[548px] w-3/4" style={{ height: isLogged ? "175px" : "" }}>
            {!isLogged && (
              <div className="space-y-6">
                  <input type="text" className="border border-neutral-900 focus:outline-0 px-2 text-slate-950" placeholder="First-Name"/>
                  <input type="text" className="border border-neutral-900 focus:outline-0 px-2" placeholder="Last-Name"/> <br />
                  <input type="email" className="border border-neutral-900 focus:outline-0 rounded w-full px-2" placeholder="Email Address"/> <br />
              </div>
            )}
                  <input type="text" className="border border-neutral-900 focus:outline-0 rounded w-full px-2" placeholder="Username"/> <br />
                  <input type="text" className="border border-neutral-900 focus:outline-0 rounded w-full px-2" placeholder="Password"/> <br />
                </form>
              </div>
              <div className="space-y-4">
                <button onClick={() => viewLogin(false)} className="bg-[#84c318] px-5 py-2 mt-5 rounded text-black button-style transition-color">Signup</button> <br />
                <button onClick={() => viewLogin(true)} className="bg-[#84c318] px-6 py-2 mt-5 rounded text-black button-style transition-colors">Login</button>
              </div>
        </div>
    </div>
  )
}

export default Auth