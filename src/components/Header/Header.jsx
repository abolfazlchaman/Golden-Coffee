import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

function Header({ items }) {
  const [themeMode, setThemeMode] = useState(localStorage.getItem("theme") || "light");

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
    <header className="w-screen h-screen min-h-fit text-xl hero font-Dana text-[14px]">
      <nav className="w-[90%] mx-[96px] shadow-shadow-normal rounded-3xl justify-between bg-black/50 backdrop-blur-[6px] fixed flex flex-row top-[.5rem] left-0 right-0 h-[4rem] max-h-[96px] items-center z-50">
        <div className="flex flex-row">
          <img
            src="/src/assets/app-logo.png"
            className=" w-9 h-9 mr-10"
            alt="logo"
          />
          {items?.map((title, i) => (
            <HashLink
              smooth
              key={title}
              to="#"
              className={`flex text-center items-center mr-9 cursor-pointer ${
                i === 0 ? "text-orange-200" : "text-gray-300"
              }`}>
              {title?.trim()}
            </HashLink>
          ))}
        </div>
        <div className="flex flex-row ml-5 text-orange-200 items-center gap-1">
          <i className="flex flex-row items-center hover:bg-orange-200/10 rounded-full p-2 cursor-pointer">
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
          <div className="w-[1px] h-10 bg-white opacity-20"></div>
          <div className="flex flex-row items-center hover:bg-orange-200/10 mr-4 rounded-full p-2 cursor-pointer">
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
        </div>
      </nav>
      <div className="relative h-full flex flex-col items-end justify-center text-end left-80 text-white z-10">
        <div className="text-right">
          <p className="drop-shadow-lg font-MorabbaBold text-6xl pb-2 text-right">
            قهوه عربیکا تانزانیا
          </p>
          <p className="drop-shadow-lg font-MorabbaLight text-5xl pb-6">یک فنجان بالانس!</p>
          <div className="bg-[#EDB56A] w-24 h-0.5"></div>
          <p className="drop-shadow-lg left-0 w-[28.75rem] font-normal pt-6 text-justify leading-8 h-40">
            قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نحواحی مختلف
            کمربند قهوه کشت میشود.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
