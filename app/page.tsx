"use client";

import Link from "next/link";
import NextImage from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Palette, ArrowRight, Star } from "lucide-react";
import JadwalSholat from "@/components/jadwal-sholat";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      
      {/* Hero Section dengan Background Masjid Redup */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <NextImage 
            src="/hero-masjid.jpg" 
            alt="Masjid Jami Al-Ikhlas"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" /> 
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 mt-10">
          <Badge className="mb-6 px-4 py-1.5 border-white/20 bg-white/5 text-white/90 backdrop-blur-sm rounded-full shadow-sm">
            <Star className="w-3 h-3 mr-2 fill-yellow-400 text-yellow-400" /> ✨ Semangat Berdakwah & Berbagi
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-white drop-shadow-2xl">
            Remaja Masjid <br />
            <span className="text-primary italic">Al-Ikhlas</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
            Maju, Solid, Kreatif — Wadah pembinaan generasi muda muslim yang beriman, berilmu, dan berakhlak mulia di era digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 shadow-2xl hover:scale-105 transition-all gap-2 cursor-pointer bg-primary text-white border-none">
              <Link href="/kegiatan">
                Lihat Kegiatan <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all text-white border-white/20 cursor-pointer">
              <Link href="/tentang">Tentang Kami</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* JADWAL SHOLAT */}
      <JadwalSholat />

      {/* Kegiatan Terbaru - Bersih Tanpa Tulisan TypeScript */}
      <section className="py-20 px-6 bg-slate-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5 px-4 py-1">
              Program Unggulan
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-black tracking-tight">
              Kegiatan Terbaru
            </h3>
            <div className="h-1.5 w-16 bg-primary rounded-full mb-6" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Kartu 1 */}
            <Card className="border-none shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group bg-white rounded-[2rem] overflow-hidden flex flex-col">
              <CardContent className="p-10 flex flex-col items-center text-center md:items-start md:text-left flex-grow">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Kajian Remaja</h4>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Kajian rutin interaktif untuk memperkuat iman dan pemahaman keislaman yang relevan bagi pemuda.
                </p>
                <Button asChild variant="ghost" className="mt-auto p-0 hover:bg-transparent text-primary font-bold gap-2 group/btn cursor-pointer">
                  <Link href="/kegiatan">
                    Selengkapnya <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Kartu 2 */}
            <Card className="border-none shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group bg-white rounded-[2rem] overflow-hidden flex flex-col">
              <CardContent className="p-10 flex flex-col items-center text-center md:items-start md:text-left flex-grow">
                <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Bakti Sosial</h4>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Membangun kepedulian masyarakat melalui aksi nyata yang bermanfaat bagi warga sekitar masjid.
                </p>
                <Button asChild variant="ghost" className="mt-auto p-0 hover:bg-transparent text-primary font-bold gap-2 group/btn cursor-pointer">
                  <Link href="/galeri">
                    Selengkapnya <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Kartu 3 */}
            <Card className="border-none shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group bg-white rounded-[2rem] overflow-hidden flex flex-col">
              <CardContent className="p-10 flex flex-col items-center text-center md:items-start md:text-left flex-grow">
                <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  <Palette className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-black group-hover:text-primary transition-colors">Pelatihan Kreatif</h4>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Workshop desain grafis, multimedia, dan softskill lainnya untuk bekal masa depan remaja.
                </p>
                <Button asChild variant="ghost" className="mt-auto p-0 hover:bg-transparent text-primary font-bold gap-2 group/btn cursor-pointer">
                  <Link href="/kegiatan">
                    Selengkapnya <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Infaq */}
      {/* Section Infaq dengan Background Gambar Baru */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[2.5rem] shadow-lg group min-h-[220px] flex items-center">
          <div className="absolute inset-0 z-0">
            <NextImage 
              src="/qris-infaq.png" // GANTI: Pastikan nama file sesuai dengan yang di folder public
              alt="QRIS Infaq RISMA Al-Ikhlas"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay agar teks tetap terbaca */}
            <div className="absolute inset-0 bg-black/70" /> 
          </div>

          <div className="relative z-10 p-8 md:p-12 w-full flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Layanan Infaq</h2>
              <p className="text-gray-300 max-w-sm">Scan QRIS atau klik tombol untuk salurkan amal jariyah terbaik Anda.</p>
            </div>
            <Button asChild className="bg-white hover:bg-gray-100 text-black px-10 py-6 rounded-2xl font-bold shadow-xl transition-all active:scale-95">
              <Link href="/donasi">Lihat QRIS Detail</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Ajakan (CTA) */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-black">Ingin Bergabung Menjadi Anggota?</h3>
            <p className="mb-10 text-lg text-black/80 max-w-xl mx-auto">
              Jadilah bagian dari perubahan positif. Mari berkontribusi dan bertumbuh bersama dalam kebaikan.
            </p>
            <Button asChild variant="secondary" size="lg" className="rounded-full font-bold px-12 py-7 hover:scale-105 transition-transform shadow-lg text-black bg-white border-none">
              <Link href="/kontak">Hubungi Kami Sekarang</Link>
            </Button>
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t bg-white">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h4 className="text-xl font-bold mb-4 text-black tracking-widest">RISMA AL-IKHLAS</h4>
          <p className="text-muted-foreground text-sm mb-8 text-center max-w-md">
            Maju, Solid, Kreatif — Membangun generasi rabbani yang unggul dalam iman dan ilmu.
          </p>
          <div className="text-xs text-muted-foreground/60 font-medium">
            © {new Date().getFullYear()} Remaja Masjid Al-Ikhlas. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}