# HALKA — Grand Plan

> **Proje:** Halka · Bilim Tarihi Okuma Grubu Platformu
> **Sahibi:** Dr. Ali Çetinkaya (Selçuk Üniversitesi, Bilgisayar Mühendisliği)
> **Versiyon:** v0.8.3 — Faz 2 Kol B önceği polish: F1.3 tarihyazımı 2D scatter (3 yatay eksen+dot → tek SVG 2D dağılım, 6 kitap aynı görselde, çöküşçüler kırmızı kenarlı, çakışan noktalar vertical jitter ile ayrıldı) + F1.4 kapak yer tutucusu (header 2-kolon, cover_image dolarsa img/figcaption, boşsa dashed-border placeholder). Tek dosya değişikliği: `src/pages/kitaplar/[slug].astro`. Build temiz: 14 sayfa, 6.89s. Yorumcu 1'in v0.8 feedback'inden 2 ek madde kapatıldı; geri kalan F1.1 (arama) Kol B'ye ertelendi. v0.8.2 — Faz 2 Kol A (feedback hızlı uyum) tamamlandı: HALKA-FEEDBACK-v0.8 maddelerinden 4'ü kapatıldı (F1.6 stratejik okuma her kitaba, F1.7 akıcılık etiketi 3 renkli chip + tooltip, F1.8 içindekiler ilk kısımda, F2.5 tartışma soruları yukarıda + spoiler uyarı kutusu); şemaya 4 yeni alan eklendi; Pedersen tutarsızlığı bug-fix; sıfırdan README + hibrit lisans; v0.8.1 — Faz 0 KAPANDI: alicetinkaya76.github.io/halka canlıda; v0.8 — Fara açılış kitabı + 60 atomik tartışma sorusu, 1. dönem 6/6 = TAM (6/21 kitap toplam).
> **Son güncelleme:** 1 Mayıs 2026
> **Repo (planlanan):** github.com/alicetinkaya76/halka
> **URL (planlanan):** alicetinkaya76.github.io/halka

---

## 0. Bu belge nedir

Bu, Halka projesinin tek referans dokümanıdır. Her Claude oturumunun başında okunur, her oturumun sonunda güncellenir. Vizyonu, mimariyi, faz haritasını ve "şu anda neredeyiz, sırada ne var" sorularının cevabını içerir.

Üç katmandan oluşur:
1. **Vizyon ve mimari** — neden, ne, nasıl. Değişmez, sadece evrilir.
2. **Faz haritası** — her fazın hedefi, çıktısı, "tamamlandı" tanımı. Yavaş değişir.
3. **Şu anki durum** — hangi fazdayız, ne yaptık, sonraki oturum girişi. Her oturumda güncellenir.

---

## 1. Vizyon

Halka, Dr. Ali Çetinkaya'nın yürüttüğü bilim tarihi okuma grubudur. Üniversite öğrencileri ve mezunları, dört dönemde toplanmış 21+ kitabı sırayla okuyup tartışmaktadır. Halka platformu, bu okuma faaliyetinin **dijital bedenini** kurar.

Ama Halka platformu yalnızca bir okuma kulübü sitesi değildir. Üç eksende **alanında öncüdür**:

**Birinci eksen — Kitap bir özet değil, bir bilgi grafiği.** Her kitap, içindeki iddialara, kişilere, mekânlara, kavramlara, kaynaklara ayrıştırılır. Bunlar atomik nesnelerdir ve diğer kitaplarla kesişir. "İbn Sînâ" tek bir varlıktır — Starr'da, Sezgin'de, Goody'de geçer; her biri farklı yönünü vurgular. Halka, bu kesişimleri **otomatik** olarak ortaya çıkarır.

**İkinci eksen — Müfredat tarihyazımının kendisi haritalanır.** Westfall 1971'de yazdı, Hobson 2004'te. Westfall internalist, Hobson Eurocentric-eleştirel. Goody karşılaştırmacı, Starr Bağdat-eleştirel. Bu **tarihyazımı pozisyonları** birinci sınıf nesnedir; kitaplar bir tarihyazımı haritası üzerinde konumlanır. Öğrenci hangi yazarın hangi gelenekten konuştuğunu görür.

**Üçüncü eksen — Mevcut DH ekosistemine entegre.** Halka, Ali Çetinkaya'nın inşa ettiği zengin altyapıya bağlanır:
- Geçen kişiler → tabakat.io (23 bin âlim)
- Geçen yerler → islamicatlas.org (Makdisî, Le Strange, Evliya, Battûta katmanları)
- Geçen eserler → GAS / Brockelmann GAL pipeline
- Geçen kavramlar → DİA RAG sistemi (8.528 madde)
- Otomatik bağlama, bidirectional referans, ortak bilgi havuzu

Bu üç eksenin kombinasyonu, dünyada başka hiçbir okuma grubu platformunda yoktur. Parçalar başka platformlarda var:
- **Hypothes.is** — annotation katmanı sunar ama knowledge graph yok
- **Connected Papers** — citation graph üretir ama kullanıcı korpusu yok
- **Pelagios** — antik dünya gazetteer'ı, ama tek dataset
- **Newton Project** — tek yazarın derin sayısallaştırması
- **Republic of Letters** — tek tema, mektup ağı
- **Goodreads grupları** — sosyal okuma, ama yapısal bilgi yok

Halka, **kullanıcı tarafından küratörlüğü yapılan bir müfredatın bilgi grafiğine dönüşmesi + bu grafiğin profesyonel DH altyapısına bağlanması + tartışmaların kalıcı annotation olması** üçlemesini kuran ilk platformdur.

---

## 2. Çekirdek içgörü

NotebookLM'in problemi sunum kalitesi değil, **bilginin birikmemesidir**. Her kitap kapalı bir kutudur; bir sonraki kitapla konuşmaz. Halka platformu bunu tersine çevirir:

> Her kitap okundukça, tüm önceki kitapların değeri **artar**.
> Çünkü her yeni kitap, eski kitaplarda geçen kişilere/yerlere/kavramlara yeni katman ekler.

Birinci kitabı okuduğunda elinde kitap özeti var. Onuncu kitabı okuduğunda elinde **birbirine bağlı bir bilgi ağı** var. Yirmi birinci kitabı bitirdiğinde Türkçe'de bilim tarihi için referans bir kaynak inşa etmiş oluyorsun.

Bu, NotebookLM'in mimari olarak yapamayacağı şeydir. NotebookLM her notebook'u izole tutar. Halka her kitabı bağlar.

---

## 3. Veri mimarisi

### 3.1 Çekirdek nesneler

Platform, on temel nesne türü etrafında inşa edilir:

**Book (Kitap)** — birincil birim. Yazar, yıl, dil, dönem, coğrafya, tarihyazımı pozisyonu, ana tez, bölümler.

**Claim (İddia)** — bir kitabın yaptığı atomik önerme. "İbn Sînâ 980'de Buhârâ'da doğdu." "Tercüme hareketi Abbasî hilafetinin himayesindeydi." "İslam biliminin gerilemesi Gazzâlî ile başladı." Her iddia bir kitaba aittir; başka iddialarla çatışabilir/uyuşabilir.

**Person (Kişi)** — adı geçen birey. tabakat.io'ya bağlanır.

**Place (Mekân)** — coğrafi yer. islamicatlas.org'a bağlanır.

**Event (Olay)** — tarihsel hadise. Zaman + yer + kişi.

**Concept (Kavram)** — fikir, akım, kurum. "Tercüme hareketi", "Beytülhikme", "Mu'tezile".

**Source (Kaynak)** — kitabın atıf yaptığı birincil kaynak. Arapça/Latince/Yunanca orijinal metin.

**Author (Yazar)** — kitabı yazan kişi. Milliyet, dönem, entelektüel gelenek, tarihyazımı pozisyonu.

**Discussion (Müzakere)** — Halka oturumu kaydı. Tarih, katılımcılar, kilit içgörüler, üye katkıları.

**Annotation (Not)** — bir iddia üzerine düşülen not. Üyenin sorusu, eleştirisi, bağlantısı.

### 3.2 Önemli ilişkiler

- Book → makes → Claim
- Claim → about → Person/Place/Event/Concept
- Claim → conflicts_with → Claim (başka kitapta)
- Claim → supports → Claim (başka kitapta)
- Claim → cites → Source
- Author → influenced_by → Author
- Author → school_of → HistoriographicalTradition
- Discussion → annotates → Claim/Book
- Member → contributed → Annotation

İddiaların `conflicts_with` ilişkisi platformun en kıymetli özelliğidir. Çünkü iki kitap aynı olay için farklı şey diyorsa, öğrenci için en pedagojik moment budur.

### 3.3 Görünümler

Veri tek; görünümler çok:

1. **Book sayfası** — tek kitap, tüm verisi (mockup'taki gibi)
2. **Claim debate sayfası** — "Beytülhikme'nin entelektüel merkezi neresiydi?" → 4 kitap farklı cevap, yan yana
3. **Person sayfası** — "İbn Sînâ" → onu konu eden tüm kitaplar, her birinin vurgusu, tabakat.io ve DİA bağlantıları
4. **Concept sayfası** — "Tercüme hareketi" → tüm iddialar, zaman çizelgesi, coğrafi yayılım
5. **Tarihyazımı haritası** — 2D harita: Eurocentric ↔ Anti-Eurocentric × İçselci ↔ Dışsalcı; kitaplar konumlanır
6. **Genel zaman çizelgesi** — olaylar, kitaplar, yazarlar; paralel raylarda
7. **Genel coğrafi harita** — tüm kitaplarda geçen yerler, kitap bazında renklendirme
8. **Halka panosu** — takvim, okunan/okunacak, katılım
9. **Müzakere arşivi** — geçmiş oturumların aranabilir kaydı
10. **Kaynak izleme** — büyük iddialar için orijinal Arapça/Latince kaynağa link

### 3.4 Repo yapısı

```
halka/
├── HALKA-GRAND-PLAN.md          # bu belge
├── README.md                     # halka açıklaması (kamuya açık)
├── content/
│   ├── books/
│   │   ├── starr-kayip-aydinlanma.md
│   │   ├── freely-isik-dogudan.md
│   │   └── ...
│   ├── people/
│   │   ├── ibn-sina.md
│   │   ├── biruni.md
│   │   └── ...
│   ├── places/
│   ├── concepts/
│   ├── claims/
│   └── discussions/
├── data/
│   ├── relationships.json        # otomatik üretilir
│   └── timeline.json
├── src/                          # Astro kaynak
└── public/
```

Her `*.md` dosyası YAML frontmatter + serbest metin içerir. Frontmatter yapısal veriyi tutar (Astro'nun content collections sistemi otomatik tipler). Metin gövdesi insan-okunur özet/yorumdur.

### 3.5 Teknoloji yığını

- **Astro** — static site generator, content collections, MDX desteği
- **TypeScript** — content schema validation
- **Tailwind** — minimal styling
- **D3** veya **visx** — timeline ve harita
- **Leaflet** — coğrafi harita
- **Pagefind** — istemci taraflı arama
- **GitHub Pages** — hosting (sıfır maliyet)
- **GitHub Actions** — otomatik build/deploy
- (Sonraki fazda) **Anthropic API** — claim extraction, conflict detection

Sürdürülebilirlik için seçimler: tek kişilik ekiple çalışabilen, ücretsiz hostlanan, sıfır server'lı, markdown tabanlı (bu yüzden taşınabilir).

---

## 4. Faz haritası

Yedi faz. Her faz **bağımsız değer** üretir; sonraki faza geçmeden önce o değerin sahaya çıktığından emin olurz. Bu, projenin yarım kalsa bile bir yerde anlamlı durmasını sağlar.

### Faz 0 — Tohum

**Hedef:** Tek bir kitabın (Frederick Starr — Kayıp Aydınlanma) uçtan uca işlenmiş olması. Mimarinin gerçek içerikle test edilmesi.

**Çıktılar:**
- Repo açıldı, Astro iskeleti kuruldu
- `starr-kayip-aydinlanma.md` — yapılandırılmış frontmatter + uzun analitik özet
- 8-12 person.md (Starr'ın merkezdeki figürleri)
- 6-10 place.md (Buhârâ, Semerkant, Merv, Belh, Harezm, Fârâb…)
- 5-8 concept.md (Tercüme hareketi, Sâmânî himayesi, Cundişâpûr mirası…)
- 30-50 claim.md (kitabın temel iddiaları)
- Book sayfası şablonu (mockup'taki gibi) çalışır halde
- Person/place/concept sayfaları minimal halde
- Anasayfa: müfredattaki tüm kitapların kart listesi (1 tanesi dolu)
- GitHub Pages'e deploy

**Tamamlandı tanımı:** 27 Nisan akşamı Halka oturumundan önce Starr sayfası açılıp paylaşılabilir durumda.

**Süre:** 1 hafta (6 oturum × ortalama 1.5 saat).

### Faz 1 — Müfredat

**Hedef:** Tüm 21 kitabın sisteme girmiş olması. Geçmişte okunanlar geriye dönük doldurulur, gelecekte okunacaklar minimum metadatayla yer tutar.

**Çıktılar:**
- 21 book.md (5'i tam dolu, 16'sı temel metadatayla)
- 100+ person.md
- 60+ place.md
- 40+ concept.md
- 200+ claim.md
- Müfredat anasayfası: 4 dönem, 21 kitap, durum (okundu/okunuyor/sırada)
- Pagefind tam metin arama
- Kitap-içi navigation (önceki/sonraki kitap)

**Tamamlandı tanımı:** Halka katılımcısı siteye girip sıradaki kitaba bakabiliyor, geçmiş kitapları gözden geçirebiliyor.

**Süre:** 4-6 hafta. Her hafta o haftanın kitabı + bir geriye dönük kitap.

### Faz 2 — Bağ

**Hedef:** Çapraz referans motoru. Knowledge graph'ın aktifleşmesi.

**Çıktılar:**
- Build sırasında otomatik üretilen `relationships.json`
- Person sayfası: o kişiyi konu eden tüm kitaplar, her birinin vurgu farkı
- Concept sayfası: o kavramın geçtiği tüm kitaplar, tarihsel evrimi
- Claim conflict detection: çatışan iddialar listesi
- Tarihyazımı haritası (interaktif, 2D)
- Genel timeline (D3 veya visx ile)
- Genel coğrafi harita (Leaflet)

**Tamamlandı tanımı:** "Beytülhikme" sayfasına gidince Freely, Starr, Hobson, Lyons, Sezgin'in ne dediğini yan yana görebiliyorum. Çatışmalar açıkça işaretlenmiş.

**Süre:** 3-4 hafta.

### Faz 3 — Köprü

**Hedef:** Halka'yı mevcut DH altyapısına bağlamak.

**Çıktılar:**
- Person entries `tabakat_io_id` ve `dia_id` alanlarıyla zenginleştirildi
- Person sayfasında otomatik link: tabakat.io profili, DİA maddesi, GAS girişi
- Place entries `islamicatlas_id` alanıyla
- Place sayfasında islamicatlas.org haritasında nokta linki
- Source entries GAS / Brockelmann ID
- (Opsiyonel) islamicatlas.org tarafına bidirectional badge: "Bu yer Halka'da X kitabında geçiyor"

**Tamamlandı tanımı:** Bir Halka kullanıcısı İbn Sînâ sayfasında okuduktan sonra "tabakat.io'da daha fazla" linkine tıklayıp profesyonel DH ekosistemine geçebiliyor.

**Süre:** 2-3 hafta.

### Faz 4 — Müzakere

**Hedef:** Halka oturumlarının dijital bedeni. Tartışmaların kalıcılaştırılması.

**Çıktılar:**
- `discussions/` koleksiyonu: her oturum bir markdown
- Frontmatter: tarih, kitap, katılımcılar, süre
- Gövde: kilit içgörüler, üye katkıları, ortaya çıkan sorular
- Discussion → annotates → Claim/Book ilişkisi
- Book sayfasında "Halka'da neler konuşuldu" bölümü
- Discussion arşivi sayfası (aranabilir)

**Karar gereken:** Notlar Ali tarafından mı yazılıyor (post-session), yoksa katılımcılar mı (live, bir tool ile)?

**Tamamlandı tanımı:** Halka'da geçen bir tartışmayı 6 ay sonra arayıp bulabilirim.

**Süre:** 2 hafta + her oturum sonrası 30 dakika.

### Faz 5 — Zekâ

**Hedef:** AI ile içerik üretimini hızlandırmak. NotebookLM'in yerini almak — ama bu sefer yapılandırılmış formatta.

**Çıktılar:**
- Anthropic API entegrasyonu (web tabanlı küçük araç, GitHub Pages'te koşar)
- "Kitap PDF/metnini yapıştır → Claude ile structured frontmatter üret" workflow
- Otomatik claim extraction
- Otomatik conflict detection (LLM ile)
- Otomatik tartışma sorusu önerisi
- Birincil kaynak alıntılarının çevirisi/transliterasyonu

**Tamamlandı tanımı:** Yeni bir kitap eklemek 8 saatten 2 saate iniyor. Kalite düşmüyor.

**Süre:** 3-4 hafta.

### Faz 6 — Yayın

**Hedef:** Bu platformu akademik bir çıktıya dönüştürmek. Doçentlik dosyana güçlü bir Q1 girişi.

**Olası dergiler:**
- *Digital Scholarship in the Humanities* (Q1, Oxford UP) — zaten DSH-2026-0184 ile orada bir sürecin var
- *Journal of the Association for Information Science and Technology* (Q1, Wiley)
- *Digital Humanities Quarterly* (open access, prestijli)
- *Computers and the Humanities* (Q1)
- *İnsan ve Toplum* veya benzer Türkçe Q-dergi (paralel TR yayın)

**Olası başlık çekirdeği:**
> "Bridging public-history reading groups with digital humanities infrastructure: A graph-based platform for community study of historiographical literature"

**Argüman:** Halka, kullanıcı küratörlüğünde bir korpusu (21 kitap) profesyonel DH altyapısına (kişi/yer/kavram veritabanları) bağlayan ilk platformdur. Hem pedagojik bir araç hem de tarihyazımı meta-analizi için bir methodoloji önerir. Vaka çalışması: Türkçe bilim tarihi okuma grubu.

**Çıktılar:**
- Makale çekirdeği (8-10K kelime)
- Reproducible build pipeline
- Veri açık (CC-BY 4.0)
- Kod açık (MIT)
- Workshop / sunum (ör. DH 2027)

**Süre:** Bağımsız değil; Faz 2 bittikten sonra paralel başlatılabilir, Faz 4 sonrasında tamamlanır.

---

## 5. Şu anki durum

**Faz:** 1 — Müfredat (Faz 0 iskelet bekliyor; Faz 1 ilerliyor: 5/21 kitap tam dolu)
**Tarih:** 30 Nisan 2026 (v0.7 oturumu)

**Tamamlananlar (v0.1–v0.7 toplamı):**
- ✓ Vizyon ve mimari netleştirildi (bu belge)
- ✓ Mockup üretildi (single book page tasarımı)
- ✓ **Mimari kararlar sabitlendi (v0.3, §12'ye bakın):** Astro seçildi, slug konvansiyonu, ilişki enumerasyonu, claim ID namespace'i kapalı sözleşme olarak `src/content/config.ts` ZOD şemasına yazıldı
- ✓ **Astro iskeleti kuruldu:** 7 koleksiyon (books/people/places/concepts/claims/discussions/authors), 5 sayfa şablonu, Tailwind tipografi, sticky TOC, tarihyazımı pozisyon görselleştirmesi, otomatik reverse-lookup
- ✓ **Üç atomik şablon üretildi:** Bîrûnî (kişi), Buhârâ (yer), Tercüme Hareketi (kavram)
- ✓ **Beş kitap tam dolu:** Starr Kayıp Aydınlanma (#6, ~3700 kelime), Hobson Batı Medeniyetinin Doğulu Kökenleri (#4, ~3700 kelime), Goody Batıdaki Doğu (#2, ~3300 kelime), Goody Rönesanslar (#3, ~2100 kelime, en zengin frontmatter: 17 kişi/11 yer/14 kavram/8 bölüm/9 ilişki), **Freely Işık Doğudan Yükselir (#5, ~2760 kelime gövde, 20 kişi/12 yer/14 kavram/19+1 bölüm/9 ilişki — Goody-R'dan da zengin frontmatter)** — toplam **75 atomik iddia, ~15.560 kelime gövde**
- ✓ **Müfredat-içi cross-reference ağı genişledi:** Dört düğümlü ağ (Goody-BD, Goody-R, Hobson, Starr) v0.6'da kurulmuştu; v0.7'de Freely beşinci düğüm olarak eklendi. Yeni teknik vakalar:
  - **Freely claim-003 → Hobson claim-005, Westfall ile çelişki** (Bilim Devrimi'nin İslam matematik öncülleri)
  - **Freely claim-004 → Hobson claim-005, Goody-R claim-004** (Tusi-Urdi-Şâtır-Kopernik matematik özdeşliği — Halka'nın anti-Eurocentric kampının en sert teknik silahı)
  - **Freely claim-005 → Goody-R claim-004** (İbnü'l-Heysem perspektif vakası, Belting 2008 ile birebir paralel)
  - **Freely claim-006 → Goody-R claim-007** (Cündişapur'un Bağdat öncülü olduğu vakası — iki kitap aynı kanıt zincirini paylaşır)
  - **Freely claim-013 → Hobson claim-003, Goody-BD claim-014** (Newton'un Arap alimleri zikretmediği gözlemi — tarihyazımı tezi)
  - 9 kitap-düzeyi ilişki deklarasyonu (Starr ile `kismen_celisir`, Hobson + Goody-R + Goody-BD ile `tematik_tamamlayici`, Westfall ile `celisir`, Lyons + Sezgin + Gutas ile `dogrudan_kaynak`, Huff ile `kismen_celisir`, Fara ile `tematik_tamamlayici`)
  - Toplam müfredat-içi ilişki sayısı: **13 → 22 deklarasyon** (Freely tek başına 9 kitap-ilişkisi ve 5 cross-claim destek getirdi)
- ✓ **Halka müfredat haritasında ilk "kanonik" anti-Eurocentric anlatı tanımlandı:** Freely Bağdat-Beytü'l-Hikme-Kopernik linear zincirinden anlatı kuran 'klasik' anti-Eurocentric tutumun temsilcisi. Goody'nin çoklu rönesans çerçevesi, Hobson'un küresel ekonomi çerçevesi ve Starr'ın Mâveraünnehir tersine çevirisi bu kanonik anlatının üç farklı eleştirisi olarak konumlandı. Halka müfredatının dört anti-Eurocentric kitabının (Goody-BD, Goody-R, Hobson, Freely) bir kavramsal blok oluşturduğu artık metin-içinde belgeli.
- ✓ **25 Nisan oturum tutanağı stub'ı hâlâ doldurulmayı bekliyor** (sessions/2026-04-25-starr-kayip-aydinlanma.md)
- ✓ **Build temiz:** v0.7'de 13 sayfa, 8.80 saniye, sıfır uyarı; ZOD şeması beş kitap için de geçerli kaldı (Hobson'dan beri şema değişikliği gerekmedi — şablonun en güçlü dayanağı)
- ✓ GitHub Actions deploy workflow yazıldı (`.github/workflows/deploy.yml`)
- ✓ README, .gitignore, favicon, package.json, tsconfig.json hazır

**Yapılacaklar (Faz 0 kalanları, ufak):**
1. `github.com/alicetinkaya76/halka` repo'sunu aç
2. Lokal `halka/` dizinini push et
3. Repo Settings → Pages → Source: GitHub Actions seç
4. Push sonrası Actions çalışır, alicetinkaya76.github.io/halka açılır

**Faz 1 ilerleme tablosu:**
| Sıra | Kitap | Durum |
|------|-------|-------|
| 1 | Fara — Bilim: Dört Bin Yıllık Bir Tarih | ✓ tam (v0.8) — 1. dönemin generalist açılış kitabı |
| 2 | Goody — Batıdaki Doğu | ✓ tam (v0.5) |
| 3 | Goody — Rönesanslar | ✓ tam (v0.6) |
| 4 | Hobson — Batı Medeniyetinin Doğulu Kökenleri | ✓ tam (v0.4) |
| 5 | Freely — Işık Doğudan Yükselir | ✓ tam (v0.7) |
| 6 | Starr — Kayıp Aydınlanma | ✓ tam (v0.3) |
| 7-21 | (sonraki dönemler) | bekliyor |

**Halka 1. dönem stratejisi (v0.7'de berraklaştı):** Fara (#1) bittiğinde 1. dönem kapanır (6/6) ve müfredatın kavramsal-yöntemsel dört köşesi kurulmuş olur:
- *Yapısal-karşılaştırmacı yöntem* (Goody #2 + #3) — kategorilerin ve kanonun eleştirisi
- *Küresel-ekonomik yöntem* (Hobson #4) — yapı analizinin küresel-tarihsel zemini
- *Arşivsel-dokunulabilirlik yöntemi* (Freely #5) — tezin maddi-belgesel zemini
- *Bölgesel-derinleştirici yöntem* (Starr #6) — yöntemin spesifik vaka uygulaması
- *Generalist sentez* (Fara #1) — bu dört köşenin önündeki panoramik çerçeve

**Cevaplanmış kararlar:**
- [x] Astro mı MkDocs mı → **Astro**
- [x] Site görünürlüğü → **kamuya açık** (CC BY 4.0 içerik, MIT kod)
- [x] Slug konvansiyonu → kitaplar `{soyad}-{baslik}`, kişi/yer/kavram tek-parça, claim'ler `{book-slug}::claim-NNN`
- [x] Atomik dosyalar şimdi mi sonra mı → **şimdi** (3 örnek üretildi, şema sınandı)

**Hâlâ açık olan kararlar:**
- [ ] Halka markası altında başka okuma grupları olacak mı
- [ ] Custom domain (Faz 3'ten önce karar verilmesi gerekmiyor)
- [ ] **Tartışma sorusu sayısı kalibrasyonu:** Starr 10, Hobson 8, Goody-Batıdaki-Doğu 8, Goody-Rönesanslar 8, Freely 8 — 25 Nisan oturum tutanağı geldikten sonra beş kitap birlikte revize edilecek (8'i tut / 10'a çıkar / 7'ye indir)
- [ ] **Body uzunluk politikası:** Goody-R 2100, Freely 2760, Goody-BD 3300, Starr 3700, Hobson 3700 kelime. Şablon "frontmatter zenginliği vs gövde uzunluğu" trade-off'unu kabul ediyor mu yoksa minimum body sınırı (≥3000) getirmeli mi?

**Kullanıcı geri bildirimleri için bekleyenler:**
- 25 Nisan Halka oturum tutanağı (hâlâ stub)
- Tartışma sorularının kalitesi
- Beş kitap için book sayfasının görsel tasarımı (sticky TOC, tarihyazımı eksenleri, atomik iddia kartları, beş düğümlü cross-reference ağı)

---

## 6. Sonraki oturum girişi

> Bu bölüm her oturum sonunda güncellenir.

**Sonraki oturum başlangıcı için söylenecekler:**

> "HALKA-GRAND-PLAN.md'yi oku. v0.7'de Faz 1'in 5/21 kitabı tam: Goody-Batıdaki-Doğu (#2), Goody-Rönesanslar (#3), Hobson (#4), Freely (#5), Starr (#6). 1. dönemin tek eksiği Fara (#1) — generalist açılış kitabı. Cross-reference ağı 22 deklarasyona ulaştı; Halka'nın anti-Eurocentric kampının en sert teknik silahı v0.7'de kuruldu: Freely claim-004 (Tusi-Urdi-Şâtır-Kopernik matematik özdeşliği, Swerdlow-Neugebauer 1984 ve Ragep 1993'e dayalı) → Hobson claim-005 + Goody-R claim-004 ile çift yönlü destek. İlk "kanonik" anti-Eurocentric anlatı (Freely'nin Bağdat-merkezci Greko-Arap-Latin linear zinciri) ile üç farklı eleştirisi (Goody çoklu rönesanslar, Hobson küresel ekonomi, Starr Mâveraünnehir tersine çevirisi) artık metin-içinde belgeli. Sıradaki öncelikler: (1) 25 Nisan oturum tutanağının durumunu sor — hâlâ stub mu? Doldurulduysa beş kitabın discussion_questions sayısını birlikte revize et (Starr 10, diğer dördü 8'e kalibre edilecek). (2) Faz 1'in son kitabı: **Fara — Bilim: Dört Bin Yıllık Tarih** (Oxford UP 2009; Türkçesi mevcut). 1. dönemin generalist açılış kitabı; Goody-Hobson-Starr-Freely'nin eleştirel arka planını çekiyor. *Olçek karşıtlığı* ilişkisi (Goody'nin klasik dönem yoğunluğuna karşı 4000 yıllık panoramik bakış) ve Freely ile *tematik_tamamlayici* zaten deklare edildi. PDF/baskı bilgisi bu oturumun başında istenir. (3) Atomik dosyalar dalgası: Beş kitabın paylaştığı en yüksek öncelikli atomik adaylar v0.7 sonrası daha da netleşti. (4) Faz 0 son adımı: GitHub repo + Pages aktivasyonu, içerik üretiminden bağımsız paralelleştirilebilir. Mimari sözleşme `src/content/config.ts`'te yazılı; beş kitap için tek değişiklik gerekmedi — şablon olgunluğu Fara'dan sonra v1.0 olarak işaretlenebilir."

**Açık görevler (öncelik sırasıyla):**

1. **25 Nisan oturum tutanağı geri bildirimi** (en yüksek öncelik, çünkü bu Goody-BD + Goody-R + Hobson + Starr + Freely beşinin toplu revizyonunu açar):
   - sessions/2026-04-25-starr-kayip-aydinlanma.md doldurulduysa: tartışma sorusu sayısı kararını ver (8 mi 10 mu 7 mi?), atomik iddia formatının çalışıp çalışmadığını söyle, sticky TOC ve site UX'i hakkında geri bildirim ver
   - Dolu hali geldikten sonra: beş book.md'nin discussion_questions ve critical_reading_notes alanları aynı oturumda revize edilir

2. **Fara (#1) book.md** (~1.5 saat tahmin):
   - **Patricia Fara — *Science: A Four Thousand Year History*** (Oxford UP 2009; Türkçesi mevcut). 1. dönemin açılış kitabı, generalist sentez. Halka'nın çerçeve dönemi için en doğal "giriş" kitabı; Goody-Hobson-Starr-Freely'nin eleştirel arka planını çekiyor.
   - Halka'da deklare edilmiş ilişkiler:
     - Goody-Rönesanslar tarafından *olçek_karsitligi* (4000 yıllık panoramik bakış vs Goody'nin klasik dönem yoğunluğu)
     - Freely tarafından *tematik_tamamlayici* (panoramik çerçeve + İslam derinleşmesi)
   - Fara bittiğinde 1. dönem 6/6 kapanır. Şablonun "v1.0 — kanıtlanmış" eşiği geçilir.
   - PDF/baskı Ali tarafından paylaşılacak.

3. **Faz 0 son adımı: GitHub Pages aktivasyonu** (paralelleştirilebilir, ~15 dk):
   ```bash
   cd /Volumes/LaCie/halka  # ya da yeni konum
   git init && git add . && git commit -m "Halka v0.7 — Faz 1 beş kitap, cross-ref ağı 22 deklarasyon, Freely kanonik anti-Eurocentric anlatı eklendi"
   git branch -M main
   git remote add origin git@github.com:alicetinkaya76/halka.git
   git push -u origin main
   # Sonra: GitHub web → Settings → Pages → Source: GitHub Actions
   ```

4. **Faz 1 paralel iş — atomik dosyalar:** Beş kitabın paylaştığı en yüksek öncelikli atomik adaylar v0.7 sonrası belirginleşti (Freely'nin getirdiği yeni önemli figürler eklendi):
   - **Max Weber** (`weber::bati-akilciligi`): Goody-BD claim-002, Goody-BD claim-008, Goody-R'de örtük arka plan; Hobson Bölüm 1'de doğrudan polemik hedefi; Starr'da metodolojik atıf. Beş kitabın da kavramsal merkez rakibi.
   - **İbn Heysem** (`ibn-heysem`): Goody-R claim-009'un somut taşıyıcısı + **Freely claim-005'in ana figürü** (1028 *Kitâbü'l-Menâzır*); Bölüm 8 ana sahnesi. v0.7 sonrası en yüksek öncelikli atom.
   - **Halife Memun** (`halife-memun`): Goody-R claim-005'in + **Freely Bölüm 4'ün** kurucu öznesi; Bağdat çeviri hareketinin ana hâmisi.
   - **Nasîreddin Tusi** (`nasireddin-tusi`): **Freely claim-004'ün matematik figürü** (Tusi çifti). Maraga ekolünün kurucusu. Halka'da hâlâ atomik dosyası yok — kritik eksik.
   - **İbnü'ş-Şâtır** (`ibnus-satir`): **Freely claim-004'ün teknik özdeşlik figürü** (Ay modeli Kopernik'inkiyle özdeş). Halka'nın anti-Eurocentric kampının en somut teknik silahının taşıyıcısı.
   - **Cündişapur Akademisi** (`cundisapur`): Goody-R Bölüm 4 + **Freely Bölüm 3'ün** ortak öncülü. Lyons #9 ve Gutas #10 için ön atom.
   - **A.I. Sabra** (`sabra-ai`): **Freely Bölüm 19'un kavramsal merkezi** (asimilasyon-yerlileştirme tezi). Modern akademisyen — "atomik person" mu yoksa "source" koleksiyonu mu sorusu açılır.
   - **Aydın Sayılı** (`aydin-sayili`): **Freely Bölüm 19'un Türk-İslam akademisi içi sesi** (marjinalleşme tezi). Sarton'un ilk doktora öğrencisi.
   - **Hans Belting** (`belting-hans`): Goody-R Bölüm 4'ün modern referansı; Freely İbnü'l-Heysem zinciriyle de bağlanır.
   - Bu dokuz atom kurulduğunda Faz 2 cross-reference motorunun reverse-lookup'ı dolu işlemeye başlar — özellikle Weber sayfası beş kitaptan da, İbn Heysem sayfası iki kitaptan, Tusi-Şâtır sayfaları teknik kanıt zinciri için kritik.

5. **Faz 1 sonrası dalga:** Faz 1'in kalan tek kitabı Fara (#1) bittiğinde 1. dönem kapanır (6/6). Sonra 2. dönem (Doğu Bilim Geleneği): Pedersen (#7), Sezgin (#8), Lyons (#9), Gutas (#10). Goody-Rönesanslar'ın ve Freely'nin `dogrudan_kaynak` deklarasyonları (Lyons + Gutas + Sezgin + Pedersen) bu geçişi şimdiden hazırladı.

**Düşünülmeyen ama düşünülmesi gereken:**
- **Discussion arşivi (Faz 4):** sessions/ klasörü zaten var (template + 25 Nisan stub). v0.7'de hâlâ 1 tutanak stub'ı vardır; Faz 1 bittiğinde tutanak sayısı 6'ya çıkar. Bu noktada `discussions` koleksiyonunu ZOD şemasına bağlama zamanı gelir.
- **Astro v5 deprecation:** `getCollection` API uyumlu, `loader` API'si gelecekte tercih edilecek.
- **Tailwind v4 geçişi:** v4 stabil olduğunda göç düşünülebilir.
- **Pagefind tam metin arama:** Faz 1 sonu (6 kitap dolu) iyi bir an — anasayfa üst köşesinde arama kutusu çıkar.
- **`weber::bati-akilciligi` gibi kişi-claim slug'ları:** Goody-BD claim-002/008 ve dolaylı Goody-R + Freely + Hobson atıfları Weber'in spesifik tezini hedefler. Şu an `debate_with` alanı serbest string olarak tutulduğu için sorun yok ama Faz 2'de bu slug'ları çözecek bir kontrol script'i lazım — ya person.md frontmatter'ında `notable_theses` array'i olmalı, ya da claims koleksiyonu kişiler için de açılmalı.
- **Şablon olgunluğu:** Beş kitap aynı şemayla geçtikten sonra (Hobson'dan beri sıfır şema değişikliği), şablon "v1.0 — kanıtlanmış" eşiğine bir kitap kalmış oldu. Fara bittiğinde bu rapor yazılır.
- **Body uzunluk dengesi:** Goody-Rönesanslar 2100, Freely 2760, Goody-BD 3300, Starr 3700, Hobson 3700 kelime. Kasıtlı bir trade-off mu (frontmatter zenginliği vs gövde uzunluğu) yoksa zayıflık mı — 25 Nisan tutanak revizyonu sırasında karara bağlanır. Freely'nin 2760 kelimesi orta yol önerir.
- **Halka'nın "iki kullanım" vakası:** Toby Huff Halka müfredatında iki farklı politik konumda. Freely Bölüm 19'da Huff'ı olumlu kabul eder; Hobson #4 Huff'ı (kendi karşısındaki #18 olarak) Avrupamerkezci kategorinin temsilcisi diye eleştirir. Bu, "aynı modern akademisyenin müfredatta iki farklı politik kullanımı" vakasıdır ve Faz 4'te açık bir tartışma sorusu olarak kayda geçer.

---

## 7. Tasarım ilkeleri (her zaman geçerli)

Bu ilkeler, faz değişse de değişmez. Yeni bir özellik eklerken bunlara uyup uymadığı sorulur.

**1. Veri sahibi insan, üreteci AI.** Claude content üretebilir, ama her şey markdown olarak repo'da yaşar. İnsan istediği zaman düzeltir, sürüm kontrolünden takip eder. Bilgi hiç kimsenin sunucusunda kilitli değildir.

**2. Statik > dinamik.** Server yok, veritabanı yok, login yok. Build edilen HTML/JS sadece. Bu sürdürülebilirliği garantiler — 5 yıl sonra başka biri devraldığında hâlâ çalışır.

**3. Birinci sınıf nesneler.** Kişi, yer, kavram, kaynak — bunlar sayfalardır, etiketler değil. Tıklanırlar, sayfaları vardır, başka şeylere referans verir/alır.

**4. Tarihyazımı görünür.** Hangi yazarın hangi gelenekten konuştuğunu öğrenci görmeli. Bu, salt özet sitelerin asla yapmadığı şeydir.

**5. Bağ atomu kıymetli.** İki kitabın aynı kişi hakkında farklı şey demesi, en pedagojik andır. Bu görünürlük, platform mimarisinin merkezindedir.

**6. Halka önce, ölçek sonra.** Önce kendi okuma grubun için faydalı olsun. Sonra başkaları faydalansın. Önceliği "kitlesel kullanıcı" değil "kullanıcı = sen + Halka" üzerinden tut.

**7. NotebookLM'i değil, kendini yarış.** Kıyas zayıf. NotebookLM bir özetleyici; Halka bir bilgi mimarisi. Aynı sınıfta değiller. Hedef: 21 kitap bittiğinde Türkçe'de bilim tarihi okuyan herkesin başvuracağı kaynak.

**8. Açık kaynak, açık veri.** Kod MIT, içerik CC-BY 4.0. Çünkü ölçek ve etki ancak böyle gelir; çünkü doçentlik için reproducibility önemli; çünkü doğrusu bu.

---

## 8. İlhamlar ve referanslar

Bu projeye en yakın olan, ondan öğrenebileceğimiz girişimler:

- **Pelagios Network** — antik dünya gazetteer'ı; bizim place altyapımızın modeli
- **Newton Project (Sussex)** — tek yazarın tüm yazılarının yapısal sayısallaştırması; bizim claim modelimizin ilhamı
- **Republic of Letters (Stanford)** — mektup ağları; bizim influence/conflict graph'ımızın akrabası
- **Quill (Hypothes.is)** — annotation katmanı; Faz 4 için referans
- **Wikidata** — entity ID'leri; bizim person/place ID'lerimizi onlara bağlayabiliriz
- **OpenITI** — Arapça korpus; senin zaten erişimin var, kaynak izlemede kritik
- **Perseus Digital Library** — klasik metinler için orijinal-tercüme paralel; Faz 5'te source yapısı için model

Doğrudan kıyaslanabilecek bir Türkçe DH platformu yok. Bu boşluk, Halka'yı Türkçe DH literatüründe **bir referans noktası** yapma fırsatıdır.

---

## 9. Risk ve sınırlar

Dürüst olmak gerekirse:

**Risk 1 — Tek kişi yorgunluğu.** 21 kitap × ~6 saat içerik üretimi = ~120 saat. Bu, ders ve diğer projeler arasında erimeden götürülmesi zor bir yüktür. *Hafifletme:* Faz 5 (AI augmentation) burada kritik. Önce manuel yap, sonra AI ile hızlandır. Ayrıca Halka katılımcılarından bazıları (özellikle lisansüstü olanlar) içerik üretimine dahil edilebilir.

**Risk 2 — Telif sınırı.** Kitap pasajlarını birebir aktarmak telif ihlalidir. *Hafifletme:* İçerik analiz/özet/yorumdan oluşur, alıntılar 15 kelimeyi geçmez. Bu zaten Halka'nın "düşünen okuma kılavuzu" karakterini güçlendirir.

**Risk 3 — Kitapların birbirinden çok farklı olması.** Fara genel bir tarih, Sezgin teknik bir ansiklopedi, Wulf bir biyografi. Aynı şablon hepsine zorlanırsa şablon prokrustes yatağı olur. *Hafifletme:* Şablon esneklik içerir; opsiyonel alanlar var. Ortak iskelet sabit, dolgu kitaba göre değişir.

**Risk 4 — Halka katılımcılarının mahremiyeti.** Discussion arşivinde isim geçerse, herkes okuduğunda rahatsız olabilir. *Hafifletme:* Default isimsiz katkı; üye isteğe bağlı imza. Karar verilecek.

**Sınır 1 — Bu bir araştırma platformu değil.** Akademik tez yazmaz, peer review yapmaz. Pedagojik bir okuma kılavuzudur. Birincil kaynak tartışması yapmaz, ikincil literatürü organize eder.

**Sınır 2 — Tek dilli.** Başlangıçta sadece Türkçe. İngilizce'ye otomatik çeviri Faz 6'da gündeme gelir, daha önce değil.

---

## 10. Adlandırma ve marka

**Platform adı:** Halka

**Mantık:** "Halka" zaten okuma grubunun adı. Kelimenin üç katmanı var:
- **Halka (sosyal):** Birlikte oturulan grup
- **Halka (geometri):** Bir araya bağlanmış nesneler
- **Halka (ilim geleneği):** Tarihsel olarak ilim halkası — şeyhin etrafında öğrencilerin halkalanması

Üçü de platforma yakışıyor. Logo: ince çizgili bir halka motifi (klasik İslam sanatından arabesque'lerin sade yorumu).

**Slogan adayları:**
- "Birlikte okuduklarımız, bağlanan bilgi"
- "Bilim tarihi, halka halka"
- "Okuma kulübünden bilgi grafiğine"

Karar henüz verilmedi.

**URL stratejisi:**
- Faz 0-2: github.com/alicetinkaya76/halka, alicetinkaya76.github.io/halka
- Faz 3+: kendi domain (halka.studio, halka.org, halka-okumalar.org gibi seçenekler)

---

## 11. Sürüm günlüğü

| Sürüm | Tarih | Değişiklik |
|------|-------|-----------|
| v0.1 | 25 Nisan 2026 | İlk grand plan; Faz 0 tanımlandı; Frederick Starr'a hazırlık |
| v0.2 | 25 Nisan 2026 | Frederick Starr için book.md üretildi (3700 kelime, 15 kişi/9 yer/10 kavram/15 iddia/9 ilişki); Faz 0 içerik üretimi tamamlandı; sıradaki adımlar repo+deploy |
| v0.3 | 25 Nisan 2026 | Astro iskeleti kuruldu (7 koleksiyon, 5 sayfa şablonu, ZOD şema sözleşmesi). Mimari kararlar §12'de yazıya döküldü. Starr dosyası yeni konvansiyona refaktöre edildi. Üç atomik şablon (Bîrûnî/Buhârâ/Tercüme Hareketi) üretildi. Build çalışıyor (9 sayfa, sıfır uyarı). GitHub Actions deploy hazır. Faz 0 lokalin GitHub'a aktarılması beklemede. |
| v0.4 | 26 Nisan 2026 | Faz 1 başladı: Hobson book.md eklendi (15 atomik iddia, 17 kişi, 8 yer, 12 kavram, 13 bölüm, 9 müfredat-içi ilişki, 8 tartışma sorusu, 5 eleştirel not, ~3700 kelime gövde). Starr-Hobson çift yönlü cross-reference kuruldu (Starr-claim-001 ↔ Hobson-claim-001 destek). 25 Nisan oturum tutanağı stub'ı yazıldı (sessions/2026-04-25-starr-kayip-aydinlanma.md). Bîrûnî atomik dosyası Hobson refleksiyle güncellendi. Build hâlâ temiz. Şablon Hobson testinden geçti — şu ana kadar şema değişikliği gerekmedi. |
| v0.5 | 26 Nisan 2026 | Faz 1 ikinci kitap tamam: Goody Batıdaki Doğu book.md eklendi (Alfa Yayınları 2022 baskısı, 412 sayfa; 15 atomik iddia, 14 kişi, 10 yer, 13 kavram, 9 bölüm-özeti dahil Ek, 7 müfredat-içi ilişki, 8 tartışma sorusu, 5 eleştirel not, ~3300 kelime gövde). Goody-Hobson `tematik_tamamlayici` (Goody tarafından) ve `dogrudan_kaynak` (Hobson tarafından zaten v0.4'te deklare) — ilişki bidirectional görünür hale geldi. Goody-Starr `tematik_tamamlayici` (her iki taraftan deklare). Starr-claim-001 ve Hobson-claim-001'e Goody-claim-015 `supports` ilişkisiyle ek üç yönlü destek halkası kuruldu. Build temiz: 11 sayfa, 7.6 saniye, sıfır uyarı. Hobson sonrasında şema değişikliği gerekmedi (3 kitap = aynı sözleşme). 25 Nisan oturum tutanağı hâlâ stub, GitHub Pages aktivasyonu hâlâ açık — bunlar bilinçli olarak ertelendi. |
| v0.6 | 30 Nisan 2026 | Faz 1 üçüncü kitap tamam: Goody Rönesanslar book.md eklendi (Türkiye İş Bankası Kültür Yayınları 2015 baskısı, çev. Bahar Tırnakcı, 420 sayfa; özgün Cambridge UP 2010). Şablon dört kitabın en zengin frontmatter'ını taşıdı: 17 kişi, 11 yer, 14 kavram, 8 bölüm, 9 müfredat-içi ilişki, 8 tartışma sorusu, 6 eleştirel not, 15 atomik iddia, ~2100 kelime gövde (kasıtlı kısa, denser frontmatter). Yeni cross-reference deklarasyonları: Goody-Rönesanslar claim-005 → Starr claim-001 `supports` (Bağdat çeviri hareketi → Mâveraünnehir zinciri); Goody-Rönesanslar claim-013 → Hobson claim-001 `supports` (İtalyan Rönesansı'nın Doğu ekonomisine bağlılığı); Goody-Rönesanslar claim-015 → Goody-Batıdaki-Doğu claim-014 `supports` ("Tek Rönesans" tezinin binarism uygulaması — Goody'nin iki kitabı arasında iç birlik halkası). Westfall #15 ile `celisir` ilk net çelişki ilişkisi olarak deklare edildi (içselci Bilim Devrimi vs çoklu rönesans birikimi tezi). Lyons #9 ve Gutas #10 `dogrudan_kaynak` olarak gelecek 2. dönem geçişini şimdiden hazırladı. Build temiz: 12 sayfa, 7.27 saniye, sıfır uyarı. Hobson'dan beri 4 kitap için sıfır şema değişikliği — şablonun olgunluğu pekişti. Müfredat tablosu (curriculum.ts) zaten Goody-Rönesanslar'ı sıra 3 olarak ilan etmişti, dosya o boşluğu doldurdu — Hobson book.md'nin `onceki_kitap: "goody-ronesanslar"` deklarasyonu artık çözülen bir referans. 25 Nisan oturum tutanağı stub'ı, GitHub Pages aktivasyonu, dört kitabın ortak discussion_questions revizyonu hâlâ açık. |
| v0.7 | 30 Nisan 2026 | Faz 1 dördüncü kitap tamam: Freely *Light from the East / Işık Doğudan Yükselir* book.md eklendi (Doğan Kitap 2014 baskısı, çev. Gül Çağalı Güven, 266 sayfa; özgün I.B. Tauris 2010). Şablon Goody-Rönesanslar'dan da zengin frontmatter'a yükseldi: **20 kişi, 12 yer, 14 kavram, 19 bölüm + Öndeyiş, 9 müfredat-içi ilişki, 8 tartışma sorusu, 6 eleştirel not, 15 atomik iddia, ~2760 kelime gövde**. Yeni teknik cross-reference vakaları: **Freely claim-004 (Tusi-Urdi-Şâtır-Kopernik matematik özdeşliği) → Hobson claim-005 + Goody-R claim-004 `supports`** — Halka'nın anti-Eurocentric kampının en sert teknik silahı (matematik özdeşlik düzeyinde kanıt: Swerdlow-Neugebauer 1984 ve Ragep 1993'e dayalı); **Freely claim-005 (İbnü'l-Heysem perspektif vakası) → Goody-R claim-004 `supports`** (Belting 2008 ile birebir paralel); **Freely claim-006 (Cündişapur öncülü) → Goody-R claim-007 `supports`** (iki kitabın aynı kanıt zincirini paylaşması); **Freely claim-013 (Newton'un suskunluğu) → Hobson claim-003 + Goody-BD claim-014 `supports`** (tarihyazımı tezi). Westfall #15 ile `celisir` ilişkisi ikinci kez deklare edildi (Bölüm 17 Kopernik vakası, Goody-R'ın perspektif vakasıyla iki cepheli teknik karşı çıkış). Starr ile `kismen_celisir` deklarasyonu çift yönlü tamamlandı (Starr v0.3'te zaten Freely::tez-bagdat-merkezli'ye çelişki yazmıştı). Lyons #9, Gutas #10, Sezgin, Pedersen `dogrudan_kaynak`; Huff `kismen_celisir` (Halka'da Hobson'un karşısında, ama Freely'nin müttefiki — aynı modern akademisyenin müfredatta iki farklı politik kullanımı belgelendi). Halka müfredat haritasında ilk "kanonik" anti-Eurocentric anlatı tanımlandı: Freely klasik Bağdat-Beytü'l-Hikme-Kopernik linear zinciri kuran 'klasik' kampı temsil eder; Goody çoklu rönesans çerçevesi, Hobson küresel ekonomi çerçevesi, Starr Mâveraünnehir tersine çevirisi bu kanonik anlatının üç farklı eleştirisi olarak konumlandı. 1. dönemin dört yöntemsel köşesi (yapısal-karşılaştırmacı, küresel-ekonomik, arşivsel-dokunulabilirlik, bölgesel-derinleştirici) bu sayede berraklaştı. Toplam müfredat-içi ilişki: 13 → 22 deklarasyon. Build temiz: 13 sayfa, 8.80 saniye, sıfır uyarı. Hobson'dan beri 5 kitap için sıfır şema değişikliği — şablonun "v1.0 — kanıtlanmış" eşiğine bir kitap kaldı (Fara). 25 Nisan oturum tutanağı stub'ı, GitHub Pages aktivasyonu, beş kitabın ortak discussion_questions revizyonu hâlâ açık. |
| v0.8 | 30 Nisan 2026 | **1. dönem TAM (6/6).** Faz 1 beşinci kitap olarak Patricia Fara *Bilim: Dört Bin Yıllık Bir Tarih* (Metis Yayınları 2012, çev. Aysun Babacan, 509 sayfa; özgün Oxford UP 2009) book.md eklendi — fakat müfredattaki konumu **#1 (1. dönem açılış kitabı)** olduğu için yöntemsel olarak en kritik eklenti. Frontmatter genişliği zirvesinde: **22 kişi, 10 yer, 13 kavram, 51 bölüm (49 + Giriş + Sonsöz), 10 müfredat-içi ilişki, 10 tartışma sorusu, 6 eleştirel not, 15 atomik iddia, ~3000 kelime gövde**. Fara'nın yöntemsel çapaları: (a) **McArthur ters Avustralya haritası** (1979) — bilim tarihi yazımının coğrafi-perspektifsel asimetrisinin görsel-mecazi somutu; (b) **Whewell 1833** — "biliminsanı" sözcüğünün icat tarihi, Halka müfredatının kavramsal anakronizm uyarısı; (c) **Needham sorunsalının yeniden formülasyonu** — "Avrupa neden ileride?" yerine "Avrupalıların faaliyetleri bugün hakim olan bilim türünü nasıl yarattı?"; (d) **declensionism reddi** — Halka'da Starr-Freely'nin "altın çağ + gerileme" çerçevesinin ÖNÜNE konan kavramsal eşik. Cross-reference yapısı: Fara claim-001/003/004/007/008/009/011/013 → Goody-BD/Goody-R/Hobson/Freely çoklu `supports` ilişkileri; Westfall #15 ile `celisir` üçüncü kez deklare edildi (içselci Bilim Devrimi anlatısının üçüncü cepheli karşı çıkışı: Goody-R perspektif + Freely Kopernik-Şâtır + Fara soru çerçevesi yeniden formülasyonu); Huff'ın ÜÇÜNCÜ politik kullanımı: Hobson #4 muhalif konum + Freely #5 müttefik + Fara #1 nötr-Needham yorumcusu. **Toplu discussion_questions revizyonu (yöntemsel karar v0.8'in en önemli yan ürünüdür):** 25 Nisan oturum tutanağı stub'ı bilinçli olarak ATLANDI; Fara öncesi 4 kitap (Goody-BD, Goody-R, Hobson, Freely) içsel akademik yargıyla 8→10 sorulara yükseltildi; Starr zaten 10'da; Fara da 10. **Sonuç: 6 kitap × 10 soru = 60 atomik tartışma sorusu**. Eklenen 8 yeni soru tematik gaplara odaklandı: Goody-BD'ye Fara perspektifi + Freely Cündişapur cross-ref; Goody-R'ye Fara biliminsanı uyarısı + Freely İbn Heysem-Brunelleschi cross-ref; Hobson'a Freely teknik kanıt cross-ref + Fara panoramik karşıtlığı; Freely'ye Çin marjinalizasyonu (Hobson-Fara'da Çin merkezi) + declensionism gerilimi (Fara non-declensionist vs Freely declensionist). Toplam müfredat-içi ilişki: 22 → 32 deklarasyon. Build temiz: 14 sayfa, 6.03 saniye, sıfır uyarı. Hobson'dan beri 6 kitap için sıfır şema değişikliği — **şablon "v1.0 — kanıtlanmış" eşiğine ulaştı** (1. dönem tamamlandı, hiçbir şema değişikliği gerekmedi). 1. dönem'in dört yöntemsel köşesi (Goody yapısal-karşılaştırmacı, Hobson küresel-ekonomik, Freely arşivsel-dokunulabilirlik, Starr bölgesel-derinleştirici) artık Fara'nın panoramik-generalist açılışıyla bütünleşti. GitHub Pages aktivasyonu hâlâ açık; 2. dönem Pedersen #7 + Lyons #9 + Gutas #10 zinciri için zemin hazır. |
| v0.8.1 | 30 Nisan 2026 | **Faz 0 KAPANDI — platform canlıda.** GitHub repo (alicetinkaya76/halka) açıldı, 39 dosya 264 KiB ilk commit (eda1440); Astro Pages workflow eklendi (.github/workflows/deploy.yml: Node 20 + npm ci + npm run build + actions/deploy-pages@v4); Pages source 'GitHub Actions' olarak ayarlandı; **https://alicetinkaya76.github.io/halka** canlı yayında. Bu noktadan sonra her main push'u otomatik deploy tetikler. .gitignore disiplini sıkılaştırıldı: çalışma klasörleri (_archive 384K, pdfs 8.4M, content 5.9M, assets 640K, data 384K) kök-anchor kuralla (`/_archive/`, `/pdfs/` vs.) ignore edildi — src/content commit edildi (kritik düzeltme: jenerik `content/` kuralı önce src/content'i de yakalıyordu, kök-anchor ile düzeltildi). Yedek alındı: /Volumes/LaCie/halka-v07-backup-20260430-2209. Halka müfredatının dijital bedeni: 1. dönem 6/6 + canlı URL + CI/CD pipeline. Yöntemsel mirası (toplu discussion_questions revizyonu, declensionism gerilimi, soru çerçevesi yeniden formülasyonu) artık herkesin görebileceği bir adreste. |
| v0.8.2 | 1 Mayıs 2026 | **Faz 2 Kol A — feedback hızlı uyum.** WhatsApp grubu HALKA-FEEDBACK-v0.8 (2 katılımcı, 12 madde) içinden şema değişikliği gerektirmeyen ve yarım gün içinde uygulanabilen maddeler kapatıldı — kısa polish turu, içerik milestone'u değil. **F1.7 — Akıcılık etiketi:** 6 kitap header'ında üç renkli chip (Fara=Kolay/emerald, Hobson=Zor/carmine, diğer 4=Orta/neutral); subjektif kalibrasyon (Ali yargısı), hover'da kalibrasyon notu tooltip, header altında italik "Akıcılık notu:" satırı. Şemaya `reading_level` (zorunlu enum: `kolay`/`orta`/`zor`) ve `accessibility_note` (opsiyonel string) eklendi — **Hobson'dan beri 6 kitap için sıfır şema değişikliği** disiplini ilk kez kırıldı, bu kasıtlıydı (feedback gerekçeli, Faz 2 başlangıcı). **F1.8 + F2.5 — Sayfa düzeni:** İçindekiler ve Tartışma soruları sayfanın yukarısına taşındı (tezden hemen sonra), tartışma soruları üstüne emerald uyarı kutusu eklendi (spoiler etkisi tavsiyesi: "soruları akılda tut, kitabı oku, sonra geri dön"), sticky right-side TOC sıralaması ana içerikle eşleştirildi. **F1.6 — Heading tutarlılığı:** 5 kitabın (Fara, Freely, Goody-BD, Goody-R, Hobson) gövde başlığı `## Halka müfredatındaki yeri[: long form]` → canonical `## Halka için stratejik okuma`'ya çevrildi, eski long-form başlıklar italik alt-satır olarak korundu (içerik kayıp yok); Starr zaten model. **F1.4 — Kapak:** Şemaya `cover_image` ve `cover_credit` opsiyonel alanları eklendi, frontend rendering Faz 2 Kol B'ye ertelendi (kapaklar henüz toplanmadı). **Doküman katmanı:** Sıfırdan README.md yazıldı (vizyon + 6/6 tablo + hibrit lisans + katkı çağrısı), MIT (kod) + CC BY-SA 4.0 (içerik) hibrit lisans dosyaları eklendi (Wikipedia modeli, kapaklar FSEK m.32 atıf çerçevesi), HALKA-FEEDBACK-v0.8.md repo köküne kopyalandı (yarı-public feedback kaydı) ve §7 Kol A sonrası mutabakat bölümü eklendi (durum tablosu: 4 DONE / 2 MOVED-Kol-B / 1 PARTIAL / 1 DEFERRED / 1 REJECTED + Kol B öncelikleri + WhatsApp iletişim eylemi şablonu + süreç dersleri). **Pedersen tutarsızlığı bug-fix:** Fara book.md'deki `pedersen-erken-fizik-ve-astronomi` cross-ref'i (Olaf Pedersen, *Early Physics and Astronomy* 1974) note metni düzeltildi — eski metinde "Halka'da Pedersen #7 — 2. dönem'in açılış kitabı" yanlışlıkla iki farklı Pedersen'i (Olaf bilim tarihçisi vs Johannes Arabist) konflate ediyordu; yeni note metni iki Pedersen'in ayrılığını netleştiriyor (Johannes #7 müfredatta, Olaf Fara'nın tematik tamamlayıcısı, Halka müfredatında değil). §12.2'ye aynı soyadlı yazarlar için disambiguation notu eklendi. **Build temiz: 14 sayfa, 5.10 saniye, sıfır error.** Faz 2 Kol B'ye ertelenenler: F1.1 (arama, Faz 3'ten öne çekildi → Kol B), F1.3 (tarihyazımı 2D scatter görsel, Kol B ÖNCELİK #1), F1.4 (kapak frontend), F1.2 (donut chart, Kol B sonrası); REJECTED: F1.5 (NotebookLM özet — Halka tezine ters: "kitap kapalı kutu değil, atomik bilgi grafiği", NotebookLM tam tersi). **Versiyon-isimlendirme kararı:** Kol A polish/UX olduğu için alt-sürüm (.2) olarak kayıt — `v0.9 = Pedersen / 2. dönem açılış` rezervi korundu. v0.7-v0.8.1 pattern'i (içerik=major, altyapı/polish=.Y) sürdürüldü. |
| v0.8.3 | 1 Mayıs 2026 | **Faz 2 Kol B önceği — F1.3 + F1.4 yarısı.** v0.8.2'de Kol B'ye ertelenen iki yüksek-öncelikli polish maddesinin acilen uygulandığı küçük tur. WhatsApp iletişim eyleminden önce yapılması ile yorumcuya cevap güçlendi: "söz ettiğiniz 3 madde + tarihyazımı görseli + kapak yer tutucusu canlıda; arama ve Pedersen sırada." Tek dosya değişti: `src/pages/kitaplar/[slug].astro`. **F1.3 — Tarihyazımı 2D scatter:** Eski 3 yatay eksen+dot vizualizasyonu ("ilk bakıldığında anlaşılmıyor" şikayeti) tek bir SVG 2D scatter ile değiştirildi. X ekseni Avrupamerkezcilik (Eurocentric ← → Anti-Eurocentric, 4 kademe), Y ekseni Bağdat-merkezcilik (Bağdat-merkezci ↑ ↓ Anti-Bağdat-merkezci, 4 kademe). Halka müfredatındaki tüm 6 kitap aynı görselde nokta olarak konumlandı: Freely Bağdat-merkezci+Anti-Eurocentric (top-right, kırmızı kenar=çöküşçü), Starr Anti-Bağdat+Anti-Eurocentric (bottom-right, kırmızı kenar=çöküşçü), Fara/Goody-BD/Goody-R/Hobson multipolar+Anti-Eurocentric (middle-right, vertical jitter 30px aralıkla ayrıştırıldı). Bu kitap büyük emerald nokta (radius 11), diğerleri küçük (radius 6) ve %55 opacity; çöküşçü tezler (Freely, Starr) `var(--halka-carmine)` kırmızı kenar+2.5px stroke; emerald kenar diğerleri için. Lejant: 3 sembol (Bu kitap / Diğer Halka kitabı / Çöküşçü tez). Üçüncü boyut (içselci-dışsalcı) küçük yatay bar olarak altta korundu, çünkü 2D'ye sığmıyor. Coğrafi vurgu metni eklendi. SVG accessibility (aria-label, role=img, `<title>` her dot'ta hover tooltip). Yorumcu 1'in "grafik üzerinde daha iyi olabilir" sözü birebir karşılandı. **F1.4 (yarısı) — Kapak yer tutucusu:** Header 2-kolon flex'e refaktöre edildi, sol kolon book cover slot (32 sm:40 width, aspect 2:3). `cover_image` doluyse `<img loading="lazy">` + figcaption (`cover_credit`), boşsa dashed-border placeholder ("Kapak yakında" italic ink-400). Kapak görselleri Kol B'de toplanacak; render mantığı şimdi hazır, `cover_image` frontmatter'a girince otomatik çalışır. Sayfanın visual ağırlığı kitabın "fiziksel" varlığını da öne çıkardı (Goodreads/Amazon paterni). **Build temiz: 14 sayfa, 6.89 saniye, sıfır error.** Frontmatter koleksiyonu: `getCollection('books')` ile 6 kitabın `historiographical_position` alanı çekiliyor, `eurXMap` ve `bagYMap` ile [0,1] aralığına projeksiyon, çakışan noktalar bucket'lanıp vertical jitter (30px spacing) uygulanıyor — algoritma deterministik (sira_no'ya göre sort), Pedersen v0.9 eklendiğinde otomatik scatter'a katılır. Yan kazanım: ilerleyen dönemler boyunca scatter doğal olarak zenginleşecek (Westfall #15 içselci+Eurocentric → top-left, Sayılı declensionist → kırmızı kenar, vb.). v0.9 = Pedersen / 2. dönem açılış rezervi korundu. |

---

## 12. Mimari kararlar (v0.3'te sabitlenenler)

Bu bölüm geriye dönük dokümantasyondur — Astro iskeletini kurarken alınan ve `src/content/config.ts` ZOD şemasına yazılan kararların gerekçeli kaydı.

### 12.1 Karar: Astro 5 + TypeScript content collections + ZOD

**Alternatif:** MkDocs Material (Python tabanlı, daha kolay kurulum).

**Gerekçe:** Faz 2'nin temel ihtiyacı cross-reference + claim conflict detection'dır. Bunun için iki şey lazım: (a) frontmatter şemasının kapalı olması (sınırsız "uydurma" alan veriye girmez), (b) build sırasında veriden türetilmiş `relationships.json` üretilmesi. Astro'nun TypeScript content collections + ZOD validation'ı (a)'yı zorunlu kılıyor; build script'leri (b)'yi mümkün kılıyor. MkDocs bu iki ihtiyacı yan eklentiler olmadan karşılamıyor; Astro doğal olarak karşılıyor. Tradeoff: Astro yığını daha karmaşık (Node.js, npm), MkDocs daha hafif. Bu maliyet kabul edildi.

### 12.2 Karar: Slug konvansiyonu

| Koleksiyon | Slug formatı | Örnek |
|------------|--------------|-------|
| books | `{soyadi-kucuk}-{baslik-slug}` | `starr-kayip-aydinlanma` |
| people | `{ad-slug}` (tek parça) | `biruni`, `ibn-sina` |
| places | `{yer-slug}` (tek parça) | `buhara`, `semerkant` |
| concepts | `{kavram-slug}` (tek parça) | `tercume-hareketi` |
| claims | `{book-slug}::claim-NNN` | `starr-kayip-aydinlanma::claim-001` |
| sources | `{kaynak-slug}` | `gutas-greek-thought-arabic-culture` |
| discussions | `{YYYY-MM-DD}-{book-slug}` | `2026-04-25-starr-kayip-aydinlanma` |
| authors | `{soyad}-{ad}` | `starr-s-frederick` |

Bu konvansiyon ZOD şemasında `claim.id` için regex (`^claim-\d{3}$`) ile zorunlu kılındı. Diğer slug'lar serbest string olarak kabul edilir ama README'de belgelendi. **Cross-reference'lar (örn. `claim.conflicts_with`) serbest string olarak tutuldu;** bu, henüz frontmatter'ı oluşturulmamış kitaba (örn. `freely-isik-dogudan-yukselir::tez-bagdat-merkezli`) referans verebilmeyi mümkün kılıyor — şema referans bütünlüğünü zorlamıyor, çünkü yarım dolu müfredatta bu pratik değil. Faz 2'de ayrı bir kontrol script'i "kayıp referans" raporu üretecek.

**v0.8.2 eklenti — aynı soyadlı yazarlar için disambiguation:** Slug konvansiyonu `{soyadi}-{baslik-slug}` zaten farklı kitapları başlık ile ayrıştırır. Örnek: Johannes Pedersen *İslam Dünyasında Kitabın Tarihi* (Arabist, 1946) → `pedersen-islam-dunyasinda-kitabin-tarihi` ve Olaf Pedersen *Erken Fizik ve Astronomi* (bilim tarihçisi, 1974) → `pedersen-erken-fizik-ve-astronomi` — iki ayrı kişi ama slug'lar zaten ayrık (başlık ile). Bu sözleşmesel ayırma yeterli, ama **note metinleri dikkatle yazılmalı**: aynı soyadlı slug ailesi farklı kişileri ima edebilir; özellikle "Halka'da X #N" gibi müfredat referansları yazılırken hangi yazarın hangi sıraya bağlı olduğu netleştirilmeli. v0.8.2 öncesi Fara book.md'de bu hata vardı (Olaf Pedersen'in cross-ref'inin not metni "Halka'da Pedersen #7" diyordu — fakat #7 Johannes Pedersen'in başka bir kitabıdır); v0.8.2 paketinde Fara note metni iki Pedersen'i ayrıştıracak şekilde düzeltildi. Yeni kitap eklerken aynı soyadlı yazar varsa cross-ref note'larında soyad **+ ad** birlikte yazılmalı.

### 12.3 Karar: Snake_case storage, Türkçe display

Şema enum değerleri (örn. `claim.type: "ana_tez"`, `relation: "kismen_celisir"`) snake_case ASCII'dir. Sebep: TypeScript autocomplete, kod-içi tutarlılık, dosya-içi grep. İnsan için okunabilir Türkçe karşılıklar (`"Ana tez"`, `"Kısmen çelişir"`) `src/lib/labels.ts` mapping'inde tutulur ve render aşamasında uygulanır.

Bu kararın maliyeti: orijinal v0.2 starr-kayip-aydinlanma.md'sindeki güzel okunan Türkçe etiketler ("ana tez", "kısmen çelişir", "metodolojik tez") frontmatter'da kaybolup label dosyasına gitti. Karşılığında: build-time validation (yanlış değer yazınca build kırılır), 21 kitabın tutarlı kalması, IDE autocomplete.

### 12.4 Karar: Kapalı enumerasyonlar

Üç enum şu an kapalı (yeni değer eklemek için `config.ts` güncellenmeli):

- **`ClaimType`** (14 değer): `ana_tez`, `metodolojik_tez`, `tarihsel_duzeltme`, `nedensellik_tezi`, `kulturel_tez`, `karsilastirmali_tez`, `kavramsal_tez`, `kurumsal_tez`, `ekonomik_nedensellik_tezi`, `kulturel_tarih_tezi`, `tarihyazimi_tezi`, `degerlendirme`, `yorumsal_sentez`, `varisler_hakkinda_tez`.
- **`BookRelationKind`** (10 değer): `kismen_celisir`, `celisir`, `uyumlu`, `tematik_tamamlayici`, `teknik_tamamlayici`, `kurumsal_tamamlayici`, `olcek_karsitligi`, `ters_yon`, `dogrudan_kaynak`, `cogul_revizyon`.
- **`ClaimRelationKind`** (6 değer): `conflicts_with`, `supports`, `extends`, `qualifies`, `reframes`, `cites`.

Yeni bir kitap eklenirken farklı bir ilişki türü gerekirse: `config.ts` güncellenir, mapping'e Türkçe karşılığı eklenir, build'de doğrulanır. Bu kasıtlı bir sürtünmedir — "geçici" relation türlerinin kontrolsüz yayılmasını engellemek için.

### 12.5 Karar: Atomik dosyalar Faz 0'da çıkarıldı

Üç atomik dosya v0.3'te üretildi: `people/biruni.md`, `places/buhara.md`, `concepts/tercume-hareketi.md`. Sebep: şemayı gerçek içerikle sınamak ve Faz 1'e üç kanıtlanmış şablonla geçmek. Yan kazanım: book sayfasındaki "kişi/yer/kavram kartları" hangileri tıklanabilir hangileri henüz pasif somut olarak görüldü.

Reverse-lookup ("bu kişi hangi kitaplarda geçiyor") atomik sayfada zaten çalışıyor (build-time `getCollection` filtresi). Faz 2'de bu sadece çoklaşacak; mimari hazır.

### 12.6 Karar: DH altyapı bağlantı alanları şimdi tanımlandı

`person.md`'de `tabakat_io_id`, `dia_id`, `gas_id`, `gal_id`, `wikidata_id`, `viaf_id` alanları opsiyonel olarak tanımlandı; `place.md`'de `islamicatlas_id`, `pleiades_id`, `geonames_id`, `wikidata_id`. Doldurulmamış olsalar bile şemada yer aldıkları için Faz 3'te tek yapılacak iş `id` değerlerini girmek olacak — sayfa render kodu zaten hazır (Bîrûnî sayfasının altındaki "Dış bağlantılar" bölümü gibi).

### 12.7 Karar: Tek dilli (Türkçe) MVP

Çoklu dil (i18n) Faz 6'ya kadar gündeme alınmaz. Astro i18n desteği var ama getirilen karmaşıklık tek-kullanıcı tek-dil bağlamda haksız. Faz 6'da İngilizce için ayrı `src/content/books-en/` veya frontmatter'a `translations` alanı eklenebilir; ikisi de bugünkü kararı geri çevirmiyor.

---

*Halka — birlikte okuduklarımızı bağlayan bilgi*
