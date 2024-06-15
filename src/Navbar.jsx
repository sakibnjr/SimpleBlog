import { IoIosAdd } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-10 bg-slate-100 text-black py-2 shadow-md rounded-sm">
      <h1 className="text-sky-500 uppercase tracking-wider text-xl">
        SakibNjr Blog
      </h1>
      <div className="flex gap-10">
        <a href="/" className="flex items-center gap-2 hover:text-sky-500">
          Home
          <RiHome2Line />
        </a>
        <a
          href="/create"
          className="flex items-center gap-2 hover:text-sky-500"
        >
          New Blog
          <IoIosAdd />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
