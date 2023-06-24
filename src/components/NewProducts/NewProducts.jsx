import React, { useState } from "react";
import Item from "../Item/Item";

import product1 from "../../assets/products/p1.png";
import product2 from "../../assets/products/p2.png";
import product3 from "../../assets/products/p3.png";
import product4 from "../../assets/products/p4.png";
import { HashLink } from "react-router-hash-link";

function NewProducts({ state, setState }) {
  return (
    <section
      className="new-product"
      id="shop">
      <div className="mx-6 lg:mx-40 pb-20">
        <div className="flex flex-row w-full justify-between pt-8 lg:pt-48">
          <div className="flex flex-col">
            <h2 className="font-MorabbaMedium text-2xl lg:text-5xl text-zinc-700 mb-2 dark:text-white">
              جدیدترین محصولات
            </h2>
            <h5 className="font-MorabbaLight lg:text-3xl text-zinc-700 mb-12 dark:text-white">
              فرآوری شده از دانه قهوه
            </h5>
          </div>
          <div className="flex flex-row items-center mb-2 text-orange-300 cursor-pointer">
            <HashLink className="font-Dana max-md:text-[14px] text-center">مشاهده همه محصولات</HashLink>
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
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center lg:justify-between gap-5 max-w-screen relative right-0">
          <Item
            state={state}
            setState={setState}
            img={product1}
            title="قهوه ترک بن مانو 250 گرم"
            price="175,000"
            starCount={4}
          />
          <Item
            state={state}
            setState={setState}
            img={product2}
            title="قهوه مانوکا بن مانو 250 گرم"
            starCount={3}
          />
          <Item
            state={state}
            setState={setState}
            offerPercentage="12%"
            img={product3}
            title="قهوه پریسکا بن مانو 250 گرم"
            price="175,000"
            offer="154,000"
            starCount={5}
          />
          <Item
            state={state}
            setState={setState}
            img={product4}
            title="قهوه آرتیمن بن مانو 250 گرم"
            price="175,000"
            starCount={4}
          />
          <Item
            state={state}
            setState={setState}
            img={product4}
            offerPercentage="12%"
            title="قهوه آرتیمن بن مانو 200 گرم"
            price="150,000"
            offer="132,000"
            starCount={4}
          />
          <Item
            state={state}
            setState={setState}
            img={product3}
            title="قهوه پریسکا بن مانو 200 گرم"
            starCount={2}
          />
          <Item
            state={state}
            setState={setState}
            img={product2}
            title="قهوه مانوکا بن مانو 200 گرم"
            price="150,000"
            starCount={5}
          />
          <Item
            state={state}
            setState={setState}
            img={product1}
            title="قهوه ترک بن مانو 200 گرم"
            price="150,000"
            starCount={4}
          />
        </div>
      </div>
    </section>
  );
}

export default NewProducts;
