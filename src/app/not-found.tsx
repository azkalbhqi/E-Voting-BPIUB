import Image from "next/image"


export default function Custom404() {
    return (
        <>
         <div className="h-screen flex flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">Fitur Sedang Dikembangkan</h1>
            <Image src="/assets/404.png" height={500} width={500} alt="404 Image"></Image>
            <p className="text-lg text-gray-700">Fitur yang kamu klik sedang dalam pengembangan, coba lagi nanti yaa!</p>
         </div>
        </>
    )
    }