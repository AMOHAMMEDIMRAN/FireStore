import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomeScreen from "./Pages/HomeScreen";


const App = () => {
  return (
    <div className="bg-[#E9EED9] h-[110vh]">
      <Navbar/>
      <div className="max-w-[80%] mx-auto">
        <Outlet/>
      </div>
    </div>
  );
};

export default App;
