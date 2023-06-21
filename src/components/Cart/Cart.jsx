import CartItem from "../CartItem/CartItem";

export default function Cart({ state, setState }) {
  return (
    <div className="flex flex-col space-y-5 py-5 justify-center items-center h-fit bg-white dark:bg-zinc-700 text-black dark:text-white max-lg:min-h-screen max-md:w-screen w-[100%] lg:max-h-fit max-lg:w-full m-0 p-0">
      <div className="flex justify-between w-full px-5">
        <p className="text-gray-300 text-sm lg:flex hidden">{state.length} مورد</p>
        <p className="hidden flex-row text-orange-300 fill-orange-300 text-sm items-center lg:flex">
          مشاهده سبد خرید
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </p>
        <div className="lg:hidden flex flex-row justify-between w-full lg:px-4 justify-self-start self-start">
          <i
            onClick={(e) => {
              setIsMobileCartOpen(false);
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </i>
          <p>سبد خرید</p>
        </div>
      </div>
      <div className="w-[90%] h-[1px] bg-gray-300 max-w-full lg:hidden opacity-10" />
      {state.map(({ img, title, price, offer, starCount, offerPercentage }) => (
        <CartItem
          state={state}
          setState={setState}
          img={img}
          title={title}
          price={price}
          offer={offer}
          starCount={starCount}
          offerPercentage={offerPercentage}
        />
      ))}
      <div className="flex max-lg:relative max-lg:bottom-0 max-lg:pb-2 flex-row font-DanaMedium w-full justify-between px-2 max-lg:bg-white max-lg:dark:bg-zinc-700 max-lg:pt-2 max-w-full">
        <div className="flex flex-col">
          <p className="text-sm text-gray-400 w-">مبلغ قابل پرداخت</p>

          <p>
            {state
              .reduce((acc, item) => {
                return acc + parseInt(item.price.replace(/,/g, "")) * item.count;
              }, 0)
              .toLocaleString()}
            تومان
          </p>
        </div>
        <button className="flex font-Dana text-base items-center justify-between bg-teal-600 rounded-2xl px-4 text-white">
          ثبت سفارش
        </button>
      </div>
    </div>
  );
}
