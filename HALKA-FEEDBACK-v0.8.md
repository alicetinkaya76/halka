# HALKA v0.8 — Katılımcı Feedback Kaydı

> **Tarih:** 1 Mayıs 2026 (perşembe akşamı, v0.8.1 push'undan ~14 saat sonra)
> **Kanal:** Halka WhatsApp grubu
> **Bağlam:** Ali Çetinkaya v0.8.1 canlı yayınını duyurdu, açık uçlu feedback istedi
> **Gelen yanıt:** İki katılımcıdan iki uzun mesaj
> **Bu dosyanın amacı:** Feedback'i sistematik atomik birimlere ayırmak; Faz 2 ve sonrası planlamasında referans olarak kullanmak; gelecek feedback'leri aynı şablona ekleyebilmek.

---

## 1. Birinci katılımcı (özellik-mühendis perspektifi)

**Aktarılan sözel mesaj (özet, parantez içi yorumum):**

> "arama butonu yapılabilir arama yapılan terimle ilgili ilişiği olanların hepsi sıralanır altında küçük dipnotlar olur içeriğe bakıp detayına tıklayıca içeriğe gidilir
>
> Müfredattaki diğer kitaplarla ilişiği kısmı yüzdelik olarak verilebilir çember şeklinde
>
> Tarih yazımı pozisyonu bu kısım grafik üzerinde daha iyi olabilir ilk bakıldığında anlaşılmıyor
>
> kitabın resimleri eklenebilir
>
> kitabın özeti yada öne çıkan kısımları notebook lm sesli özet yada videolu özet eklenebilir
>
> Halka için stratejik okuma bu kısım her kitaba uygulanmalı ayrıyeten kitabın akıcılık yada okuyucuya hitap etmesi ya da seviye olarak orta zor kolay gibi kısım eklenebilir bu son okuduğumuz kitap çok akıcıydı böyle bir kısım eklenbilir
>
> Kitabın içindekiler ilk kısma konulması daha iyi olabilir"

### Atomik öneriler

| # | Öneri | Tip | Eforce | Faz | Not |
|---|-------|-----|--------|-----|-----|
| F1.1 | **Arama butonu** — terim ara, ilişkili sonuçları sırala, dipnotlu önizleme, tıklayınca içeriğe atla | YENI ÖZELLİK | YÜKSEK | Faz 3 | Pagefind veya Astro built-in static search; tüm content collections'ı index'le |
| F1.2 | **Müfredattaki diğer kitaplarla ilişki — yüzdesel daire grafik** | GÖRSELLEŞTIRME | ORTA | Faz 4 | Mevcut `relationships_to_other_books` enum'ından (uyumlu/celişir/kismen_celişir/dogrudan_kaynak/tematik_tamamlayici) yüzdesel skora geçiş gerekir; küçük şema değişikliği + viz katmanı |
| F1.3 | **Tarihyazımı pozisyonu — grafik üzerinde** (şu an metin; ilk bakışta anlaşılmıyor) | GÖRSELLEŞTIRME | ORTA | Faz 3 | Mevcut `historiographical_position.eurocentrism_axis` ve `baghdad_centrism_axis` zaten var; 2D scatter plot ile her kitap bir nokta olabilir |
| F1.4 | **Kitap kapakları/resimleri** | İÇERİK | DÜŞÜK | **Faz 2 — Kol A** | Her book.md'ye `cover_image` alanı + public/covers/ klasörü; 6 kapak için ~30 dk iş |
| F1.5 | **NotebookLM sesli özet veya videolu özet** | ZENGINLEŞTIRME | YÜKSEK | Faz 5 | Hem üretim eforu (Ali kendisi yapacak ya da NotebookLM kullanacak) hem player UI |
| F1.6 | **"Halka için stratejik okuma" — her kitaba uygulanmalı** (şu an bazılarında yok ya da eksik) | İÇERİK GAPDOLDURMA | ORTA | **Faz 2 — Kol A** | 6 kitabın hepsinde tutarlı bölüm; book.md frontmatter'ında ayrı alan veya gövde içinde standart başlık |
| F1.7 | **Akıcılık/seviye etiketi (kolay/orta/zor)** — "bu son okuduğumuz kitap çok akıcıydı" → Fara | METADATA | DÜŞÜK | **Faz 2 — Kol A** | book.md'ye `reading_level: "kolay" / "orta" / "zor"` ve `accessibility_note: "..."` alanı; ZOD şemasına ekle, 6 kitabı kalibre et |
| F1.8 | **İçindekiler ilk kısımda olsun** (sayfanın başında) | UX | DÜŞÜK | **Faz 2 — Kol A** | Astro template'inde `chapters` listesini sayfanın başına çek, frontmatter sonrası ilk içerik bölümü olsun |

---

## 2. İkinci katılımcı (alan-dışı okuyucu, deneyim raporu)

**Aktarılan sözel mesaj:**

> "Platforma göz attım Havvacığım, özellikle benim gibi alan dışı okumalar yapanlar için, başlıkları ve içeriklerini bilginin zihinde tam oturması ve metodolojik bir görsel oluşturması açısından kolaylık sağladığı izlenimine ulaştım. Kitaplar arası karşılaştırmaların kitabın daha iyi anlaşılmasına, geriye dönük okumaların sağlanmasına ve kalıcı bilgiye dönüşmesine katkı sağlayacağını düşündüm. İçeriklerde kafa karıştıracak bir şeye rastlamadım. Bilakis içeriklerin ayrı ayrı listelenmesi aranan bilgiye hızlı ulaşımı destekleyeceğini düşündüm. Tartışma sorularına tahlillerde yer verilirse öncesinde sorulara göz atıp üzerinde düşünme fırsatı olması açısından verimli bir bölüm olacağını düşünüyorum."

### Atomik tespitler

| # | Tespit | Tip | Eforce | Faz | Not |
|---|-------|-----|--------|-----|-----|
| F2.1 | **DEĞER doğrulaması — "alan dışı okumalar yapanlar için bilginin zihinde tam oturması" sağlıyor** | OLUMLU | — | — | Vizyonun ana hedefi: bilgi grafiğinin pedagojik kazanımı. Doğrulandı. |
| F2.2 | **DEĞER doğrulaması — "kitaplar arası karşılaştırma → geriye dönük okuma → kalıcı bilgi"** | OLUMLU | — | — | Halka'nın "her kitap önceki kitapların değerini artırır" çekirdek içgörüsünün katılımcı sözleriyle yankılanması. |
| F2.3 | **DEĞER doğrulaması — "kafa karıştıracak bir şeye rastlamadım"** | OLUMLU UX | — | — | İçerik tasarımı / Astro template'i temiz bulundu. Frontmatter'ın metin olarak yansıması alan-dışı için yeterince anlaşılır. |
| F2.4 | **DEĞER doğrulaması — "ayrı ayrı listelenmesi aranan bilgiye hızlı ulaşımı destekliyor"** (kişi/kavram/yer ayrı sayfalar) | OLUMLU | — | — | Mevcut `/kisiler/`, `/yerler/`, `/kavramlar/` index sayfaları doğru çağrı. Ama atomik dosyalar henüz çok az (3 kişi, 1 yer, 1 kavram); zenginleşmesi gerekli — Faz 2 Kol B. |
| F2.5 | **YAPICI ÖNERİ — Tartışma soruları tahlilden ÖNCE okunsa, "üzerinde düşünme fırsatı" yaratırdı** | UX AKIŞ | DÜŞÜK | **Faz 2 — Kol A — ÖNCELİK 1** | Astro template'inde sayfa düzeni: discussion_questions bölümünü chapter listesi öncesine çek; veya alternatif "önce sorular" linki ekle. 30 dakikalık iş. |

---

## 3. Faz 2 Kol A için kalibre edilmiş öncelik listesi

Feedback'ten doğrudan çıkan, Faz 2'nin **birinci alt-projesi** (Kol A — feedback hızlı uyum):

### Öncelik 1 — UX kazanım (en yüksek değer/eforce oranı)
- **F2.5** Tartışma sorularını sayfada YUKARI taşı (chapters'tan önce) — Astro template `kitaplar/[slug].astro` düzenle
- **F1.8** İçindekiler/TOC sayfanın başına — aynı template iş

### Öncelik 2 — İçerik tutarlılık (mevcut 6 kitap için tek seferlik kalibrasyon)
- **F1.6** "Halka için stratejik okuma" bölümünü her kitap için tutarlı hale getir — book.md gövde standardize
- **F1.7** Akıcılık etiketi ekle — şema değişikliği + 6 kitap kalibre

### Öncelik 3 — Görsel zenginlik
- **F1.4** Kitap kapakları — `cover_image` alanı + public/covers/

### Öncelik 4 — Repo erişilebilirliği (asıl olmasa da fırsat penceresi)
- **README.md zenginleştirme** — şu an Astro varsayılan; repo açanlar (gelecek katılımcılar, GitHub'ı dolaşanlar) Halka'nın vizyonunu görsün. Feedback'te direkt yok ama "platforma göz attım" demek için git URL'sini bilen biri repo'yu da açabilir.

---

## 4. Faz 3+ için biriktirilen liste (hemen uygulanmayacak ama kayıp etmeyelim)

| # | Öneri | Hedef Faz | Bağımlılık |
|---|-------|-----------|------------|
| F1.1 | Arama butonu | Faz 3 | Tüm 21 kitap eklendikten sonra index zenginleşmiş olur |
| F1.2 | Yüzdesel kitap-ilişki dairesi | Faz 4 | Şema değişikliği gerek (ilişki enum → yüzde); 21 kitap dolduktan sonra anlamlı |
| F1.3 | Tarihyazımı pozisyonu 2D scatter plot | Faz 3 | Mevcut alanlar yeterli; D3.js/Recharts entegrasyonu — ilk görsel modülü olacak |
| F1.5 | NotebookLM sesli/videolu özet | Faz 5 | Üretim eforu yüksek; her kitap için 5-10 dk podcast = 6 × 10 dk = 1 saat NotebookLM iş |

---

## 5. Süreç notları (yöntemsel kayıt)

- **Feedback şablonu kuruldu (bu dosya):** Atomik birimlere ayrılmış, eforce-faz tablosu, öncelik kalibrasyonu. Sonraki feedback'ler aynı yapıya eklenecek (örn. `HALKA-FEEDBACK-v0.9.md`, `v1.0.md` vs.).
- **WhatsApp grubu olarak duyuru kanalı çalıştı:** İki farklı perspektif (mühendis-tasarımcı + alan-dışı okuyucu) iki saat içinde geldi. Sessiz beta yerine direkt grup duyurusu doğru karardı (Ali'nin kararı, 30 Nisan 22:30).
- **Vizyon doğrulandı:** İkinci katılımcının "bilgi zihinde tam oturuyor" + "kalıcı bilgiye dönüşme" ifadeleri Halka'nın çekirdek içgörüsünün (her yeni kitap eski kitapların değerini artırır) katılımcı sözleriyle yansıması. Bu, vizyon dokümanının soyut iddiasının ilk somut doğrulanması.
- **Eksiklikler de doğrulandı:** Birinci katılımcının özellik listesi (arama, görsel pozisyon, yüzdesel ilişki, sesli özet) zaten Grand Plan'ın Faz 3-5 bölümünde planlanan şeyler. Yani **kullanıcı sezgisi ile geliştirici roadmap'i örtüşüyor** — bu sağlıklı bir sinyal.

---

## 6. Açık sorular (sonraki oturuma taşınacak)

1. **F1.7 akıcılık etiketi nasıl ölçülecek?** Subjektif (Ali'nin yargısı), objektif (Flesch-Kincaid Türkçe versiyonu var mı?), ya da grup-yargısı (Halka katılımcıları her kitabı 1-5 arası puanlar)? Karar gerek.
2. **F1.6 "Halka için stratejik okuma" tutarsızlığı nereden kaynaklanıyor?** Mevcut 6 kitabı tek tek inceleyip eksik olanları tespit et; tek bir standartta birleştir. Kol A'nın ilk teknik adımı.
3. **F2.5 tartışma soruları önce mi sonra mı?** Üç tasarım alternatifi:
   - (a) Sorular yukarıda, kitap içeriği aşağıda — direkt isteğe uyum
   - (b) Sorular yukarıda + "Önce kitabı oku" uyarısı — ikili kullanıma izin
   - (c) Sayfa başında "soruları görüntüle" toggle — kullanıcı seçer
   Karar gerek; bence (a) ya da (b).
4. **Kapaklar nereden alınacak?** Türkçe çevirilerin kapakları için Metis/Doğan Kitap/Türkiye İş Bankası/Alfa yayınevlerinin web sitelerinden indirme — telif notu eklenecek. Veya Ali'nin elindeki PDF'lerden ilk sayfa screenshot.

---

## 7. Kol A sonrası mutabakat (v0.8.2 — 1 Mayıs 2026)

> **Bağlam:** Faz 2 Kol A (feedback hızlı uyum) turu tamamlandı. Bu bölüm, §1-§6'da listelenen her maddenin Kol A sonrası **resmî durumunu** dökümler ve §6'daki açık soruları çözer. Sonraki tur feedback (Pedersen v0.9 sonrası) için referans noktasıdır.
>
> **Naming notu:** Bu mutabakat ilk planda ayrı bir `HALKA-FEEDBACK-v0.9.md` dosyası olarak düşünüldü, ancak `v0.9 = Pedersen / 2. dönem açılışı` (içerik milestone) olarak rezerv edildiği için tek-dosya disiplini tercih edildi. Sonraki turda (Pedersen sonrası gelecek feedback için) `HALKA-FEEDBACK-v0.9.md` açılacak.

### 7.1 v0.8 maddelerinin Kol A sonrası durumu

| Kod | Madde | Önceki tahsis | Kol A sonrası durum |
|---|---|---|---|
| **F1.1** | Arama butonu | Faz 3 | **MOVED → Faz 2 Kol B** — yeniden değerlendirme: atomik bilgi grafiğinin değerini ortaya çıkaran şey aramadır; Pagefind static search Faz 3'ten öne çekildi |
| **F1.2** | Yüzdelik çember (kitap ilişkileri görsel) | Faz 4 | **DEFERRED** — Kol B sonrası tasarım sprint; mevcut text-list zaten okunaklı |
| **F1.3** | Tarihyazımı pozisyonu grafik | Faz 3 | **MOVED → Faz 2 Kol B (ÖNCELİK #1)** — mevcut 3 yatay eksen+dot yetersiz ("ilk bakıldığında anlaşılmıyor"); 2D scatter veya etiketli radar; diğer 5 kitabın noktaları küme görünümünde |
| **F1.4** | Kitap kapakları | Kol A | **PARTIAL → Kol B** — şema eklendi (`cover_image`, `cover_credit`); render Kol B'ye ertelendi (kapaklar henüz toplanmadı, FSEK m.32 atıf disiplini hazır) |
| **F1.5** | NotebookLM sesli/videolu özet | Faz 5 | **REJECTED** — Halka tezine ters: "kitap kapalı kutu değil, atomik bilgi grafiği"; NotebookLM tam tersi (kapalı kutu sesli özet). Halka'nın değer önerisini bulanıklaştırır. Bu kararı geri çevirmek için yeni bir argüman gerekir. |
| **F1.6** | Stratejik okuma her kitaba | Kol A | **✅ DONE — v0.8.2** — 5 kitabın gövde başlığı canonical `## Halka için stratejik okuma`'ya çevrildi; eski long-form başlıklar italik alt-satır olarak korundu (içerik kayıp yok); Starr zaten model |
| **F1.7** | Akıcılık etiketi (kolay/orta/zor) | Kol A | **✅ DONE — v0.8.2** — 3 renkli chip (kolay→emerald, orta→neutral, zor→carmine) header'da; hover'da kalibrasyon notu tooltip; italik kalibrasyon satırı header altında. Kalibrasyon: Fara=Kolay, Hobson=Zor, diğer 4=Orta. **§6 açık sorusu çözüldü:** subjektif (Ali yargısı), kalibrasyon notu ile şeffaflaştırıldı; grup deneyimi sonrası gözden geçirilebilir. |
| **F1.8** | İçindekiler ilk kısma | Kol A | **✅ DONE — v0.8.2** — sayfa düzeninde 3. sırada (tezden hemen sonra), eskiden 8. sıradaydı |
| **F2.1-F2.4** | Genel olumlu değerlendirmeler | — | Validation; vizyon hipotezleri ("alan-dışı okuyucuya metodolojik görsel", "kitaplar arası karşılaştırma → kalıcı bilgi", "ayrı listeleme → hızlı erişim") ilk dış doğrulamasını aldı |
| **F2.5** | Sorular tahlilden önce göz at | Kol A | **✅ DONE — v0.8.2** — uyarı kutusu emerald border ile tartışma soruları üstünde; metin yorumcunun ifadesini birebir karşılıyor: "soruları akılda tut, kitabı oku, sonra sorulara dön". **§6 açık sorusu çözüldü:** alternatif (b) seçildi (sorular yukarıda + uyarı). |

**Skor:** 4 DONE / 2 MOVED-Kol-B / 1 PARTIAL / 1 DEFERRED / 1 REJECTED + 4 validation sinyali

### 7.2 Kol B için kalibre edilmiş öncelik listesi

**Öncelik 1 — Yüksek değer/efor, mevcut UX zayıflık:**
- **F1.3** Tarihyazımı pozisyonu görselleştirmesi — 2D scatter veya etiketli radar; tüm kitaplar tek görselde
- **F1.4** Kitap kapakları (frontend tamamlama) — 6 kapak topla, public/covers/ klasörü, header'da küçük thumbnail

**Öncelik 2 — Atomik grafiğin değerini ortaya çıkaran:**
- **F1.1** Arama (Pagefind static search) — atomik dosyaların aranabilir hale gelmesi; kategori sıralı sonuç (kişi/yer/kavram/iddia/kitap)

**Öncelik 3 — Kol B sonrası:**
- **F1.2** Donut chart (kitap ilişkileri yüzdelik) — tasarım sprint

**REJECTED:**
- **F1.5** NotebookLM özet — tezi ile çelişir, eklenmez

### 7.3 İletişim eylemi (yapılması gereken)

Kol A v0.8.2 deploy olduğunda, Halka WhatsApp grubunda **birinci katılımcıya** kısa mesaj atılmalı: söz ettiği 3 madde (F1.6 stratejik okuma, F1.7 akıcılık, F1.8 içindekiler) artık canlı yayında; ayrıca F2.5 (ikinci katılımcının tartışma soruları önerisi) de uygulandı. Bu, feedback'in atomik düzeyde takip edildiğini ve ciddiye alındığını yansıtır — "yapısal alıcı" sinyali.

**Önerilen mesaj şablonu:**

> *"Geçen gün attığınız feedback'inizi tek tek incelendi. Üç maddeniz (akıcılık seviye etiketi, stratejik okuma her kitap için, içindekiler yukarı) bu güncellemede uygulandı, canlı yayında görebilirsiniz. Diğerleri de Faz 2 Kol B'ye alındı: tarihyazımı pozisyonu görseli ve arama butonu sıradaki öncelikler. NotebookLM sesli özet önerisi üzerine biraz düşündük — Halka'nın 'her kitap atomik bilgi grafiği, kapalı kutu değil' tezi ile gerilim oluşturduğu için bu turun dışına aldık ama yeniden bakılabilir. Sağolun, atomik feedback yapımızı şekillendiriyor."*

### 7.4 Süreç dersleri (Kol A'dan)

- **Feedback turuna karşılık-tur deploy disiplini gerekli:** Yorumcu Kol A'da 3 isteği zaten karşılanmış olarak deploy görmediği için ikinci kez aynı maddeleri tekrar etti. Çözüm: feedback geldikten sonra deploy ile birlikte muhatap mesajı (yukarıdaki §7.3).
- **Mutabakat dosyası bir kez yazılınca otomatik şablon olur:** Sonraki tur feedback (Pedersen sonrası, v0.9+) geldiğinde aynı yapı (durum tablosu + yeni öncelik listesi + iletişim eylemi) uygulanır.
- **Versiyon-isimlendirme sürtünmesi gerçek:** Major sürüm (v0.X) içerik milestone'u; minor (v0.X.Y) polish/altyapı. Kol A naturally v0.8.2 (polish), v0.9 Pedersen için saklı. Bu disiplin grand plan'da (§11) yansıtıldı.
- **NotebookLM red kararı şeffaf belgelendi:** Reddetme açık gerekçe ile (tez çelişkisi); böylece yorumcuya cevap savunulabilir, gelecekte geri açılırsa argümanın güncellendiğini kaydetmek kolay.
