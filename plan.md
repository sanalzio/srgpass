# srgpass
Strong Passwords

## planlar

- Argümansız:
  - Yardım Müenüsü
  - Parolam/kullanıcı adım ne?
  - Hesap kaydet/oluştur
  - Hesap sil
  - Parolalar
  - Bilgileri dışa aktar
  - Bilgileri içe aktar
  - Şifreleme yöntemini değiştir
  - Çık
- Argümanlar:
  - `--help` yada `-h` yada `?`
    - Yardım Müenüsünü göster
  - `--create` yada `-c` yada `c`
    - Hesap oluştur
      - Kullanıcı adı/Email/Telefon:
        - gir
        - panodan al
      - Parola:
        - gir
          - Parolayı kontrol et:
            - Güvenli değilse uyar
        - panodan al
          - Parolayı kontrol et:
            - Güvenli değilse uyar
        - rastgele oluştur
          - kaç karakterli (50)
    - Kurtarma kodlarını içe aktar
  - `--get` yada `-g` yada `g`
    - Parolam/kullanıcı adım ne?
      - Site bulundu mu?
        - Panoya mı yapıştıram?
        - Gösterem mi?
      - Bulunamadı mı?
        - Ara
    - Kurtarma kodu ver
  - `--accounts` yada `-as` yada `as`
    - Tüm parolaları listele.
  - `--remove` yada `-r` yada `r`
    - Yönetici misin?
      - Hangi hesap?
  - `--export` yada `-e` yada `e`
    - Yönetici misin?
      - .env exportla ile
  - `--import` yada `-i` yada `i`
    - Yönetici misin?
      - Emin misin? Önce exportlayayım mı?
        - .env ile exportla
  - `--chanageMethod` yada `-cm` yada `cm`
    - Yönetici misin?
      - Bilgileri decode et ; Metod üğret ; Şifrele