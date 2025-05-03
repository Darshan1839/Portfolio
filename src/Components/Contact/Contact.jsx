// src/components/ContactForm.jsx
import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const serviceID = "service_mna8t7f";
  const templateID = "template_g83p6mn";
  const publicKey = "nmgMR8I_y5g2oID71"; // Also called user ID in older versions

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ from_name: "", reply_to: "", message: "" });
      })
      .catch(() => setStatus("Failed to send message. Please try again."));
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-4 md:px-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">Contact Me 📬</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white font-semibold transition"
          >
            Send Message 🚀
          </button>

          {status && (
            <p className="mt-4 text-center text-green-400">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
