const Navbar = () => {
  return (
    <nav className="flex md:justify-between justify-around items-center h-16 px-16 ">
      <p className="font-bold text-lg">With ❤ 🩹, Kay</p>

      <ul className="justify-center gap-8 hidden md:flex">
        <li>Friends</li>
        <li>Family</li>
      </ul>
    </nav>
  );
};

export default Navbar;
