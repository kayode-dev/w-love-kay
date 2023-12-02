const Button = ({ name }) => {
  return (
    <button className="h-10 w-min font-medium bg-white text-black flex justify-center items-center py-2 px-4 rounded hover:scale-110 duration-200">
      {name}
    </button>
  );
};

export default Button;
