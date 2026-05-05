// src/lib/programs.ts
//
// Halka Türkiye umbrella'sının dört aktif okuma-programının veri-modeli.
// v0.19'da eklendi — multi-program-mimari-konumlamanın platform-yansıması.
//
// Bu dosya kardeş-programların akademik-disiplin-konumlamasını ve
// müfredat-listelerini tutar; pages/programlar.astro buradan render eder.
// BU PROGRAM (Bilim Tarihi) için müfredat curriculum.ts'ten türetilir,
// burada yalnız meta-veri tutulur.

export type ReadingItem = {
  title: string;
  author: string;
  /** 40 Eserde İslam Düşüncesi'nin 4-kademeli pedagojik yapısında konum */
  kademe?: 1 | 2 | 3 | 4;
};

export type CrossProgramLink = {
  /** Bu sitedeki atomiğe veya akademik-konuma referans (insan-okunur) */
  this_site_anchor: string;
  /** Kardeş-programdaki ilgili eser/figür */
  sister_program_item: string;
  /** Akademik-zincir-konumlamasının kısa açıklaması */
  thematic_axis: string;
};

export type HalkaProgram = {
  slug: string;
  full_name: string;
  short_name: string;
  thematic_axis: string;
  is_active_on_this_site: boolean;
  external_url?: string;
  description: string;
  /** BU PROGRAM için boş bırakılır — curriculum.ts'ten türetilir */
  reading_list: ReadingItem[];
  /** Kademe-yapısı varsa (40 Eserde İslam Düşüncesi) */
  has_kademe_structure?: boolean;
  cross_program_links?: CrossProgramLink[];
  notes?: string;
};

export const programs: HalkaProgram[] = [
  // ---------------------------------------------------------------------------
  // 1. Bilim Tarihi — BU PROGRAM
  // ---------------------------------------------------------------------------
  {
    slug: 'dogudan-batiya-bilimin-yolculugu',
    full_name: "Halka: Doğu'dan Batı'ya Bilimin Yolculuğu",
    short_name: "Doğu'dan Batı'ya Bilimin Yolculuğu",
    thematic_axis:
      "Bilim tarihi — Doğu-Batı akademik-zincir-konumlamasının dört-dönemli müfredat-disiplini",
    is_active_on_this_site: true,
    description:
      "Halka Türkiye umbrella'sının bilim-tarihi-akademik-okuma-programı. Üniversite öğrencileri ve mezunlarının dört dönemde 21 kitap okuyup tartıştığı akademik-disiplin-okuma-grubunun dijital bedeni; her kitap bir özet değil, içindeki iddiaların-kişilerin-yerlerin-kavramların birbirine bağlandığı bir bilgi grafiğidir.",
    reading_list: [], // curriculum.ts'ten türetilir; programlar sayfası anasayfa-link verir
    notes:
      "Müfredat detayı için anasayfada `/#mufredat` bölümüne, atomik atlas için sol-üstteki ana navigasyona (Kitaplar, Kişiler, Yerler, Kavramlar) ve görsel-pedagojik katmanlara (Harita, Zaman çizelgesi, Etki ağı) bakınız.",
  },

  // ---------------------------------------------------------------------------
  // 2. İdeolojiler ve Toplumsal Devrimler
  // ---------------------------------------------------------------------------
  {
    slug: 'ideolojiler-ve-toplumsal-devrimler',
    full_name: 'Halka: İdeolojiler ve Toplumsal Devrimler',
    short_name: 'İdeolojiler ve Toplumsal Devrimler',
    thematic_axis:
      'Tarihsel-politik-ideoloji-akademik-eksenin akademik-disiplin-okuma-zinciri (18.-20. yy modern-tarihinin akademik-konum-tartışmaları)',
    is_active_on_this_site: false,
    description:
      'Reformasyondan Soğuk Savaş sonrasına uzanan modern-tarih-akademik-zincirinin somut-müfredat-yapılaşması. Tocqueville, Hobsbawm, Anderson, Ferguson gibi akademik-otorite-figürlerin tarihsel-yorum-zincirini kademeli-okuma-disiplinde işler.',
    reading_list: [
      { title: 'Reformasyonun Kısa Tarihi', author: 'Helen L. Parish' },
      { title: 'Eski Rejim ve Devrim', author: 'Alexis de Tocqueville' },
      { title: 'Devrim Çağı 1789-1848', author: 'Eric Hobsbawm' },
      { title: 'Sanayi Devrimi Tarihi', author: 'Peter N. Stearns' },
      { title: 'Hayali Cemaatler', author: 'Benedict Anderson' },
      { title: 'Kızıl Bayrak: Komünizmin Tarihi', author: 'David Priestland' },
      {
        title: "İmparatorluk: Britanya'nın Modern Dünyayı Biçimlendirişi",
        author: 'Niall Ferguson',
      },
      { title: 'Kısa 20. Yüzyıl (1914-1991)', author: 'Eric Hobsbawm' },
      { title: 'Kimlik ve İdeoloji', author: 'Kemal Karpat' },
      { title: 'Cereyanlar', author: 'Tanıl Bora' },
    ],
    cross_program_links: [
      {
        this_site_anchor: '3. Dönem — Bilim Devrimi-Aydınlanma akademik-zinciri',
        sister_program_item: 'Hobsbawm — Devrim Çağı 1789-1848',
        thematic_axis:
          "Aydınlanma-akademik-zincirin politik-tarihsel-uzantısı; bilim-tarih-zinciri sonrası dönemin akademik-konumlaması",
      },
      {
        this_site_anchor: '3. Dönem — Bilim Devrimi-toplumsal-tarihsel-zemin',
        sister_program_item: 'Stearns — Sanayi Devrimi Tarihi',
        thematic_axis:
          'Bilim Devrimi-akademik-zincirin toplumsal-tarihsel-paralel-vakası; bilim-üretim-modernite-akademik-zincirin yan-yana-konumlanması',
      },
      {
        this_site_anchor: 'Atomik atlas — kimlik-akademik-yapılaşma-konumu',
        sister_program_item: 'Anderson — Hayali Cemaatler',
        thematic_axis:
          'Bilim-tarih-zincirin kimlik-akademik-konumlama-yapılaşmasının yan-yana-akademik-tartışma-zemini',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. 40 Eserde İslam Düşüncesi
  // ---------------------------------------------------------------------------
  {
    slug: '40-eserde-islam-dusuncesi',
    full_name: 'Halka: 40 Eserde İslam Düşüncesi',
    short_name: '40 Eserde İslam Düşüncesi',
    thematic_axis:
      'Modern İslam-düşünce-akademik-mirasının dört-kademeli akademik-disiplin-okuma-zinciri (4 × 12 = 48 eser)',
    is_active_on_this_site: false,
    description:
      'Modern İslam-düşünce-mirasının akademik-derinleşme-pedagojisinde dört-kademeli okuma-zinciri. Akademik-başlangıç (1. Kademe) → akademik-orta (2. Kademe) → akademik-derinleşme (3. Kademe) → akademik-zenith (4. Kademe) yapısal-disiplinde okuyucuyu modern İslam-düşünce-akademik-akımlarının çoğul-akademik-konumlamasında konumlandırır. "40" akademik-tarihsel-sembolik-isimdir; gerçek müfredat 48 eser.',
    has_kademe_structure: true,
    reading_list: [
      // 1. KADEME
      { title: "Yeniden İslâm'a", author: "Ebu'l Hasen Ali En-Nedvî", kademe: 1 },
      { title: 'İslâm\'da İhya Hareketleri', author: "Ebu'l A'lâ el-Mevdûdî", kademe: 1 },
      { title: 'İslâm Deklarasyonu', author: 'Aliya İzzetbegoviç', kademe: 1 },
      {
        title: 'Müslümanca Düşünme Üzerine Denemeler',
        author: 'Rasim Özdenören',
        kademe: 1,
      },
      { title: 'Biz Müslüman Mıyız?', author: 'Muhammed Kutub', kademe: 1 },
      {
        title: 'Bireysel ve Toplumsal Değişmenin Yasaları',
        author: 'Cevdet Said',
        kademe: 1,
      },
      { title: 'İnsanın Dört Zindanı', author: 'Ali Şerîatî', kademe: 1 },
      {
        title: 'İhtilaf - Farkın Farkındalığı',
        author: "Tâhâ Câbir el-Alvânî",
        kademe: 1,
      },
      { title: 'İslâm ve Oryantalizm', author: 'Meryem Cemile', kademe: 1 },
      { title: 'Yoldaki İşaretler', author: 'Seyyid Kutub', kademe: 1 },
      {
        title: 'Düzeltilmesi Gereken Kavramlar',
        author: 'Muhammed Kutub',
        kademe: 1,
      },
      {
        title: "Kur'ân'ın Öngördüğü İnsan",
        author: 'Vahîdüddîn Hân',
        kademe: 1,
      },

      // 2. KADEME
      {
        title: 'Yolların Ayrılış Noktasında İslâm',
        author: 'Muhammed Esed',
        kademe: 2,
      },
      { title: "Tih'ten Çıkış", author: 'Muhammed Kutub', kademe: 2 },
      {
        title: 'Gelin Bu Dünyayı Değiştirelim',
        author: "Ebu'l A'lâ el-Mevdûdî",
        kademe: 2,
      },
      {
        title: 'Filistin İslâmî Direniş Hareketi Hamas',
        author: 'Abdullah Azzâm',
        kademe: 2,
      },
      {
        title: 'Özeleştiri ve Yenilenme Sorumluluğu',
        author: "Hasan et-Turâbî",
        kademe: 2,
      },
      {
        title: 'Bilgi ve Medeniyet Kaynağı Sünnet',
        author: "Yusuf el-Karadâvî",
        kademe: 2,
      },
      { title: 'İslâm Davası', author: 'Mâlik b. Nebî', kademe: 2 },
      { title: 'Risâleler', author: "Hasan el-Bennâ", kademe: 2 },
      { title: 'Vahiyden Kültüre', author: 'Celaleddin Vatandaş', kademe: 2 },
      { title: 'İslâm Düşüncesi', author: 'Seyyid Kutub', kademe: 2 },
      { title: 'Medeniyet ve Modernizm', author: 'Ali Şerîatî', kademe: 2 },
      {
        title: 'Hilâfetin İlgâsının Arka Planı',
        author: 'Şeyhülislâm Mustafa Sabri Efendi',
        kademe: 2,
      },

      // 3. KADEME
      {
        title: "Muhtasar Hayâtü's Sahâbe",
        author: 'M. Yusuf Kandehlevî',
        kademe: 3,
      },
      {
        title: 'Doğu Batı Arasında İslâm',
        author: 'Aliya İzzetbegoviç',
        kademe: 3,
      },
      {
        title: 'Hatıralarım (Müslüman Kardeşler)',
        author: "Hasan el-Bennâ",
        kademe: 3,
      },
      {
        title: 'Gelin Müslüman Olalım',
        author: "Ebu'l A'lâ el-Mevdûdî",
        kademe: 3,
      },
      {
        title: 'Arapların Gözüyle Haçlı Seferleri',
        author: 'Amin Maalouf',
        kademe: 3,
      },
      {
        title: 'Hulefâ-yı Râşidîn Devri Dört Halife Dönemi',
        author: 'Mustafa Fayda',
        kademe: 3,
      },
      {
        title: 'İslâm Mezhepleri Tarihi',
        author: 'Halil İbrahim Bulut',
        kademe: 3,
      },
      {
        title: 'Çağdaş İslâmî Akımlar',
        author: 'Mehmet Ali Büyükkara',
        kademe: 3,
      },
      { title: 'Çağdaş Konumumuz', author: 'Muhammed Kutub', kademe: 3 },
      {
        title: 'İslâm ve Siyasi Durumumuz',
        author: 'Abdülkadir Udeh',
        kademe: 3,
      },
      {
        title: 'İslâm, Sekülerizm ve Geleceğin Felsefesi',
        author: "Nakîb el-Attâs",
        kademe: 3,
      },
      { title: 'Fark', author: 'İbn Teymiyye', kademe: 3 },

      // 4. KADEME
      { title: 'İslâmî Eğitim Modeli', author: "Saîd Havvâ", kademe: 4 },
      { title: 'Ölümsüz Müdafaa', author: "Ebû'l-Kelâm Âzâd", kademe: 4 },
      { title: 'Düşünce Mirasımız', author: "Muhammed Gazâlî", kademe: 4 },
      {
        title: "Kur'ân'a Göre Dört Terim",
        author: "Ebu'l A'lâ el-Mevdûdî",
        kademe: 4,
      },
      {
        title: 'Müslümanların Gerilemesiyle Dünya Neler Kaybetti',
        author: "Ebu'l Hasen Ali En-Nedvî",
        kademe: 4,
      },
      {
        title: 'Mukayeseli Dinler Tarihi',
        author: 'Ahmet Kahraman',
        kademe: 4,
      },
      {
        title: 'İslâm Fıkhını Yeniden Okumak',
        author: "Yusuf el-Karadâvî",
        kademe: 4,
      },
      {
        title: 'Bilgi Ahlaktan Ayrıldığında',
        author: 'Taha Abdurrahman',
        kademe: 4,
      },
      {
        title: 'Mektuplaşmalar',
        author: "Ebu'l A'lâ el-Mevdûdî & Meryem Cemile",
        kademe: 4,
      },
      {
        title: "İslâm'da Dini Düşüncenin Yeniden Yapılandırılması",
        author: 'Muhammed İkbal',
        kademe: 4,
      },
      {
        title: "Tarih Boyunca Tevhid Mücadelesi ve Hz. Peygamber'in Hayatı",
        author: "Ebu'l A'lâ el-Mevdûdî",
        kademe: 4,
      },
      {
        title: "Zübdetü'l İhyâ",
        author: "Cemâleddîn el-Kâsımî",
        kademe: 4,
      },
    ],
    cross_program_links: [
      {
        this_site_anchor: "2. Dönem — Doğu-Batı akademik-coğrafi-konumlama-tartışması",
        sister_program_item: "Aliya İzzetbegoviç — Doğu Batı Arasında İslâm (3. Kademe)",
        thematic_axis:
          "Bilim Tarihi-2. dönem'in Doğu-Batı akademik-konumlamasının yapısal-paralel-akademik-vakası",
      },
      {
        this_site_anchor: "2. Dönem — İslam bilimi tarihsel-zemin",
        sister_program_item: "Amin Maalouf — Arapların Gözüyle Haçlı Seferleri (3. Kademe)",
        thematic_axis:
          "İslam Bilimi-akademik-zincirin tarihsel-bağlam-genişlemesi; Avrupa-İslam akademik-temas-zemini",
      },
      {
        this_site_anchor: "3. Dönem — akademik-figür-zincirin (Einstein-Wootton) yapısal-paralel",
        sister_program_item: "Muhammed İkbal — İslâm'da Dini Düşüncenin Yeniden Yapılandırılması (4. Kademe)",
        thematic_axis:
          "20. yy İslam-akademik-modernist-konumlamanın somut-akademik-vakası; Halka 3. dönem akademik-figür-zincirinin İslam-tarafından-bakım-yapısal-paraleli",
      },
      {
        this_site_anchor: "Hobson-Sezgin akademik-anti-Eurocentric zinciri",
        sister_program_item: "Nakîb el-Attâs — İslâm, Sekülerizm ve Geleceğin Felsefesi (3. Kademe)",
        thematic_axis:
          "Akademik-Eurocentric-konum eleştirisinin yapısal-paralel-akademik-vakası; Halka 2. dönem-Hobson akademik-anti-Eurocentric-zincirinin İslam-felsefe-cephesinde-akrabası",
      },
      {
        this_site_anchor: "Atomik atlas — İslam-bilim akademik-zincir-tartışma-zemini",
        sister_program_item: "Ebu'l Hasen Ali En-Nedvî — Müslümanların Gerilemesiyle Dünya Neler Kaybetti (4. Kademe)",
        thematic_axis:
          "İslam-bilim-akademik-zincirin tarihsel-akademik-konum-tartışmasının somut-akademik-vakası",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. Riyâzu's-Sâlihîn
  // ---------------------------------------------------------------------------
  {
    slug: 'riyazus-salihin',
    full_name: "Halka: Riyâzu's-Sâlihîn",
    short_name: "Riyâzu's-Sâlihîn",
    thematic_axis:
      "Klasik İslam akademik-disiplin-okuma-zincirinin merkez-eseri — İmam Nevevî'nin kanonik hadis-mecmuası",
    is_active_on_this_site: false,
    description:
      "İmam Nevevî (Yahyâ b. Şeref en-Nevevî, 631-676 H / 1233-1277 M) tarafından derlenen kanonik hadis-mecmuası. \"Sâlih Kişilerin Bahçeleri\" — yaklaşık 1900 hadis, 19 kitâb, 372 bâb yapısında akademik-disiplin-tematik-konumlanma. Klasik hadis-okuma-disiplinin Halka Türkiye-akademik-konumlamasında somut-vakası — uzun-süreli (2-3 yıl) okuma-zinciri akademik-disiplini.",
    reading_list: [
      {
        title: "Riyâzu's-Sâlihîn (Sâlih Kişilerin Bahçeleri)",
        author: 'İmam Nevevî',
      },
    ],
    cross_program_links: [
      {
        this_site_anchor: "places/sam — Şam akademik-merkezi",
        sister_program_item: "İmam Nevevî — 13. yy Şam akademik-disiplin-figürü",
        thematic_axis:
          "Halka Bilim Tarihi-programının Şam-akademik-coğrafi-zincirinin yapısal-paralel-akademik-vakası: Şam'da hadis-akademik-disiplini ile aynı dönem (1233-1277 M) Maraga-rasathanesi-Tûsî-Şâtır akademik-bilim-zincirinin (1201-1274 M) yan-yana-akademik-konumlanması; 13. yy İslam-coğrafyasında akademik-disiplin-zincirin çoğul-konumlamasının somut-akademik-vakası",
      },
    ],
    notes:
      "Okuma-süresi ortalama 2-3 yıl. Halka formatı klasik-hadis-akademik-disiplinine uyarlanır: her oturum 5-15 hadis, akademik-tarihsel-bağlam-tartışması ve akademik-disiplin-yorumlama-zinciri.",
  },
];

/** Aktif-program ('this site') konumlamasını döndürür */
export function getActiveProgram(): HalkaProgram {
  return programs.find((p) => p.is_active_on_this_site)!;
}

/** Kardeş-programları döndürür (aktif-program hariç) */
export function getSisterPrograms(): HalkaProgram[] {
  return programs.filter((p) => !p.is_active_on_this_site);
}

/** 40 Eserde İslam Düşüncesi kademe-bazlı gruplama */
export function groupByKademe(
  items: ReadingItem[],
): Record<number, ReadingItem[]> {
  const out: Record<number, ReadingItem[]> = { 1: [], 2: [], 3: [], 4: [] };
  for (const it of items) {
    if (it.kademe) out[it.kademe].push(it);
  }
  return out;
}
