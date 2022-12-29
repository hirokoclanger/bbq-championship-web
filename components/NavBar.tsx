import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "News", href: "/news" },
  { text: "Sponsoren", href: "/sponsors" },
  { text: "Events", href: "/events" },
  { text: "Informationen", href: "/informationen" },
  { text: "Anmeldung", href: "/anmeldung" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
      <div className="lg:w-11/12">
        <div className="flex gap-2  py-2 items-center pl-4">
            <Link className="text-3xl sm:flex hidden font-bold text-gray-200 transition-colors duration-500 transform dark:text-white lg:text-3xl hover:text-orange-400" href="/">Grillmeisterschaft </Link>
            <Link className="text-3xl sm:flex hidden font-bold text-gray-200 transition-colors duration-500 transform dark:text-white lg:text-3xl hover:text-orange-400" href="/"> Poing</Link>
            <Image src="/img/logo.png" className="sm:flex hidden" height={32} width={55} />
            <Image src="/img/logo.png" className="sm:hidden" height={72} width={95} />
            
        </div>
                    </div>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
          
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;