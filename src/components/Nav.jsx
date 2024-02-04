import Button from "./Button"
import { navLinks, navLinksSide } from "../Constants"
import { useState } from "react"
import Menu from "../Assets/menu.svg"
import Close from "../Assets/Close.svg"
import { Link } from "react-router-dom"


const Nav = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    const [buttonActive, setButonActive] = useState(false);

    const signUp = () => {
        setButonActive(true)
    }
    return (
        <nav className="flex justify-around py-6">
            <div className="text-[#84c318] text-center px-6"><h1>Berecipe</h1></div>
            <div className="border-solid border border-black px-14 sm:flex items-center hidden rounded">
                <ul className="sm:flex space-x-4 list-none">
                    {navLinks.map((nav) =>
                        <li
                            key={nav.id}
                            className={`${active === nav.title ? "text-black" : "text-slate-500"}`}
                            onClick={() => setActive(nav.title)}
                            >
                        <Link to={nav.id}>{nav.title}</Link>
                    </li>)}
                </ul>
            </div>
            <div className={`space-x-4 py-2 hidden sm:block`}>
                <Button text={"signup"} handleClick={signUp} isACtive={buttonActive} />
                <Button text={"login"}/>
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
          } p-6 shadow-custom border-solid border border-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinksSide.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-inherit font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-black" : "text-slate-600"
                } ${index === navLinksSide.length - 1 ? "mb-3" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
            </div>
        </nav>
    )
}


export default Nav