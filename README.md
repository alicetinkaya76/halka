# Halka

**Bilim Tarihi Okuma Grubu Platformu** — Halka, Türkçe okuyucu için bilim tarihinin Avrupamerkezci olmayan bir çerçevede yapılandırıldığı, kitap-içi atomik birimleri (kişi, yer, kavram, iddia) cross-reference ile birbirine bağlayan, dijital beşeri bilimler altyapısıyla beslenmeye hazır bir okuma grubu platformudur.

**Canlı yayın:** [alicetinkaya76.github.io/halka](https://alicetinkaya76.github.io/halka)

## Vizyon — üç eksen

**1. Bilgi grafiği.** Her kitap, içindeki kişi/yer/kavram/iddia atomlarına bölünür. Bu atomlar kitaplar arası tutarlı slug'larla birbirine bağlanır; "İbn Sînâ" Fara'da, Freely'de, Starr'da geçtiğinde aynı atomik sayfaya gider. Sonuç: müfredat ilerledikçe her yeni kitap eski kitapların değerini artırır — okuyucu kümülatif bir bilgi ağıyla karşılaşır.

**2. Tarihyazımı haritası.** Her kitabın yazarının dört eksende konumlandırması: Eurocentric ↔ Anti-Eurocentric, Bağdat-merkezci ↔ Multipolar, İçselci ↔ Dışsalcı, Çöküşçü ↔ Anti-çöküşçü. Bu haritalama okuyucunun "kitabın yazarı bana hangi yöntemsel çerçeveden bakıyor" sorusunu kitap-içi metni okumadan görmesini sağlar — Halka tartışmalarında ortak yöntemsel zemin kurar.

**3. DH altyapı entegrasyonu.** Halka, Türkiye akademisinin gelişen dijital beşeri bilimler altyapısıyla bağlanmaya hazır şekilde tasarlandı. Atomik kişi sayfaları `tabakat_io_id`, `dia_id`, `wikidata_id`, `viaf_id` alanlarını taşır; mekânlar `islamicatlas_id`, `pleiades_id`, `geonames_id` alanlarını taşır. Bu kimlikler bugün çoğunlukla boşta — ama şema, yarınki entegrasyon için hazır. (Bağlantılı projeler: [islamicatlas.org](https://islamicatlas.org), [tabakat.io](https://tabakat.io).)

## Mevcut durum (v0.9 — 1 Mayıs 2026)

**1. Dönem — Bilim Tarihinin Çerçevesi: 6/6 kitap tamamlandı.**

| # | Kitap | Yazar | Türkçe yayıncı | Akıcılık |
|---|---|---|---|---|
| 1 | Bilim: Dört Bin Yıllık Bir Tarih | Patricia Fara | Metis (2012) | Kolay |
| 2 | Batıdaki Doğu | Jack Goody | Alfa (2022) | Orta |
| 3 | Rönesanslar: Tek mi, Çok mu? | Jack Goody | İş Bankası KY (2015) | Orta |
| 4 | Batı Medeniyetinin Doğulu Kökenleri | John M. Hobson | Yapı Kredi (2019) | Zor |
| 5 | Işık Doğu'dan Yükselir | John Freely | Doğan Kitap (2014) | Orta |
| 6 | Kayıp Aydınlanma | S. Frederick Starr | Kronik Kitap (2019) | Orta |

**Sayısal durum:**
- 60 atomik tartışma sorusu (6 × 10)
- 6 kitap arası 32 cross-reference deklarasyonu
- 4 atomik dosya (Bîrûnî, Buhârâ, Tercüme Hareketi + büyüyor)
- Build: 14 sayfa, ~3-4 saniye, sıfır uyarı
- ZOD şeması v1.0 — kanıtlanmış (Hobson'dan beri 6 kitap için sıfır şema değişikliği; v0.9'da feedback uyumu için iki opsiyonel alan eklendi: `reading_level`, `accessibility_note`)

**Sonraki:** 2. Dönem (Doğu Bilim Geleneği ve İslam Bilimi) — 7. kitap olarak Pedersen, Sezgin/Lyons, Berkey adayları arasında karar (Faz 2 Kol B).

## Mimari özeti

- **Astro 5** + **TypeScript (strict)** + **Tailwind CSS** + **ZOD content collections**
- **GitHub Pages** + GitHub Actions CI/CD (`.github/workflows/deploy.yml`, her `main` push'unda)
- Tek-sayfalık dağıtım, JS bağımsız çalışır (statik HTML); arama (Pagefind) Faz 3'te eklenecek
- İçerik koleksiyonları: `books`, `people`, `places`, `concepts`, `claims` (Faz 2'de aktif), `discussions` (Faz 4'te aktif), `authors` (Faz 1 ortası)
- Slug konvansiyonu: `{soyad}-{baslik-slug}` kitaplar için, `{kisi-slug}` kişiler için, `{book-slug}::claim-NNN` iddialar için. Tam liste `src/content/config.ts` başında.

Geliştirme:
```bash
npm install
npm run dev      # http://localhost:4321/halka
npm run build    # dist/ üretir
npm run check    # Astro type-check
```

## Lisans

**Hibrit lisans** — kod ve içerik farklı lisanslar altında dağıtılır:

- **Kod** (Astro şablonları, `.astro` / `.ts` / `.js` dosyaları, Tailwind/Astro yapılandırması): [MIT Lisansı](LICENSE) — açık kaynak ekosistemde serbest kullanım, ticari uyumluluk, atıf zorunlu değil.
- **İçerik** (`src/content/` altındaki tüm `.md` dosyaları — kitap analitik özetleri, atomik kişi/yer/kavram dosyaları, claim/discussion kayıtları): [Creative Commons Atıf-AynıLisanslaPaylaş 4.0 Uluslararası (CC BY-SA 4.0)](LICENSE-CONTENT) — atıf zorunlu, türev eserler aynı lisansla paylaşılmalı.

Bu ayrımın gerekçesi: Halka'nın bilgi grafiği yapısının başka projelerin türev kullanımına açık tutulması (CC BY-SA → türev özgürlüğü + atıf güvencesi) ve Astro şablonunun açık kaynak ekosisteme katkı (MIT → ekosistem yumuşaklığı) hedeflerini birlikte korumaktır. Wikipedia/MediaWiki modeliyle uyumludur.

**Kapak görselleri:** Yayıncıların tanıtım malzemesidir, telif sahibi yayıncılarıdır. FSEK m.32 (eleştiri ve öğretim amacıyla iktibas) çerçevesinde, sayfa başında küçük boyutta atıflı olarak kullanılmaktadır. Yayıncı atıfları her kitap sayfasında `cover_credit` alanında verilir.

## Katkı

Halka şu anda bir kişinin (Ali Çetinkaya, Selçuk Üniversitesi) yürüttüğü bir projedir, ama yapısal olarak çoklu katkıya açık tasarlandı:

- **Yeni atomik dosya** (kişi/yer/kavram) eklemek için `src/content/people/`, `src/content/places/`, `src/content/concepts/` koleksiyonlarındaki şablonu izleyin. Şema doğrulaması ZOD ile yapılır; eksik veya yanlış alan build'i kırar (kasıtlı katılık).
- **Eleştirel okuma notu** veya **tartışma sorusu** önerileri için ilgili kitabın `.md` dosyasındaki `critical_reading_notes` veya `discussion_questions` array'ine PR.
- **Türkçe çeviri kalitesi**, **kapak/görsel telifi**, **sayfa düzeni** ile ilgili öneriler GitHub Issues üzerinden alınabilir.

**Halka WhatsApp grubundaysanız** feedback'leriniz `HALKA-FEEDBACK-vN.md` dosyalarına atomik birimler halinde işlenir; bu dosyalar repository'de açıktır (yarı-public yapısal feedback kaydı). Şu an aktif: [`HALKA-FEEDBACK-v0.8.md`](HALKA-FEEDBACK-v0.8.md).

## İletişim

- **Yürütücü:** Ali Çetinkaya, PhD — Selçuk Üniversitesi Bilgisayar Mühendisliği Bölümü
- **ORCID:** [0000-0002-7747-6854](https://orcid.org/0000-0002-7747-6854)
- **GitHub:** [alicetinkaya76/halka](https://github.com/alicetinkaya76/halka)
- **Twitter:** ileride

---

**Versiyon:** v0.9 — Faz 2 Kol A (feedback hızlı uyum)
**Son güncellenme:** 1 Mayıs 2026
