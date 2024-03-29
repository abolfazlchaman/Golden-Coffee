import Header from "../Header/Header";

function Hero({ state, setState }) {
  return (
    <section className="h-full">
      <Header
        state={state}
        setState={setState}
        items={[
          { title: "صفحه اصلی", href: "#main" },
          { title: "فروشگاه", href: "#shop" },
          { title: "دسته بندیها", href: "#categories" },
          { title: "بلاگ", href: "#blog" },
          { title: "درباره ما", href: "#about" },
          { title: "تماس با ما", href: "#contact" },
        ]}
      />
    </section>
  );
}

export default Hero;
