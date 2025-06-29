"use client"; // required for client-side interactivity

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally handle the form data here
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Contact Me</h1>

        {submitted ? (
          <div className="text-center text-green-600 text-lg font-medium">
            ✅ Thanks for contacting!
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
