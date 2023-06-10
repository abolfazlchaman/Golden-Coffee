import Hero from "./components/Hero/Hero";
import NewProducts from "./components/NewProducts/NewProducts";
import CategoryBanner from "./components/CategoryBanner/CategoryBanner";
import BestSelling from "./components/BestSelling/BestSelling";
import Club from "./components/Club/Club";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main className="bg-gray-100 dark:bg-zinc-800">
      <Hero />
      <NewProducts />
      <CategoryBanner />
      <BestSelling />
      <Club />
      <Blog />
      <Footer />
    </main>
  );
}

export default App;
