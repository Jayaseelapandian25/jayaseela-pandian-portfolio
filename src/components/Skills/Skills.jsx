import {
  FaBluetoothB,
  FaWifi,
  FaMicrochip,
} from "react-icons/fa";

import {
  MdDeveloperBoard,
  MdMemory,
  MdSensors,
} from "react-icons/md";

const skills = [
  {
    icon: <FaMicrochip size={45} />,
    title: "ESP32",
  },
  {
    icon: <MdDeveloperBoard size={45} />,
    title: "Arduino",
  },
  {
    icon: <MdDeveloperBoard size={45} />,
    title: "KiCad",
  },
  {
    icon: <FaWifi size={45} />,
    title: "Wi-Fi",
  },
  {
    icon: <FaBluetoothB size={45} />,
    title: "Bluetooth",
  },
  {
    icon: <MdSensors size={45} />,
    title: "Sensor Integration",
  },
  {
    icon: <MdMemory size={45} />,
    title: "PCB Design",
  },
  {
    icon: <FaMicrochip size={45} />,
    title: "Embedded Firmware",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#050816] text-white py-24 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-4xl sm:text-5xl font-bold">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Technologies and platforms I use to develop embedded systems.
          </p>

        </div>

        {/* Skills Grid */}

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1D2840] rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:border hover:border-cyan-400 hover:shadow-[0_0_30px_#00E5FF]"
            >
              <div className="text-cyan-400 mb-5">
                {skill.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-center">
                {skill.title}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;