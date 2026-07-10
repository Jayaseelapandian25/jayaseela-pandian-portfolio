import { useState } from "react";
import ProjectModal from "../Modal/ProjectModal";

const projects = [
  {
  title: "ESP Development Board",

  description:
    "Custom ESP32 development board designed for embedded applications and rapid hardware prototyping.",

  image: "/projects/esp-development-board/main.png",

  overview:
    "The ESP Development Board is a custom PCB designed for embedded and IoT development. It integrates stable power regulation, USB programming, GPIO expansion, and debugging support into a compact hardware platform suitable for rapid prototyping and real-world embedded applications.",

  images: [
    "/projects/esp-development-board/main.png",
    "/projects/esp-development-board/front.png",
    "/projects/esp-development-board/back.png",
  ],

  features: [
    "ESP32-WROOM-32 Module",
    "USB Type-C Interface",
    "USB-UART Programming",
    "Reset & Boot Buttons",
    "3.3V Power Regulation",
    "GPIO Expansion Headers",
  ],

  components: [
    "ESP32-WROOM-32",
    "USB Type-C",
    "AMS1117",
    "Crystal Oscillator",
    "Reset Button",
    "Boot Button",
    "Status LEDs",
    "GPIO Headers",
  ],

  software: [
    "KiCad",
  ],
},

  {
  title: "ESP Base Board",

  description:
    "Compact ESP base board with optimized PCB layout for embedded system development.",

  image: "/projects/esp-base-board/main.png",

  overview:
    "The ESP Base Board was designed to simplify the integration of ESP32 modules with sensors, communication interfaces, and peripheral devices. It provides organized GPIO access, stable power distribution, and a compact layout for rapid embedded system development.",

  images: [
    "/projects/esp-base-board/main.png",
    "/projects/esp-base-board/front.png",
    "/projects/esp-base-board/back.png",
  ],

  features: [
    "Compact PCB Layout",
    "ESP32 Socket Support",
    "GPIO Expansion Headers",
    "Sensor Interface",
    "Power Distribution",
    "Easy Hardware Integration",
  ],

  components: [
    "ESP32 Socket",
    "Pin Headers",
    "Power Connector",
    "LED Indicators",
    "Reset Button",
    "GPIO Connectors",
  ],

  software: [
    "KiCad",
  ],
},

  {
  title: "Smart Home Automation",

  description:
    "IoT-based home automation system for wireless monitoring and control of household devices.",

  image: "/projects/smart-home/main.png",

  overview:
    "The Smart Home Automation system was developed to remotely monitor and control household electrical appliances using an ESP32-based controller. The system enables wireless communication, real-time device control, and easy integration with multiple sensors and relay modules.",

  images: [
    "/projects/smart-home/main.png",
    "/projects/smart-home/front.png",
    "/projects/smart-home/back.png",
  ],

  features: [
    "Wireless Device Control",
    "Real-time Monitoring",
    "Wi-Fi Communication",
    "Relay Module Control",
    "Multi-device Support",
    "Compact Embedded Design",
  ],

  components: [
    "ESP32",
    "Relay Module",
    "Power Supply",
    "Wi-Fi Module",
    "Terminal Connectors",
    "Status LEDs",
  ],

  software: [
    "KiCad",
  ],
},

  {
    title: "USB to UART Converter Board",
    description:
      "A compact USB to UART converter board designed for reliable serial communication, programming, and debugging of embedded systems.",
    
      image: "/projects/usb-uart/main.png",
    
      overview:
    "The USB to UART Converter Board was designed to provide a reliable communication interface between a computer and embedded hardware. The board simplifies firmware uploading, serial debugging, and UART communication for microcontroller-based projects. Its compact layout makes it suitable for development, testing, and embedded prototyping.",
      images: [
  "/projects/usb-uart/main.png",
  "/projects/usb-uart/front.png",
  "/projects/usb-uart/back.png",
],

    features: [
  "USB to UART Communication",
  "Serial Programming Support",
  "Compact PCB Layout",
  "TX/RX Status Indicators",
  "3.3V & 5V Compatibility",
  "Reliable Data Transmission",
    ],

    components: [
  "CH340C USB-UART IC",
  "USB Type-C Connector",
  "TX/RX Header",
  "Power LED",
  "Status LEDs",
  "Crystal Oscillator",
  "Capacitors",
  "Resistors",
],
  software: [
    "KiCad",
  ],
  },

  {
  title: "Digital Electronic Lock",

  description:
    "Embedded electronic locking system with secure authentication and access control.",

  image: "/projects/digital-lock/main.png",

  overview:
    "The Digital Electronic Lock is a custom embedded security system designed to provide reliable electronic access control. The system authenticates users through a secure password mechanism and controls the locking hardware while providing status indication for user interaction.",

  images: [
    "/projects/digital-lock/main.png",
    "/projects/digital-lock/front.png",
    "/projects/digital-lock/back.png",
  ],

  features: [
    "Password Authentication",
    "Electronic Door Lock Control",
    "Status LED Indicators",
    "Secure User Access",
    "Compact PCB Design",
    "Embedded Security System",
  ],

  components: [
    "ESP32",
    "Keypad Connector",
    "Relay Driver",
    "Status LEDs",
    "Buzzer",
    "Voltage Regulator",
    "GPIO Headers",
  ],

  software: [
    "KiCad",
  ],
},

  {
  title: "Air Quality Monitoring System",

  description:
    "Real-time environmental monitoring system using multiple sensors and embedded hardware.",

  image: "/projects/air-quality/main.png",

  overview:
    "The Air Quality Monitoring System is an embedded environmental monitoring solution developed to measure and analyze surrounding air conditions using multiple sensors. The system continuously collects sensor data and provides accurate environmental monitoring for smart applications.",

  images: [
    "/projects/air-quality/main.png",
    "/projects/air-quality/front.png",
    "/projects/air-quality/back.png",
  ],

  features: [
    "Real-time Air Monitoring",
    "Multiple Sensor Interface",
    "Environmental Data Collection",
    "Compact Embedded Design",
    "Continuous Measurement",
    "Reliable Sensor Integration",
  ],

  components: [
    "ESP32",
    "Air Quality Sensor",
    "Voltage Regulator",
    "Status LEDs",
    "Sensor Connectors",
    "Power Supply Circuit",
  ],

  software: [
    "KiCad",
  ],
},
]

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="bg-[#050816] text-white py-24 px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">

          {/* Heading */}

          <div className="text-center mb-16">

            <h2 className="text-4xl sm:text-5xl font-bold">
              Selected <span className="text-cyan-400">Projects</span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-base sm:text-lg">
              The projects below represent a selection of my embedded systems,
              PCB design, IoT, and hardware development work. These showcase my
              practical engineering experience across multiple real-world
              applications.
            </p>

          </div>

          {/* Project Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#1D2840] rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:border hover:border-cyan-400 hover:shadow-[0_0_30px_#00E5FF]"
              >

                <div className="bg-[#25324f] h-64 flex items-center justify-center p-5">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-full object-contain"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 leading-7 text-sm sm:text-base">
                    {project.description}
                  </p>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-8 w-full sm:w-auto bg-cyan-400 text-black px-5 py-3 rounded-xl font-semibold hover:scale-105 duration-300"
                  >
                    View Details
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* Note */}

          <div className="mt-16 text-center">

            <p className="text-gray-400 text-base sm:text-lg max-w-5xl mx-auto">

              <span className="text-cyan-400 font-semibold">
                Note:
              </span>{" "}

              This portfolio highlights a selection of my embedded systems and PCB
              projects. I have completed many additional hardware designs,
              prototypes, and engineering implementations beyond those shown here.

            </p>

          </div>

        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default Projects;