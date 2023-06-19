import product1 from "../../assets/products/p5.png";
import product2 from "../../assets/products/p6.png";
import product3 from "../../assets/products/p7.png";
import product4 from "../../assets/products/p8.png";
import Item from "../Item/Item";

function BestSelling({ state, setState }) {
  return (
    <section>
      <div className="mx-6 lg:mx-40 pb-20">
        <div className="flex flex-row w-full justify-between pt-28">
          <div className="flex flex-col">
            <h2 className="font-MorabbaMedium text-xl lg:text-5xl text-zinc-700 mb-2 dark:text-white">
              محصولات پر فروش
            </h2>
            <h5 className="font-MorabbaLight  lg:text-3xl text-zinc-700 mb-12 dark:text-white">
              پیشنهاد قهوه خورها...
            </h5>
          </div>
          <div className="flex flex-row items-center mb-2 text-zinc-700 cursor-pointer gap-5">
            <i className="bg-white p-4 rounded-full dark:bg-zinc-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 lg:w-6 h-3 lg:h-6 dark:stroke-white rotate-180">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </i>
            <i className="bg-white p-4 rounded-full dark:bg-zinc-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 lg:w-6 h-3 lg:h-6 dark:stroke-white">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </i>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center lg:justify-between gap-5 max-w-screen relative right-0">
          <Item
            state={state}
            setState={setState}
            offerPercentage="12%"
            img={product1}
            title="قهوه فوری بن مانو 9 دقیقه ای"
            price="175,000"
            offer="154,000"
            starCount={5}
          />
          <Item
            state={state}
            setState={setState}
            img={product2}
            title="قهوه فوری بن مانو 6 دقیقه ای"
            starCount={4}
          />
          <Item
            state={state}
            setState={setState}
            img={product3}
            title="قهوه فوری بن مانو 8 دقیقه ای"
            price="175,000"
            starCount={4}
          />
          <Item
            state={state}
            setState={setState}
            img={product4}
            title="قهوه فوری بن مانو 2 دقیقه ای"
            price="175,000"
            starCount={4}
          />
        </div>
      </div>
    </section>
  );
}

export default BestSelling;
