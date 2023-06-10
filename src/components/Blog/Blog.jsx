import blog1IMG from "../../assets/blogs/blog-1.png";
import blog2IMG from "../../assets/blogs/blog-2.png";
import blog3IMG from "../../assets/blogs/blog-3.png";
import blog4IMG from "../../assets/blogs/blog-4.png";

import Article from "../Article/Article";

function Blog() {
  return (
    <div className="px-40 p-20 pb-28">
      <h4 className="font-MorabbaMedium text-5xl text-zinc-700 pb-12">مطالب خواندنی</h4>
      <div className="flex flex-row gap-8">
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
          title="طرز تهیه قهوه دالگونا مناسب روزهای گرم تابستان"
          img={blog4IMG}
          date="۱۱ مرداد ۱۴۰۲"
        />
      </div>
    </div>
  );
}

export default Blog;
