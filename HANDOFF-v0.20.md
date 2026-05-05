# HANDOFF — v0.20'ye bırakılan iş-konumları

Bu doküman v0.19 turundan v0.20 turuna **bilinçli-bırakım-konumlamasında** taşınan iş-eksenlerinin akademik-disiplin-rehberidir. Her iş-konumu için: yapısal-bağlam, somut-iş-listesi, beklenen-süre.

---

## 1. v0.19'da bilinçli-bırakım yapılan iş-eksenleri

### 1.1. Manuel-DİA-doldurma (~25 atomik) — **YÜKSEK ÖNCELİK**

**Bağlam:** v0.19 turunda DİA-slug-listesi-tahminleri WebSearch ile spot-doğrulamada %50+ yanlış-yapıda tespit edildi (örn. liste `biruni-ebu-reyhan` tahmin etmiş ama gerçek `biruni`; `nasiruddin-tusi` yanlış, gerçek `tusi-nasiruddin` ters). Yanlış-DİA-slug 404-yönlendirmeye yol açtığı için akademik-zarar-vermeme-prensibi gereği boş bırakıldı.

**Kapsam:** Halka 1.-2. dönem-İslam-figür-yer-kavramları için DİA-doldurma. Detaylı liste KULLANIM-v0.19.md §4'te.

**Beklenen süre:** ~30-45 dakika (her atomik ~30 saniye manuel-arama-doğrulama)

**Yöntem:** Tarayıcı-açık manuel-doğrulama (https://islamansiklopedisi.org.tr ana-arama → URL-son-segmenti) + atomik-frontmatter'a `dia_id: "..."` ekleme. KULLANIM-v0.19.md §4'te tam-akış ve DİA-naming-konvansiyon-pattern-tabloları.

---

### 1.2. UI sofistikleşmesi B/C/D — **ORTA ÖNCELİK**

**Bağlam:** v0.18'de UI sofistikleşmesi-A (AcademicSourceLinks rozet-altyapısı) yapıldı. v0.19'da kaynak-tahsisi multi-program + Westfall'a ayrıldı, UI-sofistikleşmesi-B/C/D ertelendi.

**Kapsam:**

- **B — Atomik-atlas içinde "kardeş-program-zincir-rozet" UI:** Bir atomiğin diğer-program-atomiğiyle akademik-zincir-konumlanması varsa (örn. `places/sam.md` ↔ Riyâzu's-Sâlihîn-İmam-Nevevî), atomik-sayfasında minik-rozet ile "Halka Türkiye / Riyâzu's-Sâlihîn programında da geçer" akademik-disiplinli-yan-yana-konumlama. ~2-3 saat.

- **C — Etki-ağı görselleştirmesinin akademik-zenginleşmesi:** Mevcut `/etki-agi` sayfasının cross-program-zincir-konumlamalarıyla akademik-yapısal-derinleştirilmesi; düğüm-renklerinin program-bazlı yapılaşması. ~3-4 saat.

- **D — Zaman-çizelgesi sayfasının akademik-derinleşmesi:** Mevcut zaman-çizelgesinin tarihçi-yorum-konumlamalarıyla akademik-disiplin-derinleştirilmesi (örn. her atomiğin tarihyazımı-konum-rozetleri). ~2-3 saat.

**Toplam beklenen süre:** ~7-10 saat (üç UI-eksen-uygulamasının yapısal-akademik-disiplin-yapılaşması)

---

### 1.3. Tam cross-program-cross-ref mekanizması — **ORTA ÖNCELİK**

**Bağlam:** v0.19'da `programs.ts`'te 8 cross-program-link tanımlandı, ama atomik-atlas-zemininde **otomatik-aktivasyon-mekanizması yok**. Mevcut durum: cross-program-zincirler `programlar.astro` sayfasında ve `places/sam.md`'de manuel-paragraf-konumunda yapılaşmış.

**Kapsam:**
- `programs.ts` cross-program-link'lerinin atomik-atlas-otomatik-yansıtması — bir atomiğin frontmatter'ında `cross_program_links: [...]` alanı + atomik-sayfada otomatik-render
- Atomik-arama-konumlamasının tüm-4-program-zeminine genişletilmesi (search across all 4 programs)
- Kardeş-program-içerikleri için ek atomik-tip-konumlamaları (özellikle Riyâzu's-Sâlihîn-hadis-mecmuasının atomik-yapısının tasarımı)

**Beklenen süre:** ~6-8 saat (yapısal-tasarım-disiplin + uygulama)

---

### 1.4. Ek-zenginleşme atomikleri — **DÜŞÜK ÖNCELİK**

**Bağlam:** v0.19'da Westfall ana-atomiğinin destekleyici-atomikleri Émilie du Châtelet'yi içerecek şekilde yapılaştı. Açılış-promptunda planlanan ama uygulanmayan başka 4 atomik var.

**Kapsam:**
- `people/john-adams.md` — Halka v0.18 Franklin-akademik-Atlantik-zincirin Adams-meslektaşı; SEP'de makale yok, dia_id boş; akademik-tarih-disiplin-yorumlaması
- `people/james-madison.md` — Bağımsızlık Bildirgesi Akademik-mimari-anatomi-vakasının ek-figürü
- `places/independence-hall.md` — Bağımsızlık Bildirgesi 1776 + Anayasa Konvansiyonu 1787 akademik-mekan-merkezi
- `places/marly-la-ville.md` — Franklin-elektrik-akademik-emek-zincirin Fransa-yansımalarının somut-akademik-mekan-vakası (Dalibard 1752 Mayıs uçurtma-deneyi-Fransa-cephe-yansıması)

**Beklenen süre:** ~3-4 saat (her atomik ~45 dk frontmatter + body)

---

## 2. Önerilen v0.20 tur-eksen-stratejisi

İş-konumlarını yapısal-önceliğe göre sırala:

### 2.1. v0.20-A: Manuel-DİA-doldurma (mini-tur, ~45 dk)

**En yüksek-öncelikli + en-hızlı-tamamlanabilir.** Kullanıcı tarafından yerel-makinede manuel-tarayıcı-doğrulamayla yapılır; KULLANIM-v0.19.md §4'te tam-akış var. Sonuç: external-source-link aktif-atomik 19 → ~40-45.

### 2.2. v0.20-B: UI sofistikleşmesi (yapısal-tur, ~7-10 saat)

UI-B (kardeş-program-zincir-rozet), UI-C (etki-ağı), UI-D (zaman-çizelgesi) yapısal-akademik-derinleştirilmesi. Akademik-derinlik-konumlama-vakası: bu üç-UI-eksen-uygulamasının mevcut atomik-atlasın akademik-disiplin-zenginleşmesini gerçekleştirmesi.

### 2.3. v0.20-C: Cross-program mekanizması (mimari-tur, ~6-8 saat)

`programs.ts`-otomatik-yansıtma + tam-cross-program-arama + Riyâzu's-Sâlihîn-hadis-atomik-yapı-tasarımı. Bu turun yapısal-akademik-disiplini multi-program-mimarisinin platform-zemininde-tam-yapılaşmasıdır.

### 2.4. v0.20-D: Ek-zenginleşme atomikleri (atomik-üretim-mini-turu, ~3-4 saat)

4 ek atomik (John Adams, Madison, Independence Hall, Marly-la-Ville). v0.18 Franklin-akademik-Atlantik-zincirin akademik-derinlik-zenginleşmesinin somutlaşması.

---

## 3. v0.20 turunun yapısal-zaman-tahmini

Tüm dört eksen-uygulamasıyla: **~17-22 saat** akademik-disiplin-emek-zincirinin somutlaşması.

Eğer kısaltılırsa:
- v0.20-A (DİA-mini-tur, kullanıcı yapar): 45 dk
- v0.20-Β (UI-B sadece): 2-3 saat
- v0.20-D (4 ek-atomik, kısaltılmış-frontmatter): 2 saat

= ~6 saat-akademik-disiplin-emek-zincirinin somutlaşması

---

## 4. Akademik-disiplin-not

v0.19 turunun yapısal-akademik-omurga-konumlaması üç-eksen-uygulamasının akademik-disiplin-yapılaşmasıdır:

1. **Multi-program umbrella-mimari** — Halka-platformunun "Halka Türkiye" akademik-konum-konsolide olmasının somut-vakası. Akademik-disiplin-zemini: dört-kardeş-program-yan-yana-akademik-konum-yapılaşmasının kullanıcıya-açık-yansıtılması.

2. **Halka #15 Westfall *Modern Bilimin Oluşumu*** — 3. dönem-akademik-derinlik-tezleştirme-katmanın somutlaşması; Halka 3. dönem-müfredat-tasarımının figür-merkezli-popüler-akademik biyografi katmanından akademik-derinlik-tezleştirme-katmanına geçişin yapısal-vakası.

3. **DİA/SEP slug-doldurma mini-turu** — external-source-link-akademik-disiplin-zemininin somut-yapılaşması; v0.18'in 5-atomik-zemininden v0.19'un 19-atomik-zeminine genişleme.

v0.20 turunun yapısal-akademik-omurga-konumlaması bu üç-eksen-uygulamasının akademik-disiplin-zenginleşmesinin somutlaşmasıdır: manuel-DİA-doldurmasıyla external-source-link-zemininin akademik-tamamlanması, UI-sofistikleşmesiyle atomik-atlasın akademik-derinleşmesi, cross-program-mekanizmasıyla multi-program-mimarisinin yapısal-tamamlanması.

---

**v0.19 sonu durum:** 99 atomik · 19 external-source-link · 4 program-veri-modeli · 8 cross-program-link · 0 hata / 0 uyarı.

**v0.20 başlangıç durumu** (önerilen v0.20-A uygulandığında): 99 atomik · ~45 external-source-link · 4 program · 8 cross-program-link · 0 hata / 0 uyarı.
