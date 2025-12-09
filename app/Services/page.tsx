import React from "react";

export default function ServicesPage() {
  const services = [
    "Full Car Service",
    "Engine Diagnostics",
    "German Car Specialist Repair",
    "Battery Replacement",
    "AC Repair & Coolant Top-up",
    "Tyre & Wheel Care",
    "Car Spa & Cleaning",
    "Denting & Painting",
    "Emergency Breakdown Assistance",
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Our Top Services</h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        We offer a wide range of automotive services for all car brands, including premium German vehicles. 
        Our certified mechanics ensure quality service at your doorstep.
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service}
            className="bg-white shadow-md rounded-lg p-6 border hover:shadow-xl transition text-center"
          >
            <h3 className="text-xl font-semibold">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
