import { FaMapMarkerAlt } from "react-icons/fa";

const serviceAreas = [
  "Delhi",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Gurugram",
  "Faridabad",
  "Nearby regions"
];

export default function AboutPage() {
  return (
    <div className="pt-10 bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="w-full h-96 bg-gradient-to-r from-gray-900 to-gray-700 text-white flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
          About Our Services
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-shadow">
          We provide premium car servicing across Delhi NCR with certified mechanics and doorstep support.
        </p>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center mb-8">
          <FaMapMarkerAlt className="text-green-600 text-5xl mb-4" />
          <h2 className="text-3xl font-bold mb-3">Service Areas in Delhi NCR</h2>
          <p className="text-gray-600 max-w-2xl mb-6">
            We cover the following cities and nearby regions:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center">
          {serviceAreas.map((area) => (
            <div
              key={area}
              className="bg-white shadow-md rounded-xl py-4 px-6 font-semibold text-gray-800 hover:shadow-lg transition"
            >
              {area}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
