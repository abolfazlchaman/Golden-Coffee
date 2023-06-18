import Header from "../Header/Header";

function Hero() {
  return (
    <section className="h-full">
      <Header
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
