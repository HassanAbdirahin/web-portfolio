import { MdEmail } from "react-icons/md";
import heroImg from "../assets/hero-img.jpg";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 py-5">
      <div className="md:w-[50%] flex flex-col gap-5 items-center text-center md:text-start md:items-start">
        <h1 className="bebas text-6xl md:text-8xl">
          HI, I AM <br /> HASSAN ABDIRAHIM
        </h1>
        <p className="text-gray-400">
          Hey there! 👋 Welcome to my little corner of the web! I'm all about
          crafting awesome websites that look good, let's team up and bring some
          cool ideas to life together!
        </p>
        <div className="flex justify-center items-center gap-5">
          <a
            href="mailto:hassanabdirahin441@gmail.com"
            className="flex items-center gap-5 py-4 px-6 text-lg font-semibold rounded-full bg-[#D3E97A] hover:bg-[#e5fc88] text-black"
          >
            Contact me <MdEmail size={25} />
          </a>
          <a href="https://github.com/hassanabdirahin" target="_blank">
            <FaGithub className="bg-[#76767655] text-[#D3E97A] hover:text-black hover:bg-[#D3E97A] text-[50px] p-2 rounded-full" />
          </a>
          <a href="https://twitter.com/Hassan_Saske" target="_blank">
            <FaXTwitter className="bg-[#76767655] text-[#D3E97A] text-[45px] hover:text-black hover:bg-[#D3E97A]  p-2 rounded-full" />
          </a>
        </div>
      </div>
      <div>
        <img
          src={heroImg}
          alt="Hassan Abdirahim"
          className="w-[500px] rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Hero;
