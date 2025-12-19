"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Wallet, QrCode } from "lucide-react";

export default function DonasiPage() {
  const norek = "7177135075";
  
  const salinNorek = () => {
    navigator.clipboard.writeText(norek);
    alert("Nomor rekening BSI berhasil disalin!");
  };

  return (
    <main className="min-h-screen pt-24 pb-20 bg-background text-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Infaq & Sedekah</h2>
        <p className="text-muted-foreground mb-12">Salurkan amal jariyah Anda melalui rekening resmi Masjid Jami' Al-Ikhlas.</p>

        <div className="grid gap-8 md:grid-cols-2 items-start text-left">
          {/* Kartu Bank BSI */}
          <Card className="border-none shadow-xl bg-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
                  <Wallet size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Bank Syariah Indonesia</h3>
                  <p className="text-xs text-muted-foreground">Transfer Bank</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-50 p-5 rounded-2xl flex items-center justify-between border border-slate-100">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Nomor Rekening</p>
                    <p className="font-mono text-xl font-bold tracking-tighter">71-7713-5075</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={salinNorek} className="hover:bg-primary/10 hover:text-primary">
                    <Copy size={20} />
                  </Button>
                </div>
                <div className="px-1">
                  <p className="text-sm text-muted-foreground">Atas Nama:</p>
                  <p className="font-bold text-black uppercase">Masjid Jami Al-Ikhlas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Kartu QRIS */}
          <Card className="border-none shadow-xl bg-white overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="flex items-center gap-4 mb-6 text-left">
                <div className="p-3 bg-primary/5 text-primary rounded-xl">
                  <QrCode size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Scan QRIS</h3>
                  <p className="text-xs text-muted-foreground">E-Wallet & Mobile Banking</p>
                </div>
              </div>
              
              {/* Tempat Gambar QRIS */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-dashed border-slate-200 aspect-square relative flex flex-col items-center justify-center">
                {/* GANTI /qris.jpg dengan nama file QRIS Anda di folder public */}
                <Image 
                  src="/qris-infaq.jpeg" 
                  alt="QRIS Masjid Jami Al-Ikhlas"
                  fill
                  className="object-contain p-2"
                />
                {/* Teks di bawah ini akan tertutup jika gambar sudah muncul */}
                <p className="text-xs text-muted-foreground px-4">atas nama Masjid Jami' Al-Ikhlas muncul saat scan</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="mt-12 text-sm text-muted-foreground italic">
          "Barangsiapa yang membangun masjid karena Allah, maka Allah akan membangunkan baginya rumah di surga." (HR. Bukhari & Muslim)
        </p>
      </div>
    </main>
  );
}