import { FC } from "react";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Featured from "./sections/Featured";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App: FC = () => {
  return (
    <div className="px-8">
      <Nav />
      <Hero />
      <hr className="bg-gray-700 mt-10 mb-5" />
      <Featured />
      <hr className="bg-gray-700 mt-10 mb-5" />
      <About />
      <hr className="bg-gray-700 mt-10 mb-5" />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
