---
date: 2026-04-25
session_number: 1
duration_estimate: "yaklaşık 3 saat"
phase: "Faz 0 — Tohum"
focus: "Vizyon belgeleme, Frederick Starr içeriği, klasör iskeleti"
---

## Bağlam

Bu Halka projesinin **ilk oturumu**. Konuşma başlangıçta tamamen farklı bir konuyla (macOS Prompter app) açıldı; oradan kullanıcının "ücret ödemeden, kendi başına çalışan bir teleprompter" ihtiyacına geçti, oradan tek-dosya HTML widget'a, oradan GitHub Pages deploy'una, oradan kullanıcının asıl ilgi alanı olan **Halka bilim tarihi okuma grubu** projesine evrildi.

Kullanıcı NotebookLM'in 15 slaytlık özetlerinden memnun olmadığını, "sofistike, groundbreaking" bir şey istediğini ifade etti ve hayal gücüne güvendiğini söyledi.

## Yüklenen dosyalar

- `Kayıp Aydınlanma & S.Frederick Starr.pdf` (zip içinde, 8 MB, 699 sayfa, metin tabanlı)

## Ne yapıldı

1. **Halka vizyonu netleştirildi:** Projeyi "kitap kulübü sitesi" olmaktan çıkarıp **3 eksende öncü** bir platform olarak çerçeveledim:
   - Kitap → bilgi grafiği
   - Tarihyazımı pozisyonu birinci sınıf nesne
   - Mevcut DH ekosistemine entegre (islamicatlas.org, tabakat.io, GAS, DİA RAG)

2. **`HALKA-GRAND-PLAN.md` üretildi (v0.1):** ~2,500 kelime, 11 bölüm. 7 fazlı roadmap (Tohum → Müfredat → Bağ → Köprü → Müzakere → Zekâ → Yayın). Her faz için bağımsız değer ve "tamamlandı" tanımı. Akademik yayın stratejisi dahil.

3. **Frederick Starr "Kayıp Aydınlanma" işlendi:**
   - Kitap yapısı çıkarıldı (15 bölüm, 699 sayfa)
   - 4 kritik parça okundu: Sahnedekiler (~50 figür biyografisi), Tarih Cetveli (~50 olay), Önsöz (yazar motivasyonu + akademik silsile), Bölüm 15 Retrospektif (üç ana sorunun cevapları)
   - `starr-kayip-aydinlanma.md` üretildi: ~3,700 kelime, 507 satır, 33 KB
   - Frontmatter: 15 kişi, 9 yer, 10 kavram, 15 atomik iddia, 15 bölüm, 9 müfredat-içi ilişki, 10 tartışma sorusu, 6 eleştirel okuma notu
   - Gövde: 9 analitik bölüm (yazarın motivasyonu, üç ana soru, açılış sahnesi, İstiridye-Kum mecazı, methodolojik tartışmalar, Halka için stratejik okuma, eleştirel uyarılar, müfredattaki yer)

4. **Grand plan v0.2'ye güncellendi:** §5, §6 ve §11 sürüm günlüğü revize edildi.

5. **Klasör iskeleti hazırlandı (`halka-template/`):**
   - 8 content alt klasörü (books, people, places, concepts, claims, discussions, sources, authors)
   - Her birine README + `_TEMPLATE.md`
   - Kök README (folder map), .gitignore, pdfs/data/sessions/assets klasörleri

## Ne karara varıldı

- **Site adı:** Halka (üç anlamı taşıyor: sosyal grup, geometri, ilim halkası)
- **Repo adı:** `halka` (alicetinkaya76/halka)
- **URL:** alicetinkaya76.github.io/halka
- **Tech stack:** Astro + GitHub Pages + Tailwind + Pagefind (knapsack daha sonra)
- **Yöntem:** İçerik markdown'da, build statik. Sürdürülebilir, taşınabilir, sıfır-server.
- **Yayın yolu hedefi:** Faz 6'da Digital Scholarship in the Humanities ya da benzeri Q1
- **Çekirdek tasarım ilkesi:** "Veri sahibi insan, üreteci AI" — Claude content üretebilir ama her şey markdown olarak insan kontrolünde

## Ne bitirilemedi

- Repo açılmadı (sonraki oturuma taşındı)
- Astro iskeleti kurulmadı
- Deploy yapılmadı
- Hobson book.md yazılmadı
- Kullanıcının kararsız kaldığı konular: site görünürlüğü (kamuya açık vs. private), Halka markası altında çoklu müfredat olur mu

## Sonraki oturum için açılış cümleleri

> "HALKA-GRAND-PLAN.md'yi oku. Klasör iskeletini Mac'e açtım, dosyalar şu yapıda. Halka oturumundan geri bildirim şu: [...]. Sıradaki adım: [repo açma / Hobson içeriği / başka bir şey] — devam edelim."

## Üretilen dosyalar

- `HALKA-GRAND-PLAN.md` (v0.2, ~22 KB)
- `content/books/starr-kayip-aydinlanma.md` (~33 KB)
- Tüm `halka-template/` klasör yapısı (READMEs + _TEMPLATEs)
- `sessions/2026-04-25-halka-baslangic.md` (bu dosya)

## Grand plan güncellemesi

- §5 güncellendi mi: **evet**
- §6 güncellendi mi: **evet**
- §11 sürüm günlüğüne eklendi mi: **evet**
- Yeni sürüm: **v0.2**

## Notlar (sadece bu oturuma özel)

- Kullanıcı Halka oturumunu bu akşam (25 Nisan, Cumartesi) yapacak. starr-kayip-aydinlanma.md o oturumda referans olarak kullanılacak.
- Kitabın tamamı 699 sayfa olduğundan tek oturumda işlenmesi mümkün değildi; 4 kritik bölüm seçildi (Sahnedekiler, Tarih Cetveli, Önsöz, Retrospektif). Diğer 14 bölümün derinleştirilmesi gelecek Halka oturumlarında parça parça eklenebilir — mimari buna izin veriyor.
- Token bütçesi, son oturum kısımlarında (klasör iskeleti) sıkışmaya başladı; sonraki oturumda template oluşturmadan önce gerekli görmediğim kısımları atlayacağım.
