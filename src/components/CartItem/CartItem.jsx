import Star from "../icons/Star";

function CartItem({ img, title, price, offer, starCount, offerPercentage, state, setState }) {
  return (
    <section className="w-5/11 lg:w-fit lg:min-w-[220px] h-fit w-fit max-h-[467px] shadow-md rounded-2xl bg-white dark:bg-zinc-700 dark:text-white flex-grow-3 flex">
      <div className="flex flex-col">
        <div
          className={
            "w-14 h-7 rounded-full relative top-4 text-white right-4 dark:text-zinc-700 flex items-center justify-center self-center pt-1 font-bold tracking-wider" +
            (offerPercentage && " bg-orange-300")
          }>
          {offerPercentage && offerPercentage}
        </div>
        <img
          className="w-auto h-16"
          src={img}
          alt={title}
        />
      </div>
      <div className="mx-5">
        <p className="mt-2.5">{title}</p>
        <div className="flex flex-row justify-between items-center h-fit w-full">
          <div className="flex flex-col items-center my-2 text-teal-600 justify-between h-fit">
            {offer && <p className="ml-2.5">{offer}</p>}
            <p
              className={
                (offer && "text-gray-400 line-through decoration-red-500") ||
                (price ? "text-teal-600" : "text-red-500")
              }>
              {price ? price + "تومان" : "فعلا موجود نیست"}
            </p>
          </div>

          <i
            className="bg-gray-100 text-gray-400 active:bg-teal-600 active:text-white dark:bg-zinc-800 dark:active:bg-emerald-500  cursor-pointer rounded-full transition-all p-2 w-fit h-fit"
            onClick={() => console.log("removed")}>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </i>
        </div>
      </div>
    </section>
  );
}

export default CartItem;
