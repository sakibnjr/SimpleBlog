/* eslint-disable react/prop-types */
const BlogList = ({ blogs, title }) => {
  return (
    <div className="border-2 p-4 my-4 rounded-md">
      <h1 className="text-2xl text-center bg-slate-100 uppercase text-sky-400">
        {title}
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {blogs.map((b) => (
          <div
            key={b.blogid}
            className="hover:border-2 p-2 my-2 hover:shadow-md rounded-md"
          >
            <h2 className="text-xl mb-2 text-sky-400">{b.blogtitle}</h2>

            <p className="text-sm">{b.blogdescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
