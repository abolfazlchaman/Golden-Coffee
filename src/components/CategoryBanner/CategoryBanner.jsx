import React from "react";
import Banner from "../Banner/Banner";

import banner1IMG from "../../assets/categories/category-left.jpg";
import banner2IMG from "../../assets/categories/category-right.jpg";

import category1IMG from "../../assets/categories/category1.png";
import category2IMG from "../../assets/categories/category2.png";
import category3IMG from "../../assets/categories/category3.png";
import category4IMG from "../../assets/categories/category4.png";
import category5IMG from "../../assets/categories/category5.png";

import Category from "../Category/Category";

function CategoryBanner() {
  return (
    <div className="mx-4 lg:mx-40">
      <div className="flex flex-col lg:flex-row max-w-screen pb-20 gap-5">
        <Banner
          img={banner2IMG}
          title="انواع قهوه"
          sub="ترکیبی و تک خاستگاه"
        />
        <Banner
          img={banner1IMG}
          title="پودر های فوری"
          sub="نسکافه، هات چاکلت، ماسالا"
        />
      </div>

      <div className="flex flex-row flex-wrap lg:flex-nowrap gap-16 justify-center lg:justify-between">
        <Category
          title="قهوه دمی و اسپرسو"
          img={category1IMG}
        />
        <Category
          title="لوازم جانبی و تجهیزات"
          img={category2IMG}
        />
        <Category
          title="اسپرسو ساز"
          img={category3IMG}
        />
        <Category
          title="پک تستر قهوه"
          img={category4IMG}
        />
        <Category
          title="قهوه ترک"
          img={category5IMG}
        />
      </div>
    </div>
  );
}

export default CategoryBanner;
