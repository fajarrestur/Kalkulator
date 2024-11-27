// Referensi ke elemen display
const display = document.getElementById('display');

// Fungsi untuk menambahkan nilai ke display
function appendValue(value) {
    display.value += value; // Menggunakan parameter `value` langsung
}

// Fungsi untuk menghapus display
function clearDisplay() {
    display.value = ''; // Mengosongkan nilai di display
}

// Fungsi untuk menghitung ekspresi matematika
function calculate() {
    try {
        // Menghitung nilai ekspresi di display
        display.value = eval(display.value); 
    } catch (error) {
        display.value = "Error"; // Jika ada kesalahan, tampilkan "Error"
    }
}
