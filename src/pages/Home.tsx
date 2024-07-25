import { FunctionComponent } from "react";
import Main from "../components/Main";
import ManuLeft from "../components/ManuLeft";
import Header from "../components/Header";

const Home: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white h-[1024px]">
      <Main />
      <ManuLeft />
      <Header />
    </div>
  );
};

export default Home;
