"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icon untuk buka/tutup menu
import Image from "next/image"; // Import ini untuk menampilkan gambar
import Link from "next/link"; // Import ini agar logo bisa diklik ke Beranda

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Beranda", href: "/" },
    { name: "Kegiatan", href: "/kegiatan" },
    { name: "Galeri", href: "/galeri" },
    { name: "Tentang", href: "/tentang" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo dan Nama Masjid */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <Image 
              src="/logo-risma.png" // GANTI: Pastikan file ini ada di folder public/
              alt="Logo RISMA Al-Ikhlas"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-xl font-bold text-primary group-hover:text-green-600 transition-colors">
            RISMA Al-Ikhlas
          </h1>
        </Link>

        {/* Menu Desktop (Muncul di layar besar) */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-green-600 transition-colors">
              {item.name}
            </a>
          ))}
        </div>

        {/* Tombol Mobile (Muncul di HP) */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 shadow-lg">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-sm font-medium hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}