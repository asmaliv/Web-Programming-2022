// inisialisasi elemen
let uang = document.getElementById ('uang');
let valas = document.getElementById ('valas');
let hasil = document.getElementById ('hasil');
let us = document.getElementById ('us');
let singapore = document.getElementById ('singapore');
let ringgit = document.getElementById ('ringgit');
let yen = document.getElementById ('yen');
let euro = document.getElementById ('euro');
let riyal = document.getElementById ('riyal');
let kurs = 0;

valas.onclick = () => { //arrow function alia
    // validasi ketika uang  bernilai null
    if(uang.value == '') {
        alert('Masukan nilai uang telebih dahulu!');
    }

    switch(valas.value){
        case us.value:
            kurs = uang.value *9.915;
            hasil.innerHTML = `Rp. ${kurs}`;
            break;
        case singapore.value:
            kurs = uang.value *13.427;
            hasil.innerHTML = `Rp. ${kurs}`;
            break;
        case ringgit.value:
            kurs = uang.value *874;
            hasil.innerHTML = `Rp. ${kurs}`;
            break;
        case yen.value:
            kurs = uang.value *120;
            hasil.innerHTML = `Rp. ${kurs}`;
            break;
        case euro.value:
            kurs = uang.value *15.888;
            hasil.innerHTML = `Rp. ${kurs}`;
            break; 
        case riyal.value:
            kurs = uang.value *3.592;
            hasil.innerHTML = `Rp. ${kurs}`;
            break;   
    }
}