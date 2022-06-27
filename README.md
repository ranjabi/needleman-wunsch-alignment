# needleman-wunsch-alignment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![alt text](https://github.com/ranjabi/needleman-wunsch-alignment/blob/main/wna-algo.png "Website Preview")

## Cara Penggunaan Program
Kunjungi [https://needleman-wunsch-alignment.netlify.app/](https://needleman-wunsch-alignment.netlify.app/) untuk menjalankan program secara online atau jalankan script di bawah jika ingin menjalankan di local machine.

After cloning this repository, in the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Algoritma Needleman-Wunsch
Algoritma ini digunakan untuk penyelasaran dua barisan DNA.
### Proses Pembuatan Matriks
Dibuat sebuah matriks berukuran m * n dengan m adalah panjang dari barisan DNA 2 dan n adalah panjang dari barisan DNA 1. Kolom dan baris pertama dari matriks diisi dengan skor gap yang telah ditentukan secara meningkat.
### Pemilihan Rute Traceback
Setiap baris dan kolom akan memiliki nilai sesuai dengan parameter skor match, mismatch, dan gap. Penelurusan kembali akan dimulai dari posisi array [m][n] menuju posisi [0][0]. Jika huruf pada baris m dan huruf pada kolom n cocok, maka dipilih rute diagonal. Tetapi jika kedua huruf tidak cocok, maka dipilih arah dengan skor yang paling tinggi. Penyelarasan huruf yang tidak cocok termasuk ke dalam gap.
### Penetapan Skema Skoring
Skema skoring dapat ditetapkan secara arbitrary. Semakin besar skor gap maka kemungkinan alignment menggunakan gap dari sequence DNA akan semakin kecil karena traceback matriks akan cenderung memilih rute diagonal saat terjadi mismatch. Karena pada spesifikasi dinyatakan bahwa perbedaan karakter tidak lebih dari 5, maka hasil yang diinginkan akan memiliki alignment gap yang sedikit dengan skor gap yang besar. 

## Referensi
- https://www.youtube.com/watch?v=LkwgI2mHbik&t=887s&ab_channel=BarryGrant
- https://github.com/dzakimuhammad/needleman-wunsch-alignment
- https://www.cs.sjsu.edu/~aid/cs152/NeedlemanWunsch.pdf
- https://medium.com/analytics-vidhya/sequence-alignment-and-the-needleman-wunsch-algorithm-710c7b1a23a4
- https://www.youtube.com/watch?v=ipp-pNRIp4g
- https://www.youtube.com/watch?v=LhpGz5--isw&ab_channel=DeborahThurtle-Schmidt
- https://www.youtube.com/watch?v=of3B02hZGS0&ab_channel=FarhanHaq

## Framework/Library
Algoritma Needleman-Wunsch ini diimplementasikan ke dalam aplikasi berbasis website dengan memanfaatkan library ReactJS dan framework Tailwind CSS.

## Test Cases
TC 1

Sequence 1: TTAAGCGTGACAGTCCCAGTGAATTAAGCGTGACAGTCCCAGTGAA

Sequence 2: CCTTCTCGAGTTCCGTCCGG

TC 2

Sequence 1: GGAGTCATACGCAAGAAGGATGGTCTC

Sequence 2: CCCACAAACCGTGATGGCTGTCCTT

TC 3

Sequence 1: TAGAACTGGACGTGCGGTTTCTCTGCGAAGAACAC

Sequence 2: CAGACACCGGCGCACCAGTTTTCACGCCGA
