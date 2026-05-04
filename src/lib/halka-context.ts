// src/lib/halka-context.ts
//
// Halka v0.14 — Görsel-pedagojik katman için ortak hesaplayıcılar.
//
// ProgressBar, Timeline, WorldMap ve InfluenceGraph komponentlerinin
// curriculum.ts ve content collection'larından türetilen ortak görüntüleri
// burada toplanır. Buradaki fonksiyonlar saf (pure) ve server-side
// (build-time) çalışır — istemci JS bundle'ına eklenmez.

import { curriculum, type CurriculumBookEntry } from './curriculum';

// ---------------------------------------------------------------------------
// 1) Müfredat ilerleme metrikleri — ProgressBar için
// ---------------------------------------------------------------------------

export type HalkaProgress = {
  total: number;            // 21
  okundu: number;
  okunuyor: number;
  sirada: number;
  planlanan: number;
  percent: number;          // 0-100
  current: CurriculumBookEntry | null;  // status='okunuyor' olan tek kitap
  currentDonem: string | null;
};

export function getHalkaProgress(): HalkaProgress {
  const all = curriculum.flatMap((d) =>
    d.books.map((b) => ({ ...b, donem: d.donem })),
  );
  const counts = { okundu: 0, okunuyor: 0, sirada: 0, planlanan: 0 };
  for (const b of all) counts[b.status]++;

  const current = all.find((b) => b.status === 'okunuyor') ?? null;
  const currentDonem = current?.donem ?? null;

  return {
    total: all.length,
    ...counts,
    // İlerleme = okundu + 0.5*okunuyor (yarı-ilerleme nüansı)
    percent: Math.round(
      ((counts.okundu + 0.5 * counts.okunuyor) / all.length) * 100,
    ),
    current,
    currentDonem,
  };
}

// ---------------------------------------------------------------------------
// 2) Dönem renkleri — 21-halka zinciri ve diğer komponentler için
// ---------------------------------------------------------------------------
//
// Halka design-system: emerald (ana), carmine (vurgu), ink (nötr).
// 4 dönem için bu paletten türetilen tonlar:

export const DONEM_COLORS: Record<string, { fill: string; stroke: string; label: string }> = {
  "1. Dönem - Genel Bilim Tarihi ve Doğu'nun Bilime Katkıları": {
    fill: '#0e6b5e',          // halka-emerald (ana)
    stroke: '#0e6b5e',
    label: 'Çerçeve',
  },
  '2. Dönem - Doğu Bilim Geleneği ve İslam Bilimi': {
    fill: '#1d8e7a',          // halka-emerald-light
    stroke: '#1d8e7a',
    label: 'Doğu & İslam',
  },
  '3. Dönem - Kültürlerarası Bilgi Transferi ve Bilim Devrimi': {
    fill: '#9c2a3b',          // halka-carmine
    stroke: '#9c2a3b',
    label: 'Bilim Devrimi',
  },
  '4. Dönem - Modern Bilim ve Bilim Tarihçiliği': {
    fill: '#5b3a47',          // koyu vurgu (carmine + ink karışım)
    stroke: '#5b3a47',
    label: 'Bilim Tarihçiliği',
  },
  'Ek Kitaplar - Tamamlayıcı Okumalar': {
    fill: '#7a6a55',          // ink-warm (ek-kategori-nötr ton)
    stroke: '#7a6a55',
    label: 'Ek',
  },
};

// ---------------------------------------------------------------------------
// 3) Status'a göre 21-halka SVG görüntüsü
// ---------------------------------------------------------------------------

export type HalkaVisualStyle = {
  fillOpacity: number;     // 0=içi boş, 1=dolu
  strokeWidth: number;
  strokeDasharray: string;
  pulse: boolean;          // okunuyor için CSS animation
};

export function getStatusStyle(
  status: CurriculumBookEntry['status'],
): HalkaVisualStyle {
  switch (status) {
    case 'okundu':
      return { fillOpacity: 0.85, strokeWidth: 2, strokeDasharray: '', pulse: false };
    case 'okunuyor':
      return { fillOpacity: 0.4, strokeWidth: 2.5, strokeDasharray: '', pulse: true };
    case 'sirada':
      return { fillOpacity: 0.08, strokeWidth: 2, strokeDasharray: '', pulse: false };
    case 'planlanan':
      return { fillOpacity: 0, strokeWidth: 1.5, strokeDasharray: '3 3', pulse: false };
  }
}

// ---------------------------------------------------------------------------
// 4) Yıl ekseni yardımcıları — Timeline için
// ---------------------------------------------------------------------------
//
// Halka kitapları -3000 (Fara, Freely) ile 2026 arasını kapsar.
// Lineer eksen Antikçağı sıkıştırır → görsel olarak okunmaz.
// Çözüm: parçalı eksen — [-3000, 0] %25, [0, 1500] %35, [1500, 2026] %40.
// (Bu seçim Halka'nın "Doğu Bilim Geleneği" yoğunluğunu öne çıkarır.)

const Y_BREAKS = [
  { from: -3000, to: 0,    weight: 0.25 },
  { from: 0,     to: 1500, weight: 0.35 },
  { from: 1500, to:  2026, weight: 0.40 },
];

export function yearToX(year: number, totalWidth: number): number {
  let x = 0;
  for (const seg of Y_BREAKS) {
    const segWidth = seg.weight * totalWidth;
    if (year <= seg.from) {
      return x;
    }
    if (year <= seg.to) {
      const segPos = (year - seg.from) / (seg.to - seg.from);
      return x + segPos * segWidth;
    }
    x += segWidth;
  }
  return totalWidth;
}

// Timeline ekseni için tick-yılları (ekrana çizilen büyük işaretler)
export const TIMELINE_TICKS: number[] = [
  -3000, -2000, -1000, -500, 0, 500, 750, 1000, 1250, 1500, 1700, 1850, 1950, 2026,
];

// ---------------------------------------------------------------------------
// 5) yearOrCirca'yı saf integer'a çevirme — yardımcı parser
// ---------------------------------------------------------------------------
//
// ZOD person.birth_year/death_year yearOrCirca union (int|str).
// String formları: "c.980", "980?", "1100s". Timeline render'ı için
// tek bir integer'a düşürmemiz gerek.

export function parseYear(raw: number | string | undefined | null): number | null {
  if (raw === undefined || raw === null) return null;
  if (typeof raw === 'number') return raw;
  // "c.980", "c. 980", "980?", "1100s"
  const m = raw.match(/-?\d{1,4}/);
  return m ? parseInt(m[0], 10) : null;
}

// ---------------------------------------------------------------------------
// 6) Bir slug'ın "kaç kitapta geçtiği" — harita marker büyüklüğü için
// ---------------------------------------------------------------------------
//
// Bağdat 7-kitap (en büyük marker), Kâhire 1-kitap (küçük) gibi.
// Bu hesap server-side yapılır → istemciye sayı olarak gider.

export function countBookReferences(
  placeSlug: string,
  books: Array<{ data: { key_places?: Array<{ slug: string }> } }>,
): number {
  return books.filter((b) =>
    b.data.key_places?.some((p) => p.slug === placeSlug),
  ).length;
}

export function countPersonReferences(
  personSlug: string,
  books: Array<{ data: { key_people?: Array<{ slug: string }> } }>,
): number {
  return books.filter((b) =>
    b.data.key_people?.some((p) => p.slug === personSlug),
  ).length;
}

// Marker yarıçapı — 1-kitap → 8px, 7-kitap → 22px (logaritmik)
export function refCountToRadius(count: number): number {
  if (count <= 0) return 6;
  return Math.round(8 + Math.log2(count) * 5);
}
