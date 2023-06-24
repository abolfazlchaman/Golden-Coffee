import { useState } from "react";
import icon from "../../assets/app-logo.png";
import typedIcon from "../../assets/svgs/logo-type.svg";
import {
  HomeIcon,
  ShopIcon,
  ChatIcon,
  AboutUsIcon,
  BlogIcon,
  PhoneIcon,
  LogInIcon,
  LogOutIcon,
  SunIcon,
  MoonIcon,
  CartIcon,
  DropDownIcon,
} from "../../assets/svgs/SVGCollection";
import { HashLink } from "react-router-hash-link";

function MobileMenu({ themeMode, setThemeMode, isLoggedIn, setIsLoggedIn, setIsMobileMenuOpen }) {
  const menuNavItems = {
    main: [
      { closeOnClick: true, link: "/#main", title: "صفحه اصلی", Icon: HomeIcon },
      {
        closeOnClick: false,
        link: "/#shop",
        title: "فروشگاه",
        Icon: ShopIcon,
        Legend: DropDownIcon,
      },
      { closeOnClick: true, link: "/#categories", title: "دسته بندیها", Icon: ChatIcon },
      { closeOnClick: true, link: "/#about", title: "درباره ما", Icon: AboutUsIcon },
      { closeOnClick: true, link: "/#blog", title: "بلاگ", Icon: BlogIcon },
      { closeOnClick: true, link: "/#contact", title: "تماس با ما", Icon: PhoneIcon },
    ],
    footer: [{ title: "ورود" }, { title: "تم روشن" }, { title: "سبد خرید" }],
  };

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="fixed font-Dana text-base top-0 left-0 flex-col py-5 justify-center items-center h-fit bg-white dark:bg-zinc-700 text-black dark:text-white max-lg:min-h-screen max-md:w-screen max-w-[100%vw] lg:max-h-fit max-lg:w-full m-0 pr-4 overflow-y-auto max-h-screen">
      <header className="flex flex-row w-full justify-around items-center">
        <img
          src={icon}
          alt={icon}
        />
        <img
          src={typedIcon}
          alt={typedIcon}
        />
        <i
          onClick={(e) => {
            setIsMobileMenuOpen(false);
            e.stopPropagation();
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={themeMode === "dark" ? "white" : "#52525B "}
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </i>
      </header>
      <div className="flex items-center justify-center w-full">
        <div className="w-[90%] h-[1px] bg-gray-600 dark:bg-gray-300 max-w-full lg:hidden bg-opacity-10 my-5" />
      </div>

      {menuNavItems.main.map(({ closeOnClick, link, title, Icon, Legend }) => (
        <HashLink
          smooth
          onClick={(e) => {
            closeOnClick
              ? (setIsMobileMenuOpen(false), e.stopPropagation())
              : setIsExpanded(!isExpanded);
          }}
          to={closeOnClick ? link : "#"}
          className={
            "flex flex-col cursor-pointer" +
            (Legend && " justify-between") +
            ((title === "صفحه اصلی" || title === "فروشگاه") && " text-orange-300")
          }>
          <h1
            className={
              " pr-2 rounded-md w-[60%] items-center flex flex-row hover:bg-orange-300 hover:bg-opacity-20 justify-start min-h-[55px]"
            }>
            {Icon}
            {title}
            {Legend && (
              <i
                className={
                  "flex items-center justify-center m-4 " +
                  (title === "فروشگاه" && isExpanded && " rotate-180")
                }>
                {Legend}
              </i>
            )}
          </h1>
          {Legend && isExpanded && (
            <ul className="flex flex-col dark:text-white text-zinc-700 space-y-5 pr-10 list-disc [&>li]:cursor-pointer my-3 pb-5">
              <li>قهوه فوری</li>
              <li>ویژه در سطح جهانی</li>
              <li>قهوه درجه یک</li>
              <li>ترکیبات تجاری</li>
              <li>کپسول قهوه</li>
              <li>قهوه زینو برزیلی</li>
            </ul>
          )}
        </HashLink>
      ))}
      <div className="flex items-center justify-center">
        <div className="w-[90%] h-[1px] bg-gray-600 dark:bg-gray-300 max-w-full lg:hidden bg-opacity-10 my-5" />
      </div>
      <div className="text-orange-300 cursor-pointer ">
        <h1
          className="flex items-center min-h-[50px] hover:bg-orange-300 hover:bg-opacity-20 rounded-md w-full max-w-w-[60%] pr-2"
          onClick={(e) => {
            setIsLoggedIn(!isLoggedIn);
            e.stopPropagation();
          }}>
          {isLoggedIn ? LogInIcon : LogOutIcon}
          {isLoggedIn ? "خروج" : "ورود"}
        </h1>
        <h1
          className="flex items-center min-h-[50px] hover:bg-orange-300 hover:bg-opacity-20 rounded-md w-full max-w-w-[60%] pr-2"
          onClick={(e) => {
            setThemeMode(themeMode === "dark" ? "light" : "dark");
            e.stopPropagation();
          }}>
          {themeMode == "dark" ? SunIcon : MoonIcon}
          {themeMode === "dark" ? "تم روشن" : "تم تیره"}
        </h1>
        <h1
          className="flex items-center min-h-[50px] hover:bg-orange-300 hover:bg-opacity-20 rounded-md w-full max-w-w-[60%] pr-2"
          onClick={(e) => e.stopPropagation()}>
          {CartIcon}
          سبد خرید
        </h1>
      </div>
    </div>
  );
}

export default MobileMenu;
