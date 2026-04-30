# Halka v0.9 Açılış Prompt'u — Faz 1 Kapanışı + Faz 2 Açılışı

## Konuma kısaca

Bu, Halka'nın Faz 1 kapanış oturumudur. v0.8'de **1. dönem TAM** (6/6 kitap):
- #1 Fara — Bilim: Dört Bin Yıllık Bir Tarih (v0.8)
- #2 Goody — Batıdaki Doğu (v0.5)
- #3 Goody — Rönesanslar (v0.6)
- #4 Hobson — Batı Medeniyetinin Doğulu Kökenleri (v0.4)
- #5 Freely — Işık Doğudan Yükselir (v0.7)
- #6 Starr — Kayıp Aydınlanma (v0.3)

**Toplam state:** 6 kitap × 10 discussion_questions = 60 atomik tartışma sorusu. Müfredat-içi cross-reference: 32 deklarasyon. Build temiz: 14 sayfa, 4.09 saniye, sıfır uyarı. Şablon "v1.0 — kanıtlanmış" eşiğine ulaştı: Hobson'dan beri 6 kitap için sıfır şema değişikliği.

## Açılış komutu

> "HALKA-GRAND-PLAN.md'yi oku. v0.8 1. dönemi 6/6 olarak kapadı; Fara *Bilim: Dört Bin Yıllık Bir Tarih* (Metis 2012) generalist açılış kitabı olarak eklendi. Toplu discussion_questions revizyonu (8→10 standardizasyon) yapıldı; 25 Nisan tutanağı stub'ı bilinçli olarak atlandı. Şablon Hobson'dan beri 6 kitap için sıfır şema değişikliği gördü — v1.0 eşiğinde. Sıradaki öncelikler: (1) **2. dönem açılış kitabı seçimi**: curriculum.ts'de Pedersen #7 olarak 'İslam Dünyasında Kitabın Tarihi' (Johannes Pedersen, Arabist) listelenmiş. Fakat Fara book.md'de pedersen-erken-fizik-ve-astronomi (Olaf Pedersen, bilim tarihçisi) cross-reference'ı var — bu **kasıtlı bir tutarsızlık** mı, yoksa düzeltilmesi gereken bir hata mı? Bunu önce sor; iki farklı Pedersen olduğunu doğrula. (2) Seçilen 2. dönem açılış kitabı için book.md inşa süreci: PDF/baskı bilgisi, 18-20 kişi, 8-10 yer, 12 kavram, bölüm özeti tablosu, 12-15 atomik iddia, 9-10 müfredat-içi ilişki, 10 discussion_questions (1. dönem standardı), 5-6 critical_reading_notes, ~2500-3500 kelime gövde. 1. dönemin dört yöntemsel köşesiyle (Fara generalist, Goody yapısal-karşılaştırmacı, Hobson küresel-ekonomik, Freely arşivsel-dokunulabilirlik, Starr bölgesel-derinleştirici) cross-reference yapma — özellikle Freely #5 ile **dogrudan_kaynak** ilişkisi 2. dönem geçişinin teknik omurgasıdır. (3) Atomik dosyalar dalgası: Faz 1'in 6 kitabının paylaştığı en yüksek öncelikli atomik adaylar (İbn Heysem, Ömer Hayyam, Mâveraünnehir, Bağdat, Maraga rasathanesi, Tusi, Cündişapur). Atomik şablon Bîrûnî/Buhârâ/Tercüme Hareketi formatından zaten v0.3'te oluşturuldu. (4) Faz 0 son adımı: GitHub repo + Pages aktivasyonu, içerik üretiminden bağımsız paralelleştirilebilir."

## Çözüm bekleyen kararlar

**Karar 1 — Pedersen tutarsızlığı:**
- (a) curriculum.ts'i koru → Johannes Pedersen "İslam Dünyasında Kitabın Tarihi" (Arabist, 1946) → Fara book.md'deki cross-ref'i `pedersen-islam-dunyasinda-kitabin-tarihi` olarak düzelt
- (b) Fara book.md'i koru → Olaf Pedersen "Erken Fizik ve Astronomi" (1974/1993) → curriculum.ts'i `pedersen-erken-fizik-ve-astronomi` olarak düzelt
- (c) İki Pedersen'i de listeye al; biri #7, diğeri başka sıraya

**Karar 2 — 2. dönem'in açılış kitabı:**
- Pedersen (kararlaştırıldı sonraysa)
- Sezgin'i öne çek (Türk akademisinin merkez figürü, doğal bir 1. dönem→2. dönem köprüsü)
- Lyons'u öne çek (popüler-erişilebilir Beytü'l-Hikme anlatısı; Freely-Lyons sıralaması doğal)

**Karar 3 — atomik dosyalar dalgası mı, 2. dönem book.md mi paralel?**
- v0.6-v0.8 arası kabul edilen sıralama: book.md önce, atomikler sonra (toplu)
- Alternatif: 2. dönem için book.md ile paralel atomik dosya üretimi

## Şu anda repository state

```
src/content/books/
├── fara-bilim-dort-bin-yillik.md          [v0.8 - 872 satır]
├── goody-batidaki-dogu.md                  [v0.5 - 10 soru]
├── goody-ronesanslar.md                    [v0.6 - 10 soru]
├── hobson-bati-medeniyetinin-dogulu-kokenleri.md  [v0.4 - 10 soru]
├── freely-isik-dogudan-yukselir.md         [v0.7 - 10 soru]
└── starr-kayip-aydinlanma.md               [v0.3 - 10 soru]

src/lib/curriculum.ts                       [4 dönem, 21 kitap planı]
src/content/config.ts                       [ZOD şema sözleşmesi - 7 koleksiyon]
HALKA-GRAND-PLAN.md                          [v0.8 satırı + Faz 1 tablosu güncel]
```

## Açık olan teknik notlar

1. GitHub Pages aktivasyonu hâlâ açık (Faz 0 son adımı). v0.8 zip'inde build dist/ klasörü hazır; sadece push + Actions çalıştırmak yeterli.
2. discussions koleksiyonu hâlâ ZOD şemasına bağlı değil (Faz 4 kapsamında). Faz 1 kapandığı için ileride bağlanabilir.
3. Atomik dosyalar (kişi/yer/kavram) sadece 3 örnek (Bîrûnî, Buhârâ, Tercüme Hareketi). Faz 1'in 6 kitabı 100+ atomik nesneye atıf veriyor — tabakat.io entegrasyonu için en kritik açık iş.
4. islamicatlas.org entegrasyonu için coğrafi-koordinat alanı henüz key_places şemasında yok (geocoded: lat/lon). Şema değişikliği bu eksiklik için Faz 2'de yapılabilir.
5. tabakat.io entegrasyonu için key_people'da `tabakat_id` alanı yok; benzer şema değişikliği gerekir.

## v0.8'in yöntemsel mirası (gelecek oturumlara taşınmalı)

- **Toplu revizyon yöntemi:** 4 kitabın discussion_questions sayısını 8→10 yükseltmek için tutanak feedback'i beklenmedi; içsel akademik yargıyla kararlaştırıldı. Bu, gelecek dönem geçişlerinde de kullanılabilir bir model.
- **Cross-reference yoğunluğu:** Fara, 4 farklı kitaba `supports` ilişkisi kurarak "panoramik-açılış" rolünü teknik olarak gerçekleştirdi. 2. dönem açılış kitabı da benzer yoğunlukta cross-ref kurmalı.
- **Declensionism gerilimi:** Fara non-declensionist vs Freely-Starr declensionist gerilimi 1. dönem'in en sert yöntemsel çatışmasıdır. 2. dönem kitapları (özellikle Pedersen, Sezgin) bu gerilimi nasıl çözüyor — bu, her 2. dönem kitabının discussion_questions'ında ele alınmalı.
- **Soru çerçevesi yeniden formülasyonu:** Fara claim-005 ("Avrupa neden ileride?" yerine "Avrupa nasıl global hegemon oldu?") tüm 2. dönem kitaplarına uygulanabilir bir filtre. Her 2. dönem kitabı için en az bir discussion_question bu çerçeveyi sınamalı.
