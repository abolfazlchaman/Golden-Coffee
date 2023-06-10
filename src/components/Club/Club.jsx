import diamongIMG from "../../assets/club/diamond.png";

import TicketIMG from "../../assets/club/Ticket-Star.svg";
import ActivityIMG from "../../assets/club/Activity.svg";
import DiscoveryIMG from "../../assets/club/Discovery.svg";

function Club() {
  return (
    <div className="flex h-36 flex-row mx-40 from-green-600 to-green-500 bg-gradient-to-b rounded-2xl justify-around items-center">
      <img
        className="w-auto h-24"
        src={diamongIMG}
        alt="club"
      />
      <div className="flex flex-col text-right justify-center text-white">
        <h3>کافی کلاب</h3>
        <h5>میدونستی میتونی با امتیاز هات قهوه بگیری؟</h5>
      </div>
      <div className="flex flex-row gap-5 justify-center items-center">
        <div className="flex flex-col rounded-2xl w-24 h-24 items-center justify-center  bg-white">
          <img
            src={ActivityIMG}
            className="w-12 h-12"
          />
          <h6>{"ماموریت ها"}</h6>
        </div>
        <div className="flex flex-col rounded-2xl w-24 h-24 items-center justify-center  bg-white">
          <img
            src={DiscoveryIMG}
            className="w-12 h-12"
          />
          <h6>{"جایزه ها"}</h6>
        </div>
        <div className="flex flex-col rounded-2xl w-24 h-24 items-center justify-center  bg-white">
          <img
            src={TicketIMG}
            className="w-12 h-12"
          />
          <h6>چرخ و بخت</h6>
        </div>
      </div>
      <div className="flex flex-col justify-center text-white cursor-pointer">
        <p className="pr-2">۵۴۲</p>
        <p className="pr-2">امتیاز شما</p>
        <div className="flex flex-row p-1 items-center from-orange-400 to-orange-300 bg-gradient-to-l rounded-full">
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
  );
}

export default Club;
