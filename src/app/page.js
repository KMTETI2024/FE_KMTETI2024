/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Hero_Beranda from "@/components/beranda/Hero_Beranda";
import Intro_Beranda from "@/components/beranda/Intro_Beranda";
import Update_Beranda from "@/components/beranda/Update_Beranda";
import Image from "next/image";


export default function Beranda() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero_Beranda />
      <Intro_Beranda />
      <Update_Beranda />
    </main>
  );
}
