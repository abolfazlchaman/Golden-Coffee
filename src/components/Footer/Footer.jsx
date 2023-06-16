import logo1IMG from "../../assets/svgs/logo.svg";
import logowhiteIMG from "../../assets/svgs/logo-white.svg";
import logo2IMG from "../../assets/svgs/logo-type-white.svg";

import telegramIMG from "../../assets/svgs/telegram.svg";
import instagramIMG from "../../assets/svgs/instagram.svg";

function Footer() {
  return (
    <footer className="h-fit px-6 bg-zinc-700 pt-16 lg:px-20">
      <div
        className="max-w-screen hidden flex-row items-center justify-center lg:flex"
        style={{ position: "relative", top: "-80px" }}>
        <button className="flex rounded-full w-7 h-7 border-2 bg-gray-100 border-orange-300 text-zinc-700 cursor-pointer rotate-180 items-center justify-center">
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
        </button>
      </div>
      <div className="flex flex-col items-center lg:items-start lg:flex-row justify-between">
        <div className="w-full lg:w-2/6">
          <div className="flex flex-row gap-5 justify-center lg:justify-start">
            <img
              className="fill-gray-300 !important"
              src={logowhiteIMG}
              alt="logo1"
            />
            <img
              src={logo2IMG}
              alt="logo2"
            />
          </div>
          <p className="mt-10 text-justify font-Dana text-xl text-gray-300">
            ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی
            برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که
            نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق
            می‌کوشیم.
          </p>
        </div>
        <div className="flex flex-col w-full mt-10 lg:mt-0 lg:w-2/6 justify-end text-gray-300 items-center">
          <h4 className="font-DanaDemiBold text-2xl text-white pb-6 text-right">دسترسی سریع</h4>

          <div className="flex xl:flex-row lg:flex-col gap-8">
            <div className="flex flex-col font-Dana text-sm items-start justify-center  space-y-8">
              <h6>- حریم خصوصی</h6>
              <h6>- عودت کالا</h6>
              <h6>- شرایط استفاده</h6>
              <h6>- ثبت سفارش</h6>
            </div>
            <div className="flex flex-col font-Dana text-sm items-start justify-center  space-y-8">
              <h6>- پرسش های متداول</h6>
              <h6 className="text-orange-300">- فرصت های شغلی</h6>
              <h6>- ضمانت نامه ها</h6>
              <h6>- ارتباط با ما</h6>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-10 lg:mt-0 lg:w-3/6 text-gray-300 items-center justify-center">
          <h4 className="font-DanaDemiBold text-2xl text-white pb-6">در تماس باشیم</h4>

          <div className="flex flex-row gap-8">
            <div className="flex flex-col font-Dana text-xl items-start justify-center  space-y-5">
              <h6 className="min-w-full text-lg flex flex-row items-center justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <p>بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳</p>
              </h6>
              <div
                dir="ltr"
                className="w-full text-center">
                <h6 className="min-w-full items-start justify-end text-center flex flex-row text-orange-300 mb-4">
                  <p>info@Coffee.com</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </h6>

                <h6 className="min-w-full items-start justify-end text-center flex flex-row">
                  <p>0902 123 6628 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 021 - 6789012</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </h6>
              </div>
              <div
                className="flex flex-row flex-wrap justify-center gap-6 font-DanaMedium items-center"
                dir="ltr">
                <button className="text-zinc-700 border-orange-300 border rounded-xl flex flex-row items-center min-w-fit p-2 from-orange-300 to-orange-300 bg-gradient-to-bl">
                  @golden_coffee
                  <img
                    className="fill-zinc-700 text-zinc-700 stroke-zinc-700"
                    src={telegramIMG}
                    alt="telegram"
                  />
                </button>
                <button className="text-orange-300 border-orange-300 border rounded-xl flex flex-row items-center min-w-fit p-2">
                  @golden_coffee
                  <img
                    className="fill-orange-300 text-orange-300"
                    src={instagramIMG}
                    alt="instagram"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen h-[1px] opacity-10 px-6 lg:px-24 bg-white mt-12"></div>
      <div className="flex flex-col lg:flex-row w-full justify-between bg-zinc-700  py-12 text-gray-300 -px-20">
        <p className="flex flex-row flex-wrap w-full max-lg:justify-center max-lg:items-center max-lg:text-center">
          طراحی و توسعه داده شده توسط
          <a
            href="http://abolfazlchaman.github.io/"
            className="text-orange-300 px-3 cursor-pointer">
            ابوالفضل چمن
          </a>
          .
        </p>
        <p className="flex w-full mt-4 lg:mt-0 max-lg:items-center text-center max-lg:justify-center lg:justify-end">.Copyright © 2023 Golden Coffee. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
