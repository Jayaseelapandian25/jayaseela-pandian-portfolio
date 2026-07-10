import { useState, useEffect } from "react";

function ProjectModal({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (project) {
      setSelectedImage(project.image);
    }
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4">

      <div className="bg-[#1D2840] rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative">

        {/* Close */}

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-3xl hover:text-cyan-400"
        >
          ×
        </button>

        {/* Main Image */}

        <div className="p-8">

          <img
            src={selectedImage}
            alt={project.title}
            className="w-full h-[350px] object-contain bg-[#25324f] rounded-2xl"
          />

          {/* Gallery */}

          {project.images && (

            <div className="flex gap-4 mt-5 overflow-x-auto">

              {project.images.map((img, index) => (

                <img
                  key={index}
                  src={img}
                  alt=""
                  onClick={() => setSelectedImage(img)}
                  className={`w-24 h-24 object-contain rounded-xl cursor-pointer border-2 ${
                    selectedImage === img
                      ? "border-cyan-400"
                      : "border-transparent"
                  }`}
                />

              ))}

            </div>

          )}

          {/* Title */}

          <h2 className="text-4xl font-bold text-white mt-8">
            {project.title}
          </h2>

          {/* Overview */}

          <h3 className="text-cyan-400 text-2xl mt-8">
            Project Overview
          </h3>

          <p className="text-gray-300 leading-8 mt-3">
            {project.overview}
          </p>

          {/* Features */}

          <h3 className="text-cyan-400 text-2xl mt-8">
            Key Features
          </h3>

          <ul className="list-disc ml-6 mt-4 text-gray-300 space-y-2">

            {project.features.map((item, index) => (

              <li key={index}>{item}</li>

            ))}

          </ul>

          {/* Components */}

          <h3 className="text-cyan-400 text-2xl mt-8">
            Hardware Components
          </h3>

          <div className="flex flex-wrap gap-3 mt-5">

            {project.components.map((item, index) => (

              <span
                key={index}
                className="bg-[#25324f] px-4 py-2 rounded-full"
              >
                {item}
              </span>

            ))}

          </div>

          {/* Software */}

          <h3 className="text-cyan-400 text-2xl mt-8">
            Software Used
          </h3>

          <div className="flex flex-wrap gap-3 mt-5">

            {project.software.map((item, index) => (

              <span
                key={index}
                className="bg-cyan-400 text-black px-4 py-2 rounded-full font-semibold"
              >
                {item}
              </span>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProjectModal;