const About = () => {
  const techs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Firebase",
    "Git",
    "GitHub",
    "Netlify",
  ];

  return (
    <div id="contact">
      <h1 className="bebas text-7xl text-center md:text-start">ABOUT ME</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div>
          <div className="grid grid-cols-4 text-center my-5">
            {techs.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-900 border-2 m-2 border-gray-200 px-2 py-1 rounded-full text-sm font-semibold  hover:bg-white hover:text-black cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="md:w-[50%]">
          <h2>
            I am a front-end developer based in Somalia. Computer Science
            Student.
          </h2>
          <p>
            I am a passionate web developer with a flair for crafting
            captivating online experiences. With a keen eye for design and a
            knack for front-end development, I specialize in bringing visions to
            life through pixel-perfect code. From sleek user interfaces to
            seamless navigation, I thrive on transforming ideas into engaging
            websites that captivate audiences. Let's collaborate and turn your
            digital dreams into reality!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
