import Perk from "../Perk/Perk";
import mainIMG from "../../assets/contact.png";

import icon1 from "../../assets/svgs/services/support.svg";
import icon2 from "../../assets/svgs/services/express-delivery.svg";
import icon3 from "../../assets/svgs/services/coffee.svg";
import icon4 from "../../assets/svgs/services/pitcher.svg";

function Order() {
  return (
    <div className="flex flex-col px-6 lg:px-40 dark:text-white">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="mb-8 lg:mb-0">
          <img src={mainIMG} />
        </div>
        <div className="flex flex-col pr-5">
          <p className="font-MorabbaMedium text-2xl lg:text-5xl pb-[6px]">یکی از بهترین قهوه ها!</p>
          <p className="font-MorabbaLight text-lg lg:text-3xl pb-6">کیفیت قهوه را از ما بخواهید...</p>
          <p className="font-MorabbaLight lg:text-3xl">. . .</p>
          <p className="font-MorabbaLight lg:text-2xl py-6 text-justify">
            فضای گرم و دنج ما را احساس کنید،جایی که همه میتوانند قهوه معطری پیدا کنند و دسرهایکه
            کاملا با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز
            شما را میسازد!
          </p>
          <button className="w-fit flex flex-row items-center justify-center rounded-full font-Dana text-orange-300 border-2 p-2 border-orange-300">
            <i className="p-2">
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </i>
            <p>ثبت سفارش تلفنی</p>
          </button>
        </div>
      </div>
      <svg href={icon1}></svg>
      <div className="flex flex-row flex-wrap gap-1 pb-36 2xl:justify-between justify-around gap-y-3">
        <Perk
          title="پشتیبانی شبانه روزی"
          sub="7 روز هفته ، 24 ساعته"
          icon={icon1}
        />
        <Perk
          title="تحویل اکسپرس"
          sub="ارسال بسته با سرعت باد"
          icon={icon2}
        />
        <Perk
          title="رست تخصصی"
          sub="تازه برشته شده و با کیفیت"
          icon={icon3}
        />
        <Perk
          title="اکسسوری قهوه"
          sub="وسایل و ادوات دم آوری"
          icon={icon4}
        />
      </div>
    </div>
  );
}

export default Order;
