export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-10">
      <div className="max-w-screen-xl mx-auto px-6">

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4">FindMachenic</h2>
            <p className="text-gray-300 text-sm leading-6">
              Your trusted automotive partner for repair, services, used car resale,
              and emergency assistance anytime, anywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/home" className="hover:underline">Home</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/oldcar" className="hover:underline">Used Car</a></li>
              <li><a href="/Emergency" className="hover:underline">Emergency (SOS)</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>Email: ashish@gmail.com</li>
              <li>Phone: +91 9818405088</li>
              <li>Location: Noida, Uttar Pradesh</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} FindMachenic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
