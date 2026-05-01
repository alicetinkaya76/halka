# DEĞİŞİKLİKLER — Halka v0.8.3

**1 Mayıs 2026 — Faz 2 Kol B önceği polish**

v0.8.2'de Kol B'ye ertelenen iki yüksek-öncelikli polish maddesinin acil uygulaması. WhatsApp iletişim eyleminden önce yapılması ile yorumcuya verilecek cevap güçlendi.

---

## Bu turda kapatılanlar

### F1.3 — Tarihyazımı 2D scatter
- Eski 3 yatay eksen+dot ("ilk bakıldığında anlaşılmıyor" şikayeti) → tek SVG 2D scatter
- X ekseni: Avrupamerkezcilik (Eurocentric ← → Anti-Eurocentric)
- Y ekseni: Bağdat-merkezcilik (Bağdat-merkezci ↑ ↓ Anti-Bağdat-merkezci)
- Tüm 6 kitap aynı görselde nokta olarak
- Bu kitap büyük emerald, diğerleri küçük transparent emerald
- Çöküşçü tezler (Freely, Starr) kırmızı kenarlı
- 4 çakışan multipolar+anti-Eurocentric kitap vertical jitter ile ayrıştırıldı
- Üçüncü boyut (içselci-dışsalcı) küçük yatay bar olarak altta korundu
- Lejant + coğrafi vurgu metni eklendi
- SVG accessibility (aria-label, role=img, hover tooltip her dot'ta)

### F1.4 (yarısı) — Kapak yer tutucusu
- Header 2-kolon flex'e refaktöre edildi
- Sol kolon: cover slot (32 sm:40 width, aspect 2:3)
- `cover_image` doluyse `<img loading="lazy">` + figcaption (cover_credit)
- Boşsa dashed-border placeholder ("Kapak yakında")
- Kapak görselleri Kol B'de toplanacak; render mantığı şimdi hazır

---

## Değişen dosyalar

Sadece **1 kod dosyası** + **2 doküman**:

- `src/pages/kitaplar/[slug].astro` — frontmatter'a bookPositions hesabı + header 2-kolon refaktör + tarihyazımı SVG scatter
- `HALKA-GRAND-PLAN.md` — v0.8.3 satırı (§11) + üst başlık güncellemesi
- `DEGISIKLIKLER-v0.8.3.md` — bu dosya

---

## Build doğrulaması

```
$ npx astro build
[build] 14 page(s) built in 6.89s
[build] Complete!
```

Render edildi:
- 6 scatter dot doğru koordinatlarda (Freely top, Starr bottom, 4 multipolar jitter ile)
- 2 carmine stroke (Freely + Starr declensionist)
- Kapak placeholder her sayfada
- SVG aria-label + her dot'ta `<title>` tooltip

---

## Kol B kalan iş

| Madde | Durum |
|---|---|
| F1.1 | Arama (Pagefind static search) — sıradaki polish turu |
| F1.4 (diğer yarısı) | Kapak görsellerinin toplanması ve frontmatter'a yazılması |
| F1.2 | Donut chart (kitap ilişkileri yüzdelik) — Kol B sonrası |

**REJECTED** (v0.8.2'de kaydedildi): F1.5 NotebookLM özet — Halka tezine ters.

---

**Versiyon:** v0.8.3
**Önceki:** v0.8.2 (Faz 2 Kol A — feedback hızlı uyum)
**Sonraki:** v0.9 — Pedersen / 2. dönem açılış kitabı (yeni sohbet)
