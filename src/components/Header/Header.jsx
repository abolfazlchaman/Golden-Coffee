import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import CardBorder from "../CardBorder/CardBorder";

import mobileLogo from "../../assets/svgs/logo-type.svg";

function Header({ items }) {
  const [themeMode, setThemeMode] = useState(localStorage.getItem("theme") || "light");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuickPanelOpen, setIsQuickPanelOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [clickedMenuItem, setClickedMenuItem] = useState("");

  useEffect(() => {
    const themeFlag = localStorage.getItem("theme");
    console.log(themeFlag);
    if (themeFlag === "dark") {
      localStorage.setItem("theme", themeMode);
      document.body.setAttribute("class", themeMode);
      setThemeMode(themeFlag);
    } else {
      setThemeMode("light");
      localStorage.removeItem("theme");
    }
  }, []);

  useEffect(() => {
    themeMode && document.body.setAttribute("class", themeMode);
    themeMode && localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  return (
    <header
      className="w-screen static pt-20 lg:pt-0 h-fit lg:h-screen min-h-fit text-xl hero font-Dana text-[14px]"
      id="main"
      onClick={(e) => {
        setIsCartOpen(false);
        setIsQuickPanelOpen(false);
        setIsMobileCartOpen(false);
        setIsMobileMenuOpen(false);
        e.stopPropagation();
      }}>
      {/* desktop nav */}
      <nav className="w-[90%] hidden mx-auto shadow-shadow-normal rounded-3xl justify-between bg-black/50 backdrop-blur-[6px] fixed lg:flex flex-row top-[.5rem] left-0 right-0 h-[4rem] max-h-[96px] items-center z-50">
        <div className="flex flex-row">
          <img
            src="/src/assets/app-logo.png"
            className=" w-9 h-9 mr-10"
            alt="logo"
          />
          {items?.map(({ title, href }, i) => (
            <div className="flex justify-center items-center  sm:mx-1 lg:mx-3 xl:mx-4">
              <HashLink
                onClick={(e) => {
                  setClickedMenuItem(title);
                  e.stopPropagation();
                }}
                smooth
                key={title}
                to={href || "#"}
                className={
                  `flex text-center items-center cursor-pointer hover:text-orange-300 transition-all ${
                    i === 0 ? "text-orange-200" : " text-gray-300"
                  }`
                  //  + (clickedMenuItem === title ? " text-orange-300" : " text-gray-300")
                }>
                {title?.trim()}
              </HashLink>
            </div>
          ))}
        </div>
        <div className="flex flex-row ml-5 text-orange-200 items-center gap-1">
          <div className="flex flex-col justify-items-start items-end w-10 h-10">
            <i
              className=" flex items-start hover:bg-orange-200/10 rounded-full p-2 cursor-pointer right-auto"
              onClick={(e) => {
                setIsCartOpen(!isCartOpen);
                setIsQuickPanelOpen(false);
                e.stopPropagation();
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </i>
            {isCartOpen && (
              <div className="dark:bg-zinc-700  dark:text-white flex flex-col justify-around items-center min-w-[25rem] min-h-[19rem] shadow-lg bg-white border-t-[3px] border-t-[#F8B773] rounded-2xl justify-self-start">
                <i className="pt-12">
                  <svg
                    className=" fill-gray-400 stroke-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    viewBox="0 0 15 15">
                    <path
                      fill="none"
                      // stroke="currentColor"
                      d="m.5.5l.6 2m0 0l2.4 8h11v-6a2 2 0 0 0-2-2H1.1Zm11.4 12a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm-8-1a1 1 0 1 1 2 0a1 1 0 0 1-2 0Z"
                    />
                  </svg>
                </i>

                <h2 className="font-Dana text-zinc-700 dark:text-white ">
                  هنوز محصولی به سبد خرید اضافه نشده
                </h2>
                <HashLink
                  to="/#new-products"
                  smooth
                  className="no-underline text-inherit"
                  onClick={(e) => {
                    setIsQuickPanelOpen(false);
                    setIsCartOpen(false);
                    e.stopPropagation();
                  }}>
                  <button className="rounded-xl bg-teal-600 font-Dana text-white w-64 h-14 flex items-center justify-center mb-12">
                    مشاهده صفحه فروشگاه
                  </button>
                </HashLink>
              </div>
            )}
          </div>
          {themeMode === "light" ? (
            <i
              className="animate-all transition-all delay-150 hover:bg-orange-200/10 ml-1 rounded-full p-2 cursor-pointer"
              onClick={(e) => setThemeMode("dark")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </i>
          ) : (
            <i
              className=" animate-all transition-all delay-150 hover:bg-orange-200/10 ml-1  rounded-full p-2 cursor-pointer"
              onClick={(e) => setThemeMode("light")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </i>
          )}
          <div className="w-[1px] h-10 bg-white opacity-20 flex items-center"></div>
          {isLoggedIn ? (
            <div
              className="flex flex-col w-10 h-10 items-end hover:bg-orange-200/10 mr-4 rounded-full p-2 cursor-pointer "
              onClick={(e) => {
                setIsQuickPanelOpen(!isQuickPanelOpen);
                setIsCartOpen(false);
                e.stopPropagation();
              }}>
              <i className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </i>
              {isQuickPanelOpen && (
                <div className="dark:bg-zinc-700  dark:text-white  flex flex-col justify-around items-start min-w-fit min-h-fit gap-2 py-4 shadow-lg  mt-2  bg-white border-t-[3px] border-t-[#F8B773] rounded-2xl justify-self-start pr-2  font-Dana not-italic text-zinc-700 fill-zinc-700 stroke-zinc-700 text-base">
                  <i
                    className=" flex flex-row gap-3 hover:bg-orange-300 hover:bg-opacity-30 hover:text-orange-300  transition-all  pl-12 py-2 pr-2 rounded-[6px]"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <h4
                      className="not-italic text-base"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsQuickPanelOpen(false);
                        setIsCartOpen(true);
                      }}>
                      سفارشات من
                    </h4>
                  </i>
                  <i
                    className="flex flex-row gap-3 hover:bg-orange-300 hover:bg-opacity-30 hover:text-orange-300  transition-all pl-12 py-2 pr-2 rounded-[6px]"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>

                    <h4 className="not-italic text-base">لیست پیام ها</h4>
                  </i>
                  <i
                    className="flex flex-row gap-3 hover:bg-orange-300 hover:bg-opacity-30 hover:text-orange-300  transition-all  pl-12 py-2 pr-2 rounded-[6px]"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <h4 className="not-italic text-base">اطلاعات کاربری</h4>
                  </i>
                  <div className="flex items-center justify-center w-full">
                    <div className="bg-gray-200 w-32 mx-8 h-[1px]" />
                  </div>
                  <i
                    className="flex flex-row gap-3  hover:bg-red-400 hover:bg-opacity-30 hover:text-red-400  transition-all  pl-12 py-2 pr-2 rounded-[6px]"
                    onClick={(e) => {
                      setIsLoggedIn(false);
                      e.stopPropagation();
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>

                    <h4 className="not-italic text-base">خروج از حساب</h4>
                  </i>
                </div>
              )}
            </div>
          ) : (
            <div
              className="flex flex-row items-center hover:bg-orange-200/10 mr-4 rounded-full p-2 cursor-pointer"
              onClick={(e) => {
                setIsLoggedIn(true);
                setIsQuickPanelOpen(false);
                setIsCartOpen(false);
                e.stopPropagation();
              }}>
              <i className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </i>
              <h4>ورود</h4>
            </div>
          )}
        </div>
      </nav>
      {/* mobile nav */}
      <nav className="lg:hidden w-screen max-w-screen h-20 justify-between bg-zinc-700 fixed top-0 flex flex-row items-center z-50 px-5">
        <i
          onClick={(e) => {
            setIsMobileCartOpen(!isMobileCartOpen);
            setIsMobileMenuOpen(false);
            e.stopPropagation();
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 stroke-white">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </i>
        <img
          src={mobileLogo}
          alt="Golden Coffee"
        />
        <i
          onClick={(e) => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            setIsMobileCartOpen(false);
            e.stopPropagation();
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="fill-white"
            className="w-10 h-10 stroke-white">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </i>
      </nav>
      <div className="relative h-full max-w-[90vw] w-screen flex flex-col items-end justify-center text-end overflow-clip mt-6 max-lg:overflow-x-hidden max-lg:overflow-y-clip lg:mt-0 lg:left-32 text-white z-10">
        <div className="text-right max-lg:mx-8 max-lg:pr-16">
          <p className="drop-shadow-lg font-MorabbaBold text-2xl lg:text-6xl pb-2 text-right">
            قهوه عربیکا تانزانیا
          </p>
          <p className="drop-shadow-lg font-MorabbaLight text-md lg:text-5xl pb-6">
            یک فنجان بالانس!
          </p>
          <div className="bg-[#EDB56A] w-24 h-0.5"></div>
          <p className="drop-shadow-lg left-0 max-lg:w-[70vw] max-lg:min-w-[180px] max-lg:h-fit max-lg:text-sm lg:w-[28.75rem] font-normal pt-6 text-justify leading-8 h-40">
            قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نحواحی مختلف
            کمربند قهوه کشت میشود.
          </p>
        </div>
      </div>

      <div
        className="max-w-screen lg:flex flex-row items-center justify-center hidden"
        style={{ position: "relative", top: "-100px" }}>
        <div className="flex flex-row items-center justify-center border border-white border-opacity-25 w-[200px] h-[200px] rounded-full">
          <div className="flex flex-row items-center justify-center border border-white border-opacity-50 w-[145px] h-[145px] rounded-full">
            <div className="flex flex-row items-center justify-center border border-white border-opacity-90 w-[95px] h-[95px] rounded-full">
              <HashLink
                smooth
                className="rounded-full w-7 h-7 border-2 bg-gray-100 border-orange-300 text-zinc-700 cursor-pointer flex items-center justify-center p-0 m-0"
                onClick={(e) => e.stopPropagation()}
                to="#shop">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
