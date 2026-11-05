export interface Testimonial {
  quote: string;
  name: string;
  role: string; // mis. "HR Manager, [nama perusahaan]"
}

/** Hanya isi testimoni nyata yang sudah mendapat izin. Kosong = section disembunyikan. */
export const testimonials: Testimonial[] = [];
