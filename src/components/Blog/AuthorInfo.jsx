/* eslint-disable react/prop-types */
const AuthorInfo = ({ author, createdAt }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center capitalize space-x-2">
        <div className="bg-[#5CE1E6] text-white w-10 h-10 flex items-center justify-center rounded-full">
          <span>{author.slice(0, 1)}</span>
        </div>

        <div>
          <h5 className="text-gray-200 text-sm">{author}</h5>
          <div className="flex items-center text-xs text-gray-400">
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
