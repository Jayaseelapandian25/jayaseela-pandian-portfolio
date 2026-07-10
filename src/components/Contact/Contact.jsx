import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_vvqjrqs",
        "template_mc88ayh",
        {
          from_name: form.from_name,
          from_email: form.from_email,
          message: form.message,
        },
        "Sz3JbNuTTQxNcgHFn"
      )
      .then(() => {
        setLoading(false);

        toast.success("Message sent successfully!");

        setForm({
          from_name: "",
          from_email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);

        setLoading(false);

        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="bg-[#050816] text-white py-24 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-4xl sm:text-5xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Let's connect and build something amazing together.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Information */}

          <div className="bg-[#1D2840] rounded-3xl p-6 sm:p-8">

            <h3 className="text-2xl sm:text-3xl font-bold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">

              <a
                href="mailto:jptamilyt25@gmail.com"
                className="flex items-center gap-4 hover:text-cyan-400 transition duration-300 break-all"
              >
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <span className="text-sm sm:text-base">
                  jptamilyt25@gmail.com
                </span>
              </a>

              <a
                href="tel:+918015845064"
                className="flex items-center gap-4 hover:text-cyan-400 transition duration-300"
              >
                <FaPhone className="text-cyan-400 text-2xl" />
                <span className="text-sm sm:text-base">
                  +91 80158 45064
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/jayaseela-pandian-a-993010333/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-cyan-400 transition duration-300 break-all"
              >
                <FaLinkedin className="text-cyan-400 text-2xl" />
                <span className="text-sm sm:text-base">
                  LinkedIn Profile
                </span>
              </a>

              <a
                href="https://github.com/Jayaseelapandian25"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-cyan-400 transition duration-300 break-all"
              >
                <FaGithub className="text-cyan-400 text-2xl" />
                <span className="text-sm sm:text-base">
                  GitHub Profile
                </span>
              </a>

            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-[#1D2840] rounded-3xl p-6 sm:p-8">

            <form onSubmit={sendEmail} className="space-y-6">

              <input
                type="text"
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-[#25324f] outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <input
                type="email"
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-[#25324f] outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <textarea
                rows="6"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-xl bg-[#25324f] outline-none resize-none focus:ring-2 focus:ring-cyan-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 duration-300 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;