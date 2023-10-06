let nilai = 90;

// IF ELSE NESTED IF
if (nilai >= 70) {
  ifelse.innerHTML += "Lulus dengan nilai ";

  if (nilai >= 90) {
    ifelse.innerHTML += "Nilai A";
  } else if (nilai >= 80) {
    console.log("Nilai B");
  } else {
    console.log("Nilai C");
  }
} else {
  console.log("Tidak Lulus");
}

// SWITCH CASE
let bulan = 10;
let namaBulan = "";

switch (bulan) {
  case 1:
    namaBulan = "Januari";
    break;
  case 2:
    namaBulan = "Februari";
    break;
  case 3:
    namaBulan = "Maret";
    break;
  case 4:
    namaBulan = "April";
    break;
  case 5:
    namaBulan = "Mei";
    break;
  case 6:
    namaBulan = "Juni";
    break;
  case 7:
    namaBulan = "Juli";
    break;
  case 8:
    namaBulan = "Agustus";
    break;
  case 9:
    namaBulan = "September";
    break;
  case 10:
    namaBulan = "Oktober";
    break;
  case 11:
    namaBulan = "November";
    break;
  case 12:
    namaBulan = "Desember";
    break;
  default:
    console.log("Bulan tidak valid");
}

switchcase.innerHTML = "Bulan ini adalah bulan " + namaBulan;

// FOR STATEMENT
const buah = ["Apel", "Jeruk", "Pisang", "Anggur"];

for (let k = 0; k < buah.length; k++) {
  forstatement.innerHTML += `<p>${buah[k]}<p>`;
}

// WHILE DO WHILE
let i = 0;
while (i <= 10) {
  whiledowhile1.innerHTML += `Perulangan ke- ${i} | `;
  i++;
}

let angkaAcak;
do {
  angkaAcak = Math.floor(Math.random() * 5) + 1;
  whiledowhile1.innerHTML += `Angka acak: ${angkaAcak} | `;
} while (angkaAcak !== 5);

// FUNCTION
functionid.addEventListener("click", () => {
  function bersihinBody() {
    document.body.innerHTML = "<h2>INI HASIL FUNCTION</h2>";
    document.body.innerHTML += "<p>CLICK REFRESH UNTUK KEMBALI</p>";
  }

  bersihinBody();
});
