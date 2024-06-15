import Home from "./Home";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-10 my-2">
        <Home />
      </div>
    </div>
  );
};

export default App;
