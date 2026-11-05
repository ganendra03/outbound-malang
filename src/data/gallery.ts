export interface GalleryItem {
  src: string; // path di /public, mis. "/images/galeri/team-building-area-hijau.webp"
  alt: string;
  caption: string; // aktivitas, lokasi, periode
  category: string; // mis. "Team Building"
  width: number;
  height: number;
}

/**
 * Isi dengan foto kegiatan asli yang sudah berizin publikasi.
 * Selama kosong, halaman galeri menampilkan pesan "belum tersedia" (tanpa placeholder palsu).
 */
export const gallery: GalleryItem[] = [
  {
    src: '/images/galeri/ice-breaking.webp',
    alt: 'Sesi ice breaking meriah bersama master game di Batu Malang',
    caption: 'Ice breaking dan pemanasan ceria bersama tim peserta di Kota Batu',
    category: 'Fun Outbound',
    width: 840,
    height: 630,
  },
  {
    src: '/images/galeri/flying-fox.webp',
    alt: 'Aktivitas flying fox dan high rope adventure di hutan pinus',
    caption: 'Uji nyali dan ketangkasan flying fox dengan perlengkapan keamanan bersertifikat',
    category: 'Adventure',
    width: 840,
    height: 630,
  },
  {
    src: '/images/galeri/venue-outbound.webp',
    alt: 'Pemandangan lanskap venue outbound alam terbuka di Batu Malang',
    caption: 'Fasilitas area terbuka hijau yang bersih, tertata, dan nyaman untuk acara instansi',
    category: 'Lokasi',
    width: 840,
    height: 630,
  },
  {
    src: '/images/galeri/team-gathering.webp',
    alt: 'Kegiatan team building dan gathering bersama di padang rumput hijau',
    caption: 'Keseruan games kelompok untuk melatih kekompakan dan sinergi tim',
    category: 'Team Building',
    width: 840,
    height: 630,
  },
  {
    src: '/images/galeri/rafting-kaliwatu.webp',
    alt: 'Petualangan arung jeram rafting seru di aliran sungai Kaliwatu Batu Malang',
    caption: 'Arung jeram seru menyusuri jeram sungai bersama tim dengan standar keamanan lengkap',
    category: 'Adventure',
    width: 840,
    height: 630,
  },
  {
    src: '/images/galeri/paintball-adventure.webp',
    alt: 'Simulasi game paintball perang strategi di hutan pinus Batu Malang',
    caption: 'Permainan strategi paintball taktis untuk melatih kekompakan dan kerja sama tim',
    category: 'Team Building',
    width: 840,
    height: 630,
  },
];
