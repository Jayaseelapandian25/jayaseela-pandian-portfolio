import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animation";

function About() {
  return (
    <motion.section
      id="about"
      className="bg-[#050816] text-white py-24 px-6 lg:px-8"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}

        <div className="text-center mb-16">

          <h2 className="text-4xl sm:text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Get to know more about me and my journey.
          </p>

        </div>

        {/* About Card */}

        <div className="bg-[#1D2840] rounded-3xl p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <div className="flex justify-center">

            <img
              src="/profile.png"
              alt="Jayaseela Pandian"
              className="w-60 sm:w-72 lg:w-[320px] rounded-3xl"
            />

          </div>

          {/* Right Side */}

          <div className="text-center lg:text-left">

            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Jayaseela Pandian
            </h3>

            <p className="text-gray-300 leading-8 text-sm sm:text-base">

              I am an Embedded Systems Engineer passionate about
              designing intelligent embedded systems, developing
              custom PCB solutions, integrating IoT devices,
              and creating reliable hardware prototypes.

            </p>

            <p className="text-gray-300 leading-8 text-sm sm:text-base mt-6">

              I enjoy transforming ideas into real hardware
              solutions by combining electronics, embedded
              firmware, and practical engineering design.
              I am always eager to learn new technologies
              and build innovative systems that solve
              real-world problems.

            </p>

          </div>

        </div>

      </div>
    </motion.section>
  );
}

export default About;