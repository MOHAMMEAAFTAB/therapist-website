// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">Dr. Serena Blake</h1>
        <div className="space-x-4">
          <Link href="#about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link href="#services" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
