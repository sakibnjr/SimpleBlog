import BlogList from "./BlogList";
import blogs from "./blogs.json";

const Home = () => {
  return (
    <div>
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList
        blogs={blogs.filter((b) => b.blogauthor === "Nahid")}
        title="Nahid's Blog"
      />
      <BlogList
        blogs={blogs.filter((b) => b.blogauthor === "Neon")}
        title="Neon's Blog"
      />
    </div>
  );
};

export default Home;
