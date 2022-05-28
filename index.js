// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  let hasilLooping = [];

  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  let jumlahPria = null;

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let jumlahWanita = null;

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  let komentar = null;
  // looping data disini
  for (let i = 0; i < dataYangAkanDilooping.length; i++) {
    // gabung nama depan dan belakang disini
    hasilLooping.push(
      dataYangAkanDilooping[i].namaDepan +
        " " +
        dataYangAkanDilooping[i].namaBelakang
    );
    // menghitung jumlah pria dan wanita disini
    if (dataYangAkanDilooping[i].jenisKelamin === "M") {
      jumlahPria++;
    } else {
      jumlahWanita++;
    }
    // komentar jumlah pria dan wanita disini
    if (jumlahPria > jumlahWanita) {
      komentar = "Jumlah Pria lebih banyak dari Wanita";
    } else if (jumlahWanita > jumlahPria) {
      komentar = "Jumlah Wanita lebih banyak dari Pria";
    } else {
      komentar = "Jumlah Pria dan Wanita berimbang";
    }
  }

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log("Jumlah Pria "+hasil.jumlahPria);
  console.log("Jumlah Wanita "+hasil.jumlahWanita);
  console.log(hasil.komentar);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
