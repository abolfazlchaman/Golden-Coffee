import Hero from "./components/Hero/Hero";
import NewProducts from "./components/NewProducts/NewProducts";
import CategoryBanner from "./components/CategoryBanner/CategoryBanner";
import BestSelling from "./components/BestSelling/BestSelling";
import Club from "./components/Club/Club";
import Blog from "./components/Blog/Blog";
import Order from "./components/Order/Order";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <main className="bg-gray-100 dark:bg-zinc-800 ">
      <Hero
        state={cartItems}
        setState={setCartItems}
      />
      <NewProducts
        state={cartItems}
        setState={setCartItems}
      />
      <CategoryBanner />
      <BestSelling
        state={cartItems}
        setState={setCartItems}
      />
      <Club />
      <Blog />
      <Order />
      <Footer />
    </main>
  );
}

export default App;
