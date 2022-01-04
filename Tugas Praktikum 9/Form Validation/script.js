var harga = ['25000','100000','50000','75000'];
var kereta = ['PANDANWANGI','MUTIARA TIMUR','LOGAWA','PROBOWANGI'];
function Tujuan() {
 // body...
 var tujuan = document.getElementById('inp_tujuan').value;
 var kereta2 = document.getElementById('kereta2');
 kereta2.innerHTML="<option>--PILIH KERETA--</option>"
 if (tujuan=='jmbr') {
  for (var i = 0; i < 2; i++) {
   result="<option value="+i+">"+kereta[i]+"</option>";
   kereta2.innerHTML+=result;
  }
 }
 else if (tujuan=='sby') {
  for (var i = 2; i < 4; i++) {
   result="<option value="+i+">"+kereta[i]+"</option>";
   kereta2.innerHTML+=result;
  }
 }
}
function harganya(){
 var harga2 = document.getElementById('kereta2').value;
  tampil.value="Rp. "+harga[parseInt(harga2)];
}

function Total() {
 // body...
var harga2 = document.getElementById('kereta2').value;
var jumlah;
jumlah=parseInt(document.getElementById('inp_jumlah').value);
total= jumlah*parseInt(harga[parseInt(harga2)]);
total2.value="Rp. "+total;
}
function pesan() {
 // body...
 var nama=document.getElementById('inp_nama').value;
 var email=document.getElementById('inp_email').value;
 alert('HAI !! ' + nama +" Pesanan Tiket Kamu Sudah Berhasil Dengan Email " +email);
 alert('Silahkan Lakukan Pembayaran Dengan Total ' + total ); 
}