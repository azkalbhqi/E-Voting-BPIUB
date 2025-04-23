import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-6 bg-gradient-to-b from-blue-100 to-white text-center">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-2">🎉 Selamat! 🎉</h1>
      <p className="text-xl text-gray-700 mb-8">Bapak Harmoko terpilih sebagai Lurah BPI 4.0</p>

      <div className="relative w-60 h-60 mb-6">
        <Image
          src="/assets/1.png"
          alt="Harmoko"
          fill
          className="object-cover rounded-full shadow-2xl border-4 border-white"
        />
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Harmoko</h2>
      <p className="text-lg text-gray-600 mb-6">Fakultas Peternakan</p>

      <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full mb-6">
        <p className="text-gray-600 mb-3">
          Terima kasih kepada semua yang telah mendukung dan memberikan suara. Kemenangan ini adalah kemenangan kita bersama.
        </p>
        <Link
          href="/kampanye/paslon1"
          className="inline-block text-blue-600 font-semibold hover:underline"
        >
          Lihat Profil dan Visi Misi →
        </Link>
      </div>

      <Link
        href="/"
        className="text-blue-700 font-medium hover:underline transition-colors"
      >
        ← Kembali ke Beranda
      </Link>
    </div>
  );
};

export default Page;
