import blog1IMG from "../../assets/blogs/blog-1.png";
import blog2IMG from "../../assets/blogs/blog-2.png";
import blog3IMG from "../../assets/blogs/blog-3.png";
import blog4IMG from "../../assets/blogs/blog-4.png";

import Article from "../Article/Article";

function Blog() {
  return (
    <div className="px-6 lg:px-40 p-20 pb-28" id="blog">
      <div className="flex flex-row w-full justify-between pb-6 lg:pb-12">
        <div className="flex flex-col">
          <h4 className="font-MorabbaMedium text-xl lg:text-5xl text-zinc-700 lg:pb-12 dark:text-white">
            مطالب خواندنی
          </h4>
        </div>
        <div className="flex flex-row items-center mb-2 text-orange-300 cursor-pointer">
          <h6 className="font-Dana max-md:text-[10px]">مشاهده همه مطالب</h6>
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
      <div className="flex flex-row justify-between flex-wrap gap-8">
        <Article
          title="طرز تهیه قهوه دمی با دستگاه اروپرس"
          img={blog1IMG}
          date="۲۱ مرداد ۱۴۰۲"
        />
        <Article
          title="یک نوشیدنی هیجان انگیز برای شروع روزتان"
          img={blog2IMG}
          date="۲۴ مرداد ۱۴۰۲"
        />
        <Article
          title="طرز تهیه یک فنجان کافه زینو برزیلی"
          img={blog3IMG}
          date="۱۴ مرداد ۱۴۰۲"
        />
        <Article
          title="طرز تهیه قهوه دالگونا مناسب تابستان"
          img={blog4IMG}
          date="۱۱ مرداد ۱۴۰۲"
        />
      </div>
    </div>
  );
}

export default Blog;
