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
                    src="/assets/1.png"
                    alt="Paslon 1"
                    width={240}
                    height={240}
                    className="object-cover rounded-md"
                    />
                </div>
            </div>
          {/* Info Kandidat */}
          <div className="w-full md:w-2/3 space-y-4">
            <div>
              <h1 className="text-2xl font-bold"> Ir. Harmoko, S.Pt., M.P., IPP</h1>
              <p className="text-gray-600">Fakultas Pertanian</p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">Visi</h2>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <p>
                Menjadikan kelurahan BPI UB yang bertakwa, berkarakter, visioner dan tangguh dalam 
                menciptakan generasi pelopor perubahan. 
                </p>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-lg">Misi</h2>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Meningkatkan kualitas keimanan dan ketakwaan kepada Tuhan YME.</li>
                <li>Membangun pribadi berkarakter yang berintegritas dan bersaya saing</li>
                <li>Menumbuh kembangkan pola pikir visioner dan inovatif</li>
                <li>Menjadikan generasi mudah sebagai agen pelopor perubahan yang adaktif</li>
                <li>Mewujudkan masyarakat yang tanggun dan berdaya berbasis sumberdaya lokal.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bawah: Deskripsi Diri */}
        <div>
          <h2 className="font-bold text-lg border-b pb-1">Deskripsi Diri</h2>
          <p className="text-gray-700 mt-2 text-justify">
            Nama saya Ir. Harmoko, S.Pt., M.P., IPP umur 36 tahun, lahir di Kabupaten Donggal SULTENG 
            dari orang tua ayah Ding dan Ibu (Alm) Tumina, telah berkeluarga dengan istri tercinta Andi 
            Puspita Dewi, S.Pd umur 35 tahun dan memiliki dua putri yang masing-masing berusia 6 dan 3 
            tahun. Saat ini saya berdomisili di desa Kaiwatu, Kecamatan Moa, Kabupaten Maluku Barat Daya, 
            Provinsi Maluku dan mengabdikan diri sebagai seorang dosen Pegawai Negeri Sipil (PNS) di 
            Universitas Pattimura pada unit kerja Program Studi Peternakan, Program Studi Diluar Kampus 
            Utama (PSDKU) kampus Kabupaten Maluku Barat Daya sejak 1 Desember tahun 2020 hingga 
            saat ini. Pendidikan strata satu (2008-2014) dan strata dua (2014-2016) di Universitas Tadulako.  
            Saat ini sedang melanjutkan pendidik strata tiga doktoral ilmu ternak pada fakultas peternakan 
            Universitas Brawijaya. Sedangkan bidang keahlian yang ditekuni saat ini yaitu produksi ternak 
            ruminansia.  
          </p>
        </div>
      </div>
    </div>
  );
}
