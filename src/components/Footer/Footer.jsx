import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#040611] text-white py-10 border-t border-[#1D2840]">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left */}

        <div className="text-center md:text-left">

          <h2 className="text-3xl font-bold text-cyan-400">
            JP.
          </h2>

          <p className="text-gray-400 mt-2">
            Embedded Systems Engineer
          </p>

        </div>

        {/* Right */}

        <div className="flex gap-8 text-2xl">

          <a
            href="https://github.com/Jayaseelapandian25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-cyan-400 duration-300" />
          </a>

          <a
            href="https://www.linkedin.com/in/jayaseela-pandian-a-993010333/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-cyan-400 duration-300" />
          </a>

          <a href="mailto:jptamilyt25@gmail.com">
            <FaEnvelope className="hover:text-cyan-400 duration-300" />
          </a>

        </div>

      </div>

      <div className="text-center mt-8 text-gray-500 text-sm px-4">

        © 2026 Jayaseela Pandian. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;