# DEĞİŞİKLİKLER v0.12 — Gutas #10 "Yunanca Düşünce, Arapça Kültür" Tamamlandı + 5-Kitap Atomik Üst-Düğümü

**Tarih:** 3 Mayıs 2026
**Versiyon:** v0.11 → v0.12
**Tur kapsamı:** Müfredatın 10. kitabı (Gutas #10, *Yunanca Düşünce, Arapça Kültür*) book.md inşası + 3 mevcut atomik güncellemesi (bagdat 6→7-kitap rekoru, tercume-hareketi 4→5-kitap, beytulhikme 4→5-kitap) + 2 yeni atomik inşası (memun 4-kitap, bermekiler 3-kitap)
**Üretim disiplini:** "v1.0 proven" template korunmuş — zero schema değişikliği (Hobson #4'ten beri 10 book.md + 25 atomik dosya, sıfır schema-derken)

---

## Bu turun yöntemsel kararları (K1-K6 zinciri)

Tur, "kararları sen seç ve uygula" delege-modunda K1-K6 otonom karar-zinciri olarak yürütüldü. Tüm kararlar uygulamadan önce kullanıcıya görünür şekilde dökümante edildi:

| K | Karar | Sonuç |
|---|---|---|
| **K1** | Çeviri/baskı bilgisi web doğrulaması | Handoff verisi (başlık "Yunan Düşüncesi, Arap Kültürü") **YANLIŞ**. PDF kapak + Kitap Yayınevi resmî sayfası teyitli: doğru başlık **"Yunanca Düşünce, Arapça Kültür"**; altbaşlık **"Bağdat'ta Yunanca-Arapça Çeviri Hareketi ve Erken Abbasi Toplumu"**; çevirmen **Lütfü Şimşek**, yayına hazırlayan Ayşen Anadol; **1. baskı Temmuz 2003**, 240 sayfa, ISBN 978-975-8704-36-1, Kitap Yayınevi (Tarih ve Coğrafya Dizisi - 12). 10. baskı Ocak 2023 (kitap halen baskıda). Routledge orijinal 1. baskı 1998 (PDF'teki "© 2002" reprint copyright'ı, yazarın orijinal Önsöz'ü Eylül 1997 New Haven). **Slug `gutas-yunan-dusuncesi-arap-kulturu` curriculum.ts'de mevcut + Lyons cross-ref'inde kullanılıyor — slug-başlık mismatch korundu** (Lyons emsali: "Doğan Kitap orijinal-dili Türkçe" yayıncı meta-disiplin sorunu); doğru başlık `title` alanında, mismatch açıklaması critical_reading_notes #1'de. |
| **K2** | Frontmatter genişliği | "Akademik-philological üst sınır" (Halka müfredatının en akademik-philological kitabı). Hedef vs gerçek: 15/**15** kişi, 9/**9** yer, 11/**11** kavram, 13/**13** claim, 10/**10** chapter, 10/**10** cross-ref, 9/**9** discussion question, 6/**6** critical reading note, 17/**17** tag, ~2600/**~2600** kelime gövde. |
| **K3** | Tarihyazımı pozisyonu | **Anti-Eurocentric + Baghdad-centric + externalist + NON-declensionist** (PDF okumayla TEYİT EDİLDİ). Eurocentrism axis: anti-Eurocentric (Bizans-karşıt argüman, claim-008); baghdad_centrism_axis: Baghdad-centric (Mansur 762 dönüm noktası, claim-003); internalist_externalist: externalist (Sasani Pehlevî ideolojisi + mihne + Bizans karşıtı emperyal politika); declensionist: false (Büveyhilere kadar 945 sürdü, claim-013). thesis_one_liner ~470 karakter, **Mansur-merkezli** (Memun-merkezli akademik çarpıtmaya karşı tashih, claim-004). |
| **K4** | Atomik dalga | **3 update + 2 yeni atomik = toplam 5 atomik dosya**. Hunayn ibn İshak v0.13 Berkey turuna ertelendi (orada 4-kitap'a yükselebilir, tek-kitap cross-ref dilüsyonundan kaçınma). |
| **K5** | Müfredat sırası | Mevcut Pedersen → Sezgin → Lyons → **Gutas** → Berkey sıralaması KORUNUR. book.md `status: "sirada"` (Lyons emsali). curriculum.ts'de Gutas zaten `sirada` (kullanıcı advance etmiş). |
| **K6** | Cross-ref haritası revizyonu | PDF okumadan SONRA iki revizyon: (1) **Goody-R #3 ile cross-ref `kismen_celisir` → `uyumlu`** olarak revize edildi: Gutas Sonsöz'deki "Çeviri hareketi Perikles Atina'sı, İtalyan Rönesans'ı ve 16-17. yy bilim devrimi ile aynı kategoride" iddiası Goody-R'in "çoklu rönesanslar" tezinin doğrudan akademik kanıtıdır. (2) **Sezgin #8 ile cross-ref `tematik_tamamlayici` → `dogrudan_kaynak`** olarak yükseltildi: Gutas Önsöz'de Sezgin'i adıyla anıyor + Ek bölümünde GAS III-X cilt-numara atıfları sistematik (eser nüansı: Gutas'ın atıfta bulunduğu Almanca *Geschichte des Arabischen Schrifttums* 17 cilt, Halka'nın okuduğu Türkçe *İslam'da Bilim ve Teknik* 5 cilt — aynı yazar, iki sunum). Lyons #9 ile özel ilişki: Lyons → Gutas tek-yönlü dogrudan_kaynak (Lyons 7 atıf), Gutas → Lyons tersine atıf imkansız (1998 vs 2009) → `tematik_tamamlayici + asimetri-açıklayıcı not`. |

---

## Yeni eklenenler

### Müfredat dosyası (1 adet)

| Dosya | Tip | Boyut | Hedef vs Gerçekleşen |
|---|---|---|---|
| `src/content/books/gutas-yunan-dusuncesi-arap-kulturu.md` | book.md | 576 satır / ~9500 kelime (frontmatter dahil) / 30 üst-düzey YAML alanı | Lyons #9 emsali (572 satır) paraleli; Halka'nın en akademik-philological kitabı |

### Atomik atlas (5 adet — 3 update + 2 yeni)

| Dosya | Tip | Cross-ref derinliği | Açıklama |
|---|---|---|---|
| `src/content/places/bagdat.md` | place atomic UPDATE | 6 → **7 kitap (HALKA REKORU)** | Halka atomik atlasının yeni en derin cross-ref düğümü (Lyons turunda 6-kitap'tan Gutas turunda 7-kitap'a). Mansur'un 762 astrolojik kuruluşu çeviri hareketinin politik-ideolojik temel-atımı olarak işlendi; İbnü'l-Fakih el-Hamedani 290/903 çoğul-grup dengesi tanıklığı çekildi. |
| `src/content/concepts/tercume-hareketi.md` | concept atomic UPDATE | 4 → **5 kitap üst-düğüm** | Halka atomik atlasının ikinci en derin cross-ref düğümü. Gutas'ın politik-ideolojik motivasyon çerçevesi (Sasani ideolojisi + mihne + Bizans karşıtı emperyal politika) eklendi; period 750-945 (Büveyhi zaptına kadar) olarak revize edildi; Gutas'ın claim-010 (Rönesans-kategorisi) tezinin Halka 1.-3. dönem köprüsü konumlandırması. |
| `src/content/places/beytulhikme.md` | place atomic UPDATE | 4 → **5 kitap üst-düğüm** | Halka atomik atlasının üçüncü 5-kitap üst-düğümü. Gutas'ın Bölüm IV.3'teki "Memun-Aristoteles düş ziyareti basit anlatımının yüzeysel okuması" eleştirisi işlendi; Pedersen-Sezgin-Freely-Lyons-Gutas dört çerçevenin ağırlık merkezi olarak yeniden konumlandırma. |
| `src/content/people/memun.md` | person atomic NEW | **4 kitap** (başlangıçtan) | Halka atomik atlasının ikinci 4-kitap kişi-figürü (Bîrûnî 4-kitap ile birlikte). Pedersen + Sezgin + Lyons + Gutas. Üç ana siyasi proje (mihne, Bizans karşıtı emperyal politika, merkezîleştirme reformları) Gutas Bölüm IV omurgasında işlendi; Lyons'un "aydın hükümdar bilim aşığı" portresinden Gutas'ın "Sasani Pehlevî ideolojisinin İslam'a uyarlanmasının sistematik uygulayıcısı" portresine süzülme. |
| `src/content/concepts/bermekiler.md` | concept atomic NEW | **3 kitap** (başlangıçtan) | Pedersen + Lyons + Gutas. Belh'li Sasani-Budist asıllı dört kuşak (Halid, Yahya, Cafer, el-Fadl). 750-803 arasında Abbasi imparatorluğunu fiilen yöneten vezir-hanedanı; Tercüme Hareketi'nin Mansur-sonrası kurumsal süreklilik anchor'u; Gutas'ın "çeviri hareketinin belki de en ateşli destekçileri" işaretlemesi. v0.13 Berkey turunda 4-kitap'a yükselme potansiyeli (Berkey'in Memlûk vezir-eğitim çerçevesinin dolaylı tematik bağı). |

### Kümülatif metrikler (v0.11 → v0.12)

| Metrik | v0.11 | v0.12 | Değişim |
|---|---|---|---|
| Müfredat book.md sayısı | 9 / 21 (% 43) | **10 / 21 (% 48)** | +1 |
| 2. dönem (Doğu Bilim Geleneği) tamamlama | 5 / 7 (% 71) | **6 / 7 (% 86)** | +1 |
| Atomik atlas dosyası | 22 (6 yer + 11 kişi + 5 kavram) | **25 (7 yer + 12 kişi + 6 kavram)** | +3 |
| 4-kitap-üstü cross-ref düğümü | 4 (bagdat, tercume-hareketi, beytulhikme, biruni) | **5** (+ memun) | +1 |
| 5-kitap-üstü cross-ref düğümü | 1 (tercume-hareketi) | **3** (+ beytulhikme + bagdat 7-kitap'a yükseldi) | +2 |
| Halka atomik atlas rekoru | 6-kitap (bagdat) | **7-kitap (bagdat)** | +1 (yeni rekor) |
| Toplam müfredat-içi cross-ref deklarasyonu | 64 | **~74** | +10 |
| Anti-Eurocentric kamp dengesi | 8 / 9 (% 89) | **9 / 10 (% 90)** | +1 |
| Non-declensionist çoğunluk | 7 / 9 | **8 / 10** | +1 |
| Bağdat-merkezli kitap sayısı | 3 (Freely + Pedersen + Lyons) | **4** (+ Gutas) | +1 |
| Halka `dogrudan_kaynak` ilişki sayısı | 4 (Pedersen-Lyons + Lyons-Gutas + Pedersen-Sezgin + Sezgin-Lyons) | **5** (+ Sezgin-Gutas yeni) | +1 |
| Externalist konumlanma | 3 / 9 | **4 / 10** | +1 (Gutas externalist) |

---

## Bu turun özgün katkıları (Halka graf yapısına)

**1. Halka atomik atlas rekoru: 7-kitap (bagdat).** v0.11'de bagdat 6-kitap'la rekordaydı; Gutas eklenmesiyle 7-kitap'a çıktı (Pedersen + Sezgin + Freely + Hobson + Goody-BD + Fara + Lyons + Gutas — sekiz farklı yöntemsel-pencere). Bu, Halka'nın "kümülatif bilgi ağı" tezinin somutlaştığı tek-noktalı zirve haline geldi.

**2. 5-kitap üst-düğüm üçlüsü oluştu: bagdat (7), tercume-hareketi (5), beytulhikme (5).** 2. dönem'in epistemolojik haritasının zirve-cross-ref-üçlüsü kuruldu. Halka grup okumasında bu üç atomik düğüm Pedersen → Sezgin → Lyons → Gutas akademik-popüler-akademik salınımının kavramsal ekseni olarak özel pedagojik işlevi görür.

**3. Sezgin-Gutas dogrudan_kaynak ilişkisi (yeni).** Halka grafında 5. dogrudan_kaynak ilişkisi açıldı. Önemli nüans: aynı yazarın iki dilde iki farklı eseri (Almanca *GAS* 17 cilt vs Halka'nın okuduğu Türkçe *İslam'da Bilim ve Teknik* 5 cilt). Bu nüans Halka grup okumasında "akademik kişilik vs kitap-format" meta-sorusunun ön-malzemesi olarak işlenebilir.

**4. Goody-R-Gutas uyumlu cross-ref'i (revizyon).** Goody-R'in "çoklu rönesanslar" tezinin Bağdat-spesifik akademik kanıtı Gutas. Halka'nın 1. dönem (çerçeve) ile 2. dönem (Doğu Bilim Geleneği) arasındaki en doğrudan kavramsal-bağ olarak konumlandı. 3. dönem'e (Bilim Devrimi) geçildiğinde Westfall #15 + Kuhn #13 + Koyré #12 ile karşılaşıldığında Gutas'ın "Çeviri hareketi de bilim devrimi kategorisindedir" iddiası "Bilim Devrimi'nin entelektüel ön-koşulu nerede başlar" tartışmasının temel karşı-veri kitabı olacak.

**5. Halka'nın anti-Eurocentric çoğunluğu %90'a yükseldi (9/10).** Gutas'ın claim-008 (Bizans Yunanca-mirasçısı olmasına rağmen Abbasi düzeyine ulaşamadı) Halka'nın anti-Eurocentric kampının en güçlü doğrudan-Bizans-örneği. Halka 2. dönem'inin akademik-philological zirvesi olarak Gutas, kampın yapı-içsel-tutarlılığını pekiştirdi.

**6. Externalist konumlanma yeni karakter.** Pedersen + Sezgin + Lyons internalist ya da mixed iken Gutas'ın açık externalist konumu (politik-ideolojik motivasyonlar: Sasani ideolojisi + mihne + Bizans karşıtı emperyal politika) Halka'ya yeni bir akademik-yorumsal cephe ekliyor. Bu Halka 4. dönem'de Westfall #15 ve Shapin tartışmalarına ön-malzeme.

---

## Bekleyen v0.13 turu hazırlığı

`next-session-prompt-halka-v0.13-berkey.md` dosyası bu pakette yer alıyor. Berkey #11, Halka müfredatının 11. kitabı, 2. dönem'in son kitabı (kapanış: %86 → %100). Pre-analysis + K1-K6 ön-tahminleri + atomik dalga adayları (medrese, sema-icaze-sistemi, nizamiye-medreseleri, hunayn-ibn-ishaq → 4-kitap'a yükselme adayı) handoff prompt'unda detaylandırıldı.

---

## Şema-koruma ve atomik veri disiplini doğrulamaları

- ZOD şema kontrolü: tüm dosyalar `src/content/config.ts` şemasına uygun (eurocentrism_axis, baghdad_centrism_axis, internalist_externalist, ClaimType, BookRelationKind, claim id format claim-NNN üç-hane).
- v1.0 proven template: Hobson #4'ten beri 10 book.md, sıfır şema değişikliği. Astro 5 + ZOD content collections + Tailwind + Pagefind stack korundu.
- Atomik veri disiplini: tüm slug'lar mevcut (gutas-yunan-dusuncesi-arap-kulturu zaten curriculum.ts'de + Lyons cross-ref'inde); status: "sirada" (Lyons emsali).
- macOS gotcha: `find . -name "._*" -delete` zip-öncesi temizlik refleksi uygulandı.
