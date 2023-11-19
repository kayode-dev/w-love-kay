import Navbar from "../components/navbar";

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
  return (
    <div>
      <Navbar />
      <div className="p-10 flex flex-col gap-10">
        <p className="text-3xl font-bold">Friends</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-x-5 gap-y-5 text-center">
          {friends.map((friend) => {
            return (
              <div className="h-12 w-auto rounded-md border flex items-center justify-center cursor-pointer bg-white text-black hover:text-white hover:bg-transparent duration-300 ">
                {friend}
              </div>
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
};

export default Friends;
