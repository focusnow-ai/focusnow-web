# Karşılaştırma SEO Stratejisi (Comparison Pages)

Rize'ın "vs Toggl / vs Clockify" taktiğinin FocusNow uyarlaması: kimin için,
neden, hangi sırayla, nasıl ölçülür. `docs/ANALYTICS.md` ile birlikte okunmalı.

Son güncelleme: 14 Temmuz 2026

---

## 1. Neden işe yarıyor? (SEO şapkası)

Satın almaya en yakın aramalar rakip adı içerenlerdir:

- `focusnow vs rize` / `rize vs focusnow` — bizi rakiple kıyaslayan kişi
- `rize alternative`, `free rize alternative` — rakipten memnun olmayan kişi
- `rescuetime alternative` — kategorinin en hacimli "alternatif" sorgusu

Bu aramaları yapan kişi zaten bir araç arıyor; blog okuyucusundan çok daha
yüksek dönüşüm oranıyla indirir. Rakip adı geçen sayfalar bu aramalarda
çıkmanın tek yoludur — genel landing page bu sorgularda görünmez.

**Bizim yapısal avantajımız:** Rize $9.99-29.99/ay, RescueTime ücretli,
FocusNow ücretsiz. "Free X alternative" sorgularında doğal kazananız.

## 2. Dürüstlük kuralları (editör şapkası)

`CONTENT_STYLE_GUIDE.md` geçerli: dürüst, sakin, superlative'siz.
Karşılaştırma sayfalarında ek kurallar:

1. **Rakibi kötüleme.** "Rize is excellent if..." diye başlayan cümleler
   güven verir ve dönüşümü artırır. Çamur atan karşılaştırma sayfası
   ziyaretçiyi de Google'ı da kaçırır.
2. **Her satır `APP_REALITY.md`'ye dayanmalı.** Bizde olmayan özellik
   (distraction blocker, takvim entegrasyonu, proje takibi) tabloda dürüstçe
   "yok" gösterilir. Rakibin güçlü yanını saklamak yerine "kimin için hangisi"
   çerçevesiyle sunulur.
3. **Rakip bilgisi tarihlenir.** Fiyat/özellik değişir; her sayfada
   "Last verified: <ay yıl>" notu olur ve üç ayda bir kontrol edilir
   (aşağıda bakım rutini).
4. Ton: "a calm, knowledgeable friend" — satış baskısı yok, karar yardımı var.

## 3. Sayfa şablonu (UX/UI şapkası)

URL yapısı: `/compare/<rakip>` (EN), `/karsilastir/<rakip>` (TR).
Tasarım mevcut design system'i kullanır (Card, Badge, FAQItem, DownloadCTA).

Sayfa anatomisi — yukarıdan aşağı karar hunisi:

1. **Hero:** "FocusNow vs Rize" başlık + tek cümle dürüst özet
   ("Rize is a powerful paid tracker; FocusNow keeps the essentials free").
2. **Hızlı karar kutuları:** iki Card yan yana — "Choose FocusNow if..." /
   "Choose Rize if..." — madde madde. Tarayıcı kullanıcı %10'u okur;
   bu blok tek başına sayfanın işini görür.
3. **Karşılaştırma tablosu:** ~10 satır (fiyat, otomatik takip, focus score,
   oturumlar, AI raporu, distraction blocker, takvim, proje takibi, dil,
   platform, veri sahipliği). Check/X/metin hücreler; mobilde yatay scroll değil
   kartlaşan satırlar.
4. **Derinlemesine bölüm:** 3-4 kısa paragraf — fiyat felsefesi, veri/gizlilik
   yaklaşımı, kimin için hangisi. (SEO: sorgu çeşitlerini yakalayan doğal metin.)
5. **FAQ (4 soru):** "Is FocusNow really free?", "Can I switch from Rize?" vb.
   → `getFAQPageLD` ile FAQ structured data (Google'da zengin sonuç şansı).
6. **DownloadCTA** (mevcut bileşen).

Görsel dil: nötr zemin, iki ürün de logo/isimle eşit ağırlıkta; bizim satırlar
yeşil check ile öne çıkar ama rakibin check'leri de gerçek check'tir.

## 4. Takvim ve sıralama

| Ne zaman | Sayfa | Hedef sorgular | Not |
|----------|-------|----------------|-----|
| **Şimdi (Tem 2026)** | `/compare/rize` | rize alternative, focusnow vs rize, free rize alternative | En yakın rakip, en net fark (ücretsiz) |
| +4-6 hafta | `/compare/rescuetime` | rescuetime alternative (yüksek hacim) | Site biraz otorite kazansın diye ikinci |
| +8-10 hafta | `/compare/activitywatch` | activitywatch vs, activitywatch alternative | Açık kaynak kitlesi; "kolay kurulum" açısı |
| Sonra (veriye göre) | Toggl/Clockify | toggl alternative automatic tracking | Farklı kategori (manuel takip); "otomatik alternatif" açısıyla |

Kural: yeni sayfa, bir öncekinin GSC'de gösterim almaya başlamasından sonra
açılır. Aynı anda 5 sayfa açmak sinyali bölmekten başka işe yaramaz.

## 5. İç linkleme (Rize'ın footer taktiği)

- Footer'a "Compare" sütunu: tüm compare sayfalarına link. Her sayfadan link
  almak Google'ın sayfaları bulmasını ve otorite akışını sağlar — Rize'ın
  yaptığının aynısı. Ziyaretçi için sessiz, crawler için görünür.
- İlgili blog yazılarından compare sayfalarına bağlam içi link
  (ör. deep work yazısından "FocusNow vs Rize" sayfasına).
- Compare sayfaları sitemap'e girer (`src/app/sitemap.ts`).

## 6. Ölçüm (marketing şapkası) — başarı neye benziyor?

Haftalık rutine (ANALYTICS.md §4) eklenen kontroller:

- **GSC → Performance → Queries**: `rize` geçen sorgular belirdi mi?
  İlk hedef gösterim, sonra tık. 4-8 hafta içinde gösterim beklenir.
- **GSC → Pages**: `/compare/rize` gösterim/tık trendi.
- **GA4**: compare sayfasından gelen oturumların `download_click` oranı —
  bu sayfaların ana sayfadan daha yüksek dönüşmesi beklenir; dönüşmüyorsa
  karar kutuları/CTA gözden geçirilir.

## 7. Bakım rutini

Üç ayda bir (Eki 2026, Oca 2027...): rakip fiyat/özellik sayfasını aç,
tabloyu doğrula, "Last verified" tarihini güncelle. Yanlış rakip bilgisi
hem güven hem hukuki risk — bu adım atlanmaz.

## 8. Rakip bilgi kaynağı (Tem 2026 itibarıyla doğrulandı)

Rize: bireysel planlar $9.99/ay (yıllık, Basic) - $12.99/ay (aylık);
Professional $14.99/ay (proje/müşteri takibi); takım planları $20+/koltuk.
Ücretsiz kalıcı plan yok, deneme var. Özellikler: otomatik takip, Focus
Quality Score, planlı oturumlar, distraction blocker, takvim entegrasyonu,
odak müziği, AI etiket önerileri. Mac + Windows. Kaynaklar: rize.io/pricing,
rize.io/features/productivity, docs.rize.io.
