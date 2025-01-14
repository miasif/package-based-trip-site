"use client";
import { useState } from "react";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission (e.g., send data to a server)
    console.log("Form submitted", formData);
    alert("Thank you for your inquiry! We will get back to you soon.");
  };

  return (
    <section
      id="inquiry-form"
      className="py-20 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Have a Question? Inquire Now!
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Fill out the form below, and our team will get back to you with more
          details about our travel packages or customizations.
        </p>

        {/* Inquiry Form */}
        <form
          onSubmit={handleSubmit}
          className="w-3/5 mx-auto bg-white bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-80 p-8 rounded-lg shadow-lg backdrop-blur-md"
        >
          {/* Name Field */}
          <div className="mb-6 col-12">
            <label
              htmlFor="name"
              className="block text-left text-lg font-semibold text-gray-800 dark:text-white mb-2 italic"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent dark:bg-gray-600 dark:text-white dark:border-gray-500 italic"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-6 col-12">
            <label
              htmlFor="email"
              className="block text-left text-lg font-semibold text-gray-800 dark:text-white mb-2 italic"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent dark:bg-gray-600 dark:text-white dark:border-gray-500 italic"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-6 col-12">
            <label
              htmlFor="message"
              className="block text-left text-lg font-semibold text-gray-800 dark:text-white mb-2 italic"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent dark:bg-gray-600 dark:text-white dark:border-gray-500 italic"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InquiryForm;
