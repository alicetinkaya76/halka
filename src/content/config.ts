// src/content/config.ts
//
// Halka — İçerik Koleksiyonları Şeması
// =====================================
//
// Bu dosya, Halka platformunun mimari sözleşmesidir. Her koleksiyon (book,
// person, place, concept, claim, discussion) burada tanımlanır; ZOD şemaları
// build sırasında frontmatter'ı doğrular. Şemaya uymayan markdown dosyası
// build'i kırar — bu, 20+ kitap eklendikçe tutarlılığı garanti eder.
//
// Slug konvansiyonu (HALKA-GRAND-PLAN.md §12):
// - Books:    {soyad}-{baslik-slug}  ör. starr-kayip-aydinlanma
// - People:   {kisi-slug}            ör. biruni, ibn-sina
// - Places:   {yer-slug}             ör. buhara, semerkant
// - Concepts: {kavram-slug}          ör. tercume-hareketi
// - Claims:   {book-slug}::claim-NNN ör. starr-kayip-aydinlanma::claim-001
// - Sources:  {kaynak-slug}
// - Discussions: {YYYY-MM-DD}-{book-slug}
//
// İlişki türleri kapalı enumerasyondur. Yeni bir tür eklemek için bu dosya
// güncellenmek zorundadır — bu kasıt, "geçici" ilişki türlerinin yayılmasını
// engellemek için.

import { defineCollection, reference, z } from 'astro:content';

// ---------------------------------------------------------------------------
// Ortak alt-şemalar
// ---------------------------------------------------------------------------

const yearOrCirca = z.union([
  z.number().int(),
  z.string().regex(/^c?\.?\s?\d{1,4}(\?|s)?$/, 'Yıl formatı: 980, c.980, 980?, 1100s'),
]);

const dateRangeStr = z.string().describe(
  'Yaşam aralığı veya tarih aralığı, ör. "973-1048", "10.-11. yy", "ö. 1037"'
);

// Tarihyazımı pozisyonu — kitap-düzeyi
const HistoriographicalPosition = z.object({
  eurocentrism_axis: z.enum([
    'Eurocentric',
    'anti-Eurocentric',
    'noteurocentric-but-comparative',
    'agnostic',
  ]),
  baghdad_centrism_axis: z.enum([
    'Baghdad-centric',
    'anti-Baghdad-centric',
    'multipolar',
    'agnostic',
  ]).optional(),
  internalist_externalist: z.enum([
    'internalist',
    'externalist',
    'mixed',
  ]),
  geographical_emphasis: z.string().optional(),
  declensionist: z.boolean().optional(),
  thesis_one_liner: z.string().min(40).max(600),
});

// ---------------------------------------------------------------------------
// 1) BOOKS — birincil birim
// ---------------------------------------------------------------------------

const BookRelationKind = z.enum([
  'kismen_celisir',
  'celisir',
  'uyumlu',
  'tematik_tamamlayici',
  'teknik_tamamlayici',
  'kurumsal_tamamlayici',
  'olcek_karsitligi',
  'ters_yon',
  'dogrudan_kaynak',
  'cogul_revizyon',
]);

const ClaimRelationKind = z.enum([
  'conflicts_with',
  'supports',
  'extends',
  'qualifies',
  'reframes',
  'cites',
]);

const ClaimType = z.enum([
  'ana_tez',
  'metodolojik_tez',
  'tarihsel_duzeltme',
  'nedensellik_tezi',
  'kulturel_tez',
  'karsilastirmali_tez',
  'kavramsal_tez',
  'kurumsal_tez',
  'ekonomik_nedensellik_tezi',
  'kulturel_tarih_tezi',
  'tarihyazimi_tezi',
  'degerlendirme',
  'yorumsal_sentez',
  'varisler_hakkinda_tez',
]);

const HalkaDonem = z.enum([
  '1. Dönem - Bilim Tarihinin Çerçevesi',
  '2. Dönem - Doğu Bilim Geleneği ve İslam Bilimi',
  '3. Dönem - Batı Bilim Devrimi',
  '4. Dönem - Karşılaştırmalı Sentezler',
]);

const HalkaStatus = z.enum(['planlanan', 'sirada', 'okunuyor', 'okundu']);

const books = defineCollection({
  type: 'content',
  schema: z.object({
    // Üst-düzey kimlik
    title: z.string(),
    subtitle: z.string().optional(),
    author: z.string(),
    author_slug: z.string(),
    original_title: z.string().optional(),
    original_year: z.number().int().optional(),
    original_publisher: z.string().optional(),
    turkish_translator: z.string().optional(),
    turkish_editor: z.string().optional(),
    turkish_publisher: z.string().optional(),
    turkish_year: z.number().int().optional(),
    turkish_edition: z.string().optional(),
    isbn: z.string().optional(),
    pages: z.number().int().optional(),
    chapters_count: z.number().int().optional(),

    // ---- UX & erişilebilirlik metaverisi (Faz 2 Kol A — F1.7) ----
    // reading_level: subjektif kalibrasyon (Ali'nin yargısı). Halka grup deneyimi
    // sonrası gözden geçirilebilir. accessibility_note: 1-2 cümlelik kalibrasyon
    // gerekçesi (çeviri kalitesi, terminoloji yoğunluğu, ölçek vb.).
    reading_level: z.enum(['kolay', 'orta', 'zor']),
    accessibility_note: z.string().optional(),

    // ---- Kapak görseli (Faz 2 Kol A — F1.4) ----
    // cover_image: public/covers/ altındaki dosyaya göreli yol (ör. '/halka/covers/fara-bilim-dort-bin-yillik.jpg')
    // cover_credit: "Yayıncı görseli — Metis Yayınları" gibi atıf metni (FSEK m.32 çerçevesinde tanıtım amaçlı kullanım)
    cover_image: z.string().optional(),
    cover_credit: z.string().optional(),

    period_covered: z.object({
      start: z.number().int(),
      end: z.number().int(),
      era_name: z.string().optional(),
      key_centuries: z.array(z.string()).optional(),
    }).optional(),

    geography_covered: z.object({
      region: z.string().optional(),
      modern_states: z.array(z.string()).optional(),
      historical_regions: z.array(z.string()).optional(),
    }).optional(),

    halka_metadata: z.object({
      donem: HalkaDonem,
      sira_no: z.number().int(),
      status: HalkaStatus,
      okunma_tarihi: z.string().optional(),
      onceki_kitap: z.string().optional(),
      sonraki_kitap: z.string().optional(),
    }),

    historiographical_position: HistoriographicalPosition,

    // Embedded entity referansları — atomik dosyalara bağlanır
    key_people: z.array(z.object({
      name: z.string(),
      slug: z.string(),  // → src/content/people/{slug}.md (opsiyonel; yoksa stub render edilir)
      dates: dateRangeStr.optional(),
      place: z.string().optional(),
      role: z.string(),
      starr_emphasis: z.string().optional(),
      author_emphasis: z.string().optional(),  // genelleştirilmiş alt
    })).optional(),

    key_places: z.array(z.object({
      name: z.string(),
      slug: z.string(),
      modern: z.string().optional(),
      role: z.string(),
    })).optional(),

    key_concepts: z.array(z.object({
      name: z.string(),
      slug: z.string(),
      description: z.string(),
    })).optional(),

    key_claims: z.array(z.object({
      id: z.string().regex(/^claim-\d{3}$/, 'Format: claim-NNN (3 hane)'),
      claim: z.string(),
      type: ClaimType,
      conflicts_with: z.array(z.string()).optional(),  // {book-slug}::claim-NNN
      supports: z.array(z.string()).optional(),
      cites: z.array(z.string()).optional(),
      debate_with: z.array(z.string()).optional(),
      note: z.string().optional(),
    })).optional(),

    chapters: z.array(z.object({
      number: z.number().int(),
      title: z.string(),
      page: z.number().int().optional(),
      summary: z.string().optional(),
    })).optional(),

    relationships_to_other_books: z.array(z.object({
      book: z.string(),  // başka kitabın slug'ı
      relation: BookRelationKind,
      note: z.string().optional(),
    })).optional(),

    discussion_questions: z.array(z.string()).optional(),

    critical_reading_notes: z.array(z.string()).optional(),

    further_reading: z.object({
      primary: z.array(z.string()).optional(),
      scholarly: z.array(z.string()).optional(),
    }).optional(),

    tags: z.array(z.string()).optional(),
  }),
});

// ---------------------------------------------------------------------------
// 2) PEOPLE — atomik kişi sayfaları
// ---------------------------------------------------------------------------

const people = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    name_arabic: z.string().optional(),
    name_full: z.string().optional(),
    name_aliases: z.array(z.string()).optional(),
    dates: dateRangeStr.optional(),
    birth_year: yearOrCirca.optional(),
    death_year: yearOrCirca.optional(),
    birth_place: z.string().optional(),
    death_place: z.string().optional(),
    place: z.string().optional(),
    fields: z.array(z.string()).optional(),
    role: z.string().optional(),

    // DH altyapısı bağlantıları (Faz 3)
    tabakat_io_id: z.string().optional(),
    dia_id: z.string().optional(),
    gas_id: z.string().optional(),
    gal_id: z.string().optional(),
    wikidata_id: z.string().regex(/^Q\d+$/).optional(),
    viaf_id: z.string().optional(),

    works: z.array(z.object({
      title: z.string(),
      type: z.string().optional(),
      year: yearOrCirca.optional(),
      note: z.string().optional(),
    })).optional(),

    influenced_by: z.array(z.string()).optional(),
    influenced: z.array(z.string()).optional(),

    tags: z.array(z.string()).optional(),
  }),
});

// ---------------------------------------------------------------------------
// 3) PLACES — atomik mekân sayfaları
// ---------------------------------------------------------------------------

const places = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    name_modern: z.string().optional(),
    name_aliases: z.array(z.string()).optional(),
    name_arabic: z.string().optional(),
    country_modern: z.string().optional(),
    region_historical: z.string().optional(),
    coordinates: z.object({
      lat: z.number(),
      lon: z.number(),
    }).optional(),
    role: z.string().optional(),
    flourished: dateRangeStr.optional(),

    // DH altyapısı (Faz 3)
    islamicatlas_id: z.string().optional(),
    pleiades_id: z.string().optional(),
    geonames_id: z.string().optional(),
    wikidata_id: z.string().regex(/^Q\d+$/).optional(),

    tags: z.array(z.string()).optional(),
  }),
});

// ---------------------------------------------------------------------------
// 4) CONCEPTS — kavram sayfaları
// ---------------------------------------------------------------------------

const concepts = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    name_arabic: z.string().optional(),
    name_aliases: z.array(z.string()).optional(),
    short_description: z.string(),
    period: dateRangeStr.optional(),
    geography: z.string().optional(),
    related_concepts: z.array(z.string()).optional(),

    dia_id: z.string().optional(),
    wikidata_id: z.string().regex(/^Q\d+$/).optional(),

    tags: z.array(z.string()).optional(),
  }),
});

// ---------------------------------------------------------------------------
// 5) CLAIMS — atomik iddia sayfaları (Faz 2'de aktifleşir)
// ---------------------------------------------------------------------------

const claims = defineCollection({
  type: 'content',
  schema: z.object({
    book: z.string(),  // hangi kitaptan
    claim: z.string(),
    type: ClaimType,
    chapter: z.number().int().optional(),
    page_range: z.string().optional(),

    about_people: z.array(z.string()).optional(),
    about_places: z.array(z.string()).optional(),
    about_concepts: z.array(z.string()).optional(),

    relations: z.array(z.object({
      kind: ClaimRelationKind,
      target: z.string(),  // {book-slug}::claim-NNN
      note: z.string().optional(),
    })).optional(),

    sources: z.array(z.string()).optional(),
  }),
});

// ---------------------------------------------------------------------------
// 6) DISCUSSIONS — Halka oturum kayıtları (Faz 4'te aktifleşir)
// ---------------------------------------------------------------------------

const discussions = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(),  // YYYY-MM-DD
    book: z.string(),
    duration_minutes: z.number().int().optional(),
    participants_count: z.number().int().optional(),
    moderator: z.string().optional(),
    key_insights: z.array(z.string()).optional(),
    questions_raised: z.array(z.string()).optional(),
    annotates_claims: z.array(z.string()).optional(),
  }),
});

// ---------------------------------------------------------------------------
// 7) AUTHORS — yazar profilleri (Faz 1'de hafif kullanılır)
// ---------------------------------------------------------------------------

const authors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    dates: dateRangeStr.optional(),
    nationality: z.string().optional(),
    institution: z.string().optional(),
    intellectual_tradition: z.string().optional(),
    historiographical_position: HistoriographicalPosition.partial().optional(),
  }),
});

// ---------------------------------------------------------------------------

export const collections = {
  books,
  people,
  places,
  concepts,
  // claims,      → Faz 2'de aktifleşecek (şu an boş, glob-loader uyarısı vermesin)
  // discussions, → Faz 4'te aktifleşecek
  // authors,     → Faz 1 ortası, ihtiyaç doğunca aktifleşecek
};
