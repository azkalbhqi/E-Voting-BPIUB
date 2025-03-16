'use client';

import Link from 'next/link';

export default function TataTertibPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          TATA TERTIB & JADWAL PEMILIHAN PENGURUS LURAH BPI UB 2025 - 2026
        </h1>
        <p className="text-gray-700 text-sm text-center mb-6">
          Berikut adalah ketentuan pemilihan Lurah BPI Universitas Brawijaya
        </p>

        <div className="space-y-6 text-gray-800 text-sm">
          <section>
            <h2 className="text-lg font-semibold">BAB I: Ketentuan Umum</h2>
            <p><strong>Pasal 1:</strong> Pemilihan dilakukan melalui pemungutan suara.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">BAB II: Kriteria Umum</h2>
            <ul className="list-disc pl-5">
              <li>Penerima Beasiswa Pendidikan Indonesia dari berbagai angkatan.</li>
              <li>Domisili di Republik Indonesia.</li>
              <li>Tidak berafiliasi dengan partai politik.</li>
              <li>Memiliki visi dan misi yang jelas.</li>
              <li>Mampu bekerja secara kolektif di tingkat nasional dan wilayah.</li>
              <li>Tidak sedang menjalani hukuman atau sanksi akademik.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">BAB VII: Jadwal Pelaksanaan</h2>
            <ul className="list-disc pl-5">
              <li>Pendaftaran: 19 - 29 Maret 2025</li>
              <li>Verifikasi Dokumen: 8 - 9 April 2025</li>
              <li>Penetapan Calon: 10 April 2025</li>
              <li>Kampanye: 11 - 17 April 2025</li>
              <li>Pemungutan Suara: 22 April 2025</li>
              <li>Penghitungan Suara: 24 April 2025</li>
              <li>Penetapan Calon Terpilih: 25 April 2025</li>
            </ul>
          </section>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/register" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">Daftar Lurah</Link>
        </div>
      </div>
    </div>
  );
}
