/**
 * GOOGLE APPS SCRIPT - REKAPITULASI DATA APLIKASI MENGENAL BUNYI
 * 
 * Petunjuk Penggunaan:
 * 1. Buka Google Sheets baru.
 * 2. Klik menu Ekstensi -> Apps Script.
 * 3. Hapus kode bawaan, lalu salin dan tempel (paste) seluruh kode di bawah ini.
 * 4. Klik ikon Simpan (Save) dan jalankan fungsi `setupSheets` untuk membuat kolom awal.
 * 5. (Opsional) Jika ingin menghubungkan dengan Aplikasi Web, deploy script ini sebagai Web App:
 *    - Klik Deploy -> New deployment.
 *    - Pilih type: Web app.
 *    - Set "Execute as" to "Me".
 *    - Set "Who has access" to "Anyone".
 *    - Copy "Web App URL" hasil deployment untuk digunakan di frontend script.js.
 */

// Fungsi untuk membuat Menu khusus di Google Sheets saat dokumen dibuka
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Aplikasi Bunyi')
    .addItem('Buat / Reset Kolom Rekapitulasi', 'setupSheets')
    .addToUi();
}

// Fungsi utama untuk inisialisasi sheet dan kolom rekapitulasi secara otomatis
function setupSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 1. Definisikan Sheet dan Kolom Masing-masing Kategori
  const sheetsConfig = [
    {
      name: 'Rekap Visual',
      headers: [
        'Waktu', 'Nama Lengkap', 'Kelas', 'Asal Sekolah', 
        'Jumlah Benar', 'Jumlah Salah', 'Skor Akhir',
        'Soal 1', 'Soal 2', 'Soal 3', 'Soal 4', 'Soal 5', 
        'Soal 6', 'Soal 7', 'Soal 8', 'Soal 9', 'Soal 10'
      ],
      themeColor: '#00d2ff' // Tema Biru Visual
    },
    {
      name: 'Rekap Auditori',
      headers: [
        'Waktu', 'Nama Lengkap', 'Kelas', 'Asal Sekolah', 
        'Jumlah Benar', 'Jumlah Salah', 'Skor Akhir',
        'Soal 1', 'Soal 2', 'Soal 3', 'Soal 4', 'Soal 5'
      ],
      themeColor: '#ff9966' // Tema Oranye Auditori
    },
    {
      name: 'Rekap Kinestetik',
      headers: [
        'Waktu', 'Nama Lengkap', 'Kelas', 'Asal Sekolah', 
        'Jumlah Benar', 'Jumlah Salah', 'Skor Akhir',
        'Benda 1', 'Benda 2', 'Benda 3', 'Benda 4', 'Benda 5',
        'Benda 6', 'Benda 7', 'Benda 8', 'Benda 9', 'Benda 10'
      ],
      themeColor: '#ff00cc' // Tema Pink Kinestetik
    }
  ];

  sheetsConfig.forEach(config => {
    let sheet = ss.getSheetByName(config.name);
    
    // Jika sheet belum ada, buat baru
    if (!sheet) {
      sheet = ss.insertSheet(config.name);
    } else {
      // Jika sudah ada, bersihkan isinya agar bisa di-reset dengan rapi
      sheet.clear();
    }
    
    // Set Header Kolom
    const headerRange = sheet.getRange(1, 1, 1, config.headers.length);
    headerRange.setValues([config.headers]);
    
    // Styling Header agar terlihat premium dan rapi
    headerRange.setFontWeight('bold');
    headerRange.setFontColor('#ffffff');
    headerRange.setBackground(config.themeColor);
    headerRange.setHorizontalAlignment('center');
    headerRange.setVerticalAlignment('middle');
    
    // Format sel & ukuran baris pertama
    sheet.setRowHeight(1, 35);
    
    // Freeze baris pertama agar header tetap terlihat saat di-scroll
    sheet.setFrozenRows(1);
    
    // Auto-resize lebar kolom agar pas dengan teks header
    for (let col = 1; col <= config.headers.length; col++) {
      sheet.autoResizeColumn(col);
    }
  });

  SpreadsheetApp.getUi().alert('Berhasil membuat & merapikan kolom rekap untuk Kelompok Visual, Auditori, dan Kinestetik!');
}

// Fungsi untuk menerima kiriman data dari aplikasi web (frontend)
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheetName = '';
    
    // Tentukan sheet berdasarkan kelompok misi
    if (data.misi === 'visual') {
      sheetName = 'Rekap Visual';
    } else if (data.misi === 'auditori') {
      sheetName = 'Rekap Auditori';
    } else if (data.misi === 'kinestetik') {
      sheetName = 'Rekap Kinestetik';
    } else {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Kategori misi tidak valid'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Sheet rekap tidak ditemukan'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Bangun baris data baru untuk ditambahkan
    const timestamp = new Date();
    const newRow = [
      timestamp,
      data.nama || '-',
      data.kelas || '-',
      data.sekolah || '-',
      data.benar || 0,
      data.salah || 0,
      data.skor || 0
    ];
    
    // Tambahkan detail jawaban di kolom-kolom berikutnya
    if (data.jawabanDetail && Array.isArray(data.jawabanDetail)) {
      data.jawabanDetail.forEach(item => {
        newRow.push(item);
      });
    }
    
    // Masukkan data ke baris terakhir sheet
    sheet.appendRow(newRow);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data berhasil direkap!'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
