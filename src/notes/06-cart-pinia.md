# 06 – Sepet (Cart) Mantığı – Pinia

* Global state yönetimi için Pinia projeye eklendi
* `main.ts` içinde `createPinia()` uygulamaya bağlandı

## Cart Store

* `stores/cart.ts` oluşturuldu
* Sepet ürünleri `items` state’i içinde tutuluyor
* `CartItem` yapısı: ürün + quantity
* `addToCart` action’ı ile ürün ekleme / adet artırma yapıldı

## Ürün Kartı Entegrasyonu

* `ProductCard.vue` içindeki "Sepete Ekle" butonu store’a bağlandı
* Tıklama ile ürün sepete ekleniyor

## Header Sepet Göstergesi

* App bar içinde sepet ikonu eklendi
* `v-badge` ile toplam ürün adedi gösterildi
* Sepet sayısı `computed` ile hesaplandı

## Cart Sayfası

* `pages/Cart.vue` oluşturuldu
* Sepetteki ürünler listelendi
* Ürün adetleri ve fiyatları gösterildi
* Toplam fiyat hesaplandı

