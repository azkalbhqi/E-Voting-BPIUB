"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { auth } from "../../../lib/firebase"; // Pastikan ini mengarah ke konfigurasi Firebase
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login"); // Redirect ke halaman login setelah logout
  };

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
          {/* <li>
            <Link href="/daftar-lurah" className="text-gray-700 hover:text-blue-500">Daftar Lurah</Link>
          </li> */}
          <li>
            <Link href="/kampanye" className="text-gray-700 hover:text-blue-500">Kampanye</Link>
          </li>
        </ul>

        {/* Login / Logout Button (Desktop) */}
        <div className="hidden md:block">
          {user ? (
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
              Logout
            </button>
          ) : (
            <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
              Login
            </Link>
          )}
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
            <Link href="/daftar-lurah" className="text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Daftar Lurah</Link>
          </li>
          <li>
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition block text-center"
              >
                Logout
              </button>
            ) : (
              <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition block text-center" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
