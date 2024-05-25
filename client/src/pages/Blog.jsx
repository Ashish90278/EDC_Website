import { BlogCard } from "../components/BlogCard.jsx";
import "./Blog.css";
import blogs from "./Json/Blogs.json";

export const Blog = () => {
  
  return (
    <>
      <div className="blogContainer container">
        <div className="Section">
          {blogs.map((blog, index) => {
            return (
              <BlogCard
                blogImage={blog.image}
                blogTopic={blog.topic}
                blogLink={blog.link}
              />
            );
          })}
        </div>
      </div>
      <hr style={{ border: "1px solid grey" }} />
    </>
  );
};
