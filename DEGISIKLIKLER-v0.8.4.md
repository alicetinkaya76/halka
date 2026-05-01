# DEĞİŞİKLİKLER — Halka v0.8.4

**1 Mayıs 2026 — F1.1 Pagefind static search**

Faz 2 Kol B'nin son polish maddesi: arama. WhatsApp Yorumcu 1'in 8 önerisinin sonuncusu kapatıldı. **Faz 2'nin tüm Kol A + Kol B kapsamı sıfırlandı.**

---

## Kapatılan madde

### F1.1 — Pagefind static search

- **Header'da "Ara" butonu** (büyüteç + sm:"Ara" + md:`⌘K` kbd)
- **Modal dialog**: Backdrop blur, max-w-2xl beyaz kart, "Halka'da ara" başlığı
- **Klavye kısayolları**: ⌘K (Mac) / Ctrl+K (Win/Linux) açmak/kapatmak için, Esc kapatmak için
- **Türkçe arama**: Pagefind tr.pagefind WASM, 8530 kelime, 14 sayfa
- **Halka design system**: Pagefind UI CSS variables override (emerald accent, Inter font, ink palette)
- **Türkçe çeviriler**: Placeholder, zero-results, search-suggestion mesajları
- **Aksesibilite**: role="dialog" aria-modal, focus trap, dış tıklama kapanış
- **Lazy loading**: Pagefind UI sadece modal açılınca yüklenir (ilk sayfa yüküne sıfır maliyet)
- **Dev fallback**: pagefind/ klasörü yoksa kibar mesaj ("indeks sadece npm run build sonrası üretiliyor")

Yorumcu 1'in tarifinin birebir karşılığı: "arama yapılan terimle ilgili ilişiği olanların hepsi sıralanır altında küçük dipnotlar olur içeriğe bakıp detayına tıklayıca içeriğe gidilir" → Pagefind Default UI snippet preview + click-to-page paterni.

---

## Değişen dosyalar

3 dosya:

- `package.json` — `build` scripti `astro build && pagefind --site dist` zincirine geçti, pagefind devDependency olarak eklendi
- `package-lock.json` — pagefind 1.x dep tree (otomatik)
- `src/layouts/BaseLayout.astro` — search button (header), modal dialog, init script (Cmd+K, dynamic import), Halka theme CSS override

**GitHub Actions workflow değişikliği gerekmez** — `npm ci && npm run build` zaten doğru zinciri çalıştırır.

---

## Build doğrulaması

```
$ npm run build
[build] 14 page(s) built in ~3-5s
[Pagefind] Indexed 1 language: tr
[Pagefind] Indexed 14 pages
[Pagefind] Indexed 8530 words
[Pagefind] Indexed 0 filters
Finished in 0.5 seconds
```

Render edildi:
- `<link rel="stylesheet" href="/halka/pagefind/pagefind-ui.css">` doğru base-prefix
- Search trigger butonu tüm sayfalarda
- Modal HTML tüm sayfalarda
- `dist/pagefind/` ~1.1MB (tr.pagefind WASM, index parçaları, fragment dosyaları)

---

## Faz 2 — TAM kapanış

| Kol | Madde | Durum |
|---|---|---|
| **Kol A** | F1.6 stratejik okuma her kitaba | ✅ v0.8.2 |
| **Kol A** | F1.7 akıcılık etiketi | ✅ v0.8.2 |
| **Kol A** | F1.8 içindekiler ilk kısımda | ✅ v0.8.2 |
| **Kol A** | F2.5 sorular tahlilden önce | ✅ v0.8.2 |
| **Kol B** | F1.3 tarihyazımı 2D scatter | ✅ v0.8.3 |
| **Kol B** | F1.4 kapak yer tutucusu | ✅ v0.8.3 (yarısı, render hazır; kapak görselleri ileride) |
| **Kol B** | F1.1 arama | ✅ v0.8.4 (BU SÜRÜM) |
| **Kol B+** | F1.2 donut chart | ⏳ DEFERRED (mevcut text-list yeterli) |
| **REJECTED** | F1.5 NotebookLM özet | ❌ Halka tezine ters |

**HALKA-FEEDBACK-v0.8.md tüm scope'u tamamlandı** (bir reddedilmiş hariç).

---

## Test (deploy sonrası)

```
https://alicetinkaya76.github.io/halka
```

Sırasıyla:
1. **Sağ üstte** "Ara" butonu görünür (md+ ekranlarda `⌘K` rozeti ile)
2. Butona tıkla VEYA `Cmd+K` bas → modal açılır
3. Aramayı dene: "Sina", "Bağdat", "Buhara", "Beytü'l-Hikme", "Pedersen"
4. Sonuçlar gelir (highlight'lı snippet preview), tıkla → ilgili sayfaya git
5. `Esc` ile kapat

---

**Versiyon:** v0.8.4
**Önceki:** v0.8.3 (F1.3 + F1.4 yarısı)
**Sonraki:** v0.9 — Pedersen / 2. dönem açılış kitabı (yeni sohbet)
