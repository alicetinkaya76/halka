// src/lib/curriculum.ts
//
// Halka müfredatı — 4 dönem, 21 ana kitap + ek kategori (tamamlayıcı okumalar).
// Bu dosya planlanan/sırada kitapların yer tutucusudur.
// Bir kitabın src/content/books/{slug}.md dosyası eklenince
// otomatik olarak buraya bağlanır.

export type CurriculumBookEntry = {
  slug: string;            // src/content/books içindeki slug
  title: string;
  author: string;
  status: 'planlanan' | 'sirada' | 'okunuyor' | 'okundu';
  sira_no: number;         // 1-21 ana müfredat; 22+ ek-kitaplar
};

export type CurriculumDonem = {
  donem: string;
  short: string;
  description: string;
  donem_tipi?: 'ana' | 'ek'; // varsayılan 'ana'; ek-kategoride 'ek'
  books: CurriculumBookEntry[];
};

export const curriculum: CurriculumDonem[] = [
  {
    donem: '1. Dönem - Genel Bilim Tarihi ve Doğu\'nun Bilime Katkıları',
    short: 'Çerçeve',
    description:
      'Bilim tarihinin genel çerçevesi: hangi soruyu sorduğumuz, kimin perspektifinden, hangi periyodlama içinde. Avrupa-merkezci tarih yazımına alternatif okumalar.',
    books: [
      { slug: 'fara-bilim-dort-bin-yillik', title: 'Bilim: Dört Bin Yıllık Bir Tarih', author: 'Patricia Fara', status: 'okundu', sira_no: 1 },
      { slug: 'freely-isik-dogudan-yukselir', title: 'Işık Doğudan Yükselir', author: 'John Freely', status: 'okundu', sira_no: 2 },
      { slug: 'goody-ronesanslar', title: 'Rönesanslar', author: 'Jack Goody', status: 'okundu', sira_no: 3 },
      { slug: 'hobson-bati-medeniyetinin-dogulu-kokenleri', title: 'Batı Medeniyetinin Doğulu Kökenleri', author: 'John M. Hobson', status: 'okundu', sira_no: 4 },
    ],
  },
  {
    donem: '2. Dönem - Doğu Bilim Geleneği ve İslam Bilimi',
    short: 'Doğu & İslam',
    description:
      'Klasik İslam bilim geleneği — Bağdat, Orta Asya, Mısır, Endülüs. Çeviri hareketi, hezarfenlik, kütüphaneler ve eğitim mimarisi; Doğu-Batı bilgi transferinin kurumsal-kültürel zemini.',
    books: [
      { slug: 'goody-batidaki-dogu', title: 'Batıdaki Doğu', author: 'Jack Goody', status: 'okundu', sira_no: 5 },
      { slug: 'starr-kayip-aydinlanma', title: 'Kayıp Aydınlanma', author: 'S. Frederick Starr', status: 'okunuyor', sira_no: 6 },
      { slug: 'pedersen-islam-dunyasinda-kitabin-tarihi', title: 'İslam Dünyasında Kitabın Tarihi', author: 'Johannes Pedersen', status: 'sirada', sira_no: 7 },
      { slug: 'berkey-ortacag-kahirede-bilgi-intikali', title: 'Ortaçağ Kahire\'de Bilgi İntikali', author: 'Jonathan P. Berkey', status: 'sirada', sira_no: 8 },
      { slug: 'sezgin-islamda-bilim-ve-teknik', title: 'İslam\'da Bilim ve Teknik', author: 'Fuat Sezgin', status: 'sirada', sira_no: 9 },
      { slug: 'lyons-hikmet-evi', title: 'Hikmet Evi', author: 'Jonathan Lyons', status: 'sirada', sira_no: 10 },
      { slug: 'gutas-yunan-dusuncesi-arap-kulturu', title: 'Yunan Düşüncesi, Arap Kültürü', author: 'Dimitri Gutas', status: 'sirada', sira_no: 11 },
    ],
  },
  {
    donem: '3. Dönem - Kültürlerarası Bilgi Transferi ve Bilim Devrimi',
    short: 'Bilim Devrimi',
    description:
      'Avrupa\'nın bilim devrimi merkez-figürleri ve doğa bilimlerindeki kuramsal dönüşüm: Newton-Humboldt-Franklin biyografileri, Westfall\'ın klasik anlatısı, Einstein-modern fizik kopuşu, Wootton\'ın revizyonist Bilim Devrimi okuması.',
    books: [
      { slug: 'gleick-isaac-newton', title: 'Isaac Newton', author: 'James Gleick', status: 'planlanan', sira_no: 12 },
      { slug: 'wulf-doganin-kesfi-humboldt', title: 'Doğanın Keşfi: Alexander Von Humboldt\'un Yeni Dünyası', author: 'Andrea Wulf', status: 'planlanan', sira_no: 13 },
      { slug: 'isaacson-benjamin-franklin', title: 'Benjamin Franklin', author: 'Walter Isaacson', status: 'planlanan', sira_no: 14 },
      { slug: 'westfall-modern-bilimin-olusumu', title: 'Modern Bilimin Oluşumu', author: 'Richard S. Westfall', status: 'planlanan', sira_no: 15 },
      { slug: 'isaacson-einstein-yasami-ve-evreni', title: 'Einstein: Yaşamı ve Evreni', author: 'Walter Isaacson', status: 'planlanan', sira_no: 16 },
      { slug: 'wootton-bilimin-icadi', title: 'Bilimin İcadı: Bilim Devrimi\'nin Yeni Bir Tarihi', author: 'David Wootton', status: 'planlanan', sira_no: 17 },
    ],
  },
  {
    donem: '4. Dönem - Modern Bilim ve Bilim Tarihçiliği',
    short: 'Bilim Tarihçiliği',
    description:
      'Bilim tarihinin yöntem-disiplini ve modern bilim tarih-yazımının yeniden-değerlendirilmesi: Kuhn\'un paradigma-değişimi, Sarton\'ın kurucu-metodolojisi, Gavroglu\'nun eleştirel tarih-üretmek tezi, Ronan\'ın panoramik bilim-kültür serüveni.',
    books: [
      { slug: 'kuhn-bilimsel-devrimlerin-yapisi', title: 'Bilimsel Devrimlerin Yapısı', author: 'Thomas S. Kuhn', status: 'planlanan', sira_no: 18 },
      { slug: 'sarton-bilim-tarihi-arastirmalarinda-yontem', title: 'Bilim Tarihi Araştırmalarında Yöntem', author: 'George Sarton', status: 'planlanan', sira_no: 19 },
      { slug: 'gavroglu-bilimlerin-gecmisinden-tarih-uretmek', title: 'Bilimlerin Geçmişinden Tarih Üretmek', author: 'Kostas Gavroglu', status: 'planlanan', sira_no: 20 },
      { slug: 'ronan-bilim-tarihi', title: 'Bilim Tarihi', author: 'Colin A. Ronan', status: 'planlanan', sira_no: 21 },
    ],
  },
  {
    donem: 'Ek Kitaplar - Tamamlayıcı Okumalar',
    short: 'Ek',
    description:
      'Halka grubunun 21-kitap ana müfredatına ek olarak okuduğu ya da önerdiği tamamlayıcı kaynaklar: bilim-tarihçilik kanonu, bölgesel-derinlik metinleri, antik dünyanın bilim-mirası. 21-halka zincirinin dışında, ana müfredatla diyalog içinde okunur.',
    donem_tipi: 'ek',
    books: [
      { slug: 'koyre-bilim-tarihi-yazilari', title: 'Bilim Tarihi Yazıları 1', author: 'Alexandre Koyré', status: 'sirada', sira_no: 22 },
      { slug: 'burke-bilginin-toplumsal-tarihi', title: 'Bilginin Toplumsal Tarihi', author: 'Peter Burke', status: 'planlanan', sira_no: 23 },
      { slug: 'sayili-misirlilarda-mezopotamyalilarda-matematik-astronomi-tip', title: 'Mısırlılarda ve Mezopotamyalılarda Matematik, Astronomi ve Tıp', author: 'Aydın Sayılı', status: 'planlanan', sira_no: 24 },
      { slug: 'whitfield-bati-biliminin-donum-noktalari', title: 'Batı Biliminin Dönüm Noktaları', author: 'Peter Whitfield', status: 'planlanan', sira_no: 25 },
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

// v0.15-revize ile eklenen helper'lar — UI tarafı 21-halka ana zincirini ek-kategoriden
// ayrı tutsun diye. Mevcut tüketici kod (Halka21Chain, ProgressBar vb.) kırılmaz çünkü
// `curriculum` array'i hâlâ tüm kategorileri içerir; sadece yeni kod isterse bu helper'ları
// kullanır.
export function getMainCurriculum(): CurriculumDonem[] {
  return curriculum.filter((d) => d.donem_tipi !== 'ek');
}

export function getExtraBooksCategory(): CurriculumDonem | undefined {
  return curriculum.find((d) => d.donem_tipi === 'ek');
}

export function getMainBookSlugs(): string[] {
  return getMainCurriculum().flatMap((d) => d.books.map((b) => b.slug));
}

export function isExtraBook(slug: string): boolean {
  const cat = getExtraBooksCategory();
  return cat ? cat.books.some((b) => b.slug === slug) : false;
}
