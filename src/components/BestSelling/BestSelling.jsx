import product1 from "../../assets/products/p5.png";
import product2 from "../../assets/products/p6.png";
import product3 from "../../assets/products/p7.png";
import product4 from "../../assets/products/p8.png";
import Item from "../Item/Item";

function BestSelling() {
  return (
    <section>
      <div className="mx-40 pb-20">
        <div className="flex flex-row w-full justify-between pt-28">
          <div className="flex flex-col">
            <h2 className="font-MorabbaMedium text-5xl text-zinc-700 mb-2">محصولات پرفروش</h2>
            <h5 className="font-MorabbaLight text-3xl text-zinc-700 mb-12">
              پیشنهاد قهوه خورها...
            </h5>
          </div>
          <div className="flex flex-row items-center mb-2 text-zinc-700 cursor-pointer gap-5">
            <i className="bg-white p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 rotate-180">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </i>
            <i className="bg-white p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </i>
          </div>
        </div>
        <div className="flex flex-col gap-5 max-w-screen relative right-0">
          <div className="flex flex-row gap-5">
            <Item
              img={product1}
              title="قهوه ترک بن مانو 250 گرم"
              price="۱۷۵,۰۰۰"
              offer="۱۵۴,۰۰۰"
              starCount={5}
            />
            <Item
              img={product2}
              title="قهوه ترک بن مانو 250 گرم"
              starCount={4}
            />
            <Item
              img={product3}
              title="قهوه ترک بن مانو 250 گرم"
              price="۱۷۵,۰۰۰"
              starCount={4}
            />
            <Item
              img={product4}
              title="قهوه ترک بن مانو 250 گرم"
              price="۱۷۵,۰۰۰"
              starCount={4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSelling;