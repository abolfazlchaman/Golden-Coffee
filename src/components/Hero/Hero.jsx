import Header from "../Header/Header";

function Hero() {
  return (
    <section className="h-full">
      <Header items={["صفحه اصلی", "فروشگاه", "دیکشنری", "بلاگ", "درباره ما", "تماس با ما"]} />
    </section>
  );
}

export default Hero;
