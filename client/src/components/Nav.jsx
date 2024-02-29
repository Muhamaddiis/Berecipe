import Button from "./Button"
import { useState } from "react"
import Menu from "../Assets/menu.svg"
import Close from "../Assets/Close.svg"
import { Link } from "react-router-dom"
import { useCookies } from "react-cookie"


const Nav = () => {
    const [cookie, removeCookie] = useCookies();
    const authToken = cookie.AuthToken
    const [toggle, setToggle] = useState(false);
    const [buttonActive, setButonActive] = useState(false);

  const signUp = () => {
        setButonActive(true)
  }
  const signOut = () => {
    removeCookie('Email');
    removeCookie('AuthToken')
    window.location.refresh()
  }
    return (
        <nav className="flex justify-around py-6">
            <div className="text-[#84c318] text-center px-6"><h1>Berecipe</h1></div>
            <div className="border-solid border border-black px-14 sm:flex items-center hidden rounded">
                <ul className="sm:flex space-x-4 list-none">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Recipes">Recipes</Link>
                </li>
                <li>
                  <Link to="/Contacts">Contacts</Link>
                </li>
                <li>
                  <Link to="/my">My recipes</Link>
                </li>
                </ul>
            </div>
            <div className={`space-x-4 py-2 hidden sm:block`}>
                <Link to="/Auth"><Button text={authToken ? "sign out" : "sign in"} handleClick={authToken ? () => signOut : signUp} isACtive={buttonActive} /></Link>
            </div>
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={`${toggle ? Close : Menu}`} alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle(!toggle)}
                />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 shadow-custom border-solid border border-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[999]`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Recipes">Recipes</Link>
                </li>
                <li>
                  <Link to="/Contacts">Contacts</Link>
                </li>
                <li>
                  <Link to="/my">My recipes</Link>
              </li>
              <li>
                <Link to="/Auth">Sign in</Link>
              </li>
          </ul>
        </div>
            </div>
        </nav>
    )
}


export default Nav