
1. projeyi clone la
2. `yarn install` ile paketleri yükle.
3. `yarn start` ile projeyi başlat.Building için `yarn build`
4. farklı projeler de çalışmak için `yarn start:literature` && `yarn build:literature` komutları gibi proje adlarıyla çalışılır.
5. proje ayarları ve eklemeleri webpack/config.json dosyası ile yapılır.
6. `yarn build` sonucunda dist dizini oluşmaktadır. Bu dizin Apache'ye DocumentRoot olarak gösterilir
7. `yarn start` ile çalışabilmek için Apache'ye CORS izni verilmelidir. Yani config dosyasına şöyle bir header eklenir Header set Access-Control-Allow-Origin "*"

### versions
node : v16.13.0
npm : 8.1.1
yarn : 1.22.15