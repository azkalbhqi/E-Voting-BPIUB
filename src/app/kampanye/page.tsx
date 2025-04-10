import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-4">
      <h1 className="text-4xl font-semibold text-center">Calon Lurah BPI 4.0</h1>
      <p className="text-gray-600 mt-2 text-center">Klik untuk melihat kampanye</p>

      <div className="flex flex-col md:flex-row gap-6 py-10 flex-wrap justify-center">
        {/* PASLON 1 */}
        <Link href="/kampanye/paslon1" className="group">
          <div className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-2xl overflow-hidden w-64">
            <div className="relative w-full h-64">
              <Image src="/assets/1.png" alt="Paslon 1" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-center p-4">
                <h2 className="text-xl font-bold">Harmoko</h2>
                <p className="text-sm mt-1">Fakultas Peternakan</p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                Harmoko
              </h3>
              <p className="text-sm text-gray-500">Fakultas Peternakan</p>
            </div>
          </div>
        </Link>

        {/* PASLON 2 */}
        <Link href="/kampanye/paslon2" className="group">
          <div className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-2xl overflow-hidden w-64">
            <div className="relative w-full h-64">
              <Image src="/assets/2.png" alt="Paslon 2" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-center p-4">
                <h2 className="text-xl font-bold">Harry Kurniawan</h2>
                <p className="text-sm mt-1">Fakultas Teknik</p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                Harry Kurniawan
              </h3>
              <p className="text-sm text-gray-500">Fakultas Teknik</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
