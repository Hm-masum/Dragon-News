import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCart from "./NewsCart";

const Home = () => {
  const news = useLoaderData();
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        {/* news container */}
        <div className="md:col-span-2 space-y-4">
          {
            news.map(aNews => <NewsCart key={aNews._id} news={aNews}></NewsCart>)
          }
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
