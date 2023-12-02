import Button from "../components/button";
import { useRef, useState } from "react";

const Specific = ({ person, display, setClose }) => {
  const personPasscode = useRef("");
  const [writeUp, setWriteUp] = useState("");
  const [passwordIsValid, setPasswordIsvalid] = useState(false);
  const passwordSubmitHandler = (e) => {
    e.preventDefault();
    if (personPasscode.current.value === person.password) {
      setPasswordIsvalid(true);
      setWriteUp(<p>{person.writeUp}</p>);
    }
  };
  const closeModalHandler = () => {
    setClose();
    setPasswordIsvalid(false);
    // personPasscode.current.value = "";
    // if (personPasscode.current.value === "") {
    //   setWriteUp("");
    // }
  };
  return (
    <section
      className={`fixed z-10 bg-neutral-950 bg-opacity-60 top-0 left-0 min-h-screen min-w-full p-5 flex items-center justify-center  md:p-10 ${display}`}
    >
      <div className="h-[80vh] w-full bg-neutral-900 text-center rounded p-5 flex flex-col gap-4 overflow-hidden overflow-y-auto">
        <button className="self-end" onClick={closeModalHandler}>
          <span className="material-symbols-outlined">close</span>
        </button>
        <h2 className="text-2xl md:text-3xl font-semibold">{person.name}❤️‍🩹</h2>
        {!passwordIsValid ? (
          <section className="flex flex-col gap-4 items-center">
            <p className="font-light">Enter your passcode:</p>
            <form onSubmit={passwordSubmitHandler} className="flex gap-4">
              {" "}
              <input
                type="password"
                placeholder="Enter your code"
                className="h-12 bg-neutral-950 text-center rounded shadow-md text-xl font-bold"
                ref={personPasscode}
              />
              <button className="border border-white p-2 flex items-center justify-center rounded hover:bg-white hover:text-black duration-300">
                <span class="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </section>
        ) : (
          <div className="flex flex-col gap-8 items-center justify-center">
            <section className="bg-neutral-950 p-4 rounded-md drop-shadow-lg leading-loose">
              {writeUp}
            </section>
            <button className="bg-white text-black font-medium p-2 rounded-md w-max">
              Done ?
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Specific;
