"use client";

import React, { useState, ChangeEvent } from "react";
import { FaCarSide, FaMapMarkerAlt, FaCalendarAlt, FaTools } from "react-icons/fa";
import SuccessModal from "../components/SuccessModal";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  phone: string;
  carModel: string;
  fuelType: string;         
  carNumber: string;
  addOnService: string;      
  serviceType: string;
  serviceArea: string;
  address: string;
  date: string;
  notes: string;
}

const CarServicePage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    carModel: "",
    fuelType: "",
    carNumber: "",
    addOnService: "",
    serviceType: "",
    serviceArea: "",
    address: "",
    date: "",
    notes: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = async () => {
    if (!formData.name || !formData.phone || !formData.carModel || !formData.serviceType) {
      alert("Please fill all required fields!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/send-whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setModalOpen(true);
        router.push("/");
      } else {
        alert("Failed to send! Check backend logs.");
      }
    } catch (err) {
      alert("Server error! Check API route.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-12 pb-16">

      {/* HEADER */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 py-16 text-center text-white px-6 shadow-lg">
        <h1 className="text-4xl font-bold mb-3">Car Service Booking</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Premium car service at your doorstep across Delhi NCR
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <div className="max-w-6xl mx-auto mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">

        <div className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-4">
          <FaCarSide className="text-red-600 text-3xl" />
          <div>
            <h4 className="font-semibold">Free Pickup & Drop</h4>
            <p className="text-gray-500 text-sm">Under 15 KM</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-4">
          <FaTools className="text-blue-600 text-3xl" />
          <div>
            <h4 className="font-semibold">Certified Mechanics</h4>
            <p className="text-gray-500 text-sm">All Car Brands</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-4">
          <FaMapMarkerAlt className="text-green-600 text-3xl" />
          <div>
            <h4 className="font-semibold">Service Areas</h4>
            <p className="text-gray-500 text-sm">Delhi NCR</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-4">
          <FaCalendarAlt className="text-yellow-600 text-3xl" />
          <div>
            <h4 className="font-semibold">Flexible Booking</h4>
            <p className="text-gray-500 text-sm">Any Day</p>
          </div>
        </div>

      </div>

      {/* FORM */}
      <div className="max-w-3xl mx-auto mt-14 bg-white rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Book Your Service</h2>

        <div className="grid gap-5">

          <input name="name" onChange={handleChange} placeholder="Your Name *" className="inputBox" />
          <input name="phone" onChange={handleChange} placeholder="Phone Number *" className="inputBox" />

          <input name="carModel" onChange={handleChange} placeholder="Vehicle Model *" className="inputBox" />

          {/* ✅ Fuel Type */}
          <select name="fuelType" onChange={handleChange} className="inputBox bg-white">
            <option value="">Select Fuel Type</option>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Hybrid</option>
            <option>EV</option>
            <option>CNG</option>
          </select>

          <input name="carNumber" onChange={handleChange} placeholder="Vehicle Number" className="inputBox" />

         

          <select name="serviceType" onChange={handleChange} className="inputBox bg-white">
            <option value="">Select Main Service *</option>
            <option>Full Service</option>
            <option>Engine Oil Change</option>
            <option>Brake Replace / Service</option>
            <option>Transmission Repairing</option>
            <option>AC Repair</option>
            <option>Denting & Painting</option>
            <option>General Checkup</option>
          </select>

          <select name="serviceArea" onChange={handleChange} className="inputBox bg-white">
            <option value="">Service Area *</option>
            <option>Delhi</option>
            <option>Noida</option>
            <option>Gurugram</option>
            <option>Ghaziabad</option>
            <option>Faridabad</option>
          </select>

          <textarea name="address" className="inputBox h-24" placeholder="Full Address *" onChange={handleChange} />

          <input type="date" name="date" className="inputBox bg-white" onChange={handleChange} />

          <textarea name="notes" className="inputBox h-24" placeholder="Additional Notes" onChange={handleChange} />

          <button
            onClick={sendToWhatsApp}
            disabled={loading}
            className="w-full bg-gray-800 text-white py-4 rounded-xl font-bold"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>

        <SuccessModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </div>

      <style>{`
        .inputBox {
          border: 1px solid #ddd;
          padding: 14px;
          border-radius: 12px;
          background: #f9fafb;
          width: 100%;
        }
        .inputBox:focus {
          border-color: #ef4444;
          background: white;
        }
      `}</style>
    </div>
  );
};

export default CarServicePage;
