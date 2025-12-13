import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="pt-10 bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="w-full h-96 bg-gradient-to-r from-gray-900 to-gray-700 text-white flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-shadow">
          Have questions or want to book a service? Reach out to us and we’ll assist you promptly.
        </p>
      </section>

      {/* Contact Details Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mb-10">
            You can contact us via email, phone, or visit our office.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <FaEnvelope className="text-red-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-700 text-sm">ashishk45923@gmail.com</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <FaPhone className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-700 text-sm">+91 9818405088</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-gray-700 text-sm">Sector 15, Noida, Uttar Pradesh</p>
          </div>
        </div>

      </section>
    </div>
  );
}
