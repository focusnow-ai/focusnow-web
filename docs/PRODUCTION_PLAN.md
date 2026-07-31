# Production Plan — Pazara Açılma (GTM) Yol Haritası

Oluşturma: 2026-07-31 · Kapsam: FocusNow'ın bilinirlik kazanması ve Pro katmanına hazırlanması.
Kardeş dokümanlar: `SITE_OPS.md` (site işletim rutini) · `COMPARISON_SEO.md` (karşılaştırma sayfası playbook'u) · `ANALYTICS.md` (ölçüm) · `APP_REALITY.md` (iddia doğrulama) · `../CONTENT_STYLE_GUIDE.md` (ses ve mesaj hiyerarşisi).

---

## Context

FocusNow bir aydır yayında: Microsoft Store'da Windows sürümü (`9NDHPHGJK035`), focusnow.ai üzerinden macOS sürümü. 2026-07-30'da v0.2.0 (Design v1) çıktı. ~10 aktif kullanıcı var. Nihai hedef Pro katmanıyla gelir; öncesinde bilinirlik.

**Teşhis — sorun dönüşüm değil, hunide trafik yok.**

GitHub release indirme sayıları (`focusnow-ai/focusnow-releases`, 2026-07-31 itibarıyla doğrulandı):

| Sürüm | mac dmg | Windows exe | appx |
|---|---|---|---|
| v0.1.5 (13 Tem) | 4 | 1 | 2 |
| v0.1.4 (13 Tem) | 1 | 1 | 2 |
| v0.2.0 (30 Tem) | 0 | 0 | 1 |

Hunideki her şey hazır: EN/TR site, GSC + GA4 (`download_click` north-star), sitemap/hreflang, JSON-LD, 5 blog yazısı, 4 use-case sayfası, `/compare/rize`, Pro waitlist formu, PostHog EU'da zengin event seti. **Eksik olan tek şey üstten gelen insan.** Dolayısıyla eforun ~%80'i trafiğe, %20'si trafik gelince ortaya çıkacak sızıntılara gitmeli.

**İkinci sorun — vitrin bayat.** Design v1 çıktı ama:
- `public/screenshots/*.webp` 10-13 Temmuz tarihli → **eski arayüzü** gösteriyor
- `src/messages/en.json` → `changelog.versions` hâlâ **0.0.14**'ü "Latest Release" diyor
- `docs/APP_REALITY.md` (her pazarlama iddiasının doğrulandığı dosya) v0.0.2 gerçekliğini anlatıyor — Focus Score v1 formülü, kaldırılmış ekranlar
- Insights sayfası, Calendar, Working Hours site kopyasında **hiç yok**
- Repoda tek bir demo GIF/video yok (`.gif`/`.mp4`/`.webm` sayısı: 0)
- Hiçbir sosyal hesap, topluluk kanalı veya Product Hunt varlığı yok

Trafiği bu vitrine getirmek israf olur. Bu yüzden Faz 0 önce geliyor.

**Kısıtlar (karar verildi):** Global/İngilizce pazar · haftada 5-10 saat · **sıfır bütçe, sadece organik** · kurucu metin bazlı görünür olacak, yüz/ses yok.

---

## Konumlandırma kararı

Mevcut hero ("Where Does Your Day Actually Go? Now You'll Know.") doğru ama global pazarda Rize/RescueTime'dan ayrışmıyor. İki katmanlı kama:

**Birincil (dönüşüm için):** Rize'ın $14.99/ay, RescueTime'ın $9-12/ay istediği şey — otomatik takip + odak oturumları + AI günlük rapor — **ücretsiz, kartsız, Mac & Windows.** "Ücretsiz + otomatik + içgörü" üçlüsünü aynı anda veren rakip yok (ActivityWatch ücretsiz ama AI/insight yok ve kurulumu teknik).

**İkincil (güven ve HN/Reddit kredibilitesi için):** *AI hiçbir sayıyı uydurmuyor.* Boru hattı `FunctionApp` tarafında iki aşamalı — kod her metriği hesaplıyor (`FocusFactsCalculator`), LLM önce pencere başlıklarını projelere kümeliyor, sonra **sadece facts JSON'unu görerek** cümleleri kuruyor; ikinci aşama pencere başlıklarını hiç görmüyor. Doğrulanabilir bir mühendislik hikâyesi ve Show HN'in tam sevdiği türden.

**Üçüncül:** ekran görüntüsü yok, tuş kaydı yok, URL'ler sadece alan adı olarak.

**Asla iddia edilmeyecek:** "local-only" / "veriniz cihazınızdan çıkmaz". Uygulama **local-first ama local-only değil** — her şey Azure Cosmos (EU) ile senkronize oluyor ve local-only mod yok. Doğru cümle: *"local-first, şifreli senkron, EU'da barındırılıyor, istediğin an sil."* Ayrıca `FieldEncryptionService` alan bazlı şifreleme **kapalı** (`docs/legal/compliance-notes.md` G7) — "AES-256 alan şifrelemesi" denmemeli.

Bu kararlar `CONTENT_STYLE_GUIDE.md` içindeki messaging hierarchy'ye işlenmeli (mevcut "Never lead with privacy" kuralıyla uyumlu).

---

## Faz 0 — Vitrin onarımı (Hafta 1-2, ~12 saat) — trafikten ÖNCE

| # | İş | Dosya / yer |
|---|---|---|
| 0.1 | **Sessiz demo GIF/MP4** (30-45 sn, altyazılı, seslendirmesiz). En yüksek getirili eksik varlık — PH, Reddit, X, Store, landing hepsi bunu istiyor. Akış: kurulum → dashboard doluyor → Deep Work oturumu + floating widget → ertesi sabah Insights raporu. | `public/` + `public/press/` |
| 0.2 | **7 yeni ekran görüntüsü** (Design v1): dashboard, analytics, activities, categories, sessions, **insights**, **calendar**. Mevcut dosya adlarının üstüne yaz, `ProductShowcase` sekmeleri otomatik alsın. | `public/screenshots/` |
| 0.3 | **Site ↔ uygulama senkronu**: changelog'a 0.2.0 girdisi (EN+TR, tarih + "Latest" rozeti, sürüm numarası yazmadan), bento + "Also included" listesine Insights / Calendar / Working Hours, Focus Score v2 formülü. | `src/messages/{en,tr}.json` |
| 0.4 | **`APP_REALITY.md` yeniden yazımı** — v0.2.0 gerçekliğine göre. Her pazarlama iddiası buna karşı kontrol ediliyor; bayat kalırsa yanlış iddia riski. | `docs/APP_REALITY.md` |
| 0.5 | **Microsoft Store listing tazeleme** (Partner Center, elle): "What's new" 5-8 madde, yeni ekran görüntüleri, açıklamada arama terimleri — *time tracker, focus, pomodoro, screen time, deep work, productivity*. Süreç `Desktop/docs/RELEASE_CHECKLIST.md` Faz 6'da. | Partner Center |
| 0.6 | **Onboarding telemetri kör noktası** — consent adımı wizard'ın **sonunda** olduğu için `Onboarding:StepViewed` ①/② PostHog'a hiç ulaşmıyor; tam da ölçmesi gereken kullanıcılar için huni kör. Trafik gelmeden düzelt. Ya consent'i öne al ya da bu iki event'i baseline katmana taşı (o zaman privacy policy §7 de güncellenmeli — kod yorumu bunu açıkça uyarıyor). | `Desktop/src/renderer/components/onboarding/`, `PostHogService` |
| 0.7 | **`press/` klasörü**: logo (SVG+PNG), 7 ekran görüntüsü, demo GIF, 50/150/300 kelimelik boilerplate, kurucu isimleri (Cihan & Barbaros), `info@focusnow.ai`. Dizinler ve PH bunu her defasında isteyecek. | `public/press/` |

---

## Faz 1 — Dizinler ve yüksek niyetli keşif (Hafta 2-3, ~7 saat, **tek seferlik**)

Sıfır bütçeyle en yüksek getirili blok: kalıcı backlink + "X alternative" aramalarında görünürlük. `SITE_OPS.md` §4 bunu zaten planlamış ama uygulanmamış.

1. **AlternativeTo** — RescueTime, Rize, ActivityWatch, Timing, ManicTime, Toggl Track'in **her birine** alternatif olarak ekle. Rakibinden memnun olmayan kullanıcı burada arıyor; herhangi bir dizindeki en yüksek niyetli kitle.
2. **SaaSHub, Slant, ToolFinder, Uneed, Peerlist, StackShare, Indie Hackers Products** — hepsi ücretsiz, DR yüksek.
3. **G2 / Capterra / GetApp** — ücretsiz listeleme; ilerde inceleme toplamak için zemin.
4. **AEO/GEO hijyeni** — `llms.txt` ekle, kritik metnin SSR olduğunu doğrula, `SoftwareApplication` JSON-LD'yi 0.2.0 özellikleriyle güncelle. Hedef: ChatGPT/Perplexity "free RescueTime alternative" sorusunda FocusNow'ı anması. Gerçek bir kanal ve sıfır maliyetli.
5. **Store kampanya takibi** — Microsoft Store URL'lerine CID parametresi ekle ki `src/lib/downloads.ts`'teki deep link'ten gelen trafik Partner Center'da ölçülebilsin.

---

## Faz 2 — Topluluk ve lansman (Hafta 3-8, haftada ~3 saat)

Sıra kritik: en affedici kanaldan en az affediciye. Product Hunt ve Show HN **tek atımlık kartlar** — ağ ve varlık oluşmadan yakılmamalı.

**Hafta 3-4 — hesap ısıtma ve düşük riskli paylaşımlar**
- Reddit hesabı ısıt: 2-3 hafta boyunca ilgili subredditlerde yorum yaz, karma biriktir (automod eşiğini geç). **r/productivity self-promo'yu yasaklıyor** — oraya post atma, sadece soru cevaplayarak katıl.
- İlk paylaşımlar: **r/SideProject**, **r/IndieHackers** (SHOW IH flair), **r/macapps** (indie Mac uygulamaları için en verimli yer), **r/windowsapps**, **r/software**. Her subreddit'e **farklı** metin — aynı içeriği kopyalamak Reddit'te en hızlı ban sebebi. Bağlılığı her zaman açıkla ("ben yaptım").
- Demo GIF'i her paylaşımın merkezine koy.

**Hafta 4-8 — build-in-public (metin, X + LinkedIn)**
- Haftada 2-3 post. `Desktop/CHANGELOG.md` zaten hazır içerik deposu — her release notu bir post.
- En yüksek etkileşimli tür: sayısal kilometre taşları (ilk 100 kurulum, ilk Pro satışı) ve dürüst başarısızlıklar.
- İlk satırı 10 kelimenin altında tut.

**Hafta 6 — Show HN**
- Başlık teknik hikâye üzerinden, ürün reklamı üzerinden değil: *"Show HN: An AI daily report where code computes every number and the LLM only phrases them"*.
- Salı-Perşembe, 08:00-10:00 ET. Kurucu ilk 4 saat yorumlarda aktif olmalı (metin, kamera yok — HN zaten metin).
- **Hazırlıklı ol:** en üst yorum büyük ihtimalle *"neden Google/Microsoft girişi zorunlu?"* olacak. Dürüst, savunmacı olmayan bir cevabı önceden yaz (Riskler §1).

**Hafta 7-8 — Product Hunt**
- Ancak Faz 0 varlıkları + 30-50 kişilik kişisel DM listesi hazır olduğunda. Ağsız PH lansmanı harcanmış karttır.
- İlk galeri görseli demo GIF olmalı — zayıf ilk görsel tıklamaların büyük kısmını daha kimse detayları görmeden kaybettiriyor.
- Kayıt/indirme akışını lansman sabahı iki platformda da baştan sona test et.

---

## Faz 3 — SEO derinleşmesi (Hafta 4-16, haftada ~2 saat, sürekli)

Altyapı hazır; eksik olan hacim. `SITE_OPS.md` §2'deki 8 yazılık kuyruk iyi kurgulanmış — uygula, yeniden icat etme.

- **Öncelik: #5 (RescueTime alternatifi).** Bir kez yayınlanıp aynı gün geri çekilmişti (4 yönlendirme maddesinin 3'ü rakipleri işaret ediyordu). `SITE_OPS.md`'deki düzeltme notuna göre yeniden yaz: okuyucunun ihtiyacıyla aç → onu karşıladığımızı göster → nişleri dürüstçe teslim et (mobil → RescueTime, local-only/Linux → ActivityWatch).
- **Yeni `/compare` sayfaları**: `rescuetime`, `activitywatch`, `timing`, `toggl`, `manictime`. `/compare/rize` şablonu ve `COMPARISON_SEO.md` playbook'u mevcut. "X alternative" sorguları ücretsiz araçlarda en yüksek dönüşümlü sayfalar.
- **Site dili genişletme kararını ERTELE.** Uygulama 5 dil (en/es/ru/tr/de), site 2 (en/tr) — gerçek bir boşluk, ama global-EN odağıyla şimdi çelişir. Hafta 12'de GSC verisine bakıp karar ver.

---

## Faz 4 — Ölçüm kapıları ve Pro (Hafta 8-20)

**Pro'yu koda dökmeden önce üç sayı.** Hepsi bugün PostHog EU'da ölçülebilir (`Desktop/.claude/rules/backend.md` → `PostHogService`):

| Kapı | Ölçüm | Eşik |
|---|---|---|
| Aktivasyon | `Permission:Accessibility {granted:true}` / ilk `App:Launched` | **>%60** — düşükse kullanıcı hiç veri üretmiyor ve uygulamayı bozuk sanıyor |
| Tutundurma | 4. haftada hâlâ `App:Launched` atan kullanıcı oranı | **>%20** |
| AI çekiciliği | `Insight:Generated {outcome:'success'}` / aktif kullanıcı | Pro'nun neyin üstüne kurulacağını bu söyler |

Artı **10-15 kullanıcı görüşmesi** (mevcut aktif kullanıcılar + waitlist e-postaları — `src/app/api/waitlist/`, Azure Table `Waitlist`).

**Pro tasarımı (öneri — veri gelince revize edilecek):**

- **Maliyet gerçeği kapıyı belirliyor:** AI günlük raporu ≈ **€0.06/kullanıcı/gün**. Ücretsiz katmanda sınırsız rapor sürdürülemez. Doğal ve dürüst kesim noktası burası.
- **Free:** takip, dashboard, timeline, oturumlar, focus score, calendar, 90 gün geçmiş, **ayda 5 AI raporu**
- **Pro:** sınırsız günlük rapor + haftalık/aylık rapor + 12 ay geçmiş + gelişmiş analitik
- **Fiyat:** $5-6/ay veya **$39-49/yıl**, yıllık öncelikli. Rize $14.99 ve RescueTime $9-12'nin belirgin altında.
- **Mevcut kullanıcılar grandfathered.** Site "Free forever. No credit card." dedi; bu sözü tutmak erken kullanıcı güveninin tamamı. Açıkça duyur ve pazarlama malzemesi yap.
- **Ödeme altyapısı:** Merchant-of-record şart (KDV/sales tax'i onlar üstlenir). **Lemon Squeezy** lisans anahtarı yönetimini yerleşik veriyor (%5 + $0.50); **Paddle** daha geniş yargı alanı kapsıyor. Karar öncesi **doğrula**: (a) Türkiye'den satıcı kabul ediyorlar mı — PayPal Türkiye'de para almıyor, banka havalesi gerekir; (b) Microsoft Store sürümünde harici ödeme Store politikasına uygun mu.
- **Kodda sıfır altyapı var.** `Desktop/src`, `FunctionApp` ve dokümanlarda `paywall|subscription|license|tier|entitlement|billing|stripe|trial` araması tek bir gerçek eşleşme vermiyor. Entitlement bayrağı, feature gate, kota sayacı, upgrade prompt — hepsi greenfield, ~2-3 haftalık iş. Kapılar geçilmeden başlatma.
- Pro çıkınca `pricing.meta.description` ve "Is it really free?" FAQ cevabı güncellenmeli (`CONTENT_STYLE_GUIDE.md` bunu zaten not etmiş).

---

## Haftalık ritim (5-10 saat)

| Süre | İş |
|---|---|
| 2 sa | İçerik — haftada 1 EN blog yazısı (TR iki haftada bir) |
| 2 sa | Topluluk — Reddit yorumları, X/LinkedIn build-in-public, gelen sorulara cevap |
| 1 sa | Ölçüm & bakım — GSC, GA4 `download_click`, PostHog huni, canlı indirme butonlarını tıkla |
| kalan | Kullanıcı görüşmeleri / lansman hazırlığı |

---

## Riskler ve önceden hazırlanacak cevaplar

1. **Google/Microsoft girişi zorunlu, local-only mod yok.** HN ve r/privacy'de en üst yorum bu olacak ve privacy konumlandırmasıyla gerilim yaratıyor. Dürüst cevabı önceden yaz (senkron ve AI raporu için hesap gerekiyor; parola tutmuyoruz; verini tek tıkla sil). "Hesapsız local mod" talebi tekrarlanırsa yol haritasına al — büyük bir iş, şimdi taahhüt etme.
2. **"AI-powered" tek bir manuel tetiklenen rapora dayanıyor.** Kullanıcı Insights sayfasını hiç açmazsa ürünün en pahalı ve en ayırt edici parçası ölü. `Insight:Generated` oranı düşükse rapor hazır olduğunda bildirim şart.
3. **Focus Score v2 puanları düşürdü** (nötr artık yarım ağırlıkta). Eski kullanıcılar "puanım düştü" diyecek — changelog ve duyuruda önden açıkla.
4. **Windows ve macOS farklı güncelleme kanallarında.** Windows artık sadece Store; sahadaki eski NSIS kurulumları GitHub'ı yoklamaya devam edecek ve Store'a asla geçmeyecek. Destek ve release-note mesajlarını ayır.
5. **`docs/legal/compliance-notes.md` G1-G8 boşlukları** (VERBİS kaydı belirsiz, KVKK m.9 mekanizması, git geçmişindeki sırlar) iç belge — hiçbir GTM materyaline sızmamalı. G8 (git geçmişinde production secrets) görünürlük artmadan önce ayrıca ele alınmalı.
6. **Tek seferlik kartlar** (Product Hunt, Show HN) erken yakılmamalı — sıralama Faz 2'de bilinçli.

---

## Başarı ölçütleri (doğrulama)

| Zaman | Hedef | Nereden bakılır |
|---|---|---|
| Hafta 2 | Faz 0 bitti: yeni görseller canlı, changelog 0.2.0, Store listingi güncel, onboarding telemetrisi görünür | Siteyi iki dilde gez; PostHog'da paketlenmiş build ile `Onboarding:StepViewed` geliyor mu |
| Hafta 4 | 10+ dizin listesi canlı, haftada **25+** `download_click` | GA4, AlternativeTo profilleri |
| Hafta 8 | Show HN + PH sonrası **200+** toplam kurulum, **50+** waitlist e-postası | GitHub release download count + Partner Center + Azure Table `Waitlist` |
| Hafta 12 | Haftada **50+** organik download click, GSC'de 5+ sayfa ilk 20'de | GA4 + GSC |
| Hafta 16-20 | Aktivasyon >%60, W4 retention >%20 → **Pro geliştirmesi başlar** | PostHog huni |

Her fazın sonunda bir sonrakine geçmeden bu satıra bak. Rakam tutmuyorsa sonraki faza geçmek değil, o fazı teşhis etmek gerekir.
