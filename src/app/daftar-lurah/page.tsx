'use client';

import Swal from 'sweetalert2'
// import Image from 'next/image';
import { useState } from 'react';
import { db } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useRouter } from "next/navigation"; // Import useRouter

export default function FormulirLurah() {
  // const [nama, setNama] = useState('');
  // const [nomorInduk, setNomorInduk] = useState('');
  // const [noWhatsapp, setNoWhatsapp] = useState('');
  // const [persetujuan, setPersetujuan] = useState(false);
  // const [error, setError] = useState('');
  // const router = useRouter(); // Initialize router
  
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   if (!persetujuan) {
  //     setError("Anda harus menyetujui semua pernyataan untuk mendaftar.");
  //     return;
  //   }
  
  //   setError("");
  
  //   try {
  //     await addDoc(collection(db, "pendaftaran_lurah"), {
  //       nama,
  //       nomorInduk,
  //       noWhatsapp,
  //       timestamp: new Date(),
  //     });
  
  //     Swal.fire({
  //       position: "center",
  //       icon: "success",
  //       title: "Data Berhasil Terkirim",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     }).then(() => {
  //       // Redirect user after success alert
  //       router.push("/dashboard"); // Change to your target page
  //     });
  
  //     setNama("");
  //     setNomorInduk("");
  //     setNoWhatsapp("");
  //     setPersetujuan(false);
  //   } catch (error) {
  //     console.error("Error menambahkan data: ", error);
  //     setError("Gagal mengirim data. Coba lagi.");
  //   }
  // };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className='flex-col text-center gap-5'>
        <h1 className='font-bold text-4xl'>Pendaftaran telah ditutup</h1>
        <p className='font-semibold text-2xl'>Nantikan Kampanye dan Pemilihan Calon Lurah BPI UB 4.0</p>
      </div>
      {/* <div className="bg-white p-8 shadow-lg rounded-2xl w-fit text-center">
      <div className="flex justify-center mb-4">
          <Image src="/assets/logotype_bpi.png" alt="Logo" width={250} height={50} />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">Form Pendaftaran Lurah BPI 4.0</h2>
        <form className="mt-6 text-left" onSubmit={handleSubmit}>
          <label className="text-gray-700 text-sm font-semibold">Nama</label>
          <input
            type="text"
            className="w-full p-2 mt-1 border rounded-lg"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />

          <label className="text-gray-700 text-sm font-semibold mt-4">Nomor Induk BPI</label>
          <input
            type="text"
            className="w-full p-2 mt-1 border rounded-lg"
            value={nomorInduk}
            onChange={(e) => setNomorInduk(e.target.value)}
            required
          />

          <label className="text-gray-700 text-sm font-semibold mt-4">No WhatsApp</label>
          <input
            type="text"
            className="w-full p-2 mt-1 border rounded-lg"
            value={noWhatsapp}
            onChange={(e) => setNoWhatsapp(e.target.value)}
            required
          />

          <div className="mt-4 text-sm text-gray-700">
            <p>Dengan ini saya menyatakan:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Bersedia mencalonkan diri sebagai calon Lurah BPI UB 4.0</li>
              <li>Tidak menjadi anggota atau berafiliasi dengan partai politik</li>
              <li>Memiliki integritas, kapasitas, dan kompetensi kepemimpinan</li>
              <li>Mampu bekerjasama di tingkat Nasional dan Wilayah</li>
              <li>Tidak sedang menjalani hukuman atau sanksi akademik</li>
              <li>Siap menaati seluruh tata tertib pemilihan</li>
            </ul>
          </div>

          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={persetujuan}
              onChange={() => setPersetujuan(!persetujuan)}
            />
            <label className="text-gray-600 text-sm">
              Saya menyetujui semua pernyataan di atas
            </label>
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            className={`w-full py-2 mt-6 rounded-lg text-white ${
              persetujuan ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!persetujuan}
          >
            Daftar
          </button>
        </form>
      </div> */}
    </div>
  );
}
