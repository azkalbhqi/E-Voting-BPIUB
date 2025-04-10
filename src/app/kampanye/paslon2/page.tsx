import Image from "next/image";

export default function Paslon1Page() {
  return (
    <div className="min-h-screen p-4 md:p-10 flex justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-5xl flex flex-col gap-8">
        {/* Atas: Foto + Info */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Foto */}
            <div className="w-full md:w-1/3 flex justify-center">
                <div className="bg-gray-300 w-60 h-60 rounded-md flex items-center justify-center overflow-hidden">
                    <Image
                    src="/assets/2.png"
                    alt="Paslon 2"
                    width={240}
                    height={240}
                    className="object-cover rounded-md"
                    />
                </div>
            </div>
          {/* Info Kandidat */}
          <div className="w-full md:w-2/3 space-y-4">
            <div>
              <h1 className="text-2xl font-bold">Ir. Harry Kurniawan., S.T., M.T., IPM</h1>
              <p className="text-gray-600">Program Doktor Teknik Sipil</p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">Visi</h2>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <p>
                Menghadirkan Kelurahan BPI UB yang kooperatif dan komunikatif dalam mengembangkan potensi awardee dalam bingkai keberlanjutan.
                </p>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-lg">Misi</h2>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Membangun sistem komunikasi yang efektif dan terintegrasi untuk penyebaran informasi kepada seluruh awardee BPI UB.</li>
                <li>Memfasilitasi awardee untuk mendukung percepatan pendidikan baik dalam penelitian maupun publikasi.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bawah: Deskripsi Diri */}
        <div>
          <h2 className="font-bold text-lg border-b pb-1">Program Kerja</h2>
          <ol className="list-decimal list-inside text-gray-700">
            <li>Memanfaatkan fasilitas media sosial untuk menyalurkan informasi kegiatan yang telah dilaksanakan dan informasi terkini.</li>
            <li>Sosialisasi Beasiswa dan promosi terkait beasiswa yang diterima oleh awardee.</li>
            <li>Penyelenggaraan pelatihan dan seminar untuk membantu awardee dalam meningkatkan kemampuan awardee dalam berbagai bidang.</li>
            <li>Menyelenggarakan program mentoring untuk membantu awardee dalam mengatasi masalah dan meningkatkan kemampuan.</li>
            <li>Menyelenggarakan kegiatan sosial dan kemasyarakatan untuk mempraktikkan nilai sosial dan kemasyarakatan.</li>
            <li>Kerjasama dengan pihak terkait.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
