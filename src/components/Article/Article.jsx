function Article({ img, title, date }) {
  return (
    <div className="flex flex-col w-1/4 bg-white shadow-lg rounded-2xl overflow-hidden">
      <img
      className="p-2.5 rounded-3xl"
        src={img}
        alt={title}
      />
      <div className="flex flex-row justify-between">
        <p className="w-4/5 pl-1 flex text-lg mr-2.5 text-zinc-700">{title}</p>
        <p className="w-1/5 flex pl-5 text-center text-teal-600">{date}</p>
      </div>
    </div>
  );
}

export default Article;
