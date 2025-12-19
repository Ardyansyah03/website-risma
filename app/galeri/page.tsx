"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

// DATA FOTO GALERI
// Tambahkan semua foto kegiatan di sini
const galeriFoto = [
  { src: "/kegiatan/ngaji.jpg", caption: "Kajian Remaja Ahad" },
  { src: "/kegiatan/ngaji1.jpg", caption: "Ngopi Santuy Ramadhan" },
  { src: "/kegiatan/ngopsan.jpg", caption: "Diskusi Keislaman" },
  { src: "/kegiatan/ngopsan1.jpg", caption: "Silaturahmi Pemuda" },
  { src: "/kegiatan/baksos.jpeg", caption: "Saling Bantu" },


  // Kamu bisa terus menambah foto ke bawah sesuai keinginan
];

export default function GaleriPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Judul Galeri */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-black mb-4">Galeri Kegiatan RISMA</h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground">Kumpulan momen kebersamaan dan kegiatan positif remaja Masjid Al-Ikhlas.</p>
        </div>

        {/* Grid Foto Style Instagram */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galeriFoto.map((foto, index) => (
            <Card key={index} className="group relative overflow-hidden border-none shadow-md rounded-xl aspect-square">
              <CardContent className="p-0 h-full w-full">
                <Image
                  src={foto.src}
                  alt={foto.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay saat di-hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-sm font-medium text-center leading-snug">
                    {foto.caption}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </main>
  );
}