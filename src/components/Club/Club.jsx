import diamongIMG from "../../assets/club/diamond.png";

import TicketIMG from "../../assets/club/Ticket-Star.svg";
import ActivityIMG from "../../assets/club/Activity.svg";
import DiscoveryIMG from "../../assets/club/Discovery.svg";

function Club() {
  return (
    <div className="flex p-4 lg:p-0 h-fit lg:h-36 flex-col lg:flex-row mx-6 lg:mx-40 from-emerald-600 to-emerald-500 bg-gradient-to-b rounded-2xl justify-around items-center">
      <div className="flex flex-row py-8 lg:py-0">
        <img
          className="w-auto h-20 lg:w-auto lg:h-24"
          src={diamongIMG}
          alt="club"
        />
        <div className="flex flex-col text-right justify-center text-white">
          <h3 className="font-MorabbaBold text-2xl lg:hidden">کافی کلاب</h3>
          <h3 className="hidden lg:flex">کافی کلاب</h3>
          <h5 className="text-justify m-2">میدونستی میتونی با امتیاز هات قهوه بگیری؟</h5>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        <div className="flex flex-row gap-4 w-full justify-center items-center text-teal-600">
          <div className="flex flex-col rounded-2xl w-6/12 min-h-[30vw] lg:w-24 lg:h-24 items-center justify-start pt-2  bg-white">
            <img
              src={ActivityIMG}
              className="w-12 h-12"
            />
            <h6 className="text-center">{"ماموریت ها"}</h6>
          </div>
          <div className="flex flex-col rounded-2xl w-6/12 min-h-[30vw] lg:w-24 lg:h-24 items-center justify-start pt-2  bg-white">
            <img
              src={DiscoveryIMG}
              className="w-12 h-12"
            />
            <h6 className="text-center">{"جایزه ها"}</h6>
          </div>
          <div className="flex flex-col rounded-2xl w-6/12 min-h-[30vw] lg:w-24 lg:h-24 items-center justify-start pt-2  bg-white">
            <img
              src={TicketIMG}
              className="w-12 h-12"
            />
            <h6 className="text-center">چرخ و بخت</h6>
          </div>
        </div>
        <div className="flex flex-row lg:flex-col justify-center items-center mt-4 lg:mt-0 text-white cursor-pointer">
          <p className="pr-2">۵۴۲</p>
          <p className="pr-2">امتیاز شما</p>
          <div className="mx-2 flex flex-row p-1 items-center from-orange-400 to-orange-300 bg-gradient-to-l rounded-full min-w-[120px]">
            <p>دریافت جایزه</p>
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Club;
