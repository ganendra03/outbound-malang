# Website Wisata Outbound (Astro)

Implementasi PRD + Design MD: Astro 5, TypeScript, Content Collections, static output.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil di dist/
SITE_URL=https://domain-anda.id npm run build   # untuk canonical, sitemap, robots
```

## Yang WAJIB diisi sebelum publish

1. `src/data/site.ts` — nama brand, area layanan, nomor WhatsApp (format `6281234567890`), email, alamat, sosial media. Field kosong otomatis disembunyikan. Selama WhatsApp kosong, tombol CTA berubah jadi link email / halaman kontak (tidak ada nomor dummy).
2. `astro.config.mjs` — ganti `SITE_URL` default dengan domain produksi.
3. `src/pages/tentang-kami.astro` — teks dalam tanda `[ ... ]` adalah placeholder profil usaha.
4. `src/content/**` — konten contoh (paket, wisata, blog). Ganti dengan data terverifikasi; set `published: false` untuk menyembunyikan.
5. Foto asli: letakkan di `public/images/...`, isi `cover` + `alt` di frontmatter. Hero: pass prop `image` di `src/pages/index.astro` (mis. `/images/hero/hero.webp`). Ganti `public/social-cover.jpg` (1200×630) dan logo di `public/images/logo/`.
6. `src/data/gallery.ts` dan `src/data/testimonials.ts` — kosong by design; section tersembunyi sampai ada data nyata dan berizin.

## Menambah konten

Tambah file `.md` di `src/content/paket|wisata|blog/`. Nama file = slug URL. Tidak perlu membuat komponen baru; route dibuat otomatis oleh `[slug].astro`. Skema field ada di `src/content.config.ts`.

## Catatan

- Tidak ada `llms.txt`, schema khusus AI, atau klaim ranking, sesuai PRD.
- JSON-LD: `Organization` + `WebSite` (beranda), `BlogPosting` (artikel), `BreadcrumbList` (halaman detail). Tambahkan `LocalBusiness` hanya bila alamat/jam sudah valid. Validasi dengan Rich Results Test setelah live.
- JavaScript hanya untuk drawer navbar, FAQ, filter, dan lightbox.
