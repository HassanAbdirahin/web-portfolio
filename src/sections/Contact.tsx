import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "2c624a1b-e94d-45dd-9dc8-8d92a39e6593");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      alert(data.message);
    }
  };

  return (
    <div
      className="flex flex-col md:flex-row items-start justify-around gap-10"
      id="contact"
    >
      <div className="flex flex-col items-center md:items-start gap-20">
        <h1 className="text-7xl bebas">LET'S CONNECT</h1>
        <p>
          Say hello at{" "}
          <a
            href="mailto:hassanabdirahin441@gmail.com"
            className="link-underline"
          >
            hassanabdirahin441@gmail.com
          </a>
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/hassanabdirahin" target="_blank">
            <FaGithub size={40} className="text-[#D3E97A]" />
          </a>
          <a href="https://twitter.com/Hassan_Saske" target="_blank">
            <FaSquareXTwitter size={40} className="text-[#D3E97A]" />
          </a>
          <a href="https://www.instagram.com/hasstagram_1" target="_blank">
            <FaSquareInstagram size={40} className="text-[#D3E97A]" />
          </a>
        </div>
      </div>
      {/* contact inputs */}
      <form onSubmit={onSubmit}>
        <div className="flex flex-col items-center md:items-start">
          <div>
            <label htmlFor="name" className="text-xl">
              Name
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-800 rounded-md w-80 md:w-[500px] h-10 px-4 text-md m-4"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xl">
              Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-800 rounded-md w-80 md:w-[500px] h-10 px-4 text-md m-4"
            />
          </div>
          <div>
            <label htmlFor="subject" className="text-xl">
              Subject
            </label>
            <br />
            <input
              type="text"
              id="subject"
              name="subject"
              className="bg-gray-800 rounded-md w-80 md:w-[500px] h-10 px-4 text-md m-4"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              id="message"
              name="message"
              className="h-60 bg-gray-800 rounded-md w-80 md:w-[500px] px-4 text-md m-4"
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-5 py-4 px-6 text-lg font-semibold rounded-full bg-[#D3E97A] hover:bg-[#e5fc88] text-black"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
