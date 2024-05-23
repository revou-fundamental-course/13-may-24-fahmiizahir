// script.js

//ngambil elemen dari HTML
var panjangAInput = document.getElementById('panjang_a');
var panjangBInput = document.getElementById('panjang_b');
var panjangCInput = document.getElementById('panjang_c');
var tinggiInput = document.getElementById('tinggi');
var luasResultPre = document.querySelector('.luas-rslt pre');
var kelilingResultPre = document.querySelector('.keliling-rslt pre');
var errorContainer = document.getElementById('error-container');

//auto scroll ke error message (untuk layar kecil)
function scrollToError() {
    var errorContainer = document.getElementById('error-container');
    errorContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

//auto scroll ke result (untuk layar kecil)
function scrollToResult() {
    var resultSection = document.getElementById('result-section');
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


//validasi input untuk ngitung luas
function hitungLuas() {
    const panjang_a = parseFloat(panjangAInput.value);
    const tinggi = parseFloat(tinggiInput.value);

    if ((panjang_a === "" || isNaN(panjang_a)) && (tinggi === "" || isNaN(tinggi))) {
        showError('Masukkan panjang sisi a dan tinggi segitiga dengan benar!');
        return;
    } else if (panjang_a < 0 || tinggi < 0) {
        showError('Masukkan angka positif untuk panjang sisi a dan tinggi segitiga');
        return;
    }   else if (tinggi === "" || isNaN(tinggi)) {
        showError('Isi tinggi segitiga dengan benar!');
        return;
    } else if (tinggi <= 0) {
        showError('Masukkan angka positif untuk tinggi segitiga');
        return;
    }else if (panjang_a === "" || isNaN(panjang_a)) {
        showError('Isi panjang sisi a dengan benar!');
        return;
    } else if (panjang_a <= 0) {
        showError('Masukkan angka positif untuk panjang sisi a');
        return;
    }

    errorContainer.style.display = 'none';
    calculateArea(panjang_a, tinggi);
}

//ngitung luas segitiga
function calculateArea(panjang_a, tinggi) {
    const luas = 0.5 * panjang_a * tinggi;
    luasResultPre.textContent = `
        Luas = 1/2 x a x t
             = 1/2 x ${panjang_a} x ${tinggi}
             = ${luas}`;

    document.querySelector('.result').style.display = 'block';
    document.querySelector('.luas-rslt').style.display = 'block';
    scrollToResult();
}

//validasi input untuk ngitung keliling
function hitungKeliling() {
    const panjang_a = parseFloat(panjangAInput.value);
    const panjang_b = parseFloat(panjangBInput.value);
    const panjang_c = parseFloat(panjangCInput.value);
    
    if (panjang_a === "" || isNaN(panjang_a) || panjang_b === "" || isNaN(panjang_b) || panjang_c === "" || isNaN(panjang_c)) {
        showError('Isi semua panjang sisi dengan benar!');
        return;
    } else if (panjang_a <= 0 || panjang_b <= 0 || panjang_c <= 0) {
        showError('Masukkan angka positif untuk semua panjang sisi');
        return;
    }

    errorContainer.style.display = 'none';
    calculateKeliling(panjang_a, panjang_b, panjang_c);
}

//ngitung keliling segitiga
function calculateKeliling(panjang_a, panjang_b, panjang_c) {
    const keliling = panjang_a + panjang_b + panjang_c;
    kelilingResultPre.textContent = `
        Keliling = a + b + c +
                 = ${panjang_a} + ${panjang_b} + ${panjang_c}
                 = ${keliling}`;

    document.querySelector('.result').style.display = 'block';
    document.querySelector('.keliling-rslt').style.display = 'block';
    scrollToResult();
}

//reset ke tampilan awal
function reset() {
    panjangAInput.value = '';
    panjangBInput.value = '';
    panjangCInput.value = '';
    tinggiInput.value = '';
    luasResultPre.textContent = '';
    kelilingResultPre.textContent = '';
    errorContainer.style.display = 'none';
    document.querySelector('.result').style.display = 'none';
    document.querySelector('.luas-rslt').style.display = 'none';
    document.querySelector('.keliling-rslt').style.display = 'none';
}

//nampilin error message
function showError(message) {
    var alertDiv = document.querySelector('.alert');
    alertDiv.querySelector('.message').textContent = message;
    errorContainer.style.display = 'block';
    scrollToError();
}

