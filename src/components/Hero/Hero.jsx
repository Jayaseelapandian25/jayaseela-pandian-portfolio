import { FaDownload } from "react-icons/fa";
import { MdWork } from "react-icons/md";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#050816] text-white flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div className="order-2 lg:order-1 text-center lg:text-left">

          <p className="text-cyan-400 text-lg md:text-xl mb-3 font-medium">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Jayaseela Pandian
          </h1>

          <h2 className="text-2xl lg:text-3xl text-gray-300 mt-5">
            Embedded Systems Engineer
          </h2>

          <p className="text-gray-400 mt-8 leading-8 max-w-xl mx-auto lg:mx-0">
            Passionate about designing intelligent embedded systems,
            developing custom PCB solutions, integrating IoT devices,
            and building innovative hardware prototypes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 mt-10">

            <a
              href="#projects"
              className="bg-cyan-400 text-black px-7 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:scale-105 duration-300"
            >
              <MdWork />
              View Projects
            </a>

            <a
              href="/resume/Jayaseela_Pandian_Resume.pdf"
              download
              className="border border-cyan-400 px-7 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-cyan-400 hover:text-black duration-300"
            >
              <FaDownload />
              Resume
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="order-1 lg:order-2 flex justify-center">

          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full bg-[#1D2840] border-4 border-cyan-400 flex justify-center items-center shadow-[0_0_40px_#00E5FF]">

            <img
              src="/profile.png"
              alt="Profile"
              className="w-56 h-56 sm:w-72 sm:h-72 lg:w-[340px] lg:h-[340px] rounded-full object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;