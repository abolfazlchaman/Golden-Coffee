function Article({ img, title, date }) {
  return (
    <div className="flex flex-row lg:flex-col w-screen lg:w-1/5 bg-white shadow-lg rounded-2xl overflow-hidden dark:bg-zinc-700">
      <img
        className="p-2.5 rounded-2xl rounded-bl-4xl lg:rounded-3xl w-1/2 lg:w-auto object-cover"
        src={img}
        alt={title}
      />
      <div className="flex flex-col lg:flex-row justify-between min-h-fit py-2 w-1/2 lg:w-full">
        <p className="w-4/5 pl-1 flex text-lg mr-2.5 text-zinc-700 dark:text-white text-justify ml-1 font-DanaMedium">
          {title}
        </p>
        <div className="bg-white bg-opacity-20 h-[1px] w-8/10 mt-16 mb-2 mx-2 lg:hidden"></div>
        <div className="flex flex-row justify-between mx-2  lg:justify-center">
          <p className="lg:w-1/5 pl-5 text-center text-teal-600 ml-2 items-center flex">{date}</p>
          <p className="cursor-pointer lg:w-1/5 flex pl-5 text-center ml-2 items-center lg:hidden bg-orange-300 bg-opacity-20 p-3 rounded-md text-orange-300 w-fit justify-center">
            مطالعه
            <i>
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
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Article;
