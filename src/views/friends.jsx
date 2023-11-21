import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import Specific from "./specific";

const Friends = () => {
  const friends = [
    "Feyikemi",
    "Samuel",
    "Damilola Orensile",
    "Ikenna",
    "Precious",
    "Precious(sasageyo)",
    "Ayomide",
    "Jetron",
    "Mayomikun",
    "Amy",
    "Nicolas",
    "Omodi",
    "Lenis",
  ];

  const [clicked, setClicked] = useState();
  const [specificDisplay, setSpecificDisplay] = useState("hidden");

  const personClickHandler = (e) => {
    console.log(e.target.value);
    setClicked(e.target.value);
    console.log(clicked);
    setSpecificDisplay("block");
  };

  const closeSpecificHandler = () => {
    setSpecificDisplay("hidden");
  };

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".friends",
      { scale: 0.1, opacity: 0 },
      {
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "expoScale(0, 1, power2.inOut)",
        stagger: 1,
      }
    );
  }, []);
  return (
    <div className="relative">
      {" "}
      <Navbar />
      <div className="p-10 flex flex-col gap-10">
        <p className="text-3xl font-bold">Friends</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-x-5 gap-y-5 text-center">
          {friends.map((friend) => {
            return (
              <button
                className="friends h-12 w-auto rounded-md border flex items-center justify-center cursor-pointer bg-transparent text-white hover:text-black hover:bg-white duration-300 "
                onClick={personClickHandler}
                value={friend}
              >
                {friend}
              </button>
            );
          })}{" "}
        </div>
      </div>
      <Specific name={clicked} display={specificDisplay} setClose={closeSpecificHandler}/>
    </div>
  );
};

export default Friends;
