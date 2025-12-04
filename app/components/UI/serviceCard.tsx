type ServiceCardProps = {
  logo: string;
  name: string;
};

export default function ServiceCard({ logo, name }:ServiceCardProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">
      <img src={logo} alt={name} className="w-12 h-12 object-contain" />
      <h2 className="text-lg font-semibold">{name}</h2>
    </div>
  );
}
