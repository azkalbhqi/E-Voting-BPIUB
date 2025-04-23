import Link from "next/link"

const Page = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Masa Vote Telah Selesai</h1>
                <p className="text-gray-600 mb-6">Terima kasih telah berpartisipasi. Anda dapat melihat hasil pemungutan suara di halaman statistik.</p>
                <Link 
                    href="/statistics" 
                    className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Lihat Hasil
                </Link>
            </div>
        </div>
    )
}

export default Page
