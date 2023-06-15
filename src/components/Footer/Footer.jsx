import logo1IMG from "../../assets/svgs/logo.svg";
import logowhiteIMG from "../../assets/svgs/logo-white.svg";
import logo2IMG from "../../assets/svgs/logo-type.svg";

import telegramIMG from "../../assets/svgs/telegram.svg";
import instagramIMG from "../../assets/svgs/instagram.svg";

function Footer() {
  return (
    <footer className="h-fit bg-zinc-700 pt-16 px-20">
      <div
        className="max-w-screen flex flex-row items-center justify-center"
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
      <div className="flex flex-row justify-between">
        <div className="w-2/6">
          <div className="flex flex-row gap-5">
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
        <div className="flex flex-col w-2/6 justify-end text-gray-300 items-center">
          <h4 className="font-DanaDemiBold text-white pb-6 text-right">دسترسی سریع</h4>

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
        <div className="flex flex-col w-3/6 text-gray-300 items-center justify-center">
          <h4 className="font-DanaDemiBold text-white pb-6">در تماس باشیم</h4>

          <div className="flex flex-row gap-8">
            <div className="flex flex-col font-Dana text-xl items-start justify-center  space-y-5">
              <h6 className="text-lg">
                - بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳
              </h6>
              <div
                dir="ltr"
                className="w-full text-center">
                <h6 className="min-w-full items-center text-center">
                  {" "}
                  0902 123 6628 | 021 - 6789012
                </h6>

                <h6 className="min-w-full items-center text-center"> info@Coffee.com</h6>
              </div>
              <div
                className="flex flex-row gap-6 font-DanaMedium items-center"
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
      <div className="max-w-screen h-[1px] opacity-10 px-24 bg-white mt-12"></div>
      <div className="flex flex-row w-full justify-between bg-zinc-700  py-12 text-gray-300 -px-20">
        <p className=" flex flex-row">
          طراحی و توسعه داده شده توسط{" "}
          <a
            href="http://abolfazlchaman.github.io/"
            className="text-orange-300 px-3 cursor-pointer">
            ابوالفضل چمن
          </a>
          .
        </p>
        <p>.Copyright © 2023 Golden Coffee. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
