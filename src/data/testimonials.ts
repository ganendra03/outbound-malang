export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  tag?: string;
  avatar?: string;
}

/** Testimoni klien dan panitia kegiatan outbound, team building, serta gathering. */
export const testimonials: Testimonial[] = [
  {
    quote: 'Susunan acara team building sangat rapi dari awal konsultasi sampai pelaksanaan di lapangan. Fasilitator mampu membawa suasana tetap seru sekaligus menyampaikan pesan kerja sama tim yang mengena bagi seluruh staf kami.',
    name: 'Rendra Pratama',
    role: 'HR & People Development — Perusahaan Manufaktur Surabaya',
    tag: 'Outbound Team Building',
    avatar: '/images/testimoni/rendra-pratama.webp',
  },
  {
    quote: 'Acara family gathering kantor berjalan lancar meskipun diikuti peserta lintas usia, mulai dari anak-anak hingga keluarga karyawan. Area venue di Batu sangat nyaman, bersih, dan rincian fasilitas sesuai dengan yang disepakati.',
    name: 'Nadia Kusumawardhani',
    role: 'Ketua Panitia Gathering — Instansi Perbankan Malang Raya',
    tag: 'Corporate Family Gathering',
    avatar: '/images/testimoni/nadia-kusumawardhani.webp',
  },
  {
    quote: 'Komunikasi tim sangat responsif saat kami meminta penyesuaian rundown fun outbound dan arung jeram. Perlengkapan keamanan lengkap, pemandu ramah, dan dokumentasi fotonya sangat membantu laporan kegiatan kami.',
    name: 'Dimas Wahyudi',
    role: 'Koordinator Acara — Komunitas & Lembaga Pendidikan Jawa Timur',
    tag: 'Fun Outbound & Rafting',
    avatar: '/images/testimoni/dimas-wahyudi.webp',
  },
];
