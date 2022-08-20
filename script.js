const input1 = document.querySelector(".ipjudul");
const input2 = document.querySelector(".ipkelompok");
const input3 = document.querySelector(".ipisikelompok");
const button1 = document.querySelector(".buttonJudul");
const button2 = document.querySelector(".buttonKelompok");
const judulForm = document.querySelector(".TextJudulForm h1");
const daftarKelompok = document.querySelector(".dafKel");
const kelompok = document.querySelector(".kelompok");
button1.addEventListener("click", function () {
  document.querySelector(".daftarHadir").style.display = "block";
  judulForm.innerHTML = input1.value;
  judulForm.style.textTransform = "uppercase";
});
button2.addEventListener("click", function () {
  const hasilinput1 = input2.value;
  const hasilinput2 = input3.value;
  let hasil = "";
  let isi = "";
  for (let j = 0; j < hasilinput2; j++) {
    isi += `<li>
<label for="">nomor${
      j + 1
    }</label><input type="text" name="" id="" class="nama" />
</li>`;
  }
  for (let i = 0; i < hasilinput1; i++) {
    hasil += ` <ul class="daf ${i + 1}">
    <label for="">kelompok${i + 1}</label>
${isi}
<button class="buttonisiK" onclick="show(this)">Add</button>
  </ul> `;
  }
  daftarKelompok.innerHTML = hasil;
});
let x = 0;

function show(el) {
  let nama = el.parentElement;
  let gas = nama.querySelectorAll(".nama");
  let hasilinp = "";
  for (let i = 0; i < gas.length; i++) {
    hasilinp += `<li class ="x"><p>${gas[i].value}<p></li>`;
  }
  let kolomPeserta = `<div class="kel">
  <label >kelompok ${++x}</label>
  <ul>
  ${hasilinp}
  </ul>
  </div>`;
  el.parentElement.style.display = "none";
  kelompok.insertAdjacentHTML("beforeend", kolomPeserta);
}
