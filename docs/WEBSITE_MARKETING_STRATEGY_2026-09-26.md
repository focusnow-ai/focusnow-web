# FocusNow — Konumlandırma, web sitesi ve büyüme stratejisi

**Araştırma tarihi:** 26 Eylül 2026  
**Ürün referansı:** FocusNow Desktop v0.3.0  
**Durum:** Karar ve uygulama planı; henüz uygulanmış bir tasarım veya ürün yol haritası taahhüdü değildir.  
**Kapsam:** Hedef kullanıcı, rakipler, farklılaşma, AI ile çalışmanın geleceği, landing page, site mimarisi, dağıtım, fiyatlandırma, aktivasyon ve ölçüm.

Bu çalışma mevcut web sitesinin görünümünü başlangıç noktası kabul etmez. Ürünün bugün yapabildiklerinden, kullanıcı sorunlarından ve pazarın geldiği yerden hareket eder. Bu görevde yalnızca bu belge oluşturuldu; uygulama ve web sitesi değiştirilmedi.

**Okuma rehberi:** Ana teslim, web sitesini iyileştirecek araştırma ve tasarım kararlarıdır. Önce **1, 4, 6, 7, 9 ve 10. bölümleri** okuyarak öneriyi, rekabet gerekçesini, mesajı, landing page iskeletini ve site mimarisini değerlendirebilirsin. **8. bölüm** AI'nın geleceğine ilişkin ürün/iletişim araştırmasıdır. **11. bölüm ve 15. bölümdeki dağıtım/büyüme fazları**, araştırma sırasında büyük ölçüde tamamlandıkları için korunmuştur; sonraya bırakılabilir ve web sitesini iyileştirmenin ön koşulu değildir. Fiyat araştırması ve uzun vadeli ürün önerileri de ayrı karar konularıdır.

## 1. Önerilen ana karar

**FocusNow'ı önce bağımsız çalışan yazılımcılar, tasarımcılar ve dijital danışmanlar için; çalışma gününü otomatik kaydeden, o kayıtlardan müşteri saatlerini gözden geçirmeyi ve çalışma dökümü hazırlamayı kolaylaştıran bir ürün olarak konumlandıralım.**

Ana sayfanın taşıyacağı temel vaat:

> Müşteri saatlerini tahmine bırakma.

Bu vaadin ürün içindeki karşılığı:

```text
Çalışma günün otomatik kaydedilir
                ↓
Hangi kayıtların hangi işe ait olduğunu gözden geçirirsin
                ↓
Müşteri ve projeye bağlı zaman kartları oluşturursun
                ↓
Çalışma dökümünü hazırlarsın; bir sonraki işi daha bilinçli planlarsın
```

**Ana sahnede gösterilecek özellik:** Kaydedilmiş etkinliklerden zaman kartına ve çalışma dökümüne giden akış. Özellikle henüz zaman kartına alınmamış kayıtları görme ve değerlendirme anı.

**Destekleyen ikinci değer:** Odak oturumları, görevler ve çalışma alışkanlıkları. Bunlar ürünün günlük kullanımını destekler ve FocusNow markasıyla doğal bağ kurar.

**Gelecek yönü:** Kullanıcının onayıyla çalışan, geçmiş iş kayıtlarını açıklayabilen ve insan emeğiyle AI'ya devredilen işi birbirine karıştırmayan bir çalışma asistanı. Bu yön bugün satılan özellik gibi sunulmamalı.

Bu öneri doğrulanmış ürün-pazar uyumu değildir. Mevcut yetenekler ve erişilebilir müşteri problemi üzerinden seçilmiş, araştırmayla sınanacak en güçlü başlangıç hipotezidir. En önemli başarı ölçüsü, ziyaretçinin ürünü indirip sonraki haftalarda gerçek iş kayıtlarını düzenlemek için tekrar kullanmasıdır.

### Web sitesi için ilk kararlar

1. Ana ziyaretçi olarak bağımsız profesyoneli ve müşteri saati problemini seçmek.
2. İlk ekranda hangi sonucun vaat edildiğini ve kullanıcının hangi adımları yapacağını netleştirmek.
3. Bu vaadi tek bir gerçek ürün akışıyla göstermek.
4. Mobil/masaüstü indirme, veri açıklaması ve erken erişim koşullarını tamamlamak.
5. Sayfa mimarisi, iki dil, erişilebilirlik, hız ve arama görünürlüğünü birlikte tasarlamak.

### Sonraki aşama için korunan 90 günlük çerçeve

1. Hangi kullanıcıların zamanlarını yeniden kurmakta gerçekten zorlandığını doğrulamak.
2. Ana akışın anlaşılır ve tekrar kullanılabilir olduğunu göstermek.
3. Tek bir güçlü landing page, çalışır indirme yolculuğu ve güven açıklaması hazırlamak.
4. Kullanım örnekleri ve karşılaştırmalarla doğru ziyaretçiyi getirmek.
5. Kalıcı kullanım ve ödeme isteğini gördükten sonra ücretli büyümeyi denemek.

## 2. Araştırmanın kapsamı ve belirsizlikler

### Kullanılan kanıtlar

- Ürün yetenekleri için [APP_REALITY.md](APP_REALITY.md) ve [Desktop v0.3.0 sürüm notları](../../Desktop/CHANGELOG.md).
- Rakiplerin resmî ürün, özellik, yardım ve fiyatlandırma sayfaları.
- Linear, Raycast, Timely ve Rize ana sayfalarının tarayıcıda görsel incelemesi.
- AI ile çalışma konusunda METR araştırmaları ve Harvard Business School kaynakları.
- Web mimarisi, performans, erişilebilirlik ve arama görünürlüğü için resmî teknik belgeler.

Rakiplerin sayfalarındaki verimlilik ve gelir artışı iddiaları, bağımsız olarak doğrulanmış sonuçlar kabul edilmedi. Ürünlerin kendi anlattıkları yetenekler incelendi; tüm rakipler satın alınıp baştan sona test edilmedi. Görsel inceleme de bu sitelerin dönüşüm oranlarını bildiğimiz anlamına gelmez.

### Bilinmeyenler

Aktif kullanıcı sayısı, haftalık geri dönüş, trafik dağılımı, indirmeden kuruluma geçiş, faturalandırma kullanım oranı, müşteri edinme maliyeti ve AI maliyetleri bu çalışma için ölçülmedi. Arama hacmi veya anahtar kelime zorluğu satın alınmış bir veri aracıyla doğrulanmadı. Belgedeki hedef segmentler, fiyat seçenekleri ve karar eşikleri bu nedenle **öneri/deney hipotezidir**.

Belge boyunca şu ayrım korunur:

| Tür | Anlamı |
| --- | --- |
| Bugün mevcut | Ürün kaynaklarında doğrulanabilen özellik |
| Pazar gözlemi | Tarihli resmî rakip kaynağında görülen anlatım veya yetenek |
| Stratejik çıkarım | Kaynaklardan hareketle FocusNow için önerilen karar |
| Gelecek önerisi | Ürün geliştirmesi ve ayrıca doğrulama gerektiren fikir |

## 3. Ürünün bugün satabileceği değer

| Mevcut yetenek | Kullanıcının elde ettiği sonuç | İletişimde sınır |
| --- | --- | --- |
| macOS ve Windows'ta uygulama, pencere başlığı ve tarayıcı alan adı takibi | Günü sonradan hatırlamak için kayıt | Bilgisayar dışındaki bütün çalışmayı yakalamaz |
| Kaydedilmiş etkinliklerden zaman kartı | Hatırlanan işin projeye ve müşteriye bağlanması | Projeyi bugün kullanıcı seçer; AI otomatik atama yapmaz |
| Coverage ve henüz zaman kartına alınmamış kayıtlar | İncelenecek eksik kayıtları görme | Bu sürenin tamamı faturalanabilir veya kayıp gelir değildir |
| Müşteri, proje, görev, etiket, oran ve para birimi | İş kayıtlarını ticari bağlamda düzenleme | Takım yönetimi ve tam muhasebe sistemi yok |
| Çalışma dökümü, PDF/CSV, kapanan/faturalanan kaydın kilitlenmesi | Müşteriye sunulabilecek tutarlı bir özet hazırlama | Vergi faturası kesmez, ödeme toplamaz; hukuki ispat garantisi vermez |
| Pomodoro, Deep Work, görev bağlantısı ve müzik | Çalışmaya başlama ve sürdürme ritüeli | Dikkat dağıtan siteleri engellemez |
| AI günlük raporu | Tamamlanan günün özetini ve önerilerini okuma | Canlı koç, otomatik proje yöneticisi veya nedensel verimlilik ölçümü değildir |
| Yerel veri, çevrimdışı çalışma, oturum açıkken şifreli senkronizasyon | Günlük kullanımın bağlantıya daha az bağımlı olması | Tamamen cihazda kalan sistem veya uçtan uca şifreleme iddiası yapılmamalı |
| Ücretsiz temel takip | Deneme ve düzenli kullanım için düşük giriş engeli | Zaman kartları/faturalandırma erken erişimde ücretsiz; kalıcı ücretsiz vaat edilmez |

Kaynak: [ürünün güncel gerçekleri](APP_REALITY.md).

**Dikkat edilmesi gereken kavramsal ayrım:** Etkinlik kaydı, çalışma süresi, faturalanabilir süre, dikkat kalitesi ve üretilen değer farklı şeylerdir. FocusNow bunların hepsini tek bir yüzdeyle ölçüyormuş gibi konuşmamalı. Odak Puanı, uygulama kategorilerine dayanan bir göstergedir; kişinin ne kadar iyi iş çıkardığının ölçüsü değildir.

## 4. Rekabet: Hangi alanlar artık kalabalık?

### 4.1 Doğrudan ve yakın rakipler

Tabloda “fırsat” sütunu bizim stratejik çıkarımımızdır; rakibin söz konusu işi yapamadığı anlamına gelmez.

| Ürün | Bugün öne çıkardığı yaklaşım | FocusNow için anlamı ve sınanacak fırsat |
| --- | --- | --- |
| **Rize** | Otomatik takip, AI ile proje atama, ekip görünürlüğü ve müşteri/proje ekonomisi. Odak araçları da var. | En yakın geniş kapsamlı rakip. Sadece “otomatik + odak + müşteri” birleşimiyle benzersizlik iddia edemeyiz. Tek başına çalışan kişinin kolay başlangıcı ve sade kayıt inceleme akışı sınanmalı. [Ürün](https://rize.io/), [proje takibi](https://www.rize.io/features/project-tracking) |
| **Timely** | Otomatik yakalama, AI ile zaman çizelgesi hazırlama ve kullanıcı onayı; ajans/danışmanlık odaklı ticari anlatım. | Kullanıcı onayı ve AI zaman çizelgesi de yeni kategori değildir. AI atama henüz bizde yok; bugünkü ürünü tam otomatik diye konumlandırmak bu rakibe karşı beklenti açığı yaratır. [Ürün](https://www.timely.com/), [gizlilik](https://www.timely.com/privacy/) |
| **Memtime** | Bilgisayardaki etkinlikleri hatırlamaya yardımcı olma, yerel etkinlik verisi ve proje yazılımlarıyla bağlantılar. | “Önce kaydet, sonra düzenle” konusunda güçlü rakip. Tamamen yerelde kalan etkinlik verisi açısından daha iddialı bir modeli var. FocusNow'ın senkronizasyonu avantaj ve veri paylaşımı tercihi birlikte anlatılmalı. [Ürün](https://www.memtime.com/), [veri modeli](https://www.memtime.com/features/built-for-privacy) |
| **Timing** | Mac'te ayrıntılı otomatik takip, etkinlikleri gruplayan AI özetleri ve kurallar. MCP üzerinden AI araçlarının verilere erişimi de mevcut. | Mac kullanıcılarında olgun rakip. Windows desteği somut bir fark; “AI ile zamanın hakkında konuş” fikri tek başına gelecekteki rekabet üstünlüğü olamaz. [Ürün](https://timingapp.com/), [MCP](https://timingapp.com/help/mcp) |
| **RescueTime** | Odak ve Timesheets paketleri; otomatik etkinlik, öneri inceleme, müşteri/proje ve faturalanabilir oranlar. | Eski “yalnızca kişisel verimlilik” algısıyla karşılaştırma yapılmamalı. FocusNow'ın odak ve iş kayıtlarını birleştirmesi burada da ortak özellik. [Paket ve özellikler](https://www.rescuetime.com/pricing) |
| **Toggl** | Zaman takibi, ekip raporları, proje ekonomisi ve çoklu platform. Arka planda otomatik takip de anlatılıyor. | “Toggl sadece elle kronometre çalıştırır” iddiası yanlış olur. FocusNow'ın gerçek farkını aynı işi tamamlatan bir karşılaştırmayla göstermeliyiz. [Ürün](https://toggl.com/), [planlar](https://toggl.com/pricing) |
| **Harvest** | Zaman takibinden faturalandırma ve ödemeye giden işletme akışı. Ücretsiz giriş ve kullanıma bağlı ek ücretler içeren planlar. | Müşterinin asıl istediği bazen takip değil tahsilattır. FocusNow'ın çalışma dökümü sınırı açık olmalı; muhasebe aracının yanına yerleşmek olası stratejidir. [Planlar ve kapsam](https://www.getharvest.com/pricing) |
| **Clockify** | Geniş zaman/işletme yönetimi paketi. Auto Tracker, yerelde etkinlik kaydı ve kayıtlardan zaman girdisi oluşturma sunuyor. | En önemli karşı kanıt: öne çıkarmayı düşündüğümüz kayıt → zaman girdisi mekanizması burada da var. Tercih nedeni ancak kullanım deneyimi, hedef kişi ve sunulan bütünlükle kanıtlanabilir. [Auto Tracker](https://clockify.me/features/auto-tracker) |
| **ActivityWatch** | Ücretsiz, açık kaynak, cihazda kalan otomatik etkinlik takibi; birden fazla platform. | “Ücretsiz ve gizli otomatik takip” sahiplenilemez. Ticari kayıt hazırlama ve anlaşılır günlük kullanım karşılaştırılmalı. Açık kaynak olma iddiası da kendi lisansımız doğrulanmadan kullanılmamalı. [Ürün](https://activitywatch.net/), [gizlilik](https://docs.activitywatch.net/en/latest/privacy.html) |
| **WakaTime** | Editör temelli geliştirici ölçümü; insan ve AI kullanımına ilişkin kodlama istatistikleri. | Geliştirici segmentinde yalnızca “AI çağında çalışma ölçümü” de boş alan değil. FocusNow'ın uygulamalar arasında müşteri işi ve gün bütünü yaklaşımı sınanabilir. [Ürün gerekçesi](https://wakatime.com/why-wakatime) |
| **Motion** | AI görev/proje planlama, takvim ve çalışma organizasyonu. | Kullanıcının işi gününü planlamaksa farklı bir kategoriyle yarışırız. FocusNow'ın bugünkü gücü gerçekleşen işi gözden geçirmektir. [Ürün kapsamı](https://www.usemotion.com/pricing) |
| **Reclaim** | Takvimde odak, görev ve alışkanlıkları düzenleyen AI/agent yaklaşımı. | Planlanan zaman ile gerçekleşen zaman arasındaki bağlantı gelecekte bir entegrasyon fırsatı olabilir. Bugün harici takvim entegrasyonumuz yok. [Reclaim 2.0](https://help.reclaim.ai/en/articles/14846468-reclaim-ai-2-0-overview) |

### 4.2 Fiyatlardan çıkarılabilecekler

Aşağıdaki rakamlar 26 Eylül 2026'da resmî sayfalarda görülen **USD liste fiyatlarıdır**. Yıllık ödeme koşulu ayrıca belirtilmiştir; vergi, bölge, promosyon, AI kotası ve ek kullanım ücretleri nedeniyle toplam maliyet değişebilir. Paketler birbirinin eşdeğeri değildir.

| Ürün / örnek plan | Görülen fiyat | Kaynak ve koşul |
| --- | --- | --- |
| Rize Basic / Pro | 9,99 / 23,99 USD ay eşdeğeri | Yıllık faturalandırma. [Fiyatlandırma](https://rize.io/pricing) |
| Timely Starter | 9 USD ay eşdeğeri veya aylık 11 USD | Yıllık / aylık ödeme; proje ve kullanıcı sınırları var. [Fiyatlandırma](https://www.timely.com/pricing/) |
| Memtime Basic | 14 USD ay eşdeğeri | Yıllık ödeme; farklı taahhüt sürelerinde farklı fiyatlar var. [Fiyatlandırma](https://www.memtime.com/pricing) |
| RescueTime Solo / Solo+ | 7 / 12 USD ay eşdeğeri | Yıllık ödeme; ikinci paket Timesheets içeriyor. [Fiyatlandırma](https://www.rescuetime.com/pricing) |
| Harvest Free / Teams | 0 / başlangıç 9 USD koltuk başına ay eşdeğeri | Teams yıllık ödeme; kullanım ekleri var. Free 1 kişi ve 2 proje. [Fiyatlandırma](https://www.getharvest.com/pricing) |

Rize sayfasındaki kartlar özellik ayrımı gösterirken açıklama metni planların yalnız AI kredisiyle ayrıldığını da söylüyor. Bu iç tutarsızlık nedeniyle ayrıntılı paket karşılaştırması yayımlanmadan önce tekrar doğrulama gerekir. Toggl ve Timing gibi dinamik fiyat tablolarında görünürlük/seçili dönem tam net değilse karşılaştırma tablosuna ezberden rakam eklemeyelim.

**Çıkarım:** Ücretsiz temel ürün iyi bir giriş kapısı olabilir; yalnız düşük fiyat üzerine marka kurmak zayıf kalır. Pro'nun satın alma gerekçesi, müşterinin işini düzenli kapatmasına sağladığı fayda olmalı. “En ucuz” iddiası hem çabuk eskir hem de ürünün ticari değerini aşağı çekebilir.

### 4.3 Artık tek başına fark sayılmayacak başlıklar

- Otomatik uygulama ve site takibi.
- Pomodoro veya odak oturumu.
- AI günlük özeti.
- “Privacy-first” yazısı.
- Kayıtlardan zaman girdisi oluşturma.
- Proje, müşteri ve faturalandırılabilir süre.
- AI sohbeti veya MCP bağlantısı.

Bu özellikler gerekli olabilir. Üstünlük, belirli bir kullanıcının işini ne kadar az kurulum, düzeltme ve belirsizlikle tamamladığımızda aranmalı.

## 5. Kimin için başlamalıyız?

### 5.1 İlk hedef kullanıcı

**Birden fazla müşteriye bilgisayar üzerinden hizmet veren bağımsız profesyonel.** İlk araştırma grubu olarak freelance geliştirici, ürün/UI tasarımcısı ve teknik/dijital danışman öneriyorum.

Bu kişide aranacak davranışlar:

- Gün içinde müşteri ve araç değiştiriyor.
- Süreyi gün sonunda veya hafta sonunda yeniden kuruyor.
- Saatlik, retainer veya sabit fiyatlı işler yapıyor.
- Proje yönetimi ve muhasebe araçları olabilir; eksik olan gerçekleşen işin güvenilir kaydı.
- Ürün seçimini kendisi yapabiliyor; satın alma için kurumsal sürece ihtiyacı yok.

Bu tanım, “üretken olmak isteyen herkes” tanımından daha iyi araştırılabilir ve daha somut mesaj üretir.

### 5.2 Segment öncelikleri

| Segment | Öncelik | Gerekçe | İlerlemek için gereken kanıt |
| --- | --- | --- | --- |
| Bağımsız geliştirici/tasarımcı/danışman | İlk | Mevcut kayıt ve müşteri akışına uyum, doğrudan erişim | İkinci haftada tekrar kayıt inceleme ve çıktı kullanımı |
| Tek kişilik küçük stüdyo / danışmanlık işletmesi | İkinci | Ticari sonuç ve ödeme ihtiyacı daha görünür olabilir | Kayıt inceleme, çalışma dökümü ve düzenli kullanım |
| Maaşlı bilgi çalışanı / odak arayan kişi | Destekleyici | Ücretsiz takip ve odak araçlarından fayda alabilir | Müşteri özellikleri olmadan kalıcı kullanım |
| Öğrenci | Daha sonra | Erişimi kolay olabilir; gelir hipotezi daha zayıf | Organik talep ve düşük destek maliyeti |
| Ekip yöneticisi / ajans | Şimdilik araştırma | Pazar büyük görünebilir, ancak ortak alan/rol/yetki eksik | Aynı sorunu yaşayan tekrarlı talep ve ayrı ürün kararı |
| Hukuk, sağlık gibi hassas bağlamlar | İlk kampanya dışında | Veri, sözleşme ve iş akışı beklentileri farklı | Özel gereksinimler ve güven incelemesi |

Coğrafya önerisi: İlk ticari deneyler İngilizce çalışan uluslararası bağımsız profesyonellerde; Türkçe, doğrudan kullanıcı araştırması ve yerel topluluk erişimi için eşzamanlı kanal. Dil önceliği gerçek aktivasyon ve destek yüküyle güncellenmeli. Uygulamanın beş dil desteklemesi, web sitesini hemen beş dile yaymayı gerektirmez.

### 5.3 Kullanıcının satın aldığı işler

1. **Haftayı kapatma:** “Cuma günü hangi müşteriye ne kadar çalıştığımı hatırlayabileyim.”
2. **Müşteriye açıklama:** “Çalışma dökümündeki süreyi kendi kayıtlarımla kontrol edebileyim.”
3. **Bir sonraki işi tahmin etme:** “Benzer işin bana neye mal olduğunu daha iyi anlayabileyim.”
4. **Dikkatini koruma:** “Çalışmaya başlayıp günü dağılmadan sürdürebileyim.”

İlk iki iş bugünkü pazarlama omurgası. Üçüncüsü mevcut verilerle kısmen desteklenebilir; otomatik fiyat önerisi ve gerçek kâr hesabı henüz geliştirme gerektirir. Dördüncüsü günlük kullanım desteğidir.

## 6. Farklılaşma ve konumlandırma

### 6.1 Üç olası yönün değerlendirmesi

| Yön | Güçlü taraf | Riski | Karar |
| --- | --- | --- | --- |
| Herkes için ücretsiz odak/verimlilik uygulaması | Geniş anlaşılabilirlik, düşük giriş engeli | Kalabalık kategori, ticari değer dağılabilir | Destekleyici ürün yolu |
| Bağımsız profesyonelin çalışma kaydı ve müşteri saatleri | Somut haftalık problem, mevcut v0.3 akışına yakınlık | Rakipler güçlü; “daha kolay” kanıtlanmalı | İlk ana konumlandırma |
| AI çağının insan ve ajan çalışma asistanı | Gelecek için anlamlı ürün yönü | Bugünkü ürün bu kapsamı karşılamıyor; kategori de boş değil | Araştırma ve sınırlı pilot |

### 6.2 Sahiplenmeye çalışacağımız deneyim

**“Gününü kaybetmeden iş kayıtlarını kapat.”**

Bu, tekil özellik sahipliği değil; şu deneyim sözüdür:

- Gün içinde sürekli takip davranışı istemeyen otomatik kayıt.
- Gün sonunda kullanıcının neyi değerlendireceğini gösteren açık akış.
- Müşteriye atanmış işin hangi kayıtlardan geldiğini içeride görebilme.
- Paylaşılacak çalışma dökümünü gözden geçirerek hazırlama.
- Odaklanma ile iş hesabını aynı günlük ritimde kullanabilme.

“Eksik faturalanan saatleri geri kazan” ifadesi ancak kullanıcı araştırması ve gerçek örneklerle desteklenirse güçlenir. Bugün daha doğru ifade: **“Henüz zaman kartına almadığın çalışma kayıtlarını gözden geçir.”**

### 6.3 Fark iddiaları için kanıt planı

| Hipotez | Nasıl sınanacak? | Ne zaman kullanılabilir? |
| --- | --- | --- |
| Kurulum ve ilk kayıt kolay | Yeni kullanıcının yardımsız kurulumunu gözlemle | Gerçek süre dağılımı bilindiğinde |
| Haftalık inceleme daha kolay | Aynı tür işte mevcut yöntemle karşılaştır; inceleme süresi, hatalar, yardım ihtiyacını ölç | Tek anekdot yerine tekrarlanan sonuç görüldüğünde |
| Kayıtlar unutulan işi hatırlatıyor | Kullanıcının eklediği kaydın nedenini sor; faturalanabilirliği ayrıca doğrula | Kullanıcı onaylı vaka ve açık yöntemle |
| Çalışma dökümü faydalı | Gerçek süreçte kullanımı ve tekrar kullanımını izle | PDF indirme sayısını aşan kanıt oluştuğunda |
| Odak ile müşteri işi aynı üründe değerli | İki akışı da kullananların gerekçelerini ve geri dönüşünü incele | Sadece özellik çokluğuna dayanmadan |

Uzun vadeli savunulabilirlik adayları: tutarlı kayıt kalitesi, düzeltmelerden öğrenen kişisel kurallar, sorunsuz haftalık iş kapatma, hedef mesleklerde güven ve iyi destek. Bunlar henüz kanıtlanmış üstünlükler değildir. Kullanıcı verisini dışarı çıkarmayı zorlaştırmak bir avantaj stratejisi olmamalı.

## 7. Mesaj, marka ve ana sayfada anlatılacak hikâye

### 7.1 Mesaj sırası

1. **Sorun:** Müşteri saatlerini hafızadan yeniden kurmak.
2. **Sonuç:** İncelenmiş, müşteriye bağlanmış iş kayıtları.
3. **Mekanizma:** Otomatik etkinlik kaydı; kullanıcı seçimi ve kontrolü.
4. **Kanıt:** Aynı örnek günün kayıttan döküme gidişi.
5. **Güven:** Neyin kaydedildiği, nereye gittiği ve kimin karar verdiği.
6. **Teklif:** Ücretsiz temel takip; zaman kartları/faturalandırmada açık erken erişim koşulları.

### 7.2 İlk test için metin yönü

**Kategori satırı:** Automatic time tracking for independent professionals.

**Ana başlık adayı:** Client hours, without the guesswork.

**Açıklama adayı:** FocusNow records your app and website activity on Mac and Windows. Review your day, assign work to clients, and prepare a clear work statement.

**Ana eylem:** Download for Mac / Get it for Windows. İşletim sistemi tahmini hatalıysa diğer platform da tek tık uzaklıkta kalmalı.

**İkinci eylem:** See a workday become a work statement.

**Güven satırı:** Free core tracking. No screenshots or keystrokes. Timecards and billing are free during early access.

Türkçe uyarlama:

> **Müşteri saatlerini tahmine bırakma.**  
> FocusNow uygulama ve site kullanımını otomatik kaydeder. Gününü gözden geçir, işleri müşterilere bağla ve anlaşılır bir çalışma dökümü hazırla.

Bunlar yayıma hazır kesin başlıklar değil, test edilecek metin taslaklarıdır. Kullanıcı mesajı “otomatik fatura kesiyor” diye anlıyorsa açıklama başarısızdır ve düzeltilmelidir.

Alternatifler:

| Mesaj | Hedef niyet | Başarı ölçüsü |
| --- | --- | --- |
| “Client hours, without the guesswork.” | Müşteri işi ve haftalık kayıt | İlk gerçek zaman kartı ve ikinci hafta geri dönüş |
| “Know where your workday went.” | Kişisel farkındalık | İlk gün inceleme ve düzenli kullanım |
| “A clearer record of your work.” | Gizlilik ve kayıt kontrolü | Güven açıklamasının anlaşılması ve aktivasyon |

“AI-powered” ana başlığın önüne geçmemeli. AI, belirli işi kolaylaştırdığı yerde isimlendirilmeli: bugün günlük özet; ileride onay bekleyen proje önerileri gibi.

### 7.3 Marka

FocusNow ismini korumak ilk tercih. İsim odaklanmayla güçlü bağ kuruyor; kategori açıklaması ticari kullanımın anlaşılmasını tamamlayabilir. Erken aşamada yeniden isimlendirme, alan adı ve tanınırlık maliyeti doğurur. Mesaj testlerinde isim sürekli yanlış beklenti yaratırsa ayrıca değerlendirilir.

Dil sakin, somut ve yargılamayan olmalı. “Bugün yalnızca %42 üretkendin” yerine “Gününün önemli bölümü iletişim uygulamalarında geçti; bunun ne kadarı müşteri işiydi?” türünde bağlam isteyen anlatım tercih edilmeli. Sağlık, ADHD veya tükenmişlik tedavisi vaadi kurulmaz.

## 8. AI zaman takibini nasıl değiştirebilir?

### 8.1 Gözlenen değişim ile gelecek tahminini ayıralım

AI ile sınıflandırma, özet ve onay akışı pazarda zaten mevcut. Timely'nin ana anlatımı otomatik zaman çizelgesi; Timing'in MCP erişimi ise AI araçlarının zaman verisini kullanmasına izin veriyor. Bu yüzden “AI eklemek” tek başına yeni kategori yaratmaz. [Timely](https://www.timely.com/), [Timing MCP](https://timingapp.com/help/mcp).

Daha temel değişim, bir kişinin birden fazla AI işini eşzamanlı yürütmesiyle **ekranda aktif geçirilen süre, geçen toplam süre ve ortaya çıkan işin birbirinden ayrılmasıdır**. METR'nin Şubat 2026 güncellemesi, paralel ajanlarla çalışan geliştiricilerde görev başına süreyi ölçmenin zorlaştığını açıkça belirtiyor. Aynı çalışma, seçim yanlılığı nedeniyle sonuçlarının güncel hızlanmayı güvenilir biçimde tahmin etmediğini de söylüyor. [METR, 24 Şubat 2026](https://metr.org/blog/2026-02-24-uplift-update/).

Araştırmaların tek bir “AI herkesi şu kadar hızlandırır” sonucuna indirgenmemesi gerekir:

- METR'nin erken 2025 deneyinde, kendi olgun depolarında çalışan deneyimli geliştiriciler AI erişimiyle ortalama %19 daha uzun sürede tamamladı. Bu belirli katılımcı, araç dönemi ve görev türüne ait bir sonuçtur. [2025 deneyinin kapsamı](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/).
- Harvard/BCG çalışması, AI'nın yetenek alanındaki danışmanlık görevlerinde iyileşme; bu alanın dışındaki görevde ise doğruluk kaybı buldu. İşin türü ve insan-AI iş bölümü önemlidir. [2026'da yayımlanan makale](https://www.hbs.edu/ris/Publication%20Files/dell-acqua-et-al-2026-navigating-the-jagged-technological-frontier_5c589c8c-fbb5-458f-b285-c944746cd717.pdf).
- METR'nin Mayıs 2026 anketi, algılanan hız artışı ile üretilen değer artışını ayrı ölçüyor; öz bildirimin ve örneklem seçiminin sınırlamalarını vurguluyor. Anket sonucu, nedensel tasarruf ölçümü değildir. [Mayıs 2026 araştırması](https://metr.org/blog/2026-05-11-ai-usage-survey/).

**FocusNow için çıkarım:** Gelecekteki değer önerisi, daha çok dakika kaydetmekten; kullanıcının hangi işe ne kadar dikkat verdiğini, neyi devrettiğini ve neyi tamamladığını açıklamaya doğru genişleyebilir. Bunun hızına veya ticari karşılığına ilişkin kesin tahminimiz yok.

### 8.2 Gelecekte ölçülmesi gereken ayrı boyutlar

| Boyut | Örnek | Bugün ölçülebilirlik / gelecek gereksinimi |
| --- | --- | --- |
| İnsan etkinliği | 25 dakika kod inceleme | Mevcut etkinlik kaydı bir yaklaşım sağlar; başlık tek başına anlamı kesinleştirmez |
| Göreve ayrılan insan emeği | Okuma, düşünme, telefon, inceleme | Kullanıcı düzeltmesi ve bilgisayar dışı süre girişi gerekir |
| AI görevinin geçen süresi | Ajanın arka planda 12 dakika çalışması | Açık entegrasyon/olay verisi gerekir; ekran takibinden çıkarılamaz |
| AI kullanım maliyeti | Sağlayıcının raporladığı görev maliyeti | Yetkili maliyet verisi gerekir; süreyle tahmin edilmemeli |
| Sonuç | İncelenmiş tasarım, kabul edilmiş teslim, kapanan görev | Kullanıcı onayı veya görev/çıktı entegrasyonu gerekir |
| Ticari karşılık | Sözleşmeye göre ücretlendirilen iş | Kullanıcı ve müşteri anlaşması belirler; AI süresi otomatik faturalanmaz |

Örnek: İki ajan 20'şer dakika çalışırken kullanıcı 15 dakika başka bir işe bakıp 5 dakika sonuçları inceliyor. Bunu “60 dakika insan çalışması” diye toplamak yanlış olur. Paralel ajan süreleri, insan emeği ve duvar saati ayrı kalmalıdır.

### 8.3 Aşamalı AI ürün önerisi

| Aşama | Önerilen iş | Kullanıcı değeri | Yayına geçmeden ölçülecek |
| --- | --- | --- | --- |
| **Bugün** | Mevcut AI günlük raporunu anlaşılır tanıt | Günü anlamak | Özet faydası, dayandığı verinin doğruluğu |
| **A — İlk aday** | Kural ve AI yardımıyla proje/müşteri önerisi; kullanıcı onayı | Kayıt düzenleme yükünü azaltmak | Kabul/düzeltme oranı, inceleme süresi, yanlış müşteriye atama |
| **B** | Seçilmiş kayıtlardan zaman kartı açıklama taslağı | Müşteriye anlaşılır iş açıklaması hazırlamak | Kullanıcı düzeltmesi, uydurma faaliyet, hassas bilgi sızıntısı |
| **C** | Kaynak kayıtlara bağlantı veren haftalık sorular ve özet | “Bu müşteriye bu hafta ne yaptım?” sorusunu yanıtlamak | Kaynak kapsamı, eksik veriyi söyleme, fayda |
| **D** | Kullanıcının onayladığı benzer işlerden tahmin desteği | Bir sonraki işte daha gerçekçi süre aralığı | Tahmin hatası, örnek sayısı, işlerin karşılaştırılabilirliği |
| **E — Araştırma** | İnsan + AI görevlerinin ayrı kaydı ve maliyet bağlamı | AI ile çalışma biçimini anlamak | Entegrasyon talebi, veri güvenilirliği, tekrar kullanım |

Bu sıra takvim vaadi değildir. A aşaması kullanıcı ihtiyacını çözmüyorsa, sohbet arayüzüne veya çok sayıda entegrasyona geçmek için gerekçe oluşmaz.

### 8.4 AI güveni ürünün parçası olmalı

- Süre ve parasal toplamlar deterministik hesaplanmalı; model aritmetiğine bırakılmamalı.
- Önerinin hangi kayıtlara dayandığı gösterilmeli; kayıt yoksa sistem bunu söylemeli.
- “Eminlik” yüzdeleri ancak kalibrasyon verisi varsa kullanılmalı. Aksi halde “gözden geçir” gibi anlamlı durumlar tercih edilmeli.
- AI önerisi faturalanabilirlik kararı veya çalışma dökümünü kesinleştirme yetkisi almamalı.
- Proje ataması/düzenleme gibi işlemler önizleme, onay ve geri alma içermeli.
- Pencere başlıkları ve harici içerikler komut değil veri kabul edilmeli; model araç yetkileri bundan etkilenmemeli.
- MCP/API düşünülürse ilk sürüm dar kapsamlı okuma; yazma eylemleri daha sonra, ayrı izin ve kayıtla değerlendirilmelidir.
- Buluta gönderilen alanlar ve yerelde kalan alanlar sade bir tabloda gösterilmeli; seçilmeyen özel kayıtlar AI bağlamına girmemeli.

Gelecekteki avantaj, chatbotun varlığından çok **kullanıcının güvendiği öneri ve düzeltme döngüsü** olabilir. WakaTime'ın insan/AI kodlama ölçümü ve Timing'in MCP desteği, bu alanın da rekabete açık olduğunu gösteriyor. [WakaTime](https://wakatime.com/why-wakatime), [Timing](https://timingapp.com/help/mcp).

### 8.5 Üç gelecek senaryosu

| Senaryo | Etkisi | FocusNow'ın dayanıklı yaklaşımı |
| --- | --- | --- |
| AI çoğunlukla yardımcı araç olarak kalır | İnsan çalışma süresi hâlâ temel veri | Otomatik kayıt ve haftalık incelemeyi iyileştir |
| Ajanlara görev devri yaygınlaşır | Etkin ekran süresi işin tamamını açıklamaz | İnsan emeği, ajan çalışması ve sonuç bağlantısını ayrı kur |
| Saatlik ücret yerine çıktı bazlı iş artar | Daha çok saat faturalamak daha az merkezi olabilir | Gerçek emek/maliyet, tahmin ve kapsam değişimini anlamaya odaklan |

Bu senaryolarda ortak kalan ihtiyaç, kişinin yaptığı işi ve kararlarını anlayabilmesidir. “Daha fazla saat faturala” üzerine kurulu tek bir marka vaadi bu esnekliği azaltır.

## 9. Landing page: İlk bakıştan kuruluma

### 9.1 Sayfanın görevi

Ziyaretçi ilk bakışta şu dört soruya cevap bulmalı:

1. Bu ürün hangi sorunumu çözüyor?
2. Bunu nasıl yapıyor ve benim hâlâ ne yapmam gerekiyor?
3. Bilgisayarımdan ne kaydediyor?
4. Ücretsiz başlayabilir miyim; benim işletim sistemimde çalışıyor mu?

Ana sayfa bütün ekranların eşit yer aldığı bir katalog olmamalı. Bir örnek gün üzerinden faydayı göstermeli; ayrıntılar ilgili sayfalarda bulunmalı.

### 9.2 Önerilen masaüstü iskeleti

```text
┌───────────────────────────────────────────────────────────┐
│ Logo    Nasıl çalışır · Kullanım · Fiyat · Rehber    İndir │
├───────────────────────────────────────────────────────────┤
│ Kategori + tek vaat          │ Etkinlik → zaman kartı      │
│ 2 satır açıklama             │ → çalışma dökümü            │
│ [Platforma göre indir]       │ kısa, anlaşılır ürün demosu │
│ [Örnek günü incele]          │                            │
│ Kayıt ve fiyat sınırları     │                            │
├───────────────────────────────────────────────────────────┤
│ 1. Çalış   →   2. Gözden geçir   →   3. Kaydını hazırla   │
├───────────────────────────────────────────────────────────┤
│ Aynı örnek gün: unutulan/atanmamış kayıtları değerlendirme │
├───────────────────────────────────────────────────────────┤
│ Somut çıktı: temiz zaman kartı + çalışma dökümü önizlemesi │
├───────────────────────────────────────────────────────────┤
│ Odaklanmayı destekleyen günlük araçlar                    │
├───────────────────────────────────────────────────────────┤
│ Verin nasıl işleniyor?                                    │
├───────────────────────────────────────────────────────────┤
│ Gerçek kullanıcı kanıtı veya dürüst ürün gösterimi         │
├───────────────────────────────────────────────────────────┤
│ Ücretsiz temel / erken erişim açıklaması                  │
├───────────────────────────────────────────────────────────┤
│ İtirazları yanıtlayan SSS + son indirme çağrısı             │
└───────────────────────────────────────────────────────────┘
```

Her bölümün kalması için ayrı bir kullanıcı sorusunu yanıtlaması gerekir. Aynı vaadi üç farklı kart grubunda tekrar etmek yerine sayfayı kısaltalım.

### 9.3 Bölüm bazında brief

| Bölüm | İçerik ve görsel | Amaç | Kontrol |
| --- | --- | --- | --- |
| İlk ekran | Tek başlık, kısa açıklama, 1 ana CTA, gerçek ürün akışı | Kategori ve faydayı anlamak | 5 saniyelik gösterim sonrası doğru anlatım |
| Nasıl çalışır | 3 adım; otomatik olan ve kullanıcıya kalan iş açık | Tam otomasyon yanılgısını önlemek | Kullanıcı manuel proje seçimini anlıyor mu? |
| Gün inceleme | Seçilebilir örnek etkinlikler ve atanmış kayıt | Kaydetmenin işe nasıl dönüştüğünü göstermek | Yardımsız örnek zaman kartı oluşturma |
| Çıktı | Hassas alanları içermeyen örnek çalışma dökümü | Somut sonuca ulaşmak | Kullanıcı bunu fatura sanıyor mu? |
| Odak | Görevle ilişkilendirilmiş tek odak oturumu | Günlük kullanımın ikinci nedeni | Ana ticari anlatımı dağıtmıyor mu? |
| Güven | Kaydedilen/kaydedilmeyen ve yerel/bulut ayrımı | Kurulum endişesini azaltmak | Kullanıcı veri akışını doğru anlatıyor mu? |
| Kanıt | İzinli kullanıcı hikâyesi; yoksa açıkça demo | Tercih için gerekçe vermek | Sayı ve alıntıların kaynağı var mı? |
| Teklif ve SSS | Ücretsiz kapsam, erken erişim, sistem gereksinimleri | İndirmeden önce belirsizliği çözmek | Beklenti ile ilk açılış örtüşüyor mu? |

### 9.4 Ürünün en güçlü gösterimi

**20–30 saniyelik, kurgusal bir iş gününden gerçek uygulama kaydı** hazırlayalım:

1. Aynı projeyle ilgili birkaç uygulama/başlık kaydı görünür.
2. Kullanıcı kayıtları seçer; proje ve açıklamayı kendisi belirler.
3. Zaman kartı oluşur; kaynak kayıt bağlantısı içeride görünür.
4. Çalışma dökümü hazırlanır ve çıktı önizlenir.

Süre bir pazarlama başarı iddiası değil, videonun hedef uzunluğudur. Kesilmiş/hızlandırılmış kısımlar kullanıcıya belirtilmeli. Demo verisi açıkça etiketlenmeli. Kayıt başlıklarının müşteriye otomatik aktarıldığı izlenimi verilmemeli; paylaşım profili gerçekten kontrol edilmeden “hiçbir özel bilgi çıkmaz” denmemeli.

Başlangıçta video ve üç açıklamalı görsel yeterli. İnteraktif tur ancak anlaşılabilirliği artırıyorsa eklenmeli. Tur yüklenmezse metin ve statik görsel aynı hikâyeyi anlatmalı.

### 9.5 Görsel yön

**Öneri:** Sakin, okunabilir, ürünü ve iş sonucunu öne çıkaran bir çalışma aracı estetiği.

- Nötr açık zemin, güçlü tipografi, sınırlı vurgu rengi. Koyu tema ayrıca tutarlı tasarlanmalı.
- Marka rengini başlıkların her kelimesine ve bütün arka plana yaymak yerine eylem ve önemli veri için kullanmak.
- Tam uygulama ekranını küçültmek yerine ilgili alanı okunabilir ölçekte göstermek; tam ekran açma seçeneği sunmak.
- Sayılar için düzgün hizalama; ticari kayıtlarda güven veren tablo ve boşluk düzeni.
- İkonlar ve kartlar bir işi açıklıyorsa kullanılmalı; sayfayı doldurmak için değil.
- Animasyon yalnızca kaydın zaman kartına dönüşmesi gibi nedensel ilişkiyi anlatsın.
- Otomatik ses, zorunlu video, scroll kilitleme ve uzun giriş animasyonu kullanılmasın.
- Stok ofis fotoğrafı yerine gerçek arayüz, çıktı ve izinli kullanıcı hikâyesi öncelikli olsun.

Görsel araştırmadan alınabilecek dersler:

| Referans | Gözlenen yararlı yaklaşım | FocusNow'a uyarlama |
| --- | --- | --- |
| [Linear](https://linear.app/) | Tipografi hiyerarşisi, belirgin kategori ve ürün bağlamı | Odaklı mesaj ve yüksek okunabilirlik; koyu temayı kopyalamak zorunlu değil |
| [Raycast](https://www.raycast.com/) | Hatırlanabilir ana vaat ve görünür platform indirmesi | İndirme kararını kolaylaştırmak; büyük görsel efektleri tekrar üretmek gerekmiyor |
| [Timely](https://www.timely.com/) | İş akışını adımlara ayırma ve iş sonucuyla bağlama | “Otomatik kayıt / kullanıcı incelemesi / çıktı” ayrımını görünür yapmak |
| [Rize](https://rize.io/) | Hedef alıcı ve ticari problemi ilk ekranda ifade etme | Bizim bağımsız profesyonel odağımızı aynı açıklıkla anlatmak |

Bunlar tasarım gözlemleridir; bu desenlerin FocusNow'da dönüşümü artıracağı test edilmelidir.

### 9.6 Mobil ziyaretçinin işi farklı

Mobil ziyaretçi masaüstü uygulamasını o anda kullanamaz. Bu nedenle:

- “Mac ve Windows için” ilk ekranda anlaşılmalı.
- Demosu mobilde izlenebilmeli; tablo yerine gerekli alanı gösteren yakın planlar kullanılmalı.
- “Bağlantıyı kopyala” gibi e-posta istemeyen bir devam yolu sunulmalı.
- İsteğe bağlı “indirme bağlantısını e-postayla gönder” ancak gerekli uçtan uca akış geliştirilirse eklenmeli; ürün bülteni aboneliğiyle birleştirilmemeli.
- Sabit alt CTA kullanılacaksa metni, çerez tercihlerini ve klavye odağını kapatmamalı.
- Yatay taşma olmamalı; on sekme veya küçük yazılı uygulama ekranı mobilin ana anlatımı yapılmamalı.

### 9.7 Önce cevaplanacak itirazlar

“Bilgisayarımı mı izliyor?”, “Müşterim hangi bilgileri görecek?”, “Takibi unutursam ne olur?”, “Proje otomatik mi seçiliyor?”, “Çalışma dökümü fatura mı?”, “Mevcut muhasebe aracımla kullanabilir miyim?”, “Ücretsiz kısım ne kadar sürecek?”, “İş bilgisayarıma kurabilir miyim?”

Son sorunun cevabı kuruluşun kurallarına bağlıdır; kişisel kurulum izni bütün iş bilgisayarları için varsayılmamalıdır.

## 10. Site bilgi mimarisi ve teknik yaklaşım

### 10.1 Sayfa yapısı

URL'ler aşağıda kavramsal isimlerdir; uygulama aşamasında mevcut adreslerin değerini koruyan eşleme ve gerektiğinde yönlendirme planı hazırlanmalı.

| Sayfa / grup | Çözdüğü soru | Öncelik |
| --- | --- | --- |
| Ana sayfa | “Bu benim için ne yapıyor?” | P0 |
| İndir / başlangıç | “Nasıl güvenle kurarım ve ilk sonucu görürüm?” | P0 |
| Nasıl çalışır / demo | “Otomatik olan ne, bana kalan ne?” | P0; önce ana sayfa içinde olabilir |
| Fiyatlandırma | “Şimdi ve ileride neye ücret ödeyeceğim?” | P0 |
| Gizlilik ve veri açıklaması | “Ne kaydediliyor, nereye gidiyor?” | P0 |
| Freelancer kullanım sayfası | “Benim müşteri işime uyuyor mu?” | P0 |
| Rehber ve sürüm notları | “Bu akışı nasıl tamamlarım, ürün güncel mi?” | P0 |
| Otomatik takip / zaman kartları / çalışma dökümleri | Özellik bazlı yüksek niyetli arama | P1 |
| Rize / Timely / Memtime karşılaştırmaları | “Mevcut alternatifime göre neden deneyeyim?” | P1; önce en çok sorulan iki rakip |
| Kullanıcı hikâyeleri | “Benim gibi biri fayda gördü mü?” | Gerçek veri oluşunca |
| Araçlar ve şablonlar | “Bugünkü işimi hemen kolaylaştırabilir miyim?” | P1; tek güçlü araçla başla |
| AI yaklaşımı / araştırma | “Ürün AI ile nereye gidiyor?” | P2; mevcut özellikten ayrılmış anlatım |
| Entegrasyonlar / ekipler | Bu ihtiyaca gerçekten cevap verebiliyor muyuz? | Ürün gelmeden pazarlama sayfası açma |

Navigasyon için üst sınır olarak 4–5 ana seçim öneriyorum. Bir kullanıcı türü için yazılmış sayfa sadece başlığı değiştirilmiş ana sayfa olmamalı; farklı problem, örnek kayıt ve çıktı içermeli.

### 10.2 Mimari kararı

**İlk tercih, mevcut Next.js altyapısında hızlı sunucu çıktısı ve az istemci JavaScript'iyle ilerlemek.** Sitenin sıfırdan düşünülmesi framework değiştirmeyi gerektirmez. Yeni framework veya CMS ancak somut bakım/performans/ekip ihtiyacını çözüyorsa seçilmeli.

Önerilen sınırlar:

- Ana içerik, metadata ve bağlantılar sunucudan anlamlı HTML olarak gelsin.
- Tema, menü, demo ve form gibi etkileşimler küçük istemci bileşenleri olsun.
- İndirilebilir dosya bilgisi ve sürüm gibi değişken verilerin ayrı güncelleme yolu bulunsun.
- İçerik ilk aşamada sürümlenebilir dosyalarda kalabilir; taslak, onay ve tarih alanları belli olsun.
- Teknik olmayan birden fazla editör, sık yayın veya karmaşık onay ihtiyacı doğarsa CMS değerlendirilsin.
- Önizleme ortamında her dil, platform CTA'sı, demo ve metadata incelenebilsin.
- URL değişiklikleri için eski → yeni eşleme, canonical, hreflang, sitemap ve 404 kontrolü birlikte ele alınsın.

Next.js'in sunucu/istemci ayrımı bu yaklaşımı destekler; uygulanacak API ayrıntıları kurulu sürümün belgelerinden doğrulanmalıdır. [Resmî Next.js rehberi](https://nextjs.org/docs/app/getting-started/server-and-client-components).

### 10.3 İçerik doğruluğu için küçük bir veri modeli

Her pazarlama iddiası için şu alanları tutmayı öneriyorum:

```text
claim_id · kullanıcıya söylenen vaat · mevcut/erken erişim/planlanan
ürün sürümü · doğrulama kaynağı · son kontrol tarihi
ilgili ekran/görsel · dil sürümleri · sorumlu kişi
```

Her görsel için de tema, dil, ürün sürümü, demo verisi ve hangi akışı kanıtladığı kayıtlı olsun. Böylece bir özellik değişince hangi sayfaların eskidiği görülebilir. İlk sürümde basit Markdown/JSON tablosu yeterli; ayrı yönetim paneli geliştirmek gerekmiyor.

### 10.4 Performans ve erişilebilirlik kabul koşulları

- Gerçek kullanıcı verisinde, mobil ve masaüstü ayrı değerlendirilerek 75. yüzdelikte **LCP ≤ 2,5 sn, INP ≤ 200 ms, CLS ≤ 0,1** hedeflensin. Düşük trafikte saha verisi oluşana kadar laboratuvar ölçümü yardımcıdır; onun yerine geçmez. [Core Web Vitals](https://web.dev/articles/vitals).
- İlk ekran görseli doğru boyutta ve öncelikli; alt bölüm görselleri ihtiyaç oldukça yüklensin.
- Video başlangıç yükünü belirlemesin; poster, oynat düğmesi, altyazı ve metin karşılığı bulunsun.
- Başlangıç için pazarlama rotasında toplam sıkıştırılmış istemci JS'ine yaklaşık 200 KB bütçe öneriyorum; bu bir sektör standardı değil, ölçümle gözden geçirilecek proje hedefidir.
- Yeni üçüncü taraf script için iş amacı, ölçülebilir katkı ve yük maliyeti olsun.
- WCAG 2.2 AA hedefi: klavyeyle kullanım, görünür odak, anlaşılır etiket, kontrast ve odağı kapatmayan sabit alanlar. Minimum hedef boyutu standardı 24×24 CSS piksel ve istisnalarıdır; dokunma rahatlığı için ana kontrollerde 44×44 tasarım hedeflenebilir. [WCAG 2.2](https://www.w3.org/TR/WCAG22/).
- Hareket azaltma tercihi desteklensin; animasyon kapalıyken bütün bilgi görünür olsun.
- EN/TR içerik uzunlukları, açık/koyu tema ve 390/768/1024/1280/1536 genişlikleri kabul matrisinde yer alsın.

### 10.5 Arama ve AI yanıtlarında bulunabilirlik

Google, AI Overviews/AI Mode için mevcut SEO temellerinin geçerli olduğunu, özel bir AI dosyası veya ayrı schema zorunluluğu olmadığını belirtiyor. Bu nedenle `llms.txt` gibi bir dosyayı büyüme stratejisinin merkezi veya görünürlük garantisi yapmayalım. [Google'ın resmî açıklaması](https://developers.google.com/search/docs/appearance/ai-features).

Pratik çalışma:

- Her sayfa belirli bir soruyu ilk paragrafta cevaplasın.
- Ürün, platform, fiyat koşulu ve kısıtlar açık metin olarak bulunsun.
- Karşılaştırmalar kaynak ve kontrol tarihi içersin; FocusNow tarafından yazıldığı belli olsun.
- İddialar, tablolar ve görünen içerikle yapılandırılmış veri tutarlı olsun.
- Rehber, kullanım senaryosu, özellik ve karşılaştırma sayfaları doğal biçimde birbirine bağlansın.
- AI ile çok sayıda birbirine benzeyen SEO sayfası üretmek yerine gerçek örnek, ölçüm yöntemi ve kullanılabilir şablon sunulsun. [Google'ın AI içerik rehberi](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content).
- AI yanıtlarında görünme gözlemleri ayrı bir araştırma günlüğünde izlenebilir; kişiye ve zamana göre değişen tek yanıt başarı ölçüsü sayılmasın. GSC'nin AI kaynaklı trafiği kusursuz biçimde ayırdığı varsayılmasın.

## 11. Pazarlama ve dağıtım: Sonraya bırakılabilecek ek plan

Bu bölüm web sitesi araştırmasına ek olarak hazırlanmıştır. Tasarım kararlarını tamamlamak için burada önerilen büyüme faaliyetlerinin yürütülmesi gerekmez.

### 11.1 Önerilen başlangıç yöntemi

**İlk büyüme motoru: kurucu tarafından yürütülen kullanıcı öğrenmesi + somut iş akışı gösterimi + yüksek niyetli içerik.**

İlk hedef, büyük bir indirme dalgasından önce küçük bir grubun gerçek iş haftasında ürünü tekrar kullanması olmalı. Bir günlük lansman trafiği bunu tek başına göstermez.

| Kanal | İlk çalışma | Ölçülecek | Genişletme koşulu |
| --- | --- | --- | --- |
| Doğrudan kullanıcı araştırması | Tanıdık/erişilebilir profesyonellerle iş haftası incelemesi | Problem sıklığı, ilk değer, tekrar kullanım | Benzer ihtiyaç birkaç bağımsız kullanıcıda tekrar ediyor |
| Kısa ürün videoları | Unutulan timer, haftalık kayıt inceleme, çalışma dökümü örnekleri | İlgili ziyaret ve aktivasyon | Video izlenmesi kurulum ve gerçek kullanıma dönüşüyor |
| Meslek toplulukları | Kullanılabilir bir yöntem/şablon paylaşımı, uygun yerde demo | Nitelikli geri bildirim ve geri dönen kullanıcı | Topluluk kurallarına uygun, tekrarlanabilir talep var |
| Arama içeriği | Kullanım senaryosu, rehber ve karşılaştırmalar | İlgili sorgu, kaliteli ziyaret, aktivasyon | İçerik doğru kullanıcıları getiriyor |
| Ürün dizinleri | Doğru kategori ve güncel ekranlarla birkaç nitelikli listeleme | Kaynağa göre aktive kullanıcı | Trafik değil kullanım sinyali var |
| Küçük içerik üreticileri | Hedef mesleğe ulaşan bir üreticiyle gerçek iş akışı | Kaynağa göre kalıcı kullanım ve toplam maliyet | İlk kullanım/retention verisi var |
| Ücretli arama | Dar niyetli tek kampanya deneyi | Aktive veya ödeyen kullanıcı maliyeti | Fiyat, dönüşüm ölçümü ve tutulma yeterince anlaşılmış |

Bu belge herhangi bir mesaj, sponsor anlaşması, reklam harcaması veya dış platform yayını yetkisi vermez; bunlar uygulama aşamasında ayrıca kararlaştırılacak işlerdir.

### 11.2 İlk içerik serisi

Arama başlıkları aşağıda **niyet hipotezi** olarak verilmiştir; hacim veya sıralama garantisi içermez.

| Niyet | İçerik fikri | Gösterilecek gerçek değer | Sonraki adım |
| --- | --- | --- | --- |
| Timer'ı unutma | “Forgot to track your freelance hours?” | Var olan otomatik kayıtlardan işini yeniden gözden geçirme | Örnek gün / indir |
| Haftalık yönetim | “A Friday review for client hours” | Düzenli haftayı kapatma yöntemi | Şablon + uygulama rehberi |
| Ticari kayıt | “Billable vs tracked time” | Her kayıtlı sürenin ücretlendirilmeyeceğini açıklama | Coverage ve zaman kartı örneği |
| Araç seçimi | “Automatic time tracking for freelancers” | Seçim kriterleri, platformlar, veri modeli | Kullanım sayfası |
| Alternatif arayışı | Rize / Timely / Memtime karşılaştırmaları | Kim için hangi seçim mantıklı, bizim somut akışımız | Aynı işi gösteren demo |
| Kayıt paylaşma | “Work statement vs invoice” | Ürünün sınırlarını ve birlikte kullanımını açıklama | Örnek çalışma dökümü |
| Sabit fiyatlı iş | “Review the time behind a fixed-price project” | Gerçek emek ve sonraki tahminin ilişkisi | Hesaplama şablonu |
| AI ile çalışma | “What screen time misses when you work with AI” | İnsan süresi, bekleme ve sonuç ayrımı | Araştırma yazısı; bugünkü takip kapsamı |

İlk ay hepsini üretmek yerine üç içerik seçilsin: haftalık müşteri saatleri incelemesi, en çok sorulan rakip karşılaştırması ve kayıtlı/faturalanabilir süre farkı. Her biri gerçek ürün akışı ve bir örnek çıktı içersin.

### 11.3 Paylaşılabilir yararlı araç

İlk araç adayı: **haftalık müşteri saatleri gözden geçirme şablonu** veya **örnek çalışma dökümü**. Ürünle doğrudan ilişkilidir ve karmaşık geliştirme gerektirmez.

İkinci aday: sabit fiyatlı işin gerçekleşen saatlik karşılığını hesaplayan küçük araç. Girdi kullanıcıdan gelir; “ücret ÷ emek saati” sonucu muhasebe kârı değildir. Gider, vergi ve AI maliyeti eklenirse varsayımlar ayrı görünür olmalı. Gerçek müşteri verisi sunucuya gönderilmeden tarayıcıda hesaplama tercih edilebilir.

Hazır araçlar e-posta duvarının arkasına konmamalı. İsteğe bağlı bülten veya indirme hatırlatması, araçtan faydalanmanın koşulu yapılmamalı.

### 11.4 Kanıt üretimi içerikten önce gelir

Bir kullanıcı hikâyesi şu bilgileri içermeli:

- Kişinin yaptığı iş ve eski yöntemi.
- Denenen iş akışı ve süre aralığı.
- Hangi sonucun gerçekten gözlendiği.
- Kullanıcının kendi ifadesi ve yayımlama izni.
- Hâlâ zor olan noktalar ve ölçüm sınırlamaları.

“Saatlerimi hatırlamak kolaylaştı” ilk aşamada geçerli nitel kanıttır. “Gelirim %20 arttı” demek, kayıtlı süreden daha güçlü bir kanıt gerektirir: gerçekten onaylanan/faturalanan iş, karşılaştırma dönemi ve başka etkilerin açıklaması.

Müşteri logosu, yıldız puanı, kullanıcı sayısı veya alıntı uydurulmamalı. Demo müşterileri gerçek sosyal kanıt gibi sunulmamalı. Erken aşamada ürünün nasıl çalıştığını açıkça göstermek başlı başına güven unsurudur.

### 11.5 Lansman ve tekrar kullanım

Lansman, tek günlük duyurudan oluşmamalı. Önerilen sıra:

1. Küçük pilot grubuyla ilk hafta ve ikinci hafta kullanımını gör.
2. Kurulumun ve ilk müşteri kaydının önündeki engelleri azalt.
3. İzinli 2–3 ayrıntılı hikâye veya güçlü ürün demonstrasyonu hazırla.
4. Hedef topluluk ve dizinlerde tutarlı mesajla yayınla.
5. Gelen kullanıcıya ilk gün, ilk haftanın kapanışı ve ikinci hafta için bağlama uygun yardım sun.

Ürün içi yardım öncelikli olabilir. E-posta dizisi seçilirse pazarlama izni, çıkış tercihi ve işlem mesajlarından ayrım tasarlanmalı. Günün etkinlik başlıklarını e-postaya taşımak varsayılan olmamalı.

Önerilen ilk haftalık kurucu çalışma ritmi: bir kullanıcı görüşmesi, bir gerçek iş akışı gözlemi, bir içerik/dağıtım çıktısı ve kısa ölçüm değerlendirmesi. Kapasite düşükse yayın sayısını artırmak yerine bu döngünün sürekliliği korunmalı.

## 12. Fiyatlandırma ve erken erişimden geçiş

### 12.1 Paket mantığı

Bugünkü ücretsiz temel takip ve erken erişim koşulları korunarak, gelecekte şu ayrım test edilebilir:

| Paket yönü | Kullanıcının satın aldığı iş | İncelenecek kapsam |
| --- | --- | --- |
| Free | Çalışma gününü görmek ve odak ritmi kurmak | Temel takip, kişisel görünüm ve odak araçları; kesin kapsam mevcut vaatlerle uyumlu belirlenir |
| Pro | Müşteri işini düzenli kayda dönüştürmek | Gelişmiş zaman kartı/çalışma dökümü akışları; ileride doğrulanmış öneri otomasyonu |
| Teams | Ortak iş ve yetki yönetimi | Şimdilik paket kartı açılmaz; ayrı ürün ihtiyacı doğrulanır |

AI günlük raporunun ücretsiz kullanım maliyeti ayrıca ölçülmeli. Sınırsız AI veya geçmiş veriye sınırsız erişim gibi maliyetli taahhütler, gerçek kullanım görülmeden verilmemeli. Kullanıcı mevcut verisini dışarı çıkarabilmeli; fiyat geçişi kayıtlarını erişilemez hale getirerek zorlanmamalı.

### 12.2 Fiyat araştırması

İlk araştırmada aylık **8 / 12 / 16 USD** gibi üç ayrı fiyat noktası konuşulabilir. Bunlar önerilen araştırma seçenekleridir; onaylanmış FocusNow fiyatı veya ödeme gücü ölçümü değildir. Karşılaştırma aynı ürün kapsamı ve aynı ödeme dönemiyle yapılmalı.

Araştırma soruları:

- Şu an hangi araca ve ne kadar ödüyor?
- Bu işi ayda kaç defa yapıyor?
- Yeni ürün mevcut aracı değiştiriyor mu, yanına mı ekleniyor?
- Hangi somut sonuç için ödeme yapar?
- Satın almasını durduran eksik özellik veya güven sorusu ne?

“Öder miydin?” cevabı tek başına talep kanıtı sayılmamalı. Tekrar kullanım, gerçek deneme kararı ve ileride açık koşullarla gerçek satın alma daha güçlü sinyaldir. Var olmayan checkout, yanıltıcı indirim veya sahte kıtlık kullanılmamalı.

### 12.3 Erken erişim açıklaması

Site ve uygulama tutarlı biçimde şunları söylemeli:

- Şu anda hangi özellikler ücretsiz?
- Kalıcı ücretsiz olan temel ürün hangisi?
- Hangi özelliklerin ileride Pro olması planlanıyor?
- Fiyat ve geçiş tarihi henüz belli mi?
- Geçişte mevcut kayıtlar ve dışa aktarma nasıl korunacak?

Ücretli geçiş kesinleştiğinde makul ön bildirim, açık abonelik onayı ve veri erişim politikası hazırlanmalı. Erken kullanıcı avantajı verilecekse süre, kapsam ve maliyeti önceden belirlenmeli; bugün otomatik olarak ömür boyu ücretsiz hak vaat edilmemeli.

### 12.4 Birim ekonomi

Ücretli trafik ölçeklenmeden önce kişi başına AI kullanımı, senkronizasyon/depolama, ödeme komisyonları ve destek yükü görülmeli. Basit değerlendirme:

```text
Aylık katkı ≈ net abonelik geliri − kullanıcıya bağlı değişken maliyet
Edinme geri ödeme süresi ≈ ödeyen kullanıcı edinme maliyeti / aylık katkı
```

Erken örneklemden güvenilir ömür boyu değer çıkarmaya çalışmak yerine gözlenen kohort geliri ve kalıcılık izlenmeli. Düşük fiyatı yalnız rakip fiyatına bakarak seçmek, AI maliyetleri yüksek kullanıcılarda sürdürülemez olabilir.

## 13. Web sitesinden gerçek değere kadar ölçüm

### 13.1 Ana başarı tanımı

**Önerilen ana ürün metriği:** Haftalık olarak iş kayıtlarını anlamlı biçimde gözden geçiren ve sonraki haftalarda geri dönen kullanıcı sayısı.

“Anlamlı gözden geçirme” için açık bir tamamlanma eylemi veya kayıt düzenleme davranışı tanımlanmalı. Arka planda açık kalan uygulama ve otomatik kayıt üretimi kullanım kanıtı sayılmamalı.

İki yol ayrı raporlanmalı:

- **Müşteri işi yolu:** Kaynak kayıttan zaman kartı oluşturma/düzenleme, sonraki hafta geri dönüş, çalışma dökümü kullanımı.
- **Kişisel odak yolu:** Gün inceleme ve bilinçli odak oturumu gibi kullanıcı eylemleri, sonraki hafta geri dönüş.

Mevcut [analytics dokümanı](ANALYTICS.md), `download_click` olayını merkez alıyor. Bu site performansı için yararlı bir ara metriktir; ürün değeri, kurulum veya ödeme kanıtı olarak yeterli değildir. Bu öneri mevcut ölçümün değiştirilmesini planlar; bu belgede uygulama yapılmamıştır.

### 13.2 Önerilen huni ve olaylar

| Basamak | Olay / ölçüm önerisi | Tanım ve sınır |
| --- | --- | --- |
| Ziyaret | Nitelikli landing oturumu | Kanal, dil, cihaz ve sayfa; bot/iç trafik ayrımı |
| Anlama | Demo başlatma / tamamlama | İlk iş akışını bilinçli inceleme; başarı metriği tek başına değil |
| İndirme niyeti | `download_click` | Dosya/Store bağlantısı tıklaması; kuruldu demek değil |
| İlk açılış | `first_launch` | Uygulamadan gelen ayrı olay; bugün ölçülüp ölçülmediği doğrulanmalı |
| Kurulum | `tracking_ready` | Gerekli iznin ve kayıt mekanizmasının çalışması |
| İlk değer | `first_day_reviewed` veya `first_timecard_from_activity` | Olayın ürün davranışına bağlanan açık tanımı gerekir |
| Ticari derinlik | `statement_finalized` / dışa aktarma | Tekrar kullanım ve gerçek süreçte fayda ayrıca incelenir |
| Kalıcılık | W2 / W4 geri dönüş | Aktivasyon kohortunda 8–14 ve 22–28. günlerde anlamlı kullanım |
| Gelir | Ücretli dönüşüm ve gözlenen kohort geliri | Pro gerçekten devreye girdikten sonra |

Yeni olay isimleri öneridir; bugün hepsinin var olduğu varsayılmamalı. Tekrarlanan olaylar, otomatik işler ve yeniden kurulumlar için mükerrer sayımı önleyen tanımlar gerekir.

### 13.3 Ölçüm sınırları

- Web çerez onayı ile uygulama kullanım analitiği onayı aynı şey değildir; iki akış ayrı ele alınmalı.
- Onay veren kullanıcılar bütün kullanıcıları temsil etmeyebilir. Oranların hangi gözlenebilir gruba ait olduğu raporda yazmalı.
- Web ve uygulama kullanıcısını otomatik eşleştirebildiğimiz varsayılmamalı. İlk aşamada kampanya/hafta/platform kohortu ve isteğe bağlı “nereden duydun?” yeterli olabilir.
- Daha sonra açık, izinli bir kampanya aktarımı düşünülürse fingerprinting yerine kısa ömürlü, amaçla sınırlı yöntem değerlendirilmeli.
- Analytics'e pencere başlıkları, müşteri isimleri, özel iş açıklamaları, tutarlar veya AI promptları taşınmamalı.
- Store bağlantısına tıklama, gerçek kurulum ve aktif kullanıcı ayrı rakamlardır.

### 13.4 Haftalık karar tablosu

| Gözlem | Önce bakılacak yer |
| --- | --- |
| Ziyaret var, indirme yok | Hedef kullanıcı, ilk vaat, güven, platform uyumu |
| İndirme var, ilk açılış az | Dağıtım, kurulum ve ölçümün eksikleri |
| İlk açılış var, kayıt yok | İzinler, ilk açılış ve teknik sorunlar |
| Kayıt var, inceleme yok | İlk değere ulaşma ve kullanıcıya ne yapacağını gösterme |
| İnceleme var, ikinci hafta yok | Sorunun sıklığı, tekrar kullanım nedeni, ürün yükü |
| Sürekli kullanım var, ödeme isteği yok | Hedef segment, paket değeri ve fiyat |

Bu tablo, her soruna yeni bir hero tasarımıyla cevap vermeyi önler. Bazen çözülmesi gereken engel web sitesinden sonra gelir.

## 14. Kullanıcı araştırması ve deneyler

### 14.1 İlk araştırma turu

Önerilen keşif örneklemi: 8–12 hedef kullanıcı; geliştirici, tasarımcı ve danışman karışımı. Bunların bir kısmı halihazırda başka araç kullanmalı, bir kısmı elektronik tablo/hafıza ile çalışmalı. Bu sayı pazar oranlarını tahmin etmek için yeterli değildir; sorunları ve dili keşfetmek içindir.

Görüşmede fikir beğenisi yerine son gerçek haftayı konuşalım:

1. En son müşteri saatlerini ne zaman hazırladın? Nasıl yaptın?
2. Hatırlayamadığın bir iş oldu mu? Nasıl çözdün?
3. Kayıt ile müşteriye sunduğun süre arasındaki farkı nasıl belirliyorsun?
4. Hangi bilgilerin kaydedilmesini istemezsin?
5. Araç değiştirmek için neyin belirgin biçimde daha iyi olması gerekir?
6. Saatlik ve sabit fiyatlı işlerde ihtiyacın nasıl değişiyor?
7. AI kullandığında işini takip etmek hangi noktada zorlaşıyor?

Gerçek müşteri kaydının paylaşılması gerekmesin; kullanıcı hassas alanları gizleyebilsin. Araştırma yapılırken satış baskısı oluşturulmamalı.

### 14.2 Deney sırası

| Deney | Hipotez | Yöntem | Karar |
| --- | --- | --- | --- |
| Mesaj anlaşılması | Ziyaretçi müşteri saatleri değerini ve manuel onayı anlıyor | 5 saniye ilk ekran + kendi sözleriyle açıklama | Sürekli yanlış anlaşılan vaadi değiştir |
| İş akışı | Kayıttan zaman kartı oluşturma kendi başına anlaşılabiliyor | 5–8 gözlenen görev oturumu | Yardım gerektiren basamakları düzelt |
| Tekrar kullanım | Haftayı kapatma ihtiyacı tekrar ediyor | 2–4 haftalık küçük pilot | İkinci kullanım yoksa edinme harcamasını ertele |
| Ticari karşılık | Çalışma dökümü gerçek sürece giriyor | Kullanıcı görüşmesi + izinli kullanım kanıtı | Sadece deneme PDF'siyle ticari değer iddia etme |
| Hero varyantı | Müşteri işi mesajı daha uygun kullanıcı getiriyor | Trafik yeterliyse kontrollü A/B | İndirme yanında aktivasyon ve kalıcılığı izle |
| Fiyat | Pro kapsamı hedef kullanıcı için satın alınabilir | Açık fiyat araştırması; sonra gerçek teklif | Paket değerini ve maliyeti birlikte değerlendir |

Düşük trafikte üç başlığı aynı anda A/B testine bölmek yerine görüşme ve prototip turu daha hızlı öğrenme sağlayabilir. A/B testinden önce mevcut oran, anlamlı en küçük fark, örneklem ve süre hesaplanmalı; günlük kazanan arama yapılmamalı. Ardışık dönemleri karşılaştırmak mevsim/kanal etkisine açıktır.

**Örnek keşif kapıları:** 10 hedef kullanıcının en az 8'inin vaadi doğru anlatması ve gözlenen görevlerin büyük çoğunluğunun yardımsız tamamlanması ilk tasarım için pratik eşik olabilir. Bunlar sektör standardı, istatistiksel güven veya ürün-pazar uyumu kanıtı değildir. Başarısızlık yeni piksel düzeninden önce yanlış segment/yanlış vaat olasılığını da açmalıdır.

## 15. Önceliklendirilmiş uygulama planı

Süreler takvim önerisidir; ekip kapasitesi ve araştırma sonucu görülmeden teslim taahhüdü değildir. Web sitesi, ürün geliştirmesi ve pazarlama işleri ayrı sahiplenilmelidir.

**Web sitesi kapsamı Faz 1–3'ün ilgili çıktılarıdır. Faz 4–5 büyüme için korunmuş isteğe bağlı devam planıdır.** Bu fazların tamamını yürütmeden siteyi geliştiremeyeceğimiz anlamına gelmez; mevcut kullanıcı kanıtı ve kapasiteye göre adımlar birleştirilebilir. İlk somut tasarım çıktısı, bu belgedeki mesaj ve iskelet üzerinden hazırlanan landing page prototipi olmalıdır.

### Faz 1 — İlk 2 hafta: Hangi vaadi savunuyoruz?

**Sorumlu:** Kurucu/ürün.

- 8–12 görüşme ve mevcut iş yöntemlerinin kaydı.
- Gerçek web/uygulama ölçümlerinin envanteri; bilinmeyenlerin işaretlenmesi.
- Rakiplerle aynı işi karşılaştıracak kısa değerlendirme senaryosu.
- Tek hedef segment ve tek ana akış kararı.
- EN/TR mesaj brief'i ve iddia/kanıt tablosu.

**Çıkış koşulu:** Sık tekrarlanan sorun, bugünkü ürünle gösterilebilir çözüm ve yanlış anlaşılmayan vaat. Sorun zayıfsa tasarımı büyütmeden hedef segment yeniden seçilir.

### Faz 2 — 3–4. haftalar: Göster, ölç, sadeleştir

**Sorumlu:** Ürün/tasarım; kullanıcı görüşmelerini kurucu yürütür.

- Tek gerçek akıştan demo/video ve statik görsel seti.
- Masaüstü ve mobil landing prototipi.
- Fiyat/erken erişim ve veri akışı açıklamaları.
- 5–8 gözlenen görev oturumu ve bir düzeltme turu.
- Gerekli olayların sözlüğü; web → uygulama ölçüm sınırları.

**Çıkış koşulu:** Kullanıcı kim için olduğunu, neyin otomatik olduğunu ve ilk sonucu nasıl alacağını anlıyor. Kritik indirme/güven/yanlış beklenti sorunu kalmamış.

### Faz 3 — 5–6. haftalar: Küçük ama tamamlanmış site

**Sorumlu:** Web geliştirme + içerik; ürün içi eksikler ayrı iş.

- Ana sayfa, indirme, fiyat, gizlilik açıklaması ve freelancer akışı.
- İlgili rehberin kurulumdan ilk müşteri kaydına kadar tamamlanması.
- EN/TR, platform CTA'ları, performans ve erişilebilirlik kontrolleri.
- Metadata, yönlendirme, sitemap ve görsel doğruluğu.
- Önizleme değerlendirmesi; yayın ayrı kararla gerçekleştirilir.

**Çıkış koşulu:** Uçtan uca yolculuk tamam; yeni sayfa vaadi mevcut ürünle örtüşüyor; anlamlı aktivasyon ölçülebiliyor veya ölçüm boşluğu açıkça raporlanıyor.

### Faz 4 — 7–8. haftalar: Kullanım kanıtı ve dağıtım

**Sorumlu:** Kurucu/pazarlama.

- Küçük pilot grubunun sonraki haftalarını takip et.
- İlk izinli kullanıcı hikâyelerini derle.
- Üç öncelikli içerik ve bir yararlı şablon yayıma hazırla.
- Seçilmiş topluluk/dizin çalışmalarını onaylı hesaplarla yürüt.
- Kaynağa göre aktivasyon ve geri dönüşü incele.

**Çıkış koşulu:** Hangi kanalın hangi kullanıcıyı getirdiği ve bu kişinin ürünle ne yaptığı anlaşılabiliyor.

### Faz 5 — 9–12. haftalar: Sonuçlara göre büyüt

**Sorumlu:** Ürün + büyüme.

- Başarılı mesaj/kanalı derinleştir; işe yaramayanları durdur.
- Uygun trafik varsa bir A/B deneyi yap.
- Pro fiyat araştırmasını tekrar kullanım verisiyle değerlendir.
- AI proje önerisi için küçük, onaylı pilot gerekip gerekmediğine karar ver.
- Ücretli reklam için ölçüm, maliyet ve kalıcılık kapısını değerlendir.

**Çıkış koşulu:** Bir sonraki 90 günün kararı gerçek kullanıcı davranışına dayanıyor. Büyük AI vizyonuna sırf rakiplerde var diye yatırım yapılmıyor.

### Öncelik tablosu

| İş | Öncelik | Tahmini boyut | Bağımlılık | Beklenen etkisi |
| --- | --- | --- | --- | --- |
| Segment/mesaj görüşmeleri | P0 | Orta | Kullanıcı erişimi | Yanlış kitleye tasarımı önler |
| Gerçek akış demosu | P0 | Küçük–orta | Çalışır ürün akışı | Değerin anlaşılması |
| İlk ekran + indirme yolculuğu | P0 | Orta | Mesaj ve platform kararı | Doğru kullanıcının başlaması |
| Veri/erken erişim açıklaması | P0 | Küçük | Ürün gerçeklerinin doğrulanması | Güven ve beklenti |
| Aktivasyon/geri dönüş ölçümü | P0 | Orta | Web ve uygulama sahipliği | Karar kalitesi |
| İlk kullanım rehberi | P0 | Küçük–orta | Kurulum ve ürün gözlemi | İlk değere ulaşma |
| İki rakip karşılaştırması | P1 | Orta | Güncel doğrulama | Yüksek niyetli talep |
| Kullanıcı hikâyesi | P1 | Orta | Gerçek kullanım + izin | Kanıt |
| Tek şablon/araç | P1 | Küçük–orta | Hedef işin doğrulanması | Faydalı giriş noktası |
| AI proje önerisi pilotu | P1, koşullu | Büyük | Tekrarlanan düzenleme sorunu | Ürün kullanım yükü |
| Geniş interaktif demo | P2 | Orta–büyük | Basit demodan daha iyi olduğuna kanıt | Anlaşılabilirlik |
| CMS/framework göçü | P2, koşullu | Büyük | Gerçek bakım veya performans engeli | Operasyon kolaylığı |
| Çok sayıda entegrasyon / Teams | Ayrı ürün kararı | Büyük | Tekrarlanan talep ve kapasite | Yeni pazar |

### Kapasite çok kısıtlıysa

İlk sürümü **tek segment, tek vaat, tek gerçek demo, doğru indirme, açık fiyat/gizlilik ve ilk değer ölçümü** ile sınırlayalım. Yeni CMS, büyük animasyon sistemi, çok sayıda SEO sayfası veya AI sohbeti bu çekirdeğin önüne geçmemeli.

## 16. Kararları değiştirecek bulgular

| Bulgu | Plan nasıl değişir? |
| --- | --- |
| Müşteri işi kullananlar çok az, odak kullanıcıları belirgin biçimde daha kalıcı | Ana konumlandırma odak/gün değerlendirmesine kayabilir; ticari akış ayrı tutulur |
| Çalışma dökümünden çok mevcut muhasebe aracına aktarım isteniyor | Yeni billing özelliklerinden önce aktarım/entegrasyon araştırılır |
| Elle proje atama en büyük terk nedeni | Görsel tasarımdan önce öneri ve toplu düzenleme önceliklenir |
| Yerel/bulut veri modeli kurulumu durduruyor | İletişim sorunu ile ürün seçeneği ihtiyacı ayrılır; sadece metinle çözülmüş sayılmaz |
| Kullanıcılar “daha fazla faturalamak” istemiyor, gerçek proje maliyetini anlamak istiyor | Mesaj emek, kapsam ve bir sonraki tahmine kayar |
| AI kullanıcıları aktif ekran süresini yanıltıcı buluyor | Yeni ölçüm modeli küçük pilotta test edilir; mevcut Odak Puanı başarı ölçüsü yapılmaz |
| Kurulum/ilk açılış güvenilir değil | Trafik artırmadan dağıtım ve onboarding düzeltilir |
| Ücretli ilgi var ama kullanım maliyeti yüksek | Paket sınırları ve maliyet optimizasyonu birlikte değerlendirilir |

## 17. Uygulamaya başlamadan hazırlanacak somut çıktılar

1. **Bir sayfalık konumlandırma brief'i:** kişi, sorun, vaat, mekanizma, kanıt, kısıt.
2. **Rakip kayıt tablosu:** kaynak, kontrol tarihi, paket/dönem, doğrulanmayan alan.
3. **Mesaj ve iddia tablosu:** bugünkü ürün ile gelecek önerisini ayıran metinler.
4. **Demo senaryosu:** aynı örnek günün kayıttan çalışma dökümüne akışı.
5. **Masaüstü/mobil prototip:** ilk ekran, güven, fiyat ve indirme dahil.
6. **İçerik mimarisi:** ilk sayfalar, her sayfanın sorusu, CTA'sı ve bağlantıları.
7. **Ölçüm sözlüğü:** olay tanımı, platform, izin, mükerrer sayım ve karar sahibi.
8. **İlk içerik/dağıtım takvimi:** kapasiteye göre üç içerik ve bir şablon.
9. **Yayın kabul listesi:** ürün doğruluğu, iki dil, indirme, erişilebilirlik, hız ve SEO.
10. **30/60/90 günlük karar notları:** ne öğrendik, hangi hipotezi bıraktık, neyi büyütüyoruz?

## 18. Son karar önerisi

İlk yatırım, FocusNow'ın zaten sahip olduğu **otomatik kayıt → kullanıcı incelemesi → müşteri işi kaydı** akışını bağımsız profesyoneller için anlaşılır, güvenilir ve tekrar kullanılır hale getirmeye gitmeli. Landing page bu işi göstermeli; odak araçları günlük alışkanlığı desteklemeli.

Gelecekteki AI yönü bu temelin üzerine kurulmalı: daha az kayıt düzenleme, kaynağı görülebilen öneriler, insan emeği ile ajan çalışmasını ayıran ölçüm ve kullanıcının son kararı verdiği işlemler. Böylece bugünkü ürünü abartmadan pazarlayabilir, yarının çalışma biçimine de hazırlanabiliriz.
