"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Image src="/assets/logotype_bpi.png" width={150} height={50} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
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

        {/* Login Button (Desktop) */}
        <div className="hidden md:block">
          <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4 bg-white shadow-lg rounded-lg p-4`}>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/" className="text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/vote" className="text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>E-Voting</Link>
          </li>
          <li>
            <Link href="/statistics" className="text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Statistics</Link>
          </li>
          <li>
            <Link href="/daftar-lurah" className="text-gray-700 hover:text-blue-500">Daftar Lurah</Link>
          </li>
          <li>
            <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition block text-center" onClick={() => setIsOpen(false)}>Login</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
