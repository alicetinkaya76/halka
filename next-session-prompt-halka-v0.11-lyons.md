# Next Session Prompt — Halka v0.11 = Lyons #9 *Hikmet Evi*

**Tarih hedefi:** v0.10.1 sonrası bir sonraki içerik milestone
**Mesleki niteleme:** İçerik milestone (book.md + ilgili atomik dosyaları), v0.10.1 atomik altyapı turunun aksine
**Müfredat ilerlemesi:** 8/21 (38%) → **9/21 (43%)**; 2. dönem 4/7 → **5/7**

---

## Açılış prompt'u (Claude'a iletilecek)

> "HALKA-GRAND-PLAN.md ile DEGISIKLIKLER-v0.10.1.md'yi oku. Halka'nın 9/21 = %43 kitap müfredatı + 23 atomik dosya (4 yer + 12 kişi + 6 kavram, top-3 zirve düğüm: bagdat 6 cross-book / tercume-hareketi 4 cross-book / biruni 4 cross-book) atomik atlasıyla 9. kitabı eklemeye hazır. Sıradaki içerik: **Jonathan Lyons #9 — *Hikmet Evi: Klasik Bilginlerin Modern Dünyaya Mirası*** (özgün *The House of Wisdom: How the Arabs Transformed Western Civilization*, Bloomsbury Press 2009; Türkçe çeviri Doğan Kitap, çev. Sevda Çalışkan, 2010). 2. dönem'in **5. kitabı** (Freely #5 + Starr #6 + Pedersen #7 + Sezgin #8 sonrası). v0.10'da Sezgin tarafından `kismen_celisir` ilişkisi zaten deklare edilmişti — popüler-anlatı vs akademik-teknik ton karşıtlığı testi. v0.10.1'de inşa edilen 23 atomik dosyanın 5-7'si Lyons key_people'ında otomatik cross-ref alacak (Bîrûnî, Tûsî, İbnü'l-Heysem, Hârezmî, Hunayn b. İshak, vb. — Lyons'a özgü olmayan figürler).
>
> **Karar zinciri (sırayla):**
>
> **K1 — Çeviri/baskı bilgisinin teyidi.** Doğan Kitap 2010 Türkçe çevirisinin baskı sayısı, sayfa sayısı, ISBN ve tirajı doğrulanmalı. Lyons'un tek kitap olarak Halka'da mı yoksa Goody-R'ın yanına ek-okuma olarak mı konumlandırılacağı (sira_no: 9 = ana müfredat / sira_no: yok = ek-okuma) — `curriculum.ts` yapısı zaten `sira_no: 9, donem_no: 2` olarak Lyons'u bekliyor.
>
> **K2 — Frontmatter genişlik hedefi.** Freely (20 kişi/12 yer/14 kavram), Pedersen (20/10/12), Sezgin (23/10/13). Lyons popüler-anlatı tonu nedeniyle muhtemelen daha az frontmatter yoğunluğu — hedef: 16-18 kişi, 8-10 yer, 10-12 kavram, 10-12 thematic chapter, 10 müfredat-içi ilişki, 10 tartışma sorusu, 5-6 eleştirel okuma notu, 12-15 atomik iddia, 15-18 tag, ~2000-2500 kelime gövde (Pedersen'e yakın).
>
> **K3 — Tarihyazımı pozisyonu.** Lyons muhtemelen anti-Eurocentric (kamp 7/8 → 8/9 = %89), Bağdat-merkezci (Beytü'l-Hikme dramatik anlatısı), externalist (kültürel-aktarım vurgusu), non-declensionist (popüler-anlatı tonu çöküş tezini sevmez). Sezgin ile `kismen_celisir` (popüler vs akademik), Freely ile `tonal_tamamlayici` (her ikisi de Bağdat-merkezci popüler-akademik), Hobson ile `uyumlu` (Doğu-küresel-aktarım), Westfall ile potansiyel `celisir` (5. çelişir deklarasyonu adayı).
>
> **K4 — Atomik dalga (v0.11.1) erteleme kararı.** v0.10.1'de 20 atomik birden inşa edildi; Lyons sonrası muhtemelen sadece 2-3 yeni atomik gerekecek (Lyons'a özgü figürler — varsa). Atomik dalga v0.11.1 olarak ayrı tur mu (Lyons + Gutas + Berkey'den sonra topluca, 4-5 atomik birden) yoksa Lyons book.md ile aynı turda mı eklenecek? **Önerim:** Lyons'a özgü atomik dosya gerekirse (örn. yeni bir oryantalist-tarihçi figürü Lyons'un argümanında merkezdeyse) book.md ile aynı turda eklensin; aksi halde mevcut 23 atomik yeterli, atomik dalga Berkey #11'e ertelensin.
>
> **K5 — Sıralama dilemma.** Sıradaki 2. dönem kitapları: Lyons #9, Gutas #10, Berkey #11. Mevcut sıralama (curriculum.ts'te) #9 #10 #11. Lyons popüler-anlatı + Gutas akademik-teknik + Berkey kurumsal-eğitim — bu üç kitap birbirini çok iyi tamamlar, sıralamayı korumak doğal. Eğer Ali alternatif sıralama düşünüyorsa (örn. Lyons'u atlayıp Gutas'a önce geçmek), neden olduğunu sorabilir.
>
> **Sen karar ver ve uygula** — K1-K5 arasında Ali tipik olarak delegasyon eder. Otonom kararlar için: K1 = çeviri bilgisini bilemiyorsan handoff'tan veya web search'ten doğrula (eğer çevrimiçi erişim açıksa), aksi halde alanları boş bırak (Sezgin v0.10'da yapıldığı gibi); K2 = orta-yoğunluk hedefle (Pedersen referans); K3 = anti-Eurocentric + Bağdat-merkezci + externalist + non-declensionist tahmin et, gerçek kitap içeriğine göre revize et; K4 = atomik dalga'yı Berkey #11'e ertele (mevcut 23 atomik Lyons cross-ref'leri için yeterli); K5 = mevcut sıralamayı koru.
>
> **Sürpriz vurgu adayları (Lyons book.md gövdesinde işlenebilir):** (1) Lyons'un *Hikmet Evi* başlığının Pedersen Beytü'l-Hikme tasvirinden farkı — Pedersen mimari/kurumsal, Lyons sembolik/dramatik. (2) Lyons'un Sezgin'in 5 noktalı Tûsî-Şâtır-Kopernik teknik özdeşlik vakasını **popüler-anlatı diliyle** nasıl sunduğu — derinlik kaybı mı, erişilebilirlik kazancı mı? (3) Lyons'un Avrupa'nın 'karanlık çağ'larıyla İslam'ın 'altın çağ'ı arasındaki kontrast retoriği — Goody/Fara non-declensionist çerçeveleriyle gerilimi. (4) Lyons'un kaynak listesi modern oryantalist-tarihçilere (Bernard Lewis, Ehsan Yarshater, vb.) yaslanması — Sezgin'in Sayılı/Wiedemann silsilesinden farkı. (5) Lyons'un Türk akademisine etkisi minimal mi yoksa Doğan Kitap çevirisi sonrası popülerleşti mi?"

---

## Lyons #9 hızlı bilgi (book.md hazırlığı için)

**Yazar:** Jonathan Lyons (Reuters muhabiri, gazeteci-tarihçi; akademik kariyer yok, popüler-tarih yazarı)
**Özgün:** *The House of Wisdom: How the Arabs Transformed Western Civilization* (Bloomsbury Press 2009)
**Türkçe çeviri:** Doğan Kitap (2010, çev. Sevda Çalışkan; **doğrulanması gerekiyor: baskı yılı, sayfa sayısı, ISBN**)
**Sayfa:** ~248 (özgün), Türkçe muhtemelen 280-320
**Tema:** Beytü'l-Hikme'nin 8.-13. yy Bağdat'taki entelektüel rolü; İslam-Hıristiyan entelektüel teması (Adelard of Bath, Petrus Alphonsi); Avrupa Rönesansı'nın İslam mirasına borçluluğu
**Tonal konum:** Popüler-anlatı (akademik değil); dramatik sahneler, biyografik anekdotlar; Pedersen ve Sezgin'in akademik-teknik tonunun **karşıtı**
**Halka pozisyon tahmini:** anti-Eurocentric + Bağdat-merkezci + externalist + non-declensionist

---

## v0.10.1'in Lyons için hazırladığı atomik altyapı

Lyons key_people frontmatter'ında muhtemelen geçecek figürler — bunların **mevcut atomik dosyaları zaten var**:

| Lyons'ta bekleniyor | v0.10.1'de var | Cross-ref'i etkiler |
|---|---|---|
| Bîrûnî | ✅ `kisiler/biruni.md` | 4 → **5** kitap (Lyons eklenince) |
| Hârezmî | ❌ (henüz yok) | Lyons'la birlikte yeni atomik adayı |
| Hunayn b. İshak | ❌ (henüz yok) | Lyons'la birlikte yeni atomik adayı |
| Tûsî | ✅ `kisiler/tusi.md` | 1 → **2** kitap |
| İbnü'l-Heysem | ✅ `kisiler/ibn-el-heysem.md` | 1 → **2** kitap |
| Adelard of Bath | ❌ (henüz yok) | Lyons'a özgü, yeni atomik adayı |
| Petrus Alphonsi | ❌ (henüz yok) | Lyons'a özgü, yeni atomik adayı |
| Bağdat (yer) | ✅ `yerler/bagdat.md` | **6 → 7 kitap** (Halka atomik atlasının zirve düğümü daha da zenginleşir) |
| Tercüme Hareketi (kavram) | ✅ `kavramlar/tercume-hareketi.md` | **4 → 5 kitap** |
| Beytü'l-Hikme (kavram + yer) | ❌ (henüz yok) | Lyons'la birlikte **kritik atomik adayı** — Pedersen + Sezgin + Lyons üçlüsünün ortak nirengisi olur |

**Stratejik öneri:** Lyons book.md eklenirken **beytulhikme atomiği** mutlaka inşa edilsin — Pedersen frontmatter'ında zaten `slug: "beytulhikme"` var, Sezgin'de slug yok ama gövde-içi merkezi kavram. Beytü'l-Hikme atomik dosyası Lyons turu'nun yan ürünü olarak Pedersen + Sezgin + Lyons üçlüsünün ortak cross-ref düğümü kurabilir.

---

## Lyons potansiyel cross-ref haritası (book.md yazımı için ön çalışma)

| Lyons ↔ Diğer kitap | İlişki tipi | Gerekçe |
|---|---|---|
| Lyons ↔ Pedersen #7 | `tematik_tamamlayici` | Pedersen kurumsal-mimari Beytü'l-Hikme + Lyons sembolik-dramatik Beytü'l-Hikme |
| Lyons ↔ Sezgin #8 | `kismen_celisir` (Sezgin tarafından zaten deklare) | Popüler vs akademik ton karşıtlığı |
| Lyons ↔ Freely #5 | `tonal_tamamlayici` | Her ikisi de Bağdat-merkezci popüler-akademik anlatı (Freely yarı-akademik, Lyons gazeteci) |
| Lyons ↔ Hobson #4 | `uyumlu` | Doğu-küresel-aktarım tezi (Lyons İslam-Hıristiyan entelektüel teması = Hobson küresel ağ tezinin bireysel-anekdotik versiyonu) |
| Lyons ↔ Goody-R #3 | `kismen_celisir` | Goody non-declensionist + çoklu rönesans çerçevesi vs Lyons "İslam'ın Avrupa'yı kurtarması" dramatik anlatısı (binarism testi) |
| Lyons ↔ Goody-BD #2 | `tematik_tamamlayici` | Doğu-Batı entelektüel ilişkisi |
| Lyons ↔ Fara #1 | `olcek_karsitligi` | Fara panoramik-genelist + non-declensionist vs Lyons dramatic-Bağdat-merkezci |
| Lyons ↔ Starr #6 | `kismen_celisir` | Starr Mâveraünnehir-merkezci anti-Bağdat vs Lyons Bağdat-merkezci |
| Lyons ↔ Westfall #15 (3. dönem ileri) | **`celisir` adayı (5. çelişir)** | Westfall içselci Bilim Devrimi vs Lyons "Avrupa Rönesansı İslam'a borçludur" — Halka'nın 5. çelişir deklarasyonu adayı |
| Lyons ↔ Gutas #10 (2. dönem ileri) | `kismen_celisir` | Gutas Tercüme Hareketi'nin politik-kültürel motivasyonlarına yoğunlaşır + Lyons sembolik-dramatik Beytü'l-Hikme — methodological gerilim |
| Lyons ↔ Berkey #11 (2. dönem ileri) | `tematik_tamamlayici` | Berkey eğitim-kurumsal aktarım + Lyons entelektüel-bireysel aktarım |

**Cross-ref omurgası tahmini: 9-11 deklarasyon.** Toplam müfredat-içi ilişki: 54 → ~64 deklarasyon.

---

## v0.11 sonrası roadmap

| Sürüm | İçerik | Müfredat | Atomik atlas |
|---|---|---|---|
| **v0.11** | Lyons #9 book.md | 9/21 = 43% | 23 + 0-3 (Lyons'a özgü figürler) |
| v0.11.1 | (opsiyonel) atomik dalga 2 | 9/21 | +5-7 (Hârezmî + Hunayn b. İshak + Adelard of Bath + beytulhikme + Petrus Alphonsi) |
| v0.12 | Gutas #10 book.md | 10/21 = 48% | 23 + 0-2 |
| v0.13 | Berkey #11 book.md | 11/21 = 52% | 23 + 1-2 |
| v0.13.1 | atomik dalga 3 (2. dönem kapanış) | 11/21 | toplam ~30-35 atomik |
| **v0.14** | **2. dönem TAM (7/7).** 3. dönem'e geçiş hazırlığı |  |  |

---

**Özet karar:** v0.11 = Lyons #9 book.md, atomik dosyalar minimal (sadece Lyons'a özgü olanlar), beytulhikme atomiği yan-ürün olarak inşa edilebilir. Müfredat 38% → 43%. 2. dönem 57% → 71%.
