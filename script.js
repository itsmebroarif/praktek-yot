function formWhatsapp() {
  // Ambil nilai input
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  // Pastikan input tidak kosong
  if (nama === "" || email === "" || pesan === "") {
    alert("Harap mengisi semua form sebelum mengirim pesan.");
    return false;
  }

  // Nomor WhatsApp tujuan (ganti dengan nomor yang diinginkan)
  const nomorWA = "6285817048266"; // Ganti dengan nomor tujuan tanpa '+'

  // Format pesan
  const teksPesan = `Halo, saya ${nama}%0AEmail: ${email}%0A${pesan}`;

  // Buat link WhatsApp
  const url = `https://wa.me/${nomorWA}?text=${teksPesan}`;

  // Buka link di tab baru
  window.open(url, "_blank");

  return false; // Mencegah form submit normal
}

// Tambahkan event listener untuk menangani submit
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah reload halaman
  formWhatsapp();
});
