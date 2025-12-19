"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Clock } from "lucide-react";

export default function KontakPage() {
  // GANTI nomor ini dengan nomor WA pengurus (diawali 62)
  const whatsappNumber = "6285773288101"; 

  return (
    <main className="min-h-screen pt-24 pb-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-black mb-4">Hubungi Kami</h2>
          <p className="text-muted-foreground">Silakan hubungi kami atau kunjungi masjid kami untuk informasi lebih lanjut.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* Info Lokasi & Jam */}
            <Card className="border-none shadow-md bg-white">
              <CardContent className="p-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">Lokasi</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Jl. Pahlawan, Rempoa, Kec. Ciputat Tim.,<br />
                      Kota Tangerang Selatan, Banten 15412
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">Jam Operasional</h4>
                    <p className="text-sm text-muted-foreground">
                      Setiap Hari: 04.00 – 21.15 WIB
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tombol WhatsApp */}
            <Card className="border-none shadow-md bg-[#25D366] text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Butuh bantuan cepat?</h3>
                <Button 
                  asChild
                  className="w-full bg-white text-[#075E54] hover:bg-slate-100 font-bold py-7 text-lg shadow-lg border-none"
                >
                  <a href={`https://wa.me/${whatsappNumber}?text=Assalamu'alaikum Admin RISMA Al-Ikhlas...`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-6 w-6" /> Chat WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sisi Kanan: PETA ASLI (Google Maps Iframe) */}
          <Card className="border-none shadow-md overflow-hidden bg-white min-h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.98687791448!2d106.7591765!3d-6.281266099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33e9d037d04b62b7%3A0x82b99bacd09485e8!2sMasjid%20Jami&#39;%20Al-Ikhlas!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Masjid Jami' Al-Ikhlas"
            ></iframe>
          </Card>
        </div>
      </div>
    </main>
  );
}