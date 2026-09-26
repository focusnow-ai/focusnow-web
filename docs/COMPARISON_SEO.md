# Karşılaştırma SEO Stratejisi (Comparison Pages)

Rize'ın "vs Toggl / vs Clockify" taktiğinin FocusNow uyarlaması: kimin için,
neden, hangi sırayla, nasıl ölçülür. `docs/ANALYTICS.md` ile birlikte okunmalı.

İçerik doğrulaması: 26 Eylül 2026 (v0.3.0; planlama takvimi tarihsel).

---

## 1. Neden işe yarıyor? (SEO şapkası)

Satın almaya en yakın aramalar rakip adı içerenlerdir:

- `focusnow vs rize` / `rize vs focusnow` — bizi rakiple kıyaslayan kişi
- `rize alternative`, `free rize alternative` — rakipten memnun olmayan kişi
- `rescuetime alternative`, `toggl alternative` — başka aracı sorgulayan kişi

Bu aramaları yapan kişi büyük olasılıkla zaten bir araç arıyor. Rakip adı geçen
sayfalar bu sorgulara doğrudan cevap veren içerik sunar; hacim ve sıralama
garantisi değildir, GSC verisiyle doğrulanmalıdır.

**Güncel fiyat kaynağı:** https://rize.io/pricing. Rize bireysel planları yıllık ödemede aylık $9.99’dan başlar. FocusNow temel takibi ücretsiz tutar; zaman kartları ve faturalama şu an erken erişimde ücretsizdir.

## 2. Dürüstlük kuralları (editör şapkası)

`CONTENT_STYLE_GUIDE.md` geçerli: dürüst, sakin, superlative'siz.
Karşılaştırma sayfalarında ek kurallar:

1. **Rakibi kötüleme.** "Rize is excellent if..." diye başlayan cümleler
   güven verir ve dönüşümü artırır. Çamur atan karşılaştırma sayfası
   ziyaretçiyi de Google'ı da kaçırır.
2. **Her satır `APP_REALITY.md`'ye dayanmalı.** Bizde olmayan özellik
   (distraction blocker, dış takvim entegrasyonu) tabloda dürüstçe
   "yok" gösterilir. Rakibin güçlü yanını saklamak yerine "kimin için hangisi"
   çerçevesiyle sunulur.
3. **Rakip bilgisi tarihlenir.** Fiyat/özellik değişir; her sayfada
   "Last verified: <ay yıl>" notu olur ve üç ayda bir kontrol edilir
   (aşağıda bakım rutini).
4. Ton: "a calm, knowledgeable friend" — satış baskısı yok, karar yardımı var.

## 3. Sayfa şablonu (UX/UI şapkası)

URL yapısı: `/compare/<rakip>` (EN), `/karsilastir/<rakip>` (TR). Merkez sayfa `/compare`
(`/karsilastir`), seçim rehberi `/alternatives` (`/alternatifler`). Bileşen:
`src/components/compare/comparison-template.tsx`; veri `src/lib/comparisons.ts`
(kaynak URL'leri, kontrol tarihi), metin `compare.<rakip>` mesajlarında.

Sayfa anatomisi (yukarıdan aşağı karar hunisi):

1. **Hero:** rakip adı geçen H1, kime uyduğunu söyleyen kısa özet, indirme CTA'sı,
   yanında "FocusNow fits if / X fits if" karar kutuları.
2. **Karar tablosu:** 10-12 kriter (otomatik kayıt, süreyi projeye aktarma,
   odak araçları, engelleme, AI'ın yaptığı iş, müşteriye çıktı, takvim, ekip,
   entegrasyon, platform, fiyat). Metin hücreler; mobilde kartlaşan satırlar.
   Altında kontrol tarihi ve fiyat koşulu notu.
3. **FocusNow deneyimi:** gerçek ekran görüntüsü + kısa akış.
4. **Üç kısa fark bölümü** ve **"geçmeyi düşünüyorsan"** notu (içe aktarma yok).
5. **Kaynaklar, diğer karşılaştırmalar, FAQ (3 soru), DownloadCTA.**

Yapısal veri: `Article` (dateModified = kontrol tarihi), `BreadcrumbList` ve
görünen sorularla birebir `FAQPage` (sayfa başına bir tane). Google FAQ zengin
sonuç desteğini 2026'da kaldırdı; FAQ ziyaretçiye yardım için vardır, SEO vaadi
değildir.

## 4. Mevcut sayfalar ve sonraki adaylar

| Durum | Sayfa | Hedef niyet |
|-------|-------|-------------|
| Yayında | `/compare/rize` | FocusNow vs Rize; Rize alternative |
| Yayında | `/compare/rescuetime` | FocusNow vs RescueTime; RescueTime alternative |
| Yayında | `/compare/toggl` | FocusNow vs Toggl; Toggl alternative |
| Yayında | `/compare`, `/alternatives` | karşılaştırma merkezi; zaman takip uygulaması seçimi |
| Aday | Timely, ActivityWatch, Clockify | Yalnızca her biri için özgün, doğrulanmış içerik hazır olduğunda |

Aynı arama niyetini hedefleyen ikinci sayfa açılmaz (ör. `/alternatives/rize`);
Rize karşılaştırması "Rize alternative" ihtiyacını da karşılar. Yeni sayfa
açma temposu için kesin bir kural yok; ölçüt, sayfanın özgün ve doğrulanmış
içeriğe sahip olmasıdır.

## 5. İç linkleme (Rize'ın footer taktiği)

- Ana sayfa gövdesinde `CompareTeaser` bölümü, üst menüde "Compare" menüsü ve
  footer'da "Compare" sütunu: merkez, üç karşılaştırma ve seçim rehberi.
- Kullanım senaryosu ve özellik sayfalarından ilgili karşılaştırmaya bağlam içi link.
- İlgili blog yazılarından compare sayfalarına bağlam içi link
  (ör. deep work yazısından "FocusNow vs Rize" sayfasına).
- Compare sayfaları sitemap'e girer (`src/app/sitemap.ts`).

## 6. Ölçüm (marketing şapkası) — başarı neye benziyor?

Haftalık rutine (ANALYTICS.md §4) eklenen kontroller:

- **GSC → Performance → Queries**: `rize` geçen sorgular belirdi mi?
  İlk hedef gösterim, sonra tık. Süre tahmini yapılmaz; trend haftalık izlenir.
- **GSC → Pages**: `/compare/rize` gösterim/tık trendi.
- **GA4**: compare sayfasından gelen oturumların `download_click` oranı —
  bu sayfaların ana sayfadan daha yüksek dönüşmesi beklenir; dönüşmüyorsa
  karar kutuları/CTA gözden geçirilir.

## 7. Bakım rutini

Üç ayda bir (Eki 2026, Oca 2027...): rakip fiyat/özellik sayfasını aç,
tabloyu doğrula, "Last verified" tarihini güncelle. Yanlış rakip bilgisi
hem güven hem hukuki risk — bu adım atlanmaz.

## 8. Rakip bilgi kaynağı (26 Eylül 2026'da resmî sayfalardan doğrulandı)

- **Rize** (rize.io/pricing, rize.io, rize.io/features/productivity, rize.io/features/project-tracking):
  Basic $9.99, Pro $23.99, Max $39.99 aylık (yıllık ödeme); 7 günlük tam erişimli deneme,
  kalıcı ücretsiz plan görülmedi. Otomatik takip, AI kategorilendirme/etiketleme/sohbet,
  AI ile oturumları proje/müşteriye atama, oturum zamanlayıcısı ve planlı oturumlar,
  AI mola önerileri, dikkat engelleyici, odak müziği, Google Calendar, ekip panelleri;
  Pro'da müşteri raporları (PDF/CSV), API, webhook, Zapier, MCP. macOS 10.14.6+, Windows 10+.
- **RescueTime** (rescuetime.com/pricing): Solo Focus $7 ($9 aylık), Solo+ $12 ($15 aylık),
  Team $10 ($12), Team+ $16 ($18); 14 günlük deneme. Otomatik takip, boşta algılama,
  engellemeli Focus Sessions, Goals & Alerts; Solo+/Team+ Timesheets (müşteri, proje,
  görev, faturalanabilir ücret); Assistant. Masaüstü, web, iOS, Android.
- **Toggl Track** (toggl.com/track/pricing, toggl.com/track/features): Free; Starter $9 ($12 aylık),
  Premium $16 ($24 aylık) kullanıcı başına. Masaüstü Timeline (uygulama/site kaydı → kullanıcı
  girişe çevirir), takvim etkinliklerini takip, Pomodoro/odak modu, Starter+ ücretler,
  faturalama, PDF/CSV/XLSX; web, masaüstü, mobil, tarayıcı eklentisi.
- **Timely** (timely.com/pricing): Starter $9/kullanıcı (yıllık), 14 gün deneme, AI ile
  zaman çizelgesi taslağı. **ActivityWatch** (activitywatch.net): ücretsiz, açık kaynak
  (MPL-2.0), veri cihazda; Windows, macOS, Linux, Android; senkronizasyon geliştiriliyor.
