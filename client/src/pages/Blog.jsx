import { BlogCard } from "../components/BlogCard.jsx";
import "./Blog.css";

export const Blog = () => {
  return (
    <>
      <div className="blogContainer container">
        <div className="Section">
          <BlogCard blogImage="../../public/imgs/Blog1.jpeg" blogTopic="Everthing about Tesla entering India" />
          <BlogCard blogImage="../../public/imgs/Blog2.jpeg" blogTopic="The humongous scale of Apple" />
          <BlogCard blogImage="../../public/imgs/Blog3.jpeg" blogTopic="How Decathlon is outcompeting giants" />
          <BlogCard blogImage="../../public/imgs/Blog4.jpeg" blogTopic="India's own financial powerhouse: GIFT CITY" />
          <BlogCard blogImage="../../public/imgs/Blog5.jpeg" blogTopic="How Yahoo! failed to buy Google(twice!)" />
          <BlogCard blogImage="../../public/imgs/Blog6.jpeg" blogTopic="ZARA's Secret to Its Popularity in India" />
        </div>
      </div>
      <hr />
    </>
  );
};
