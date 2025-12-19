"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";

// 1. PASTIKAN DATA MENGGUNAKAN 'galeri: []'
const kegiatanList = [
  {
    judul: "Pengajian Rutin Ahad",
    deskripsi: "Meningkatkan pemahaman agama dan akhlak mulia melalui Pengajian Rutin Ahad.",
    tanggal: "Setiap Malam Senin",
    tempat: "Masjid Al-Ikhlas Rempoa",
    galeri: [
      "/kegiatan/ngaji.jpg", 
      "/kegiatan/ngaji1.jpg",
    ],
  },
  {
    judul: "Ngopi Santuy",
    deskripsi: "Kegiatan yang mengisi selama bulan ramadhan.",
    tanggal: "12 November 2024",
    tempat: "Masjid Al-Ikhlas Rempoa",
    galeri: [
      "/kegiatan/ngopsan.jpg",
      "/kegiatan/ngopsan1.jpg",
    ],
  },
  {
    judul: "Bakti Sosial",
    deskripsi: "Saling membantu.",
    tanggal: "19 Desember 2025",
    tempat: "Masjid Al-Ikhlas Rempoa",
    galeri: [
      "/kegiatan/baksos.jpeg",
      "/kegiatan/baksos1.jpeg",
    ],
  },
];

export default function KegiatanPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">Kegiatan Kami</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {kegiatanList.map((kegiatan, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white">
              <CardContent className="p-0">
                
                {/* SLIDER FOTO */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-full">
                    {kegiatan.galeri.map((fotoUrl, idx) => (
                      <div key={idx} className="min-w-full h-full relative snap-center">
                        <Image
                          src={fotoUrl}
                          alt={`${kegiatan.judul} - ${idx + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Titik Indikator */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/20 px-2 py-1 rounded-full">
                    {kegiatan.galeri.map((_, idx) => (
                      <div key={idx} className="w-1.5 h-1.5 rounded-full bg-white opacity-60"></div>
                    ))}
                  </div>
                </div>

                {/* Detail Teks */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3">{kegiatan.judul}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{kegiatan.deskripsi}</p>
                  <div className="flex items-center text-sm text-black mb-2">
                    <CalendarDays size={16} className="mr-2 text-primary" />
                    {kegiatan.tanggal}
                  </div>
                  <div className="flex items-center text-sm text-black">
                    <MapPin size={16} className="mr-2 text-primary" />
                    {kegiatan.tempat}
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}