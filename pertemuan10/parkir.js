// Menghitung biaya parkir
function hitungBiayaparkir() {
    let jamMasuk = document.getElementById('jam_masuk').value
    let jamKeluar = document.getElementById('jam_keluar').value
    let lamaParkir = jamKeluar - jamMasuk
    console.log(lamaParkir)

// Biaya 2 jam pertama
let biayaParkir = 3000
lamaParkir -= 2

//Hitung sisa jam
if(lamaParkir > 0) {
    biayaParkir = biayaParkir + (lamaParkir * 100)
}

console.log(biayaParkir)
// Tampilkan hasil ke dalam html
document.getElementById('biaya_parkir').innerHTML = biayaParkir
document.getElementById('waktu').innerHTML = lamaParkir + 2

}



