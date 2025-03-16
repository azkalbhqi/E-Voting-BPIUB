"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      {/* Logo */}
      <div>
        <Image src="/assets/logotype_bpi.png" width={150} height={50} alt="Logo" />
      </div>

      {/* Navigation Menu */}
      <ul className="flex justify-center gap-8">
        <li>
          <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
        </li>
        <li>
          <Link href="/vote" className="text-gray-700 hover:text-blue-500">E-Voting</Link>
        </li>
        <li>
          <Link href="/statistics" className="text-gray-700 hover:text-blue-500">Statistics</Link>
        </li>
        <li>
          <Link href="/daftar-lurah" className="text-gray-700 hover:text-blue-500">Daftar Lurah</Link>
        </li>
      </ul>

      {/* Login Button */}
      <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
