
import ServiceCard from "./UI/serviceCard";

export default function Services() {
  const services = [
    { logo: "/icons/appointment.png", name: "Book Appointment" },
    { logo: "/icons/ac.png", name: "AC Service & Repair" },
    { logo: "/icons/battery.png", name: "Batteries" },
    { logo: "/icons/tyre.png", name: "Tyres & Wheel Care" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 mt-12">
      {services.map((s, index) => (
        <ServiceCard key={index} logo={s.logo} name={s.name} />
      ))}
    </div>
  );
}
