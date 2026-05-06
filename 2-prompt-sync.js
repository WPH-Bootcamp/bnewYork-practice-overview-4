const prompt = require('prompt-sync')({
  sigint: true,
});

function tampilkanMenu() {
  console.log('1. Tambah Tugas.');
  console.log('2. Hapus Tugas.');
  console.log('3. Ubah Tugas.');
}

tampilkanMenu();

let pilih = prompt('Pilih (1-3) : ');

if (pilih === 1) {
  console.log('Tambah Tugas');
}
