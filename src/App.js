import Start from "./views/start";
import Home from "./views/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Friends from "./views/friends";
import Done from "./views/done";

function App() {
  return (
    <BrowserRouter>
      <main className=" min-h-screen bg-neutral-950 text-white">
        {/* <Navbar />
        <div className=" flex flex-col items-center justify-center">
          <Home />
        </div> */}
        <Routes>
          <Route index path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/done" element={<Done />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
