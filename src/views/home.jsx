import Navbar from "../components/navbar";
import { TypeAnimation } from "react-type-animation";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main-body flex flex-col items-center ">
        <div className="h-[60vh] w-4/5 bg-neutral-800 m-auto rounded-lg p-10 flex flex-col items-center justify-center overflow-y-auto">
          <p className="text-lg">
            <TypeAnimation
              sequence={[
                "Soooo, this idea came to me on a very strange monday evening, on my way back home from work. I am quite poor, considering the economy and all that, so i got to thinking, *how can i appreciate everyone that beleives in me/ made an effort to look out for me/ made me happy(a very difficult task that some did with ease) *",
              ]}
              speed={40}
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
