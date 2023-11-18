import "./App.css";
import Start from "./views/start";
import Home from "./views/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main className=" min-h-screen bg-neutral-900 text-white">
        {/* <Navbar />
        <div className=" flex flex-col items-center justify-center">
          <Home />
        </div> */}
        <Routes>
          <Route index path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
