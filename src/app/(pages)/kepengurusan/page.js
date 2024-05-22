import Hero_Pengurus from "@/components/kepengurusan/Hero_Pengurus/Hero_Pengurus"
import Isi_Pengurus from "@/components/kepengurusan/Isi_Pengurus/Isi_Pengurus"

/* eslint-disable @next/next/no-img-element */
export default function Kepengurusan() {
    return (
        <main className="relative flex flex-col items-center justify-center bg-white">
            <Hero_Pengurus />
            <Isi_Pengurus />
        </main>
    )
} 