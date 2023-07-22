import { Outlet } from "react-router-dom";
import Derictory from "../../components/directory/directory.component";

const Home = () => {
  return (
    <div>
      <Derictory />
      <Outlet />
    </div>
  );
};

export default Home;
