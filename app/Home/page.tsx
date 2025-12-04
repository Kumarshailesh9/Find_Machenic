import Image from "next/image";
import Gallery from "../components/Gallary"
export default function HomePage() {
  return (
    <div className="pt-10 bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="w-full h-screen backgroundImage text-white  flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
          Find the Best Mechanic in Delhi NCR
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-shadow">
          Premium car repair, doorstep service & emergency support. Specialists in German vehicles.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold">
          Book a Mechanic
        </button>
      </section>
      <Gallery/>

      {/* German Vehicle Specialist Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Specialists in German Vehicles</h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10">
          Get dealership-level service for your German car from certified and experienced automotive experts.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {['BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Porsche', 'Skoda'].map((brand) => (
            <div
              key={brand}
              className="bg-white shadow rounded-lg py-4 text-lg font-semibold border hover:shadow-lg transition"
            >
                <Image
                src={`/carLogo/${brand}.png`}
                alt= {brand}
                width={80}
                height={80}
                className="mx-auto mb-2"
                />
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose FindMachenic?</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">Certified Mechanics</h3>
            <p className="text-gray-600">Professionally trained and verified automotive experts.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">Doorstep Service</h3>
            <p className="text-gray-600">Service at your home, office, or roadside – anywhere.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">24×7 Emergency Support</h3>
            <p className="text-gray-600">Instant SOS help across Delhi NCR.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
            <p className="text-gray-600">Clear estimates with no hidden charges.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Top Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            'Full Car Service',
            'Engine Diagnostics',
            'German Car Specialist Repair',
            'Battery Replacement',
            'AC Repair & Coolant Top-up',
            'Tyre & Wheel Care',
            'Car Spa & Cleaning',
            'Denting & Painting',
            'Emergency Breakdown Assistance',
          ].map((service) => (
            <div
              key={service}
              className="bg-white shadow-md rounded-lg p-6 border hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      

      {/* Service Locations */}
      <section className="bg-gray-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Service Areas in Delhi NCR</h2>
        <p className="max-w-3xl mx-auto text-gray-300">
          Delhi, Noida, Greater Noida, Ghaziabad, Gurugram, Faridabad, and nearby regions.
        </p>
      </section>
    </div>
  );
}