import { FC } from "react";
import { FaGithub } from "react-icons/fa";

type ProjectProps = {
  title: string;
  description: string;
  img: string;
  url: string;
  role: string;
  year: number;
  github: string;
};

const Project = ({
  title,
  description,
  img,
  url,
  role,
  year,
  github,
}: ProjectProps) => {
  return (
    <div className="flex flex-col md:flex-row mb-32 justify-between items-center gap-10">
      <img
        className="md:w-[50%]  rounded-2xl object-cover border-8 border-gray-800 md:img-border"
        src={img}
        alt={"img"}
      />
      <div className="flex flex-col gap-5 justify-between">
        <h1 className="text-4xl">{title}</h1>
        <p className="text-gray-300">{description}</p>
        <div className="flex flex-col gap-5 justify-between">
          <h3 className="">PROJECT INFO</h3>
          <hr className="bg-gray-600" />
          <ul className="flex justify-between">
            <li>Year</li>
            <li>{year}</li>
          </ul>
          <hr className="bg-gray-600" />
          <ul className="flex justify-between">
            <li>Role</li>
            <li>{role}</li>
          </ul>
        </div>
        <div className="flex items-center justify-around">
          <a href={url} target="_blank" className="underline text-[#D3E97A]">
            LIVE DEMO
          </a>
          <a
            href={github}
            target="_blank"
            className="underline text-[#D3E97A] flex items-center justify-between gap-3"
          >
            SEE ON GITHUB
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
