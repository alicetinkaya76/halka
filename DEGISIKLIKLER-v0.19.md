# DEĞİŞİKLİKLER — v0.19 (5 Mayıs 2026)

Bu doküman v0.19 turunda **Halka** projesinde yapılan tüm yapısal-akademik-değişiklikleri akademik-disiplinde-konumlandırır.

---

## Tur özeti

**v0.18 sonu:** 92 atomik (15 books + 33 people + 19 places + 25 concepts), 5 SEP-slug doldurulmuş.
**v0.19 sonu:** 99 atomik (16 books + 35 people + 19 places + 29 concepts), 19 external-source-slug doldurulmuş, multi-program umbrella-mimarisi yansıtılmış.

**ZOD validation:** 0 hata / 0 uyarı (tüm değişikliklerde korundu).

---

## Blok 1 — Multi-program umbrella-mimari yansıması

Halka Türkiye'nin dört aktif okuma-programının (bilim tarihi + ideolojiler + 40 Eserde İslam Düşüncesi + Riyâzu's-Sâlihîn) umbrella-konumlamasının platform-yansıması.

### Yeni dosyalar

- **`src/lib/programs.ts`** (~410 satır) — 4 program veri-modeli (`HalkaProgram`, `ReadingItem`, `CrossProgramLink` interface'leri), 8 cross-program-zincir-konumlaması, 3 helper-fonksiyon (`getActiveProgram`, `getSisterPrograms`, `groupByKademe`). 40 Eserde İslam Düşüncesi'nin 4-kademeli pedagojik-yapısının somutlaşması (48 eser, 4 × 12 yapısında). Riyâzu's-Sâlihîn ile cross-program-zincir Şam'da yapısal-akademik-paralel.

- **`src/pages/programlar.astro`** (~250 satır) — Halka Türkiye programlar sayfası. Aktif-program rozetli-kartı (`Bu site · aktif program` etiketi), kardeş-program kartları, **collapsible müfredat-listeleri** (`<details>/<summary>` HTML elementi, JS-bağımsız), 40 Eserde İslam Düşüncesi için kademe-yapısı render, cross-program-zincir-konumlamaları (8 link).

### Değiştirilen dosyalar

- **`src/layouts/BaseLayout.astro`** — 5 nokta-düzenlemesi:
  1. Description meta umbrella-yansıması
  2. `fullTitle` "Halka" → "Halka: Doğu'dan Batı'ya Bilimin Yolculuğu" (anasayfa)
  3. Header logo iki-satırlı: ana "Halka" + alt "Halka Türkiye" küçük-etiketi (uppercase, ink-400)
  4. Nav: Programlar-link eklendi (lg-display)
  5. Footer: sol-tarafta umbrella-konumlama, sağ-tarafta Programlar-link

- **`src/pages/index.astro`** — Hero başlık iki-satırlı + subtitle umbrella-yansıması + açılış-paragrafı umbrella-konumlama-vurgusu + kardeş-program-link.

- **`src/content/places/sam.md`** — Riyâzu's-Sâlihîn cross-program-zincir paragrafı eklendi (atomik özetin sonuna). İmam Nevevî 1233-1277 ↔ Tûsî 1201-1274 ↔ İbn-eş-Şâtır 1304-1375 yapısal-akademik-paralel: tek-bir-coğrafi-merkez (Şam), iki-farklı-Halka-programının (bilim tarihi + Riyâzu's-Sâlihîn) akademik-okuma-zincirinde-aynı-anda-konumlanır.

---

## Blok 2 — DİA/SEP slug-doldurma mini-turu

External-source-link altyapısının (v0.18'de eklenen `AcademicSourceLinks` rozet-component'i) veri-doldurma turu.

### Doldurulan slug'lar (14)

**SEP-slug'lar (11):**

| Atomik | sep_slug |
|---|---|
| `people/isaac-newton` | `newton` |
| `people/gottfried-wilhelm-leibniz` | `leibniz` |
| `people/robert-boyle` | `boyle` |
| `people/galileo-galilei` | `galileo` |
| `people/pierre-gassendi` | `gassendi` |
| `people/johann-wolfgang-goethe` | `goethe` |
| `people/charles-darwin` | `darwin` |
| `people/aristoteles` | `aristotle` |
| `people/platon` | `plato` |
| `concepts/bilim-devrimi` | `scientific-revolutions` |
| `concepts/deneysel-felsefe` | `experimental-philosophy` |

**DİA-id'ler (3 — WebSearch ile DOĞRULANMIŞ):**

| Atomik | dia_id | Doğrulama-not |
|---|---|---|
| `people/biruni` | `biruni` | Sade-form (listenin tahmini `biruni-ebu-reyhan` YANLIŞTI) |
| `people/tusi` | `tusi-nasiruddin` | TERS sıralı: soyad-ad (listenin tahmini `nasiruddin-tusi` YANLIŞTI) |
| `places/sam` | `sam--suriye` | Çift-tire ambiguous (listenin tahmini `dimask` YANLIŞTI) |

### Akademik-disiplin-stratejik-kararı

WebSearch ile 3 DİA-spot-test sonrası listenin DİA-tahminlerinin **%50+ yanlış-yapıda** olduğu tespit edildi. Yanlış-slug-doldurma 404-yönlendirmeye-neden-olur, akademik-zarar-vakası. Bu nedenle:

- ✓ SEP için listenin tahminleri doldur (stabil-naming, düşük-yanlış-risk)
- ✓ DİA için sadece WebSearch ile doğrudan-doğrulanmış 3 atomiği doldur
- ⊘ Kalan ~25 DİA-atomiği v0.20'ye-bilinçli-bırakım (kullanıcı-manuel-doğrulama akışı)

**Toplam external-source-link konumu:** v0.18'in 5 slug'ı + v0.19'un 14 slug'ı = **19/92 atomikte external-source-link aktif**.

---

## Blok 3 — Westfall-Newton derinlemesine-üretim

Halka 3. dönem-müfredatının 15. kitabının atomik-zincir-üretimi: Richard S. Westfall *Modern Bilimin Oluşumu: Mekanizmler ve Mekanik* (1971; Türkçe TÜBİTAK 1994).

### Yeni atomikler (7)

**Book (1):**

- **`books/westfall-modern-bilimin-olusumu.md`** — Halka #15 ana-atomik. ~620 satır, 8 chapter_summary, 7 discussion_questions, 5 key_claims (claim-001 ana_tez iki-akım × claim-002 yorumsal_sentez Newton-Principia × claim-003 tarihyazimi_tezi mixed-internalist × claim-004 kavramsal_tez mekanizm-felsefesi × claim-005 kurumsal_tez Royal Society + Académie), 10 key_people, 4 key_places, 7 key_concepts, 5 relationships_to_other_books. Bibliyografik düzeltme: orijinal 1971 (Wiley), yeniden-baskı 1977 (Cambridge UP). Türkçe baskı 1994 (TÜBİTAK), 12. basım Temmuz 2000, 27.500-adet, ISBN 975-403-006-5, 189 sayfa, çevirmen İsmail Hakkı Duru.

**People (2):**

- **`people/richard-s-westfall.md`** — Yazar-atomik. 1924-1996, Yale doktora 1955 (Wallace K. Ferguson yönetiminde), Indiana University Bloomington 1963-1989. *Construction* 1971 + *Force in Newton's Physics* 1971 + *Never at Rest* 1980 (Pfizer Award 1981, 900+ sayfa) + *Life of Isaac Newton* 1993 + *Science and Religion in 17th Century England* 1958.

- **`people/emilie-du-chatelet.md`** — du Châtelet (1706-1749). Newton-Principia Fransızca-çevirisi (yazım 1745-1749, ölümünden sonra yayım 1759 Voltaire önsözüyle) + *Institutions de Physique* (1740) Newton-Leibniz-Wolff akademik-uzlaştırma + Cirey-Voltaire akademik-ortak-yaşam-zinciri 1734-1749 + *Vis viva* akademik-tartışma 1741. Akademik-cinsiyet-eşitlik-konumlamasının somut-vakası.

**Concepts (4):**

- **`concepts/mekanizm-felsefesi.md`** — Westfall Bölüm II merkez-konsepti. Descartes-Gassendi-Boyle akademik-zinciri. Aristoteles-skolastik-yıkım-vakası.
- **`concepts/iki-akim-sentezi-newton.md`** — Westfall Bölüm VIII merkez-tezi. Pythagorasçı-matematiksel × mekanikçi-felsefe iki-akımın Newton-Principia 1687'de aksiyomatik-sentezi. Modern-bilimin doğum-vakasının akademik-zenith-konumlaması.
- **`concepts/momentum-akademik-mimari.md`** — Westfall Bölüm VII merkez-konsepti. Galileo-Descartes-Huygens-Newton akademik-zincirinin matematiksel-niceliksel-aksiyomatik-zemininin somutlaşması; *Principia* Tanım II "hareket niceliği = kütle × hız" akademik-zenith-vakası.
- **`concepts/ay-newton-test-vakasi.md`** — Westfall Bölüm VIII akademik-merkez-vakası. 1665-1666 Annus Mirabilis Woolsthorpe-akademik-emek-zincirinde Ay-yörünge-tümel-çekim-test-vakası. Göksel-yersel-ayrımının akademik-yapısal-yıkımının somut-akademik-zemini.

**Atomik-üretim toplam:** 92 → 99 (+7).

---

## Blok 4 — Cross-ref aktivasyonları

Yeni-üretilen 7 atomiğin mevcut atomik-zincire akademik-disiplinli-yansıtılması. Toplam **9 cross-ref-aktivasyonu** yapıldı (8 yeni-paragraf + 1 frontmatter `relationships_to_other_books` güncelleme).

### Yeni cross-ref-paragrafları (8 mevcut atomik)

Her birinin son-bölümüne `**Halka #15 Westfall *Modern Bilimin Oluşumu* (1971) — [konu] (v0.19+):**` başlıklı paragraf eklendi:

| Atomik | Cross-ref-konumu |
|---|---|
| `people/isaac-newton.md` | Westfall iki-akım-sentez-tezi; Bölüm VIII akademik-omurga-cümlesi; Halka #12 Gleick ↔ #15 Westfall yapısal-tamamlayıcı-pencere |
| `concepts/simya-newton-emegi.md` | Westfall *Never at Rest* (1980) akademik-otorite-konumu; *Construction* Önsöz Yates-Hermesçi-zincir-etkisinin akademik-zemini |
| `concepts/annus-mirabilis.md` | Westfall Bölüm VIII Woolsthorpe akademik-tohum-aşamasının akademik-derinlik-disiplini; akademik-defter-disiplinli-okuma |
| `concepts/matematiksel-mekanik.md` | Westfall iki-akım-tezi (claim-001); Pythagorasçı-matematiksel-akımın somut-zinciri (Kepler-Galileo-Huygens-Newton) |
| `concepts/tumel-cekim.md` | Westfall Bölüm VIII tümel-çekim-aksiyomunun akademik-evrim-anlatısı (1675 'Işığın Özelliklerini Açıklayan Bir Varsayım' → 1687 *Principia* zenith) |
| `places/cambridge-trinity-college.md` | Westfall Bölüm VIII Cambridge akademik-derinlik-okuma-mekanı; lisans-yıllarının akademik-defterleri |
| `places/royal-society-londra.md` | Westfall Bölüm VI Royal Society + Académie kurumsal-tez (claim-005); v0.18 Franklin-APS yapısal-genealoji-zemini |
| `concepts/akademik-cemiyet-mimari-amerikan.md` | "Halka #15 Westfall Bölüm VI yapısal-akademik-genealoji-vakası (v0.19+)" — 17. yy Avrupa kurumsal-akademik-mimarinin 18. yy ABD-uçtaki Franklin-zinciriyle yapısal-genealoji-vakası |

### Frontmatter güncelleme (1 atomik)

- **`books/gleick-isaac-newton.md`** — `relationships_to_other_books` listesinin başına Westfall-yapısal-akademik-tamamlayıcı-pedagojik-pencere ilişkisi eklendi. Halka #12 Gleick-popüler × Halka #15 Westfall-derinlik akademik-pedagojik-pencere-modelinin somut-konumlaması; iki-katmanlı-akademik-okuma-konumlamasının yapısal-disiplin-vakası.

---

## v0.19 sonu durum-konumlaması


| Kategori | v0.18 sonu | v0.19 sonu | Δ |
|---|---|---|---|
| books | 15 | 16 | +1 |
| people | 33 | 35 | +2 |
| places | 19 | 19 | 0 |
| concepts | 25 | 29 | +4 |
| **TOPLAM** | **92** | **99** | **+7** |

**Slug-doldurma toplamı:** v0.18 sonu 5 + v0.19 14 = **19/99 atomikte external-source-link aktif**.

**ZOD validation:** 0 hata / 0 uyarı.

---

## v0.20'ye bırakılan iş-konumları (HANDOFF-v0.20.md'de detaylı)

1. **DİA-slug-doldurma kalan ~25 atomik** — Kullanıcı-manuel-doğrulama akışıyla.
2. **UI sofistikleşmesi B/C/D** — graf-ağ-genişletmesi, mobile-rezonansı, zaman-çizelgesi-yıl-akademik-derinleşmesi.
3. **Ek-zenginleşme atomikleri** — John Adams, James Madison, Independence Hall, Marly-la-Ville (v0.18'den-bekleyen).
4. **Westfall ek-cross-ref-derinleşmeleri** — 7 zaten-cross-ref'i-olan-atomikte akademik-derinlik-paragraf-genişletilmesi (opsiyonel-akademik-zenginleştirme).
