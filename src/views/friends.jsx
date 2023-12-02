import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import Specific from "./specific";
import getAll from "../functions/getAll";

const Friends = () => {
  const [friendsList, setFriendsList] = useState([]);
  // const friends = [
  //   { id: 1, name: "Feyikemi", category: "friend", password: "fey1kem108" },
  //   { id: 2, name: "Samuel", category: "friend", password: "frvky1" },
  //   {
  //     id: 3,
  //     name: "Damilola Orensile",
  //     category: "friend",
  //     password: "damimyne",
  //   },
  //   { id: 4, name: "Ikenna", category: "friend", password: "obinna" },
  //   { id: 5, name: "Precious", category: "friend", password: "kiaharvetz" },
  //   {
  //     id: 6,
  //     name: "Precious(sasageyo)",
  //     category: "friend",
  //     password: "leviarkerman",
  //   },
  //   { id: 7, name: "Ayomide", category: "friend", password: "kashymendy" },
  //   { id: 8, name: "Jetron", category: "friend", password: "fey1kem108" },
  //   { id: 9, name: "Mayomikun", category: "friend", password: "mayo" },
  //   { id: 10, name: "Amy", category: "friend", password: "iyawooga001" },
  //   { id: 11, name: "Nicolas", category: "friend", password: "cupidnickey" },
  //   { id: 12, name: "Omodi", category: "friend", password: "modibodyody" },
  //   { id: 13, name: "Lenis", category: "friend", password: "Lenis" },
  //   { id: 14, name: "Valerie", category: "friend", password: "valerie" },
  // ];

  const [person, setPerson] = useState({});
  const [specificDisplay, setSpecificDisplay] = useState("hidden");

  const personClickHandler = (clickedPerson) => {
    setPerson(clickedPerson);
    setSpecificDisplay("block");
  };

  const closeSpecificHandler = () => {
    setSpecificDisplay("hidden");
  };
  useLayoutEffect(() => {
    const fetchData = async () => {
      const data = await getAll();
      setFriendsList(data);
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
    };
    fetchData();
  }, []);
  // useLayoutEffect(() => {
  //   const tl = gsap.timeline();
  //   tl.fromTo(
  //     ".friends",
  //     { scale: 0.1, opacity: 0 },
  //     {
  //       duration: 1,
  //       scale: 1,
  //       opacity: 1,
  //       ease: "expoScale(0, 1, power2.inOut)",
  //       stagger: 1,
  //     }
  //   );
  // }, []);

  return (
    <div>
      {" "}
      <Navbar />
      <div className="p-10 flex flex-col gap-10">
        <p className="text-3xl font-bold">Friends</p>
        {friendsList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-x-5 gap-y-5 text-center">
            {friendsList.map((friend) => {
              return (
                <div
                  className="friends h-12 w-auto rounded-md border flex items-center justify-center cursor-pointer bg-transparent text-white hover:text-black hover:bg-white duration-300 "
                  onClick={() => {
                    personClickHandler(friend);
                  }}
                >
                  {friend.name}
                </div>
              );
            })}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Specific
        person={person}
        display={specificDisplay}
        setClose={closeSpecificHandler}
      />
    </div>
  );
};

export default Friends;
