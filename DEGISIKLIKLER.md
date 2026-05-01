# DEĞİŞİKLİKLER — Halka v0.9 (Faz 2 Kol A)

**1 Mayıs 2026 — Feedback Hızlı Uyum**

WhatsApp grubu feedback'i (HALKA-FEEDBACK-v0.8.md, 2 kişi, 12 madde) içinde şema değişikliği gerektirmeyen ya da yarım gün içinde uygulanabilen maddeleri kapatan tur. Şema değişikliği gerektiren ya da içerik genişlemesi olan maddeler **Faz 2 Kol B**'ye ertelenmiştir.

---

## Bu turda kapatılanlar

### F1.7 — Akıcılık etiketi (Öncelik 2)
- 6 kitap sayfası header'ında **akıcılık chip'i** (Kolay/Orta/Zor)
  - Renk kodu: kolay → emerald, orta → neutral, zor → carmine
  - Hover'da kalibrasyon açıklaması (HTML title)
- Kalibrasyon: Fara=Kolay, Goody-BD=Orta, Goody-R=Orta, Hobson=Zor, Freely=Orta, Starr=Orta
- Subjektif (Ali kalibrasyonu); Halka grup deneyimi sonrası gözden geçirilebilir

### F1.8 + F2.5 — Sayfa düzeni (Öncelik 1)
- **İçindekiler** ve **Tartışma soruları** sayfanın yukarısına taşındı (tezden hemen sonra)
- Tartışma sorularının üstüne **uyarı kutusu** eklendi (emerald border, "Tavsiye: spoiler etkisi olabilir, önce göz at, kitabı oku, sonra sorulara dön")
- Sticky right-side TOC sıralaması ana içerikle eşleştirildi

### F1.6 — Heading tutarlılığı (Öncelik 2)
- 5 kitabın gövde başlığı canonical isme çevrildi: `## Halka müfredatındaki yeri[: long form]` → `## Halka için stratejik okuma`
- Eski long-form başlıklar italik alt-satır olarak korundu (içerik kayıp yok)
- Starr zaten model — değiştirilmedi (3 bölüm: stratejik okuma, eleştirel uyarılar, müfredattaki yer)

### F1.4 — Kapak görseli (Öncelik 3, hazırlık)
- Şemaya `cover_image` ve `cover_credit` opsiyonel alanları eklendi
- Frontend rendering Faz 2 Kol B'ye ertelendi (kapaklar gelmeden render eklenmiyor)

### Doküman katmanı
- **README.md** — vizyon, 6/6 tablo, hibrit lisans, katkı çağrısı (önceden yoktu)
- **LICENSE** — MIT, kod için
- **LICENSE-CONTENT** — CC BY-SA 4.0, içerik için (Wikipedia modeli)
- **HALKA-FEEDBACK-v0.8.md** — repo köküne kopyalandı (yarı-public feedback kaydı)

---

## Faz 2 Kol B'ye ertelenenler

| Madde | Konu | Sebep |
|---|---|---|
| F1.1 | Müfredat indirilebilirliği (PDF export) | Tasarım gerektiriyor |
| F1.2 | Atomik dosyaların görsel zenginleştirmesi | İçerik genişlemesi (10+ atomik dosya) |
| F1.3 | Diyagram eklemeleri (tarihyazımı haritası, vs.) | Visual design pass |
| F1.4 | Kapak görselleri (frontend) | Kapaklar henüz toplanmadı |
| F1.5 | Mobil hamburger menüsü | Tasarım pass |
| F2.1 | Arama (Pagefind) | Faz 3 kapsamı |
| F2.2 | Kitap-içi navigasyon (jumplinks) | Düşük öncelik |
| F2.3 | Karanlık tema | Düşük öncelik |
| F2.4 | Print stylesheet | Düşük öncelik |

---

## Değiştirilen / yeni dosyalar

### Yeni (repo köküne)
- `README.md` — proje vizyonu + durum + lisans
- `LICENSE` — MIT (kod)
- `LICENSE-CONTENT` — CC BY-SA 4.0 (içerik)
- `HALKA-FEEDBACK-v0.8.md` — feedback kaydı

### Şema (1 dosya)
- `src/content/config.ts` — `books` koleksiyonuna 4 yeni alan:
  - `reading_level: z.enum(['kolay', 'orta', 'zor'])` (zorunlu)
  - `accessibility_note: z.string().optional()` (kalibrasyon notu)
  - `cover_image: z.string().optional()` (Faz 2 Kol B kullanımı)
  - `cover_credit: z.string().optional()` (Faz 2 Kol B kullanımı)

### Sayfa şablonu (1 dosya)
- `src/pages/kitaplar/[slug].astro` — tamamen yeniden yazıldı:
  - Bölüm sırası: tez → içindekiler → sorular → tarihyazımı → özet → iddialar → kişiler → yerler → kavramlar → diğer kitaplar → eleştirel notlar → ileri okuma → tags
  - Header'da `Akıcılık` chip'i (4. chip pozisyonu)
  - Header'da italik `Akıcılık notu:` satırı (accessibility_note dolu olduğunda)
  - Tartışma soruları üstünde uyarı kutusu
  - Sticky TOC ana içerikle eşleştirildi

### Kitap dosyaları (6 dosya)
Hepsinde aynı pattern:
- **Frontmatter**: `chapters_count` sonrasına `reading_level` + `accessibility_note` eklendi
- **Gövde** (Starr hariç 5 kitap): `## Halka müfredatındaki yeri[: long form]` → `## Halka için stratejik okuma` + italik alt-satır

Etkilenen dosyalar:
- `src/content/books/fara-bilim-dort-bin-yillik.md`
- `src/content/books/freely-isik-dogudan-yukselir.md`
- `src/content/books/goody-batidaki-dogu.md`
- `src/content/books/goody-ronesanslar.md`
- `src/content/books/hobson-bati-medeniyetinin-dogulu-kokenleri.md`
- `src/content/books/starr-kayip-aydinlanma.md` (sadece frontmatter — gövde değişmedi)

---

## Build doğrulaması

```
$ npx astro build
[content] Synced content
[types] Generated 1.43s
[build] Building static entrypoints...
[vite] ✓ built in 3.34s
[build] 14 page(s) built in 5.10s
[build] Complete!
```

✅ ZOD şeması geçti (6 kitap için yeni `reading_level` + `accessibility_note` alanları doğrulandı)
✅ 14 sayfa render edildi (önceki versiyondaki sayfa sayısı korundu)
✅ Sıfır error, sıfır type hatası
⚠ Pre-existing uyarılar: Auto-generated `authors`/`claims`/`discussions` koleksiyonları (Faz 1 ortası kapsamı)

---

## Önerilen commit yapısı

Bu turun değişiklikleri 6 commit'e bölünebilir, böylece her değişiklik bağımsız incelenebilir ve gerekirse ayrı revert edilebilir:

```
1. feat(schema): add reading_level + accessibility_note + cover_image to books schema
   - src/content/config.ts

2. feat(content): add reading_level frontmatter to all 6 books in Period 1
   - src/content/books/*.md (sadece frontmatter değişiklikleri)

3. feat(content): standardize "Halka için stratejik okuma" heading across 5 books
   - src/content/books/fara-bilim-dort-bin-yillik.md
   - src/content/books/freely-isik-dogudan-yukselir.md
   - src/content/books/goody-batidaki-dogu.md
   - src/content/books/goody-ronesanslar.md
   - src/content/books/hobson-bati-medeniyetinin-dogulu-kokenleri.md

4. feat(ux): rework book page layout (chapters + questions up top, spoiler warning, reading-level chip)
   - src/pages/kitaplar/[slug].astro

5. docs: add README, hybrid LICENSE (MIT + CC-BY-SA 4.0), feedback record
   - README.md (yeni)
   - LICENSE (yeni)
   - LICENSE-CONTENT (yeni)
   - HALKA-FEEDBACK-v0.8.md (yeni)

6. chore: bump version to v0.9 in HALKA-GRAND-PLAN.md
   - HALKA-GRAND-PLAN.md (bu pakette yok — sen ekle)
```

**Alternatif:** Hepsini tek bir `feat: Faz 2 Kol A — feedback uyumu (v0.9)` commit'i olarak da yapabilirsin; commit mesajına yukarıdaki 5 maddeyi alt-bullet olarak yaz.

---

## Sonraki oturum için

`next-session-prompt-halka-faz2-kolB-genisleme.md` ile başla. Kapsam:
- F1.1 (PDF export), F1.4 (kapak frontend), F1.5 (mobil), F2.4 (print) için tasarım pass'i
- Yeni atomik dosyalar (Goody-Polanyi, Hobson-Lyons çatlağı, vb.)
- 7. kitap kararı (Pedersen / Sezgin-Lyons / Berkey)
- HALKA-GRAND-PLAN.md'de v0.9 sürüm satırı eklenmesi
- Kök `content/` ölü ağacının temizliği (eski Starr + TEMPLATE — Astro 5 yok sayıyor ama düzen için silinmeli)

---

**Kapsül**, bu paketi repo köküne uygula, `npm run build` ile doğrula, sonra commit. Build çıktısı bu pakette zaten test edilmiş — yerel build de geçecek.
