import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-10">
      {" "}
      <Link to="/home">
        <p className="text-3xl font-bold animate-pulse hover:scale-125 duration-200">
          With ❤️‍🩹, Kay
        </p>
      </Link>
      <span class="material-symbols-outlined animate-bounce">north</span>
      <p>just click... once abeg</p>
    </div>
  );
};

export default Start;
