import gsap from "gsap";
import {useLayoutEffect, useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Specific from "./specific";
import getAll from "../functions/getAll";
import { Link } from "react-router-dom";

const Friends = () => {
  const [friendsList, setFriendsList] = useState([]);

  //   { id: 9, name: "Mayomikun", category: "friend", password: "mayo" },
  //   { id: 14, name: "Valerie", category: "friend", password: "valerie" },
  // karin, nene?


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
    };
    fetchData();
  }, []);
useEffect(()=>{
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
      );},[friendList]) 

  return (
    <div>
      {" "}
      <Navbar />
      <div className="p-10 flex flex-col gap-10">
        <p className="text-2xl md:text-3xl font-bold">Find yourself 👫🏾</p>
        {friendsList.length > 0 ? (
          <div className="flex flex-col gap-16">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-x-5 gap-y-5 text-center">
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
            <Link className="self-center" to="/done">Not here?</Link>
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
