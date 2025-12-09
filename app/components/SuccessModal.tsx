"use client";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SuccessModal({ open, onClose }: SuccessModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 shadow-xl max-w-sm text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-3">
          Appointment Booked!
        </h2>
        <p className="text-gray-700 mb-6">
          Your appointment has been booked. Our team will contact you soon.
        </p>
        <button
          onClick={onClose}
          className="bg-green-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-green-700 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
}
