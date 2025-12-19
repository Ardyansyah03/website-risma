"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function TentangPage() {
  // Data pengurus inti untuk ditampilkan di halaman tentang
  const pengurusInti = [
    { 
      jabatan: "Ketua Umum", 
      nama: "Rizky Fauzan", 
      foto: "/pengurus/ketua.jpg" 
    },
    { 
      jabatan: "Wakil Ketua", 
      nama: "Darul Ramadan", 
      foto: "/pengurus/wakil.jpg" 
    },
    { 
      jabatan: "Sekretaris", 
      nama: "Anaya Zhema Syabina", 
      foto: "/pengurus/sekretaris.jpg" 
    },
    { 
      jabatan: "Bendahara", 
      nama: "muhammad Sofyan", 
      foto: "/pengurus/bendahara.jpg" 
    },
    { 
      jabatan: "Kabid Informasi & Komunikasi", 
      nama: "Riza Alfiandi", 
      foto: "/pengurus/riza.jpg" 
    },
    { 
      jabatan: "Kabid Kesenian & Olahraga", 
      nama: "Yudistira", 
      foto: "/pengurus/yudis.jpg" 
    },
    { 
      jabatan: "Kabid Organisasi & Kaderisasi", 
      nama: "Kurnia Ramadhina", 
      foto: "/pengurus/dina.jpg" 
    },
    { 
      jabatan: "Kabid Sosial & Kemasyarakatan", 
      nama: "Guntur Rivaldi", 
      foto: "/pengurus/guntur.jpg" 
    },
    { 
      jabatan: "Kabid Kerohanian & Dakwah", 
      nama: "Ahmad Yazid Muzakki", 
      foto: "/pengurus/yazid.jpg"
    },
  ];

  return (
    <main className="min-h-screen bg-background pt-20">
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-black">Tentang RISMA Al-Ikhlas</h2>
        
        {/* Visi & Misi */}
        <div className="grid gap-8 md:grid-cols-2 mb-20">
          <Card className="bg-primary border-none shadow-lg rounded-[2rem] overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-black">Visi</h3>
              <p className="text-black/90 leading-relaxed">
                Menjadi wadah generasi muda muslim yang kreatif, mandiri, dan berakhlak mulia demi kemakmuran masjid.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-primary/20 shadow-none rounded-[2rem]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Misi</h3>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li className="text-black">Menyelenggarakan kajian rutin remaja.</li>
                <li className="text-black">Membangun solidaritas antar pemuda masjid.</li>
                <li className="text-black">Mengembangkan bakat kreatif dalam dakwah.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Struktur Pengurus dengan Foto */}
        <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm text-center">
          <h3 className="text-3xl font-bold mb-12 text-black">Struktur Pengurus</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pengurusInti.map((p, index) => (
              <div key={index} className="flex flex-col items-center group">
                {/* Frame Foto Melingkar */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden border-4 border-green-50 shadow-md group-hover:border-primary transition-colors duration-300">
                  <Image
                    src={p.foto}
                    alt={p.nama}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div>
                  <p className="text-primary font-bold text-sm uppercase tracking-wider mb-1">{p.jabatan}</p>
                  <p className="text-xl font-bold text-black">{p.nama}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}