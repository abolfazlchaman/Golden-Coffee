function Category({ img, title }) {
  return (
    <div className="flex flex-col cursor-pointer w-1/4 lg:w-auto">
      <img
        className=""
        src={img}
        alt={title}
      />
      <h4 className="text-center font-DanaDemiBold dark:text-white">{title}</h4>
    </div>
  );
}

export default Category;
