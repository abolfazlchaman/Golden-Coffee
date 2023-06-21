import Star from "../icons/Star";

function CartItem({ img, title, price, offer, starCount, offerPercentage, state, setState }) {
  const handleIncrease = (title) => {
    setState((prevItems) =>
      prevItems.map((item) => {
        if (item.title === title) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      })
    );
  };

  const handleDecrease = (title) => {
    setState((prevItems) =>
      prevItems.map((item) => {
        if (item.title === title && item.count > 1) {
          return {
            ...item,
            count: item.count - 1,
          };
        }
        return item;
      })
    );
  };
  return (
    <>
      <section
        className="min-w-[90%] lg:w-fit lg:min-w-[220px] h-fit max-h-[467px] lg:shadow-md rounded-2xl bg-white dark:bg-zinc-700 dark:text-white flex-grow-3 flex"
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <div className="flex flex-col">
          <div
            className={
              "w-14 h-7 rounded-full relative top-4 text-white lg:right-4 dark:text-zinc-700 flex items-center justify-center self-center pt-1 font-bold tracking-wider" +
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
        <div className="mx-5 w-full">
          <p className="mt-2.5 text-sm lg:text-md px-2">{title}</p>
          <div className="flex flex-row lg:flex-row items-center h-fit w-48 min-w-full justify-between gap-3">
            {/* {offer && <p className="ml-2.5">{offer} تومان</p>} */}
            <div className="flex flex-col items-right my-2 items-center text-teal-600 justify-between h-fit text-right w-48">
              <div className="flex flex-row items-center gap-3 lg:ml-4 justify-between min-w-full">
                <p
                  className={
                    "text-teal-600 flex items-center"
                    // (offer && "text-gray-400 line-through decoration-red-500") ||
                    // (price ? "text-teal-600" : "text-red-500")
                  }>
                  {offer ? offer : price}
                </p>
                {state?.find((item) => item?.title === title)?.count !== 1 && (
                  <div className="border border-gray-300 rounded-full text-orange-300 flex items-center justify-around py-1 p-2">
                    <i
                      className="cursor-pointer"
                      onClick={() => handleDecrease(item.title)}>
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
                          d="M18 12H6"
                        />
                      </svg>
                    </i>
                    {state?.find((item) => item?.title === title)?.count}
                    <i
                      className="cursor-pointer"
                      onClick={() => handleIncrease(item.title)}>
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
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    </i>
                  </div>
                )}
              </div>
            </div>
            <i
              className="bg-gray-100 text-gray-400 active:bg-teal-600 active:text-white dark:bg-zinc-800 dark:active:bg-emerald-500  w-fit cursor-pointer rounded-full transition-all p-2 h-fit justify-end"
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
      <div className="max-lg:bg-white max-lg:opacity-10 w-[90%] h-[1px] flex lg:hidden" />
    </>
  );
}

export default CartItem;
