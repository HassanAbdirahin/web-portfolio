import { FC, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Nav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  function workOnClick() {
    window.scrollTo(0, 1100);
    setIsOpen(false);
  }

  function aboutOnClick() {
    window.scrollTo(0, 3800);
    setIsOpen(false);
  }

  function contactOnClick() {
    window.scrollTo(0, 5000);
    setIsOpen(false);
  }
  return (
    <div className="flex items-center justify-between px-4 py-4">
      <h1 className="text-2xl md:text-3xl bebas">Hassan Abdirahim</h1>
      <div className="hidden sm:flex items-center gap-5">
        <button onClick={workOnClick}>Work</button>
        <button onClick={aboutOnClick}>About</button>
        <button onClick={contactOnClick}>Contact</button>
      </div>
      <div className="sm:hidden flex">
        <button onClick={() => setIsOpen(true)}>
          <FaBars />
        </button>
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center">
            <button
              className="absolute top-7 right-4"
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose size={30} />
            </button>
            <div className="flex flex-col items-center gap-10">
              <button className="text-5xl" onClick={workOnClick}>
                Work
              </button>
              <button className="text-5xl" onClick={aboutOnClick}>
                About
              </button>
              <button className="text-5xl" onClick={contactOnClick}>
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
