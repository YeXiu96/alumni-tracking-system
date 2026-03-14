# Alumni Tracking System (ATS)

## Deskripsi Sistem

**Alumni Tracking System (ATS)** adalah aplikasi berbasis web yang digunakan untuk membantu universitas dalam melacak informasi alumni setelah lulus. Sistem ini memungkinkan admin untuk menambahkan data alumni, melihat statistik alumni, serta melakukan tracking pekerjaan alumni.

Sistem ini dikembangkan sebagai bagian dari tugas **Daily Project – Manajemen Proyek Perangkat Lunak (MPPL)**.

---

## Fitur Sistem

* 🔐 Login Admin
* 📊 Dashboard Statistik Alumni
* 📋 Manajemen Data Alumni
* 🔎 Tracking Alumni
* 💾 Penyimpanan data menggunakan LocalStorage

---

## Teknologi yang Digunakan

* HTML
* CSS
* JavaScript

Aplikasi ini bersifat **client-side only**, sehingga tidak memerlukan backend server.

---

## Source Code

Repository GitHub:

https://github.com/YeXiu96/alumni-tracking-system

---

## Live Demo Website

Website dapat diakses melalui:

https://alumni-tracking-systems.netlify.app

Website di-deploy menggunakan **Netlify**.

---

## Login Sistem

Gunakan akun berikut untuk mengakses dashboard:

Username : admin
Password : admin

---

## Cara Menjalankan Sistem

1. Clone repository

git clone https://github.com/YeXiu96/alumni-tracking-system.git

2. Masuk ke folder project

cd alumni-tracking-system

3. Buka folder frontend

4. Jalankan file berikut di browser

index.html

---

## Penyimpanan Data

Data alumni disimpan menggunakan **LocalStorage pada browser** sehingga sistem dapat berjalan tanpa backend server.

Catatan:

* Data hanya tersimpan pada browser yang digunakan
* Jika cache browser dihapus maka data akan hilang

---

## Pengujian Sistem

Pengujian dilakukan untuk memastikan sistem berjalan sesuai kebutuhan.

| No | Fitur               | Aspek Kualitas | Skenario Pengujian                            | Hasil yang Diharapkan                         | Status   |
| -- | ------------------- | -------------- | --------------------------------------------- | --------------------------------------------- | -------- |
| 1  | Login Admin         | Functionality  | Admin login menggunakan username dan password | Dashboard tampil                              | Berhasil |
| 2  | Tambah Alumni       | Functionality  | Admin menambahkan data alumni                 | Data alumni muncul di tabel                   | Berhasil |
| 3  | Tracking Alumni     | Usability      | Admin menekan tombol Track                    | Status alumni berubah menjadi Teridentifikasi | Berhasil |
| 4  | Dashboard Statistik | Reliability    | Admin membuka dashboard                       | Jumlah alumni dan statistik tampil            | Berhasil |
| 5  | Tampilan Sistem     | Usability      | User membuka website                          | UI tampil dengan baik                         | Berhasil |

---

## Tujuan Pengembangan

Tujuan sistem ini adalah:

* Membantu universitas memantau perkembangan karir alumni
* Menyediakan statistik data alumni
* Mendukung evaluasi kurikulum berdasarkan pekerjaan alumni

---

## Pengembang

Sistem ini dikembangkan sebagai bagian dari tugas perkuliahan **Manajemen Proyek Perangkat Lunak (MPPL)**.
