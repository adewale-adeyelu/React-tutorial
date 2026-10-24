import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Faq from "./Pages/Faq"
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// import Faq from "./Pages/Faq";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        {/* <Route path="/faq" element={<Faq />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;