import Star from "../icons/Star";

function Item({ img, title, price, offer, starCount, offerPercentage, state, setState }) {
  const handleAddItem = () => {
    console.log(state);
    const newItem = { img, title, price, offer, starCount, offerPercentage };
    const existingItem = state.find((item) => item.title === newItem.title);

    if (existingItem) {
      existingItem.count += 1;
      setState([...state]);
    } else {
      newItem.price && setState((prevItems) => [...prevItems, { ...newItem, count: 1 }]);
    }
  };

  return (
    <section className="w-5/11 lg:w-fit lg:min-w-[220px] h-fit w-fit max-h-[467px] shadow-md rounded-2xl bg-white dark:bg-zinc-700 dark:text-white flex-grow-3">
      <div
        className={
          "w-14 h-7 rounded-full relative top-4 text-white right-4 dark:text-zinc-700 flex items-center justify-center self-center pt-1 font-bold tracking-wider" +
          (offerPercentage && " bg-orange-300")
        }>
        {offerPercentage && offerPercentage}
      </div>
      <img
        src={img}
        alt={title}
      />
      <div className="mx-5">
        <p className="mt-2.5">{title}</p>
        <div className="flex flex-row items-center mt-2.5 mb-6 text-teal-600">
          {offer && <p className="ml-2.5">{offer}</p>}
          <p
            className={
              (offer && "text-gray-400 line-through decoration-red-500") ||
              (price ? "text-teal-600" : "text-red-500")
            }>
            {price ? price + "تومان" : "فعلا موجود نیست"}
          </p>
        </div>
        <actions className="flex flex-row justify-between mb-7 items-center">
          <div className="flex flex-row">
            <i
              className="bg-gray-100 text-gray-400 active:bg-teal-600 active:text-white dark:bg-zinc-800 dark:active:bg-emerald-500  cursor-pointer rounded-full transition-all p-2"
              onClick={handleAddItem}>
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
            <i className="mr-4 bg-white text-gray-400 active:text-teal-600 dark:bg-zinc-700 dark:active:text-emerald-500 rounded-full cursor-pointer transition-all p-2">
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
                  d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>
            </i>
          </div>
          <div className="flex flex-row-reverse">
            {Array(5)
              .fill()
              .map((_, i) => (i < starCount ? <Star /> : <Star type="filled" />))}
          </div>
        </actions>
      </div>
    </section>
  );
}

export default Item;
