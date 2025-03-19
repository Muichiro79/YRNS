import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-[#007BFF] mb-6">Contact Us</h1>

      <form className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Type your message..."
            className="w-full p-3 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#39FF14] text-black py-2 rounded-md hover:bg-[#32D112] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
