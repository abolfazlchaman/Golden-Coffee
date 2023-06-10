import Star from "../icons/Star";

function Item({ img, title, price, offer, starCount }) {
  return (
    <section className="w-72 h-fit max-h-[467px] shadow-md rounded-2xl bg-white">
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
        <actions className="flex flex-row justify-between mb-7">
          <div className="flex flex-row">
            <i className="hover:bg-gray-300 cursor-pointer rounded-full">
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
            <i className="mr-4 hover:bg-gray-300 rounded-full cursor-pointer">
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