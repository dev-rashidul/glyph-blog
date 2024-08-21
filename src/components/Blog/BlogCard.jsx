import { Link } from "react-router-dom";
import AuthorInfo from "./AuthorInfo";

/* eslint-disable react/prop-types */
const BlogCard = ({ blog }) => {
  // Destructuring
  const { title, content, thumbnail, tags, author, createdAt } = blog;

  return (
    <div className="relative p-3 border border-[#242534] rounded-md transition-all duration-300 hover:bg-[#12131b]">
      <Link to="/">
        <img
          className="w-full max-h-60 object-cover rounded-md"
          src={thumbnail}
          alt="thumbnail"
        />
      </Link>
      <div className="blog__tags flex flex-wrap gap-3 pt-5">
        {tags?.map((tag, index) => (
          <span
            key={index}
            className="text-sm text-[#5CE1E6] bg-[#5ce1e62f] py-1 px-2 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-2 pt-2">
        <Link to="/">
          <h3 className="text-white text-xl lg:text-2xl font-lexend font-semibold">
            {title}
          </h3>
        </Link>
        <p className="mb-6 text-base text-gray-300 mt-1">
          {content.slice(0, 150)}...
        </p>

        {/* Author Informations */}
        <AuthorInfo author={author} createdAt={createdAt} />
      </div>
    </div>
  );
};

export default BlogCard;
