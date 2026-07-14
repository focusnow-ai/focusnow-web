# Analytics Rehberi (GA4 + Search Console)

Bu doküman focusnow.ai'ın ölçüm altyapısını anlatır: ne kurulu, hangi metrik ne
anlama geliyor ve haftada bir 10 dakikada neyi kontrol etmelisin. Analytics
bilgisi gerektirmeden okunacak şekilde yazıldı.

Son güncelleme: 14 Temmuz 2026

---

## 1. Ne kurulu?

### Google Analytics 4 (GA4)

- **Measurement ID:** `G-C7NY7TG0T2` (`.env.local` içindeki `NEXT_PUBLIC_GA_ID`
  değişkeninden okunur — bu değişken production ortamında da tanımlı olmalı).
- **Çerez onayı:** GA script'i yalnızca ziyaretçi çerez banner'ında "kabul"
  dedikten sonra yüklenir (`src/components/shared/analytics-loader.tsx`).
  Reddedenlerden hiç veri gitmez. Bu, GDPR/KVKK uyumlu doğru kurulumdur —
  yan etkisi, GA'daki sayıların gerçek trafiğin *altında* görünmesidir
  (onay vermeyenler sayılmaz). Sayılar "düşük" diye panik yapma.
- **Kod tarafı:** olay göndermek için tek fonksiyon var:
  `trackEvent(name, params)` — `src/lib/analytics.ts`.

### Google Search Console (GSC)

- `focusnow.ai` **domain mülkü** olarak doğrulanmış (DNS kaydıyla).
  Domain mülkü = `www`, `http/https` ve tüm alt alan adları tek yerden izlenir.
- **Sitemap** gönderildi: `https://focusnow.ai/sitemap.xml`
  (son gönderim: 14 Temmuz 2026 — 36 URL başarıyla okundu).
  Sitemap koddan otomatik üretilir (`src/app/sitemap.ts`): tüm sayfaların
  EN + TR sürümleri ve blog yazıları dahil. Yeni sayfa/yazı eklediğinde
  sitemap kendiliğinden güncellenir; ekstra iş gerekmez.

---

## 2. İzlenen olaylar (events)

GA4 sayfa görüntülemelerini (`page_view`) otomatik kaydeder. Bunun üstüne şu
özel olaylar koddan gönderilir:

| Olay | Ne zaman tetiklenir | Parametreler | Nerede |
|------|--------------------|--------------|--------|
| `download_click` | İndirme butonuna tıklanınca | `platform`, `file_name` | `download-page-client.tsx` |
| `contact_submit` | İletişim formu başarıyla gönderilince | `topic` | `contact-page-client.tsx` |
| `waitlist_signup` | Pro bekleme listesine kayıt olununca | `locale` | `pricing-page-client.tsx` |
| `blog_read` | Okuyucu yazının **sonuna** ulaşınca (en az 15 sn sayfada kaldıysa) | `slug`, `locale`, `reading_time_minutes` | `blog-read-tracker.tsx` |

**Olayların mantığı — huni (funnel) olarak düşün:**

```
page_view (geldi) → blog_read (içeriği gerçekten okudu)
                  → download_click (ürünü denedi)   ← kuzey yıldızı metrik
                  → waitlist_signup (ödemeye niyetli)
                  → contact_submit (bize ulaştı)
```

`download_click` **kuzey yıldızı metriğin**: sitedeki her şey sonunda buna
hizmet eder. `waitlist_signup` ise en değerli ikinci sinyal — ödeme niyeti.

### Yeni olay nasıl eklenir?

```tsx
import { trackEvent } from "@/lib/analytics";

trackEvent("olay_adi", { parametre: "deger" });
```

Kural: yalnızca **kullanıcının bilinçli bir aksiyonunu** ölç (tıklama, form,
okuma tamamlama). "Sayfada gezindi" tarzı gürültü olaylar ekleme.

---

## 3. Metrik sözlüğü — hangi sayı ne demek?

### GA4 tarafı (analytics.google.com)

- **Users (Kullanıcı):** siteyi ziyaret eden tekil kişi sayısı (yaklaşık —
  çerez bazlı).
- **Sessions (Oturum):** ziyaret sayısı. Bir kişi günde 2 kez gelirse
  1 user, 2 session.
- **Engagement rate:** oturumların ne kadarı "gerçek" (10 sn+ kaldı, olay
  tetikledi veya 2+ sayfa gezdi). %60+ iyidir. Bunun tersi eski adıyla
  "bounce rate"tir.
- **Event count:** yukarıdaki tablodaki olayların kaç kez tetiklendiği.
  Raporlar → Engagement → Events altında.
- **Traffic acquisition:** ziyaretçi nereden geldi? `Organic Search` (Google),
  `Direct` (URL'i yazdı), `Referral` (başka site link verdi), `Organic Social`.

### Search Console tarafı (search.google.com/search-console)

- **Impressions (Gösterim):** siten Google sonuçlarında kaç kez *göründü*
  (tıklanmasa bile). Büyüme buradan başlar — önce gösterim artar, sonra tık.
- **Clicks (Tıklama):** Google sonucundan siteye kaç kişi geldi.
- **CTR:** tıklama / gösterim. Konuma göre değişir; %2-5 arası normaldir.
- **Average position (Ortalama konum):** aramada kaçıncı sıradasın.
  1-10 = ilk sayfa. 11+ görünüyorsa o sayfanın içeriğini güçlendir.
- **Indexed pages:** Google'ın dizinine aldığı sayfa sayısı. Sitemap'teki
  URL sayısına (şu an 36) yakınsamalı. "Page with redirect" gibi tekil
  istisnalar normaldir, dert etme.

**İkisinin farkı:** GSC "Google'da nasıl görünüyorsun"u, GA4 "siteye gelen
ne yapıyor"u anlatır. GSC verisi onaydan bağımsızdır (çerez gerektirmez),
bu yüzden trafik trendi için GSC daha güvenilir; davranış için GA4.

---

## 4. Haftalık kontrol rutini (~10 dk)

Haftada bir, tercihen pazartesi:

**Search Console (5 dk)**
1. **Performance** raporunu aç, tarihi "son 28 gün"e al.
   Clicks ve Impressions bir önceki döneme göre artıyor mu? Yön önemli,
   mutlak sayı değil.
2. **Queries** sekmesine bak: hangi aramalarla bulunuyorsun? Beklenmedik ama
   gösterim alan bir sorgu varsa → o konuda blog yazısı fırsatıdır.
3. **Indexing → Pages**: "Not indexed" sayısı büyüdüyse nedenine bak.
   Yeni blog yazısı 1-2 hafta içinde dizine girmediyse **URL inspection**
   ile adresi yapıştırıp "Request indexing" de.

**GA4 (5 dk)**
4. **Reports → Engagement → Events**: `download_click` bu hafta kaç?
   Haftalık trendini bir yere not et (kuzey yıldızı).
5. `blog_read` / `page_view` oranına bak: yazılar okunuyor mu, yoksa
   açılıp kapanıyor mu? Oran düşükse giriş paragraflarını gözden geçir.
6. **Acquisition → Traffic acquisition**: Organic Search payı büyüyor mu?
   Blog stratejisinin işe yarayıp yaramadığının göstergesi budur.

Ayda bir ek olarak: GSC **Experience → Core Web Vitals**'a göz at
(hepsi "Good" olmalı) ve `waitlist_signup` toplamını kontrol et.

---

## 5. Olayları test etme (DebugView)

Yeni bir olay ekledin, çalışıyor mu emin değilsin:

1. Sitede çerez onayı ver (banner'da kabul).
2. Chrome eklentisi "GA Debugger"ı aç **veya** URL'e `?debug_mode=1` ekle.
3. GA4 → Admin → **DebugView**'u aç.
4. Sitede olayı tetikle (ör. indirme butonuna bas) — birkaç saniye içinde
   DebugView akışında görünmeli.

Not: normal raporlara olayların düşmesi 24 saati bulabilir; anlık doğrulama
için tek güvenilir yer DebugView'dur. Yerelde test ediyorsan `npm run dev`
ile çalışırken `.env.local`'daki GA ID kullanılır — test olayların gerçek
mülke gider, sayıları bozmamak için testte aşırıya kaçma.

---

## 6. Sorun giderme

- **GA'da hiç veri yok:** production'da `NEXT_PUBLIC_GA_ID` tanımlı mı?
  Çerez onayı verdin mi? Reklam engelleyici (uBlock vb.) GA isteklerini keser
  — kendi ziyaretlerini görmüyorsan sebep büyük ihtimalle budur.
- **GSC'de sayfa dizine girmiyor:** URL inspection → Request indexing.
  Birkaç gün sabret; yeni sitelerde dizinleme yavaştır.
- **Sitemap güncel mi şüphesi:** `https://focusnow.ai/sitemap.xml`'i tarayıcıda
  aç, yeni sayfan listede mi bak. GSC → Sitemaps'te "Last read" tarihi çok
  eskiyse aynı URL'i tekrar SUBMIT etmek Google'a "yeniden oku" sinyali verir
  (zararsızdır).
