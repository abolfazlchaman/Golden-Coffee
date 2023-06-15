import Hero from "./components/Hero/Hero";
import NewProducts from "./components/NewProducts/NewProducts";
import CategoryBanner from "./components/CategoryBanner/CategoryBanner";
import BestSelling from "./components/BestSelling/BestSelling";
import Club from "./components/Club/Club";
import Blog from "./components/Blog/Blog";
import Order from "./components/Order/Order";
import Footer from "./components/Footer/Footer";

function App() {
  //! remove test class name screen size queries
  return (
    <main className="bg-gray-100 dark:bg-zinc-800 sm:hidden md:hidden lg:block xl:block 2xl:block">
      <Hero />
      <NewProducts />
      <CategoryBanner />
      <BestSelling />
      <Club />
      <Blog />
      <Order />
      <Footer />
    </main>
  );
}

export default App;
