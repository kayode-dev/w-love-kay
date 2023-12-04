import Navbar from "../components/navbar";
import Button from "../components/button";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
const Home = () => {
  const message = [
    "Hi, Kayode here… to address the elephant in the room, you might be wondering why this link made it to your respective DM’s",
    2500,
    "you see… there’s a simple answer to that. At some point in the last 2-3 years, you made my life better, you made me smile, you believed in me and somehow we made it into each other’s chapters.",
    2500,
    " I am rich in the Lord, but quite poor in funds if i say i should get something for everyone that comes to mind, with that being said, ",
    2500,
    "this is my version of a grand gesture of romance, friendship or whatever the relationship between us may be. ",
    2500,
    "It might not be all that to you but on my part, i haven't been “intentional” enough and this is how i know best, using the only talents i possess and sometimes take for granted. ",
    2500,
    "Now, to all of you, thank you for rocking w me, even though sometimes I made that difficult to do… I find this somewhat… melodramatic? I don’t know if thats the word but anyhoo,",
    2500,
    " find yourself and read what i have for you❤️‍🩹",
  ];
  return (
    <>
      <Navbar />
      <div className="main-body flex flex-col items-center justify-around ">
        <div className="w-11/12 md:w-4/5 bg-neutral-800 rounded-lg p-4 md:p-8 flex flex-col items-center justify-center overflow-y-auto">
          <TypeAnimation
            sequence={message}
            speed={40}
            wrapper="span"
            className="inline-block overflow-y-auto"
            // deletionSpeed={70}
            omitDeletionAnimation={true}
          />
        </div>
        <div className="flex gap-4">
          <Link to="/friends">
            <Button name="Let's have it!" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
