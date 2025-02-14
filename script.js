function formWhatsapp() {
  // Ambil parameter ID yang sudah kita buat
  var nama = document.getElementById("nama").value;
  var pesan = document.getElementById("pesan").value;

  // Nomor WhatsApp tujuan (ganti dengan nomor yang diinginkan)
  var nomorWA = "6285817048266"; // Ganti dengan nomor tujuan tanpa '+'

  // Format pesan
  var teksPesan = `Hai! Saya *${nama}* 👋%0A%0A${pesan}%0A%0ASaya berharap bisa mendapatkan respon segera. Terima kasih! 😊`;

  // Buat link WhatsApp
  var url = `https://wa.me/${nomorWA}?text=${teksPesan}`;

  // Buka link di tab baru
  window.open(url, "_blank");

  // Reset form setelah mengirim pesan
  document.getElementById("nama").value = "";
  document.getElementById("pesan").value = "";
}

// Tambahkan event listener untuk menangani submit
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah reload halaman
  formWhatsapp();
});
