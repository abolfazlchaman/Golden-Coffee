function Category({ img, title }) {
  return (
    <div className="flex flex-col cursor-pointer">
      <img
        className=""
        src={img}
        alt={title}
      />
      <h4 className="text-center font-DanaDemiBold">{title}</h4>
    </div>
  );
}

export default Category;
