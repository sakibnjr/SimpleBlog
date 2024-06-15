const Navbar = () => {
  return (
    <nav className="flex justify-between px-10 bg-slate-100 text-black py-2 shadow-md rounded-sm">
      <h1 className="text-sky-500 uppercase tracking-wider text-xl font-bold">
        SakibNjr Blog
      </h1>
      <div className="flex gap-10">
        <a href="/" className="hover:text-sky-500 font-thin">
          Home
        </a>
        <a href="/create" className="hover:text-sky-500 font-thin">
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
