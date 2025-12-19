"use client";

import React, { useEffect, useState } from "react";

// Pastikan menggunakan 'export default' agar bisa dipanggil di page.tsx
export default function JadwalSholat() {
  const [jadwal, setJadwal] = useState<any>(null);

  useEffect(() => {
    // Mengambil data jadwal sholat otomatis
    fetch("https://api.aladhan.com/v1/timingsByCity?city=Jakarta&country=Indonesia&method=11")
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setJadwal(data.data.timings);
        }
      })
      .catch((err) => console.error("Gagal mengambil jadwal:", err));
  }, []);

  if (!jadwal) {
    return <div className="text-center py-10 text-black font-bold">Memuat Jadwal Sholat...</div>;
  }

  const daftarWaktu = [
    { nama: "Subuh", jam: jadwal.Fajr },
    { nama: "Dzuhur", jam: jadwal.Dhuhr },
    { nama: "Ashar", jam: jadwal.Asr },
    { nama: "Maghrib", jam: jadwal.Maghrib },
    { nama: "Isya", jam: jadwal.Isha },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="bg-green-50 border border-green-100 rounded-[2rem] p-8 shadow-sm">
        <h3 className="text-xl font-bold text-black mb-6 text-center md:text-left">
          🕒 Jadwal Sholat Hari Ini (Jakarta)
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {daftarWaktu.map((item) => (
            <div key={item.nama} className="bg-white p-4 rounded-2xl text-center shadow-sm border border-green-50">
              <p className="text-xs font-bold text-green-700 uppercase mb-1">{item.nama}</p>
              <p className="text-2xl font-black text-black">{item.jam}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}