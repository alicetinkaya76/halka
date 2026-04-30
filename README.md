# Halka

> Bilim tarihi okuma grubu, halka halka.

[![Deploy](https://github.com/alicetinkaya76/halka/actions/workflows/deploy.yml/badge.svg)](https://github.com/alicetinkaya76/halka/actions/workflows/deploy.yml)
[![Live](https://img.shields.io/badge/canlı-alicetinkaya76.github.io%2Fhalka-0e6b5e)](https://alicetinkaya76.github.io/halka)

Halka, Dr. Ali Çetinkaya'nın yürüttüğü bilim tarihi okuma grubunun dijital bedenidir. Üniversite öğrencileri ve mezunları, dört dönemde 21 kitabı sırayla okuyup tartışıyor; bu platform, o okumaların **bilgi grafiğine** dönüştüğü yer.

Ayrıntılı vizyon, mimari ve faz haritası için [`HALKA-GRAND-PLAN.md`](./HALKA-GRAND-PLAN.md) belgesine bakın.

## Halka neyi farklı yapar?

Üç eksende öncüdür:

- **Kitap = bilgi grafiği.** Her kitap atomik birimlere (iddialar, kişiler, yerler, kavramlar, kaynaklar) ayrıştırılır. Bunlar kitap sınırlarını aşarak birbirine bağlanır. Onuncu kitap okunduğunda elinde özetler değil, bağlanan bir ağ var.
- **Tarihyazımı görünür.** Her yazarın hangi gelenekten konuştuğu (Eurocentric / anti-Eurocentric, içselci / dışsalcı, çöküşçü / apolojist) birinci sınıf veridir; kitaplar bir tarihyazımı haritası üzerinde konumlanır.
- **DH ekosistemine bağlı.** Geçen kişiler [tabakat.io](https://tabakat.io)'ya, mekânlar [islamicatlas.org](https://islamicatlas.org)'a, eserler GAS/GAL'a, kavramlar DİA'ya bağlanır.

## Teknoloji yığını

- [Astro 5](https://astro.build) — static site generator, content collections
- TypeScript + ZOD — frontmatter şema doğrulaması (build-time)
- Tailwind CSS 3
- GitHub Pages (deploy) + GitHub Actions (CI/CD)

Bağımlı sunucu yok, veritabanı yok, login yok. Build edilen HTML/JS/CSS — bu, sürdürülebilirliği garanti eder.

## Yerel geliştirme

```bash
# Bağımlılıkları kur
npm install

# Geliştirme sunucusu başlat
npm run dev          # http://localhost:4321/halka

# Şema kontrolü
npm run check

# Production build
npm run build

# Build'i lokalde önizle
npm run preview
```

## Dizin yapısı

```
halka/
├── HALKA-GRAND-PLAN.md       # vizyon + mimari + faz haritası
├── src/
│   ├── content/
│   │   ├── config.ts         # ZOD şemaları (mimari sözleşme)
│   │   ├── books/            # kitap markdown'ları
│   │   ├── people/           # atomik kişi sayfaları
│   │   ├── places/           # atomik mekân sayfaları
│   │   ├── concepts/         # atomik kavram sayfaları
│   │   ├── claims/           # atomik iddia sayfaları (Faz 2)
│   │   └── discussions/      # Halka oturum kayıtları (Faz 4)
│   ├── pages/                # Astro route'ları
│   ├── layouts/              # site shell
│   ├── components/           # ortak bileşenler
│   ├── lib/
│   │   ├── curriculum.ts     # 4 dönem, 21 kitap müfredat verisi
│   │   └── labels.ts         # snake_case → Türkçe etiket mapping
│   └── styles/global.css
└── .github/workflows/
    └── deploy.yml            # GitHub Pages otomatik deploy
```

## Yeni bir kitap eklemek

1. `src/content/books/{soyad}-{baslik-slug}.md` oluştur.
2. `HALKA-GRAND-PLAN.md` §3 ve mevcut Starr kitabı şablonu izle.
3. ZOD şeması frontmatter'ı doğrular — eksik veya yanlış alan build'i kırar.
4. `npm run check && npm run build` ile doğrula.
5. Push et — GitHub Actions deploy eder.

Müfredattaki diğer kitaplar (sıra/yazar) için `src/lib/curriculum.ts` dosyasını güncelle.

## Faz durumu

| Faz | Durum | Açıklama |
|---|---|---|
| 0 — Tohum | ✅ tamam | İskelet kuruldu, Starr ucundan uca işlendi |
| 1 — Müfredat | 🟡 devam | Diğer 20 kitabın frontmatter'ı dolduruluyor |
| 2 — Bağ | ⏳ planlanan | Cross-reference motoru, çatışma tespiti |
| 3 — Köprü | ⏳ planlanan | tabakat.io / islamicatlas.org / DİA / GAS bağlantıları |
| 4 — Müzakere | ⏳ planlanan | Halka oturum arşivi |
| 5 — Zekâ | ⏳ planlanan | AI ile içerik üretimi hızlandırma |
| 6 — Yayın | ⏳ planlanan | DSH / DHQ / İnsan ve Toplum makale çıktıları |

## Lisans

- **Kod:** MIT
- **İçerik:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

Açık kaynak ve açık veri, çünkü ölçek ve etki ancak böyle gelir.

## İletişim

Dr. Ali Çetinkaya · Selçuk Üniversitesi, Bilgisayar Mühendisliği
ORCID: [0000-0002-7747-6854](https://orcid.org/0000-0002-7747-6854)

---

*Halka — birlikte okuduklarımızı bağlayan bilgi.*
