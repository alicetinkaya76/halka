// src/lib/curriculum.ts
//
// Halka müfredatı — 4 dönem, 21 kitap.
// Bu dosya planlanan/sırada kitapların yer tutucusudur.
// Bir kitabın src/content/books/{slug}.md dosyası eklenince
// otomatik olarak buraya bağlanır.

export type CurriculumBookEntry = {
  slug: string;            // src/content/books içindeki slug
  title: string;
  author: string;
  status: 'planlanan' | 'sirada' | 'okunuyor' | 'okundu';
  sira_no: number;         // Halka müfredatındaki sıra
};

export type CurriculumDonem = {
  donem: string;           // "1. Dönem - Bilim Tarihinin Çerçevesi"
  short: string;           // "Çerçeve"
  description: string;
  books: CurriculumBookEntry[];
};

export const curriculum: CurriculumDonem[] = [
  {
    donem: '1. Dönem - Bilim Tarihinin Çerçevesi',
    short: 'Çerçeve',
    description:
      'Bilim tarihinin genel çerçevesi: hangi soruyu sorduğumuz, kimin perspektifinden, hangi periyodlama içinde.',
    books: [
      { slug: 'fara-bilim-dort-bin-yillik', title: 'Bilim: Dört Bin Yıllık Bir Tarih', author: 'Patricia Fara', status: 'okundu', sira_no: 1 },
      { slug: 'goody-batidaki-dogu', title: 'Batıdaki Doğu', author: 'Jack Goody', status: 'okundu', sira_no: 2 },
      { slug: 'goody-ronesanslar', title: 'Rönesanslar', author: 'Jack Goody', status: 'okundu', sira_no: 3 },
      { slug: 'hobson-bati-medeniyetinin-dogulu-kokenleri', title: 'Batı Medeniyetinin Doğulu Kökenleri', author: 'John M. Hobson', status: 'okundu', sira_no: 4 },
    ],
  },
  {
    donem: '2. Dönem - Doğu Bilim Geleneği ve İslam Bilimi',
    short: 'Doğu & İslam',
    description:
      'Klasik İslam bilim geleneği — Bağdat, Orta Asya, çevre coğrafyalar. Tercüme hareketi, hezarfenlik, kurumsal mimari.',
    books: [
      { slug: 'freely-isik-dogudan-yukselir', title: 'Işık Doğudan Yükselir', author: 'John Freely', status: 'okundu', sira_no: 5 },
      { slug: 'starr-kayip-aydinlanma', title: 'Kayıp Aydınlanma', author: 'S. Frederick Starr', status: 'okunuyor', sira_no: 6 },
      { slug: 'pedersen-islam-dunyasinda-kitabin-tarihi', title: 'İslam Dünyasında Kitabın Tarihi', author: 'Johannes Pedersen', status: 'sirada', sira_no: 7 },
      { slug: 'sezgin-islamda-bilim-ve-teknik', title: 'İslam\'da Bilim ve Teknik', author: 'Fuat Sezgin', status: 'sirada', sira_no: 8 },
      { slug: 'lyons-hikmet-evi', title: 'Hikmet Evi', author: 'Jonathan Lyons', status: 'sirada', sira_no: 9 },
      { slug: 'gutas-yunan-dusuncesi-arap-kulturu', title: 'Yunan Düşüncesi, Arap Kültürü', author: 'Dimitri Gutas', status: 'sirada', sira_no: 10 },
      { slug: 'berkey-ortacag-kahirede-bilgi-intikali', title: 'Ortaçağ Kahire\'de Bilgi İntikali', author: 'Jonathan Berkey', status: 'sirada', sira_no: 11 },
    ],
  },
  {
    donem: '3. Dönem - Batı Bilim Devrimi',
    short: 'Bilim Devrimi',
    description:
      'Avrupa\'nın bilim devrimi: Kopernik\'ten Newton\'a kuramsal dönüşüm; içselci ve dışsalcı yorumlar.',
    books: [
      { slug: 'koyre-bilim-tarihi-yazilari', title: 'Bilim Tarihi Yazıları', author: 'Alexandre Koyré', status: 'planlanan', sira_no: 12 },
      { slug: 'kuhn-bilimsel-devrimlerin-yapisi', title: 'Bilimsel Devrimlerin Yapısı', author: 'Thomas S. Kuhn', status: 'planlanan', sira_no: 13 },
      { slug: 'shapin-bilimsel-devrim', title: 'Bilimsel Devrim', author: 'Steven Shapin', status: 'planlanan', sira_no: 14 },
      { slug: 'westfall-modern-bilimin-olusumu', title: 'Modern Bilimin Oluşumu', author: 'Richard S. Westfall', status: 'planlanan', sira_no: 15 },
      { slug: 'cohen-yeni-fizigin-dogusu', title: 'Yeni Fiziğin Doğuşu', author: 'I. Bernard Cohen', status: 'planlanan', sira_no: 16 },
    ],
  },
  {
    donem: '4. Dönem - Karşılaştırmalı Sentezler',
    short: 'Karşılaştırma',
    description:
      'Farklı bilim geleneklerinin karşılaştırılması, modern bilim tarihinin kuramsal soruları, gelecekteki açık tartışmalar.',
    books: [
      { slug: 'needham-cinde-bilim-ve-medeniyet-secmeler', title: 'Çin\'de Bilim ve Medeniyet (Seçmeler)', author: 'Joseph Needham', status: 'planlanan', sira_no: 17 },
      { slug: 'huff-erken-modern-bilimin-yukselisi', title: 'Erken Modern Bilimin Yükselişi', author: 'Toby Huff', status: 'planlanan', sira_no: 18 },
      { slug: 'principe-bilim-cok-kisa-bir-giris', title: 'Bilim: Çok Kısa Bir Giriş', author: 'Lawrence M. Principe', status: 'planlanan', sira_no: 19 },
      { slug: 'unat-osmanlilarda-bilim-ve-egitim', title: 'Osmanlılarda Bilim ve Eğitim', author: 'Yavuz Unat', status: 'planlanan', sira_no: 20 },
      { slug: 'ihsanoglu-osmanlilar-bilim-ve-teknoloji', title: 'Osmanlılar, Bilim ve Teknoloji', author: 'Ekmeleddin İhsanoğlu', status: 'planlanan', sira_no: 21 },
    ],
  },
];

export function findBookInCurriculum(slug: string): CurriculumBookEntry | undefined {
  for (const d of curriculum) {
    const found = d.books.find((b) => b.slug === slug);
    if (found) return found;
  }
  return undefined;
}

export function getDonemForBook(slug: string): CurriculumDonem | undefined {
  return curriculum.find((d) => d.books.some((b) => b.slug === slug));
}

export function getAllBookSlugs(): string[] {
  return curriculum.flatMap((d) => d.books.map((b) => b.slug));
}
