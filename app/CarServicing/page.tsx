"use client";

import React, { useState, ChangeEvent } from "react";
import { FaCarSide, FaMapMarkerAlt, FaCalendarAlt, FaUserAlt, FaTools } from "react-icons/fa";
import SuccessModal from "../components/SuccessModal";
import { useRouter } from "next/navigation";


interface FormData {
  name: string;
  phone: string;
  carModel: string;
  carNumber: string;
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
    carNumber: "",
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

  // ⭐ UPDATED SUBMIT FUNCTION (Frontend → Backend → Twilio)
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
        body: JSON.stringify(formData)
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

      {/* HEADER SECTION */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 py-16 text-center text-white px-6 shadow-lg">
        <h1 className="text-4xl font-bold mb-3 tracking-wide">Car Service Booking</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Get premium car service at your doorstep with certified mechanics across Delhi NCR.
        </p>
      </section>

      {/* HIGHLIGHT BOXES */}
      <div className="max-w-6xl mx-auto mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">

        <div className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-4 hover:shadow-lg transition">
          <FaCarSide className="text-red-600 text-3xl" />
          <div>
            <h4 className="font-semibold">Free Pickup & Drop</h4>
            <p className="text-gray-500 text-sm">Anywhere in Delhi NCR</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-4 hover:shadow-lg transition">
          <FaTools className="text-blue-600 text-3xl" />
          <div>
            <h4 className="font-semibold">Certified Mechanics</h4>
            <p className="text-gray-500 text-sm">German Car Specialists</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-4 hover:shadow-lg transition">
          <FaMapMarkerAlt className="text-green-600 text-3xl" />
          <div>
            <h4 className="font-semibold">Service Areas</h4>
            <p className="text-gray-500 text-sm">Delhi, Noida, Gurugram, etc.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-4 hover:shadow-lg transition">
          <FaCalendarAlt className="text-yellow-600 text-3xl" />
          <div>
            <h4 className="font-semibold">Flexible Booking</h4>
            <p className="text-gray-500 text-sm">Choose any day/time</p>
          </div>
        </div>

      </div>

      {/* FORM CARD */}
      <div className="max-w-3xl mx-auto mt-14 bg-white rounded-2xl shadow-xl p-10 border border-gray-200 hover:shadow-2xl transition-all">
        <h2 className="text-3xl font-bold text-center mb-2">Book Your Service</h2>
        <p className="text-gray-600 text-center mb-8">We will confirm your booking via WhatsApp</p>

        <div className="grid gap-5">

          <input name="name" onChange={handleChange} placeholder="Your Name *" className="inputBox" />
          <input name="phone" onChange={handleChange} placeholder="Phone Number *" className="inputBox" />
          <input name="carModel" onChange={handleChange} placeholder="Car Model (e.g., Swift, Creta) *" className="inputBox" />
          <input name="carNumber" onChange={handleChange} placeholder="Car Number" className="inputBox" />

          <select name="serviceType" onChange={handleChange} className="inputBox bg-white">
            <option value="">Select Service Type *</option>
            <option>Full Service</option>
            <option>Engine Oil Change</option>
            <option>Brake Service</option>
            <option>AC Repair</option>
            <option>Denting & Painting</option>
            <option>General Checkup</option>
          </select>

          <select name="serviceArea" onChange={handleChange} className="inputBox bg-white">
            <option value="">Select Service Area *</option>
            <option>Delhi</option>
            <option>Noida</option>
            <option>Greater Noida</option>
            <option>Ghaziabad</option>
            <option>Gurugram</option>
            <option>Faridabad</option>
          </select>

          <textarea
            name="address"
            className="inputBox h-24"
            placeholder="Full Address (Street, Landmark, House No.) *"
            onChange={handleChange}
          ></textarea>

          <input type="date" name="date" className="inputBox bg-white" onChange={handleChange} />

          <textarea
            name="notes"
            className="inputBox h-24"
            placeholder="Additional Notes"
            onChange={handleChange}
          ></textarea>

          <button
            onClick={sendToWhatsApp}
            disabled={loading}
            className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white py-4 rounded-xl font-bold text-lg shadow-md hover:opacity-90 transition"
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
          outline: none;
          transition: .3s;
        }
        .inputBox:focus {
          border-color: #ef4444;
          background: white;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, .15);
        }
      `}</style>
    </div>
  );
};

export default CarServicePage;
