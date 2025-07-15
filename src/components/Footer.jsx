export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Navigation Links */}
        <nav className="mb-4">
          <ul className="flex justify-center space-x-6 text-sm text-primary">
            <li>
              <a href="/" className="hover:text-light-primary transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-light-primary transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/report" className="hover:text-light-primary transition">
                Report
              </a>
            </li>
            <li>
              <a href="/career" className="hover:text-light-primary transition">
                Career
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-light-primary transition"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        {/* Copyright */}
        <p className="text-xs text-gray-500">
          Copyright © 2025 HRM K35.1. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
