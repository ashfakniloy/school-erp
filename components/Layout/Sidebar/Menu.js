// import { useState } from "react";
import Link from "next/link";
import SubMenu from "./SubMenu";
import { useRouter } from "next/router";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

function Menu({ showMenu, setShowMenu, active, setActive, navLink }) {
  const router = useRouter();

  const toggle = (index) => {
    if (active === index) {
      return setActive(null);
    }

    setActive(index);
  };

  const activeClass = (path) => {
    // router.pathname === path
    if (router.pathname === path) {
      return "bg-slate-500 hover:bg-slate-500 border-l-4 border-slate-400 pl-6";
    }
    return "hover:bg-slate-600";
  };

  const SubMenuActiveClass = (path) => {
    // router.pathname === path
    if (router.pathname.includes(path)) {
      return "bg-slate-500 hover:bg-slate-500 border-l-4 border-slate-400 pl-6";
    }
    return "hover:bg-slate-600";
  };

  return (
    <div className="" onClick={() => setShowMenu(true)}>
      {!navLink.subLinks ? (
        <Link href={navLink.link} passHref>
          <a>
            <div className="border-t border-slate-600">
              <div
                className={`px-7 py-3 text-sm cursor-pointer ${activeClass(
                  // navLink.id,
                  navLink.link
                )}`}
              >
                <div className="flex items-center justify-between relative">
                  <div className="flex items-center gap-4">
                    <div className="text-xl">
                      <span>{navLink.icon}</span>
                    </div>
                    <p
                      className={`capitalize duration-300 whitespace-nowrap ${
                        showMenu ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {navLink.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      ) : (
        <div className="border-t border-slate-600">
          <div
            className={`px-7 py-3 text-sm cursor-pointer ${SubMenuActiveClass(
              navLink.link
              // navLink.id,
            )}`}
            onClick={() => toggle(navLink.id)}
          >
            <div className="flex items-center justify-between relative">
              <div className="flex items-center gap-4">
                <div className="text-xl">
                  <span>{navLink.icon}</span>
                </div>
                <p
                  className={`capitalize duration-300 whitespace-nowrap ${
                    showMenu ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {navLink.name}
                </p>
              </div>

              <div className="">
                {active === navLink.id ? <FaAngleDown /> : <FaAngleRight />}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="">
        {active === navLink.id &&
          showMenu &&
          navLink.subLinks.map((subLink, i) => (
            <SubMenu
              key={i}
              index={subLink.id}
              subLink={subLink}
              setActive={setActive}
              // activeClass={activeClass}
              // SubMenuActiveClass={SubMenuActiveClass}
            />
          ))}
      </div>
    </div>
  );
}

export default Menu;
