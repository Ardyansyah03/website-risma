"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Instagram } from "lucide-react";
import Image from "next/image"; // Import komponen Image dari Next.js

const pengurus = [
  { 
    jabatan: "Ketua", 
    nama: "Rizky Fauzan", 
    foto: "/pengurus/ketua.jpg", // Jalur file di folder public
    warna: "bg-blue-100 text-blue-700" 
  },
  { 
    jabatan: "Wakil Ketua", 
    nama: "Darul Ramadan", 
    foto: "/pengurus/wakil.jpg", 
    warna: "bg-blue-100 text-blue-700" 
  },
  { 
    jabatan: "Sekretaris", 
    nama: "Anaya Zhema Syabina", 
    foto: "/pengurus/sekretaris.jpg", 
    warna: "bg-blue-100 text-blue-700" 
  },
  { 
    jabatan: "Bendahara", 
    nama: "Muhammad Sofyan", 
    foto: "/pengurus/bendahara.jpg", 
    warna: "bg-blue-100 text-blue-700" 
  },
  { 
    jabatan: "Kabid Informasi & Komunikasi", 
    nama: "Riza Alfiandi", 
    foto: "/pengurus/riza.jpg", 
    warna: "bg-blue-100 text-blue-700" 
  },
  { 
    jabatan: "Kabid Kesenian & Olahraga", 
    nama: "Yudistira", 
    foto: "/pengurus/yudis.jpg", 
    warna: "bg-blue-100 text-blue-700" 
  },
  { 
    jabatan: "Kabid Organisasi & Kaderisasi", 
    nama: "Kurnia Ramadhina", 
    foto: "/pengurus/dina.jpg", 
    warna: "bg-blue-100 text-blue-700" 
  },
  { 
    jabatan: "Kabid Sosial & Kemasyarakatan", 
    nama: "Guntur Rivaldi", 
    foto: "/pengurus/guntur.jpg", 
    warna: "bg-blue-100 text-blue-700" 
  },
  { 
    jabatan: "Kabid Kerohanian & Dakwah", 
    nama: "Ahmad Yazid Muzakki", 
    foto: "/pengurus/yazid.jpg", 
    warna: "bg-blue-100 text-blue-700" 
  },
  // ... ulangi sampai 9 pengurus, ganti nama file fotonya saja
];

export default function PengurusPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">Struktur Pengurus</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pengurus.map((p, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white">
              <CardContent className="p-0">
                {/* Bagian Foto */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image 
                    src={p.foto} 
                    alt={p.nama}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${p.warna} border-none font-bold py-1 px-3 rounded-full shadow-sm`}>
                      {p.jabatan}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-black mb-4">{p.nama}</h4>
                  <div className="flex justify-center gap-4 text-muted-foreground">
                    <Instagram size={20} className="hover:text-primary cursor-pointer" />
                    <Mail size={20} className="hover:text-primary cursor-pointer" />
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