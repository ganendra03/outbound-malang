/**
 * Konfigurasi bisnis terpusat. Ganti semua nilai placeholder sebelum produksi.
 * Kosongkan (string kosong) field yang belum dikonfirmasi: UI akan menyembunyikannya.
 */
export const site = {
  name: 'Outbound Malang', // ← nama resmi brand
  tagline: 'Outbound, team building, dan gathering di alam terbuka',
  description:
    'Penyedia kegiatan outbound, team building, dan gathering di alam terbuka. Pilih paket, kenali lokasi, lalu konsultasikan kebutuhan acara Anda.',
  serviceArea: 'Malang Raya, Jawa Timur',
  whatsapp: '6281234567890',
  email: 'info@outboundmalang.com',
  address: 'Kota Batu, Malang, Jawa Timur',
  hours: 'Senin – Minggu: 08.00 – 20.00 WIB',
  logo: '/images/logo/logo-mark.svg',
  ogImage: '/social-cover.webp',
  social: {
    instagram: 'https://instagram.com/outboundmalang',
    tiktok: 'https://tiktok.com/@outboundmalang',
    facebook: 'https://facebook.com/outboundmalang',
    youtube: 'https://youtube.com/@outboundmalang',
  },
} as const;

export const hasWhatsApp = Boolean(site.whatsapp);
