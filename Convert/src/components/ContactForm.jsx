import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Please fill all fields",
      });
      return;
    }

    // Send form data handling would go here
    console.log("Form submitted:", formData);

    // Simulate successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    });

    // Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {formStatus.submitted && (
        <div
          className={`p-4 rounded-md ${
            formStatus.success
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {formStatus.message}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-white font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm border border-white border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-white font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm border border-white border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            placeholder="john@example.com"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-white font-medium mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm border border-white border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          placeholder="Project Inquiry"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-white font-medium mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm border border-white border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          placeholder="Tell us about your project..."
          required
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl w-full border border-blue-500 border-opacity-20"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
