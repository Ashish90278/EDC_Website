import { BlogCard } from "../components/BlogCard.jsx";
import "./Blog.css";

export const Blog = () => {
  return (
    <>
      <div className="blogContainer container">
        <div className="Section">
          <BlogCard blogImage="../imgs/Blog1.jpeg" blogTopic="Everthing about Tesla entering India" />
          <BlogCard blogImage="../imgs/Blog2.jpeg" blogTopic="The humongous scale of Apple" />
          <BlogCard blogImage="../imgs/Blog3.jpeg" blogTopic="How Decathlon is outcompeting giants" />
          <BlogCard blogImage="../imgs/Blog4.jpeg" blogTopic="India's own financial powerhouse: GIFT CITY" />
          <BlogCard blogImage="../imgs/Blog5.jpeg" blogTopic="How Yahoo! failed to buy Google(twice!)" />
          <BlogCard blogImage="../imgs/Blog6.jpeg" blogTopic="ZARA's Secret to Its Popularity in India" />
        </div>
      </div>
      <hr />
    </>
  );
};
