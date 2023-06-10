function Banner({ img, title, sub }) {
  return (
    <div className="rounded-3xl overflow-hidden relative">
      <img
        src={img}
        alt={title}
      />
      <div className="flex flex-col justify-center absolute top-0 bottom-0 right-0 left-0 text-white font-Dana pr-12 from-black bg-gradient-to-l">
        <h3 className="pb-2 font-semibold text-4xl">{title}</h3>
        <h5 className="font-medium">{sub}</h5>
      </div>
    </div>
  );
}

export default Banner;
