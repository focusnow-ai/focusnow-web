# FocusNow — Yaratıcı yön ve web sitesi uygulama brief'i

**Uygulayıcı:** Claude Opus 5.5  
**Tarih:** 26 Eylül 2026  
**Teslim:** Görsel olarak güçlü, ürünü arzulatan, indirmeye yönlendiren; karşılaştırma, alternatif ve arama sayfalarıyla tamamlanmış EN/TR pazarlama sitesi.

## 1. Görev: Bu kez ortaya nasıl bir site çıkmalı?

FocusNow'ı gördüğümde “bunu bilgisayarıma kurmak istiyorum” dedirten bir ürün sitesi tasarla. İlk ekranda markanın karakterini, ürünün ne yaptığını ve kullanmanın nasıl hissettireceğini birlikte göster. Devamında gerçek ürün görüntüleriyle faydayı kanıtla. Ziyaretçi gezinirken özellikleri, kendi kullanım senaryosunu, alternatiflerle farkları ve fiyat koşullarını kolayca bulabilsin.

Bu belge **uygulama brief'idir**. Önceki [strateji araştırması](WEBSITE_MARKETING_STRATEGY_2026-09-26.md) arka plan ve kaynak olarak kullanılabilir; oradaki uzun açıklamaları, tabloları ve araştırma dilini sayfanın görünür metnine dönüştürme. Büyüme planı, kullanıcı görüşmeleri, yeni ücretlendirme ve gelecekteki AI ürünleri bu tasarımın ön koşulu değildir.

Önceki uygulamanın “bilgilendirici listeler”, “her başlık sola yaslı”, “kart kullanma” ve sabit bölüm sıralaması gibi görsel kararlarını yeniden değerlendir. `CLAUDE.md`, `.claude/rules/frontend.md` ve `DESIGN_SYSTEM.md` içindeki eski görsel tarifleri bu yeni tasarım yönüyle tutarlı hale getir. Proje talimatları, mevcut kullanıcı değişiklikleri, ürün doğruluğu, çeviri, güvenlik ve işlem yetkileri geçerliliğini korur.

**Yalnızca renkleri ve başlıkları değiştirip bitirme.** Kompozisyon, ürün sunumu, görsel hiyerarşi, içerik ritmi ve site içi keşif birlikte yeniden tasarlanacak.

## 2. Mevcut uygulamadan öğrenilecekler

Yerel önizleme ve kaynaklar incelendi:

- İlk ekranda başlık ve aşağıda büyük bir tablo var; sağ taraftaki alan ürünün karakterini anlatmıyor.
- Sayfa boyunca benzer geniş boşluklar, açıklama metinleri ve ekran görüntüleri tekrarlanıyor.
- Veri toplama açıklaması erken ve büyük bir bölüm kaplıyor; ürünün cazibesi henüz kurulmadan ayrıntıya giriliyor.
- Odak özellikleri “aradaki saatler için araçlar” diye ikincilleşmiş. FocusNow'ın odaklanma ve gününü anlama kimliği zayıflamış.
- Rize karşılaştırma sayfası ve footer bağlantısı **hâlâ var**. Ana sayfanın gövdesinde karşılaştırma keşfi yok; karşılaştırma/alternatif merkezleri bulunmuyor.

Çözüm: daha iyi bir görsel hikâye, daha geniş ürün sunumu ve görünür içerik ağı. Var olan sayfaları silerek sadeleştirme yapılmayacak.

## 3. Yaratıcı yön: Sakin enerji, güçlü ürün sahneleri

**Görsel karakter:** Modern bir masaüstü ürününün özenini taşıyan, aydınlık, canlı ve kendine güvenen bir marka. Mor marka rengini koru; atmosfer, kontrast ve kompozisyonla zenginleştir.

### Kompozisyon kararları

- Masaüstü hero: yaklaşık **%45 metin / %55 ürün sahnesi**, 1280–1360 px civarı içerik genişliği. Başlık ve anlamlı ürün alanı aynı ilk görünümde bulunmalı.
- Sağda tek bir düz ekran görüntüsü yerine **bir ana uygulama penceresi + en fazla iki küçük detay katmanı**. Gerçek arayüz, okunabilir yakın plan ve anlamlı vurgu.
- Açık zeminde çok hafif lavanta ışık/gradient alanı; ürünün altında kontrollü derinlik ve gölge. Düğmeler yüksek kontrastlı, düz renkli.
- Hero başlığı masaüstünde yaklaşık 64–80 px, mobilde 40–48 px başlangıç aralığında; Türkçe uzunluğa göre optik ayar yap. Başlık 2–3 satırda güçlü bir şekil oluştursun.
- Başlık, kısa metin ve CTA arasında belirgin hiyerarşi. Açıklama metni 18–20 px; uzun satırlarla görseli boğmasın.
- Sayfada açık ürün sahnesi, koyu odak sahnesi, farklı boyutlu özellik kartları ve kompakt karar bölümleri birlikte yer alsın.
- Büyük boşluk, sonraki bölümün gelişini ve görsel odağı desteklesin. Her bölüme aynı `py-32` ekleyerek ritim oluşturma.
- Kartlar serbest: her kart bir ürün davranışı veya faydayı görünür kılsın. Her birini aynı ikon–başlık–paragraf kalıbında üretme.

### Görsel referansları nasıl kullanacaksın?

[Linear](https://linear.app/): tipografi ve ürün ayrıntılarındaki özen. [Raycast](https://www.raycast.com/): marka enerjisi ve uygulamayı indirme arzusu. [Rize](https://rize.io/): gerçek ürünü ilk ekranda görünür kılma. Bu referanslardan birini birebir kopyalama; FocusNow'ın açık tema, mor kimlik ve odak/iş günü bağlamını geliştir.

**İstenen etki:** Ürün kaliteli, anlaşılır ve günlük hayatıma girebilir görünsün. Görsel gösteriş, ekranın ve mesajın okunabilirliğini azaltmasın.

### Ekran görüntüsü yönetimi

`public/screenshots/light/` ve `dark/` içindeki gerçek görselleri kullan. Ana pencere ürünün bağlamını koruyabilir; ek detayda yakın plan kullanılabilir. Her görseli aynı büyüklükte kırparak hangi ekranda olduğumuzu kaybettirme.

Katmanlı sunum, ayrı ekranlardan alınan parçaları otomatik gerçekleşen tek işlem gibi göstermemeli. Demo veri etiketi doğal bir açıklamada yer almalı. Müşteri isimleri, saatler ve puanlar kullanıcı başarısı veya sosyal kanıt gibi kullanılmamalı. Gerçek bir PDF görüntüsü yoksa doğrulanmış çıktı alınana kadar Billing ekranını göster; hayali bir belgeyi mevcut ürün çıktısı gibi çizme.

## 4. Mesaj: FocusNow'ın bütün değerini hissettir

Ana sayfa; otomatik zaman takibi, odaklanma, günü anlama ve müşteri işi arasındaki bağı anlatsın. Bağımsız profesyoneller güçlü bir kullanım senaryosu olarak öne çıksın; uygulamanın tamamını bir faturalandırma yardımcısına indirgeme.

### Hero için uygulanacak metin yönü

**EN kategori:** Automatic time tracking for Mac & Windows  
**EN başlık:** Your workday, in focus.  
**EN açıklama:** See where your time goes, make room for deep work, and turn tracked activity into clear client hours.  
**Ana CTA:** Get FocusNow Free  
**İkinci CTA:** Explore the app

**TR kategori:** Mac ve Windows için otomatik zaman takibi  
**TR başlık:** Zamanını gör. Odağını bul.  
**TR açıklama:** Gününün nereye gittiğini gör, odaklanmaya yer aç ve çalışma kayıtlarını anlaşılır müşteri saatlerine dönüştür.  
**Ana CTA:** FocusNow'ı Ücretsiz İndir  
**İkinci CTA:** Uygulamayı Keşfet

Bunlar yaratıcı yönü somutlaştıran başlangıç metinleridir. Aynı vaadi ve açıklığı koruyarak doğal dil ve satır kırılımları iyileştirilebilir. İlk ekranda “otomatik zaman takibi” kategorisi görünür kalmalı; şiirsel başlık tek başına bırakılmamalı.

CTA yakınında kısa platform/ücretsiz temel bilgisi; müşteri özelliklerinin anlatıldığı ilk noktada erken erişim durumu bulunsun. Kapsam açıklamalarını her paragrafta tekrarlama. Otomatik proje ataması, fatura kesme ve tamamen cihazda kalma gibi mevcut olmayan yetenekler ima edilmemeli.

### Metin yazımının ölçüsü

Her bölümde **bir fayda başlığı + bir kısa açıklama + onu gösteren ürün sahnesi** yeterli başlangıçtır. Kullanıcıya kazanacağı şeyi söyle; alan isimleri ve işlem kuralları ilgili rehberde açıklansın.

| Kullanıcının hissetmesi gereken | Örnek başlık yönü |
| --- | --- |
| Günümü hatırlamak kolaylaşacak | “Your day, without the guesswork.” / “Gününün izini kaybetme.” |
| Çalışmaya başlamak isteyeceğim | “Make room for your best work.” / “İyi işe yer aç.” |
| Verilerden bir şey anlayacağım | “See the patterns behind your day.” / “Günündeki düzeni gör.” |
| Müşteri işimi toparlayabileceğim | “Client hours you can explain.” / “Müşteri saatlerin netleşsin.” |

İç strateji terimleri, ölçüm hedefleri, veri boru hatları ve özellik olgunluk tabloları pazarlama metnine taşınmayacak.

## 5. Ana sayfa: Tasarlanacak dokuz sahne

Bu sıralama bir yaratıcı omurgadır. Mobilde gereken uyarlamayı yap; her sahneyi aynı bileşenin farklı metinli kopyası olarak üretme.

### 1 — Hero: Ürüne ilk bakış

Sol: yukarıdaki başlık, açıklama, iki eylem ve platform bilgisi. Sağ: Focus veya Productivity ekranını ana pencere yap; zaman kartı ve günlük özet ayrıntılarıyla ürünün kapsamını hissettir. Hero'nun ağırlığı tek bir karmaşık finans tablosuna verilmesin.

İlk 1440×900 görünümde başlık, CTA ve anlamlı ürün içeriği birlikte görülsün. Küçük detaylar ana pencereyi kapatmasın. İlk yüklemede içerik okunabilir olsun; animasyon bitene kadar boş sahne beklenmesin.

Altında kompakt bir güven şeridi: Mac + Windows, ücretsiz temel takip, ekran görüntüsü/tuş kaydı yok. Uydurma müşteri logoları veya kullanıcı sayısı ekleme.

### 2 — Günü anlamak: Büyük ve açık ürün sahnesi

Otomatik takip ile Productivity/Calendar görünümünü bağla. Başlığı merkeze veya iki kolonlu kompozisyona yerleştir; hero düzenini tekrar etme. Bir ekran üzerinde 2–3 kısa açıklama noktasıyla “hangi uygulamalar, hangi saatler, hangi örüntü” anlaşılmalı.

Bu bölüm kullanım kılavuzu adımları değil, ürünü görünce anlaşılabilen fayda sunmalı. “Daha fazla keşfet” ilgili otomatik takip sayfasına gitsin.

### 3 — Odak: Sayfanın duygusal merkezi

Tam genişlikte koyu, sıcak nötr bir yüzey; ortada veya asimetrik büyük bir Focus ekranı. Timer, görev ve müzik ayrıntıları kontrollü biçimde öne çıksın. Kısa ve güçlü başlık, fazla özellik açıklaması olmadan çalışma hissi versin.

Bu sahne iki temada da özenle tasarlanmalı. Görünür bir sesi aç düğmesi olmadan müzik başlatma. Sürekli titreşen sayaç veya dikkat dağıtan parçacık animasyonu kullanma.

### 4 — Ürünün genişliği: Dört farklı özellik kartı

Değişken boyutlu bir düzen tasarla: büyük bir analiz kartı, orta bir AI günlük raporu kartı, daha kompakt görev ve takvim kartları. Her birinde gerçek bir arayüz detayı bulunsun.

AI kartı yalnız mevcut günlük özet/öneri işini anlatsın. Gelecekteki ajan veya otomatik proje ataması gösterilmesin. Kartların en az bir kısmı ilgili özellik/rehber sayfasına gerçek bağlantı versin; işlevsiz “Learn more” bırakma.

### 5 — Müşteri işi: Somut ticari sonuç

Birbirine görsel olarak bağlanan üç an: etkinlikleri inceleme → kullanıcı seçimiyle zaman kartı → çalışma dökümü. Büyük bir Timecards/Billing görseli ve iki küçük detay kullanılabilir. Kullanıcının proje seçtiği adım gizlenmesin.

Erken erişim etiketi burada görünür olsun. Çalışma dökümünün vergi faturası olmadığı, bölümün sonunda kısa ve okunur bir notla belirtilebilir. Ayrıntılar ilgili sayfa/SSS'de açıklansın.

### 6 — Kullanım senaryoları: Kendini bul

Freelancer, geliştirici, uzaktan çalışan ve öğrenci için dört kısa giriş. Freelancer ilk ve daha baskın olabilir; diğer mevcut kullanım sayfaları korunacak.

Her kartın görsel odağı farklı olsun: müşteri kaydı, görev/odak, çalışma düzeni, çalışma oturumu. Hepsi aynı metnin meslek adı değiştirilmiş hali olmasın.

### 7 — Karşılaştır: Alternatifleri değerlendiren ziyaretçiyi yakala

Görünür bir bölüm: **“Finding the right time tracker?” / “Sana uygun zaman takip uygulamasını seç.”**

Rize, RescueTime ve Toggl karşılaştırmalarına üç özenli giriş kartı; altında tüm karşılaştırmalar ve alternatif rehberi bağlantıları. Rakip hakkında küçük düşürücü metin kullanma. Bu bölüm yalnız footer'da bırakılmayacak.

### 8 — Güven ve teklif: Kararı kolaylaştır

Kompakt, görsel bir güven paneli: uygulama/site kaydı, ekran/tuş kaydı olmaması, yerel çalışma ve oturum açıkken senkronizasyonun kısa açıklaması. Ayrıntılı veri politikası ayrı sayfada.

Yanında veya devamında iki açık teklif alanı: ücretsiz temel takip ve erken erişimde müşteri araçları. Onaylanmamış Pro fiyatı veya indirim ekleme. Burada markanın güveni ve açıklığı hissedilsin; uzun teknik envanter gösterilmesin.

### 9 — SSS ve final

5–6 gerçek satın alma/kurulum sorusu, ardından güçlü bir son ürün sahnesi ve indirme çağrısı. Son CTA yalnız mor bir şerit olmak zorunda değil: ürünün küçük bir kompozisyonu ve başlıkla başlangıçtaki hissi tamamlayabilir.

Ana sayfanın toplamı masaüstünde yaklaşık 5–7 ekran yüksekliği başlangıç hedefiyle düzenlenebilir. Bu katı piksel sınırı değildir; gereksiz boşlukları azalt, faydalı içeriği okunamayacak kadar sıkıştırma.

## 6. Site kapsamı: Neler mutlaka korunacak ve eklenecek?

**Önce mevcut route, içerik ve bağlantı envanterini çıkar.** Yeni tasarım; blog, rehber, kullanım senaryoları veya karşılaştırma sayfalarını görünmez hale getirmeyecek. Ana navigasyon, footer ve içerik içi bağlantılar birlikte tasarlanacak.

Önerilen üst menü: **Product · Use cases · Compare · Resources · Pricing · Download**. İlk dördü gerektiğinde erişilebilir küçük menüler olabilir. Rehber Resources içinde bulunabilir; ana satın alma yolculuğunun yerini kaplamasın. Mobil menü aynı içeriğe erişim sağlasın.

### Teslim kapsamı

| Yüzey | Yapılacak iş |
| --- | --- |
| Ana sayfa | Yukarıdaki yaratıcı omurgayla gerçek yeniden tasarım |
| İndirme | Aynı görsel kalite; platform/kurulum kararı açık, çalışan gerçek indirme bağlantıları |
| Fiyatlandırma | Okunabilir paket sunumu; ücretsiz/erken erişim ayrımı, mevcut form akışları korunur |
| Dört kullanım sayfası | Aynı marka dili; kişiye özgü hero, ilgili ürün sahnesi ve CTA |
| Blog ve rehber | İçerik ve adresler korunur; okunabilirlik ve marka bütünlüğü iyileştirilir |
| Hakkımızda | Cihan & Barbaros'un gerçek hikâyesi; ürünün insan tarafı |
| Gizlilik, koşullar, iletişim, sürüm notları | İşlev ve içerik bütünlüğü korunur |
| Karşılaştırma merkezi | Yeni `/compare`; üç karşılaştırmayı açıklayan gerçek içerik |
| Alternatif rehberi | Yeni `/alternatives`; seçim kriterleri ve farklı ihtiyaçlara göre araçlar |
| Karşılaştırmalar | `/compare/rize` korunup geliştirilir; `/compare/rescuetime` ve `/compare/toggl` eklenir |
| Ürün sayfaları | `/features/automatic-time-tracking`, `/features/focus-sessions`, `/features/timecards` eklenir |

Yeni adresler EN için öneridir. Türkçe karşılıkları routing tablosunda tanımlanmalı; mevcut `/tr/karsilastir/rize`, kullanım ve rehber adresleri korunmalı. Aynı arama niyetini hedefleyen ikinci bir `/alternatives/rize` kopyası açma; mevcut Rize karşılaştırması “Rize alternative” ihtiyacını da karşılayabilir.

Yeni sayfaları şablon metniyle doldurup tamamlandı sayma. Uygulama sırasında doğrulanamayan bir rakip iddiasını çıkar veya açıkça belirsiz bırak; boş/yanıltıcı bir sayfayı sitemap'e ekleme. Zorunlu teslimde eksik varsa sonuç raporunda isim vererek belirt.

### Sayfaların görsel ailesi

- **Özellik:** Büyük fayda başlığı, o özelliğe özel ürün sahnesi, üç kullanım sonucu, gerçek akış, ilgili rehber, indirme.
- **Kullanım senaryosu:** Kişinin gününü anlatan hero, iki ilgili sahne, kısa senaryo, uygun karşılaştırma ve indirme.
- **Karşılaştırma:** Karar veren bir pazarlama sayfası; güçlü başlık, ürün görüntüsü, hızlı seçim, tablo ve deneyim farkı.
- **Blog/rehber:** Rahat okuma; içerik genişliği, görsel ve ilgili bağlantılar. Bu okuma şablonunu ana sayfaya uygulama.

## 7. Karşılaştırmalar ve alternatifler: Teslimin temel parçası

### Karşılaştırma sayfasının içeriği

1. Rakip adı geçen açık H1 ve FocusNow'ın kim için anlamlı olduğunu söyleyen kısa özet.
2. İki ürünün uygun olduğu durumlar; gerçek farklar ve sınırlamalar.
3. 8–12 karar kriteri: otomatik kayıt, odak araçları, müşteri işi, AI'nın yaptığı iş, platform, veri akışı, dışa aktarma ve fiyat koşulları.
4. FocusNow'dan gerçek bir ekran/akış; satır satır özellik listesinin ötesinde ürün deneyimi.
5. “Geçişi düşünüyorsan” bölümü; mevcut olmayan içe aktarma veya entegrasyon vaat edilmez.
6. Kontrol tarihi, resmî kaynaklar, ilgili alternatif/özellik bağlantıları ve indirme.

Rakip verileri uygulama sırasında resmî kaynaklardan yeniden doğrulanmalı. Özellikle Rize ve Timely'nin AI proje ataması, RescueTime'ın Timesheets ürünleri, Toggl/Clockify'ın otomatik takip yetenekleri görmezden gelinmemeli. “Diğerleri manuel, biz otomatiğiz” genellemesi yapılmayacak.

### Alternatif rehberinin içeriği

`/alternatives`, karşılaştırma kartlarının ikinci kopyası olmayacak. Ziyaretçiye seçim kriterleri ver: kişisel odak, müşteri saatleri, ekipler, tamamen yerel veri, platform. FocusNow, Rize, RescueTime, Toggl, Timely ve ActivityWatch için kısa ama somut değerlendirme yapılabilir. Liste FocusNow tarafından hazırlanmış olduğu için yayıncı ilişkisi açık olsun; uydurma puanlama ve “her kategoride kazanan biziz” tablosu kullanma.

Google'ın karşılaştırma/inceleme tavsiyeleri de karar açısından anlamlı farkları, dayanakları ve özgün değerlendirmeyi öne çıkarıyor. [Resmî inceleme rehberi](https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews).

### Bağlantı ağı

```text
Ana sayfa → Compare merkezi → Rize / RescueTime / Toggl
          → Alternatif rehberi → ilgili karşılaştırma
Özellik ↔ Kullanım senaryosu ↔ ilgili Blog / Rehber
Her pazarlama yolu → İndir
Footer → bütün ana gruplar + karşılaştırmalar + alternatif rehberi
```

Bir sayfanın sitemap'te olması yeterli sayılmaz; kullanıcı menüden veya ilgili içerikten de ona ulaşabilmeli.

## 8. SEO: Tasarımın içine yerleşecek

### Arama niyeti dağılımı

| Sayfa | Ana niyet |
| --- | --- |
| Ana sayfa | FocusNow; automatic time tracking app; Mac & Windows |
| Otomatik takip | automatic app / website time tracking |
| Odak oturumları | focus timer; deep work; Pomodoro desktop app |
| Zaman kartları | tracked activity to timecards; client hours |
| Freelancer | automatic time tracking for freelancers |
| Rize karşılaştırması | FocusNow vs Rize; Rize alternative |
| RescueTime karşılaştırması | FocusNow vs RescueTime; RescueTime alternative |
| Toggl karşılaştırması | FocusNow vs Toggl; Toggl alternative |
| Alternatif rehberi | time tracking alternatives; choosing a time tracker |

Bunlar hedef niyetlerdir; arama hacmi veya sıralama garantisi değildir. Başlıklara bütün varyasyonları yığma. Her sayfanın kendine özgü cevabı ve görseli olsun. [Google'ın faydalı içerik yaklaşımı](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

### Uygulama kontrolü

- Her sayfanın EN/TR title ve description'ı özgün; title şablonu eklendikten sonra da makul uzunlukta olsun. Tek anlamlı H1 ve düzenli H2 yapısı kur.
- Canonical doğru sayfayı göstersin; yerelleştirilmiş karşılıklar karşılıklı hreflang ile bağlansın.
- Sitemap yeni gerçek sayfaları kapsasın. Var olan yollar korunmalı; değişmesi gereken bir yol için açık 301 eşlemesi ve iç bağlantı güncellemesi yapılmalı.
- Başlıklar, açıklamalar, karar tabloları ve bağlantılar anlamlı HTML olarak gelsin. Ana değer önerisi yalnız video/canvas/görsel içinde kalmasın.
- Open Graph paylaşım görselleri ürün/özellik/karşılaştırma bağlamını taşısın; sadece aynı boş logo görselini bütün sayfalara yayma.
- SoftwareApplication, Organization, BreadcrumbList ve Article gibi işaretlemeler ilgili gerçek içerikle uyumlu kullanılsın. Uydurma puan, yorum veya Pro fiyatı eklenmesin.
- SSS kullanıcıya yardım etmek için var. Google, FAQ rich result desteğini 2026'da kaldırdı; bunu SEO vaadi yapma. Mevcut FAQ şeması korunursa yalnız görünen soruları içersin ve çoğaltılmasın. Eski `COMPARISON_SEO.md` içindeki “FAQ ile zengin sonuç” beklentisini düzelt. [Google güncellemesi](https://developers.google.com/search/updates).
- `llms.txt` veya “AI SEO” etiketini temel SEO işlerinin yerine koyma. Google görünürlüğü için yararlı, erişilebilir, özgün içerik ve doğru teknik temel öncelikli. [Google AI arama rehberi](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).
- Eski SEO notlarındaki “aynı anda yeni sayfa açmak sinyali böler”, “rakip adı sayfası tek görünme yoludur”, doğrulanmamış “en yüksek hacim” veya “4–8 haftada sonuç” gibi kesinlikleri uygulama kuralı kabul etme.

## 9. Tasarımı bitmiş hissettirecek ayrıntılar

**Mobil:** Hero görselini masaüstünden körlemesine küçültme. Ana pencere + tek anlamlı yakın plan yeterli olabilir. 390 px görünümde başlık, CTA ve ürün başlangıcı anlaşılır olsun. Tabloyu tüm sayfayı taşırmadan kaydırılabilir bir alan veya eşdeğer karşılaştırma kartlarıyla sun. Görsel metinler okunamayacak kadar küçülmesin.

**İki tema:** Renkleri tersine çevirmekle yetinme; yüzey, gölge, sınır ve ekran görüntüsü teması bilinçli eşleşsin. Koyu sahneler açık tema içinde de kontrast bölümü olarak kullanılabilir.

**Türkçe:** Aynı hissi taşıyan doğal metin yaz. Satır kırılımları, buton genişlikleri ve menü yoğunluğu iki dilde ayrı incelensin. Üründe olmayan platform/dil kapsamı ima edilmesin.

**Hareket:** Hero için kısa giriş ve ürün katmanlarında kontrollü derinlik; sekme değişimlerinde sade geçiş. Kullanıcı kaydırmasını ele geçirme. `prefers-reduced-motion` ve JavaScript/geçiş gecikmesi durumlarında içerik görünür kalsın.

**Etkileşim:** Bütün CTA'lar, ürün kartları, menüler, dil/tema düğmeleri ve formlar gerçek davranışa sahip olsun. Klavye odağı görünür olsun. Video kullanılırsa poster, oynatma kontrolü ve metin karşılığı bulunsun.

**Hız:** Hero'yu büyük video indirmesine bağımlı yapma. Doğru boyutlu WebP/AVIF, belirli görsel oranları ve alt içerikte ertelenen yükleme kullan. Gerçek kullanıcı ölçümlerinde LCP ≤2,5 sn, INP ≤200 ms, CLS ≤0,1 hedefle; laboratuvar ölçümüyle saha sonucunu karıştırma. [Core Web Vitals](https://web.dev/articles/vitals).

## 10. Uygulama yöntemi: Önce görsel kaliteyi kur, sonra yay

1. **Envanter:** Mevcut değişiklikleri, sayfaları, görselleri ve bağlantıları kaydet; ürün gerçeklerini oku. Kullanıcının mevcut işini geri alma.
2. **İlk kompozisyon:** Hero + odak sahnesi + özellik kartlarını kodlayıp tarayıcıda aç. 1440 px ve 390 px görüntülerde hiyerarşiyi incele. Yalnız CSS dosyasına bakarak karar verme.
3. **Görsel düzeltme:** Boşluklar, satır kırılımları, ekranların okunabilirliği, ışık/gölge ve bölüm geçişlerini düzelt. İlk denemeyi otomatik olarak nihai kabul etme.
4. **Ana sayfayı tamamla:** Müşteri işi, kullanım senaryoları, karşılaştırma, güven, teklif ve finali aynı kaliteyle ekle.
5. **Siteyi tamamla:** Mevcut sayfa ailesini uyumla; zorunlu yeni özellik, karşılaştırma ve alternatif sayfalarını içerikleriyle oluştur. Navigasyon ve footer'ı bitir.
6. **SEO ve işlev kontrolü:** Route envanterini önce/sonra karşılaştır; kaybolan sayfa, kırık bağlantı, canonical ve dil eşleşmelerini düzelt.
7. **Son görsel inceleme:** Bütün ana sayfayı ve temsili alt sayfaları iki dil/temada incele. Ardından kısa teslim raporu ve önizleme ver.

Bu akışta rutin tasarım tercihlerinde kullanıcıdan tekrar tekrar seçim isteme. Mevcut teknik altyapıyı kullan; yeni ücretli araç veya servis kurma. Commit, push ve yayın için mevcut yetki kurallarını koru. Next.js değişikliklerinde kurulu sürümün yerel belgelerini esas al.

## 11. Kabul koşulları: “Şahane”yi nasıl değerlendireceğiz?

### Görsel teslim

- İlk ekranda belirgin marka karakteri, okunabilir ürün ve güçlü indirme çağrısı birlikte var.
- Ana sayfada en az dört farklı kompozisyon okunuyor: hero, odak sahnesi, farklı boyutlu özellik kartları, karşılaştırma/karar bölümü.
- Sayfanın küçük tam sayfa görüntüsünde bile ritim ve görsel ağırlık değişimleri belli oluyor.
- Ürün ekranları dekor değil; hangi faydayı gösterdikleri açık.
- Mobil görünüm ayrıca tasarlanmış; masaüstünün sıkıştırılmış kopyası gibi durmuyor.
- Tam sayfa incelemesinde uzun, tekdüze açıklama blokları ve sebepsiz boşluklar kalmamış.

### İçerik ve keşif

- Otomatik takip, odak, AI günlük raporu ve müşteri işi birlikte görünür.
- Karşılaştırma bölümü ana sayfa gövdesinde var; Compare ve Alternatives menü/footer üzerinden erişilebilir.
- Mevcut Rize sayfası, dört kullanım senaryosu, blog ve rehberler korunmuş.
- Yeni merkezler, iki yeni karşılaştırma ve üç özellik sayfası gerçek ve özgün içerikle tamamlanmış.
- Hiçbir mevcut olmayan özellik, uydurma sosyal kanıt veya hayali fiyat yayımlanmamış.

### Teknik teslim

- `npx tsc --noEmit`, `npm run lint`, `npm run build` başarılı.
- 390 / 768 / 1024 / 1280 / 1536 genişliklerinde; EN/TR ve açık/koyu temada ilgili kontroller yapılmış.
- İndirme, menü, tema, dil ve mevcut form akışları çalışıyor.
- Sayfa taramasında kırık bağlantı veya yanlış canonical yok; yeni rotalar sitemap ve iç bağlantılara eklenmiş.
- Ana sayfa masaüstü/mobil ve en az bir karşılaştırma sayfasının son ekran görüntüleri teslim edilmiş.

**Derlemenin geçmesi tek başına tamamlanma değildir.** Görsel teslim, içerik keşfi ve teknik teslim birlikte karşılanmalı. Eksik bir sayfa veya doğrulanamayan iddia varsa açıkça raporla.

## 12. Claude'a verilecek kısa uygulama istemi

```text
FocusNow web sitesini docs/WEBSITE_CREATIVE_IMPLEMENTATION_BRIEF.md
belgesine göre uygula. Ana tasarım brief'i bu dosya; eski strateji
belgesi yalnız araştırma arka planı.

Güçlü bir pazarlama sitesi üret: katmanlı gerçek ürün hero'su,
özenli odak sahnesi, farklı boyutlu görsel özellik kartları,
ürünün tamamını hissettiren içerik ve görünür karşılaştırma alanı.

Mevcut sayfaları ve kullanıcı değişikliklerini koru. Brief'teki
karşılaştırma merkezi, alternatif rehberi, yeni karşılaştırmalar
ve özellik sayfaları teslimin parçası. SEO, iki dil, iki tema ve
mobil deneyimi birlikte tamamla.

Önce görsel kompozisyonu tarayıcıda kur ve düzelt; sonra aynı
kaliteyi diğer sayfalara yay. Sadece build sonucuyla bitirme.
Sonuçta çalışan önizleme, ekran görüntüleri, sayfa envanteri ve
doğrulama sonuçları ver. Büyüme kampanyası veya yeni AI ürün
özelliği geliştirme. Commit, push ve deploy yapma.
```
