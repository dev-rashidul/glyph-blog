import blogs from "../../Data/Data";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <>
      <div id="Blog">
        <div className="blog__wrapper px-2 md:px-0">
          <div className="container mx-auto">
            <h3 className="text-3xl text-white font-semibold ps-2">Blogs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-6">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
