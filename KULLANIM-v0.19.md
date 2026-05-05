# KULLANIM — v0.19 (5 Mayıs 2026)

Bu doküman v0.19 turunun yerel-makineye-uygulama akışını ve v0.20'ye-bırakılan manuel-DİA-doldurma-iş-akışını akademik-disiplinde-konumlandırır.

---

## 1. Pakettekiler

`halka-v0.19/` paketinin içeriği:

```
halka-v0.19/
├── DEGISIKLIKLER-v0.19.md     # Bu turun değişikliklerinin akademik-disiplin-kataloğu
├── KULLANIM-v0.19.md          # Bu doküman
├── HANDOFF-v0.20.md           # v0.20 turuna bırakılan iş-konumları
└── src/                       # Tam yapısal-uygulanmış v0.19 src dizini
    ├── content/
    │   ├── books/             # 16 atomik (15 v0.18 + 1 Westfall)
    │   ├── people/            # 35 atomik (33 v0.18 + 2 yeni: Westfall + du Châtelet)
    │   ├── places/            # 19 atomik (sam.md cross-program-paragrafı eklendi)
    │   └── concepts/          # 29 atomik (25 v0.18 + 4 yeni: mekanizm + iki-akim + momentum + ay-newton)
    ├── lib/
    │   └── programs.ts        # YENİ — multi-program veri-modeli
    ├── pages/
    │   ├── index.astro        # Hero umbrella-konumlama-yansıması
    │   └── programlar.astro   # YENİ — Halka Türkiye programlar-sunum-sayfası
    └── layouts/
        └── BaseLayout.astro   # Header logo iki-satırlı + nav Programlar-link + footer umbrella
```

---

## 2. Yerel-makineye-uygulama akışı

### 2.1. Branch hazırlığı

Yerel makinede `/Volumes/LaCie/halka` (veya proje-dizini) içinde:

```bash
cd /Volumes/LaCie/halka
git status                    # temiz çalışma-dizini olduğunu doğrula
git log --oneline -5          # mevcut HEAD durumunu kontrol et
```

**Beklenen mevcut durum** (önceki turlar uygulanmışsa):
- `main` branch v0.17'de (commit `db3a83e` veya benzer)
- `v0.18` branch v0.18-uygulamalarıyla
- `v0.19` branch v0.18 üstüne kurulmuş (commit `7978724` veya benzer)

### 2.2. v0.19 branch'i seçimi (Seçenek B — v0.18 üstüne)

```bash
git checkout v0.19            # zaten varsa
# veya
git checkout -b v0.19 v0.18   # v0.18 üstüne yeni-branch
```

### 2.3. Paketi src/'e uygulama

Pakette `src/` dizini tam-yapısal-yansıtılmış halde. Yerel `src/` dizinini paketteki ile değiştirin:

```bash
# Yedekle (akademik-disiplin-güvenliği için)
cp -r src src.v0.18-backup

# Paketteki src'i kopyala
rm -rf src
cp -r /yol/halka-v0.19/src ./src

# Doğrulama
ls src/content/books/         # 16 dosya bekleniyor
ls src/content/people/        # 35 dosya
ls src/content/places/        # 19 dosya
ls src/content/concepts/      # 29 dosya
ls src/lib/                   # programs.ts olmalı
ls src/pages/                 # programlar.astro olmalı
```

### 2.4. Validation

`validate-v018.py`'in src-yolunu güncelle (script'in başında `ROOT = Path("...")`):

```bash
python3 validate-v018.py
# Beklenen çıktı:
#   books: 16 dosya
#   people: 35 dosya
#   places: 19 dosya
#   concepts: 29 dosya
#   TOPLAM: 99 atomik
#   HATA: 0
#   UYARI: 0
```

### 2.5. Build doğrulaması

```bash
npm install                   # bağımlılık değişikliği yok ama yine-de
npm run build                 # Astro build hata-vermemeli
npm run dev                   # http://localhost:4321/halka/ ile test
```

**Test edilecek sayfa-konumları:**

- `/halka/` — Hero başlık iki-satırlı? Header logo "Halka" + alt "Halka Türkiye" etiketi?
- `/halka/programlar` — 4 program-kartı? Aktif-program rozeti? Collapsible müfredat-listeleri?
- `/halka/yerler/sam` — Riyâzu's-Sâlihîn cross-program-paragrafı sonda? DİA-rozeti aktif?
- `/halka/kitaplar/westfall-modern-bilimin-olusumu` — Halka #15 atomik render? key_claims, chapter_summary doğru?
- `/halka/kisiler/isaac-newton` — Westfall-cross-ref paragrafı son-bölümde? SEP-rozeti `newton` linkiyle?
- `/halka/kisiler/biruni` — DİA-rozeti `biruni` linkiyle?

### 2.6. Commit + PR

```bash
git add -A
git status                    # değişikliklerin dökümünü kontrol et
git commit -m "v0.19: Multi-program umbrella + Westfall #15 + 14 slug-doldurma"
git push origin v0.19
```

---

## 3. Main-merge stratejisi

v0.18 PR'ı henüz merge edilmemişse iki yol var:

**Yol A — Önce v0.18 merge, sonra v0.19 PR (önerilen):**

```bash
git checkout main
git merge v0.18 --no-ff
git push origin main

# Sonra v0.19 üzerinden PR
git checkout v0.19
git rebase main               # zaten v0.18 üstündeyse temiz-rebase
gh pr create --base main --head v0.19 --title "v0.19: Multi-program + Westfall + slug"
```

**Yol B — v0.19'u doğrudan main'e merge** (v0.18 PR'ı atlanırsa):

```bash
git checkout main
git merge v0.19 --no-ff       # v0.18 commit'leri de dahil olur
git push origin main
```

Yol A daha akademik-disiplinli — her turun kendi-PR-tarihçesi korunur. Yol B daha hızlı ama tarihçe-konsolide olur.

---

## 4. v0.20'ye bırakılan manuel-DİA-doldurma akışı

v0.19 turunda DİA-slug-listesinin tahminleri WebSearch ile spot-doğrulamada %50+ yanlış-yapıda tespit edildi. Yanlış-DİA-slug 404-yönlendirmeye yol açar; akademik-zarar verir. Bu yüzden ~25 DİA-atomik **boş** bırakıldı.

### Kalan ~25 DİA-atomik (people, places, concepts)

**People (10):**
- `cahiz` · `cezeri` · `hunayn-ibn-ishaq` · `ibn-el-heysem` · `ibn-mukla` · `ibn-nedim` · `ibn-sh-shatir` · `memun` · `takiyuddin-er-rasid` · `urdi-muayyededdin` · `yakut-el-mustasimi`

**Places (6):**
- `bagdat` · `beytulhikme` · `buhara` · `kahire` · `maraga` · `semerkant`

**Concepts (3):**
- `bermekiler` · `medrese` · `warraqun`

**Boş kalması önerilenler (5, akademik-disiplin-zarar-vermeme):**
- `hat-ekolleri` · `tercume-hareketi` · `tusi-couple` · `kopernik-satir-ay-modeli` (DİA'da doğrudan-makale yok veya akademik-Batı-disiplinin terimi)

### Manuel-doğrulama-iş-akışı (her atomik için ~30 saniye)

1. Tarayıcıda https://islamansiklopedisi.org.tr aç
2. Atomik-isminin Türkçe-akademik-DİA-formunu ara (örn. "Câhiz", "Maraga", "Beytülhikme")
3. Arama-sonucundan ana-makale-link'ine tıkla
4. URL'in son-segmentini al (örn. `https://islamansiklopedisi.org.tr/cahiz` → slug `cahiz`)
5. İlgili atomik-dosyaya `dia_id: "..."` alanı ekle (frontmatter sonuna veya `wikidata_id:`'den sonra)
6. Bir-iki örnek-atomikten sonra tarayıcıda DİA-rozetini test et

### Güvenli-spot-test-örnekleri (zaten v0.19'da WebSearch-doğrulanmış)

- `biruni` → `https://islamansiklopedisi.org.tr/biruni` ✓ (sade-form)
- `tusi-nasiruddin` → `https://islamansiklopedisi.org.tr/tusi-nasiruddin` ✓ (TERS sıralı: soyad-ad)
- `sam--suriye` → `https://islamansiklopedisi.org.tr/sam--suriye` ✓ (çift-tire ambiguous)

### DİA-naming-konvansiyonunun pattern-konumlamaları

WebSearch-bulgularına göre:

| Atomik-tip | DİA-slug-formatı | Örnek |
|---|---|---|
| Tek-isimli figür | sade-isim | `biruni`, `cahiz`, `cezeri` |
| Soyad-ad sıralı (DİA başlığında "Soyad, Ad") | `soyad-ad` (TERS) | `tusi-nasiruddin`, `ibn-mukle-muhammed-b-ali` |
| Ambigous-yer | `yer--ülke` (çift-tire) | `sam--suriye` |
| İbn-prefiksli | `ibnu-X` veya `ibn-X` | `ibnul-heysem`, `ibnun-nedim` |
| Yer-tek-isimli | sade-isim | `buhara`, `kahire`, `semerkant` |

### Doldurma-batch-komutu

Her atomik için tek-tek:

```bash
# Örnek: cahiz için
sed -i.bak '/^wikidata_id:/a\
dia_id: "cahiz"' src/content/people/cahiz.md
```

Veya frontmatter sonunda yer açmak için (eğer wikidata_id yoksa):

```bash
# Frontmatter'ın 2. '---'inden ÖNCE ekle
# Manuel olarak metin-editöründe açıp ekleme tavsiye edilir.
```

---

## 5. Multi-program kardeş-link'leri (v0.20+ planlama-konumu)

v0.19'da `programs.ts`'te 8 cross-program-link tanımlandı, ama atomik-atlas-zemininde **otomatik-aktivasyon-mekanizması yok**. v0.20+ turlarında yapılabilecekler:

- Atomik-atlas içinde "kardeş-program-zincir-rozet" UI: bir atomiğin diğer-program-atomiğiyle akademik-zincir-konumlanması varsa, sayfada minik-rozet
- `programs.ts` cross-program-link'lerinin atomik-atlas-otomatik-yansıtması (örn. `places/sam.md`'de Riyâzu's-Sâlihîn-zincir-paragrafının otomatik-aktivasyonu)
- Tam-cross-program-arama (search across all 4 programs)

Bunlar **planlama-konumunda** v0.20+ HANDOFF dokümanında detaylandırılmıştır.

---

## 6. Teste-değer-vurgu noktaları

v0.19 build'i sonrası özellikle test edilmesi gereken yapısal-konumlar:

- [ ] Header logo iki-satırlı görünüyor mu (mobile + desktop)?
- [ ] `/programlar` sayfası 4 kart render ediyor mu? Aktif-program rozeti yeşil-mi?
- [ ] 40-Eserde-İslam-Düşüncesi 4-kademe render-yapısı doğru mu (12 + 12 + 12 + 12 = 48 eser)?
- [ ] `<details>/<summary>` collapsible açılır-kapanır mı?
- [ ] Cross-program-zincir-konumlamaları (8 link) doğru render ediyor mu?
- [ ] `places/sam.md` Riyâzu's-Sâlihîn-paragrafı son-bölümde mi?
- [ ] Westfall #15 atomik sayfası tüm key_claim, chapter_summary, vb. doğru render ediyor mu?
- [ ] AcademicSourceLinks rozeti 19 atomikte aktif mi (newton, leibniz, biruni, tusi, sam, vb.)?
- [ ] Footer'da "Halka Türkiye" + "Programlar" link doğru mu?

Sorun bulursanız: `git diff main..v0.19 src/[ilgili-dosya]` ile değişikliği kontrol edin.

---

## 7. Tur-özet-istatistikleri

- **Yeni dosyalar:** 9 (programs.ts + programlar.astro + 7 atomik)
- **Düzenlenen dosyalar:** 13 (BaseLayout + index.astro + sam.md + 14 slug + 8 cross-ref + 1 gleick relationships)
- **Yeni satır toplamı:** ~1,400 satır TS/Astro/Markdown
- **Atomik:** 92 → 99 (+7)
- **External-source-link:** 5 → 19 (+14)
- **Cross-program-link tanımlı:** 0 → 8
- **Validation:** 0 hata / 0 uyarı (tur boyunca korundu)
