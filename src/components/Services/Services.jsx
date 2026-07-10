import {
  FaMicrochip,
  FaNetworkWired,
  FaTools,
} from "react-icons/fa";

import {
  MdDeveloperBoard,
  MdSensors,
} from "react-icons/md";

import { BsCpuFill } from "react-icons/bs";

const services = [
  {
    icon: <FaMicrochip size={40} />,
    title: "Embedded Systems",
    description:
      "Designing reliable embedded solutions for real-world applications.",
  },
  {
    icon: <MdDeveloperBoard size={40} />,
    title: "PCB Design",
    description:
      "Custom schematic capture and PCB layout using KiCad.",
  },
  {
    icon: <FaNetworkWired size={40} />,
    title: "IoT Solutions",
    description:
      "Connecting hardware devices using Wi-Fi and Bluetooth.",
  },
  {
    icon: <MdSensors size={40} />,
    title: "Sensor Integration",
    description:
      "Interfacing different sensors for smart embedded applications.",
  },
  {
    icon: <FaTools size={40} />,
    title: "Hardware Prototyping",
    description:
      "Building and testing functional electronic prototypes.",
  },
  {
    icon: <BsCpuFill size={40} />,
    title: "Circuit Design",
    description:
      "Developing efficient electronic circuits for embedded systems.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-[#050816] text-white py-24 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-4xl sm:text-5xl font-bold">
            My <span className="text-cyan-400">Expertise</span>
          </h2>

          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Areas where I build practical embedded hardware solutions.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1D2840] rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-3 hover:border hover:border-cyan-400 hover:shadow-[0_0_30px_#00E5FF]"
            >

              <div className="text-cyan-400 mb-6 flex justify-center sm:justify-start">
                {service.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left">
                {service.title}
              </h3>

              <p className="text-gray-300 leading-7 text-sm sm:text-base text-center sm:text-left">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;