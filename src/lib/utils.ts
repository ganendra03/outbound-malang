import { site } from '../data/site';

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
}

export function waLink(message: string): string | null {
  if (!site.whatsapp) return null;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function formatRupiah(n: number): string {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);
}

export function absolute(path: string, base: URL | string | undefined): string {
  return new URL(path, base).href;
}

export function sortByDateDesc<T extends { data: { publishedAt: Date } }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}
