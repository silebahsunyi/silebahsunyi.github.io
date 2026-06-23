// FUNGSI NAVIGASI HALAMAN (SINGLE PAGE APPLICATION)
let currentVisualQuestion = 1;
let visualCorrectCount = 0;
let visualWrongCount = 0;
let visualUserAnswers = {};

let auditoriCorrectCount = 0;
let auditoriWrongCount = 0;
let auditoriUserAnswers = {};

let kinestetikCorrectCount = 0;
let kinestetikWrongCount = 0;
let kinestetikUserAnswers = {};


function resetVisualMission() {
    currentVisualQuestion = 1;
    visualCorrectCount = 0;
    visualWrongCount = 0;
    visualUserAnswers = {};
    
    // Tampilkan form data diri dan sembunyikan soal serta instruksi
    const formContainer = document.getElementById('visual-form-container');
    if (formContainer) formContainer.style.display = 'block';
    
    const instr = document.querySelector('#visual-view .content-instruction');
    if (instr) instr.style.display = 'none';
    
    const soal1 = document.getElementById('soal-visual-1');
    if (soal1) soal1.style.display = 'none';
    
    // Reset input form
    const inputNama = document.getElementById('visual-nama');
    const inputKelas = document.getElementById('visual-kelas');
    const inputSekolah = document.getElementById('visual-sekolah');
    if (inputNama) inputNama.value = '';
    if (inputKelas) inputKelas.value = '';
    if (inputSekolah) inputSekolah.value = '';
    
    // Sembunyikan soal 2 ke atas secara dinamis
    for (let i = 2; i <= 10; i++) {
        const soalEl = document.getElementById('soal-visual-' + i);
        if (soalEl) {
            soalEl.style.display = 'none';
        }
    }
    document.getElementById('visual-selesai').style.display = 'none';
    
    // Aktifkan kembali semua tombol pilihan visual dan kembalikan warnanya
    document.querySelectorAll('#visual-view .action-group button').forEach(btn => {
        btn.disabled = false;
        btn.style.background = 'var(--visual)';
    });
    
    // Bersihkan semua feedback di misi visual
    document.querySelectorAll('#visual-view .feedback').forEach(el => {
        el.classList.remove('show');
        el.innerHTML = '';
    });
}

function mulaiMisiVisual() {
    const nama = document.getElementById('visual-nama').value.trim();
    const kelas = document.getElementById('visual-kelas').value.trim();
    const sekolah = document.getElementById('visual-sekolah').value.trim();
    
    if (!nama) {
        alert("Silakan masukkan Nama Lengkap terlebih dahulu!");
        return;
    }
    
    // Sembunyikan form dan tampilkan instruksi beserta soal pertama
    const formContainer = document.getElementById('visual-form-container');
    if (formContainer) formContainer.style.display = 'none';
    
    const instr = document.querySelector('#visual-view .content-instruction');
    if (instr) instr.style.display = 'block';
    
    const soal1 = document.getElementById('soal-visual-1');
    if (soal1) soal1.style.display = 'block';
}

function resetAuditoriMission() {
    auditoriCorrectCount = 0;
    auditoriWrongCount = 0;
    auditoriUserAnswers = {};
    
    // Tampilkan form data diri dan sembunyikan soal serta instruksi
    const formContainer = document.getElementById('auditori-form-container');
    if (formContainer) formContainer.style.display = 'block';
    
    const instr = document.querySelector('#auditori-view .content-instruction');
    if (instr) instr.style.display = 'none';
    
    const soal1 = document.getElementById('soal-auditori-1');
    if (soal1) soal1.style.display = 'none';
    
    // Reset input form
    const inputNama = document.getElementById('auditori-nama');
    const inputKelas = document.getElementById('auditori-kelas');
    const inputSekolah = document.getElementById('auditori-sekolah');
    if (inputNama) inputNama.value = '';
    if (inputKelas) inputKelas.value = '';
    if (inputSekolah) inputSekolah.value = '';
    
    // Sembunyikan soal 2 ke atas secara dinamis
    for (let i = 2; i <= 10; i++) {
        const soalEl = document.getElementById('soal-auditori-' + i);
        if (soalEl) {
            soalEl.style.display = 'none';
        }
    }
    document.getElementById('auditori-selesai').style.display = 'none';
    
    // Aktifkan kembali semua tombol pilihan auditori dan kembalikan warnanya
    document.querySelectorAll('#auditori-view .choice-card-auditory').forEach(btn => {
        btn.disabled = false;
        btn.style.background = 'var(--glass)';
    });
    
    // Bersihkan semua feedback di misi auditori
    document.querySelectorAll('#auditori-view .feedback').forEach(el => {
        el.classList.remove('show');
        el.innerHTML = '';
    });
}

function mulaiMisiAuditori() {
    const nama = document.getElementById('auditori-nama').value.trim();
    const kelas = document.getElementById('auditori-kelas').value.trim();
    const sekolah = document.getElementById('auditori-sekolah').value.trim();
    
    if (!nama) {
        alert("Silakan masukkan Nama Lengkap terlebih dahulu!");
        return;
    }
    
    // Sembunyikan form dan tampilkan instruksi beserta soal pertama
    const formContainer = document.getElementById('auditori-form-container');
    if (formContainer) formContainer.style.display = 'none';
    
    const instr = document.querySelector('#auditori-view .content-instruction');
    if (instr) instr.style.display = 'block';
    
    const soal1 = document.getElementById('soal-auditori-1');
    if (soal1) soal1.style.display = 'block';
}

function resetKinestheticMission() {
    kinestetikCorrectCount = 0;
    kinestetikWrongCount = 0;
    kinestetikUserAnswers = {};

    // Tampilkan form data diri dan sembunyikan gameplay serta selesai
    const formContainer = document.getElementById('kinestetik-form-container');
    if (formContainer) formContainer.style.display = 'block';
    
    const gameplayContainer = document.getElementById('kinestetik-gameplay-container');
    if (gameplayContainer) gameplayContainer.style.display = 'none';
    
    const selesaiContainer = document.getElementById('kinestetik-selesai');
    if (selesaiContainer) selesaiContainer.style.display = 'none';

    // Reset input form
    const inputNama = document.getElementById('kinestetik-nama');
    const inputKelas = document.getElementById('kinestetik-kelas');
    const inputSekolah = document.getElementById('kinestetik-sekolah');
    if (inputNama) inputNama.value = '';
    if (inputKelas) inputKelas.value = '';
    if (inputSekolah) inputSekolah.value = '';

    // Kembalikan semua item ke source container
    const sourceContainer = document.getElementById('source-container');
    const dragItems = document.querySelectorAll('.drag-item');
    if (sourceContainer && dragItems.length > 0) {
        dragItems.forEach(item => {
            sourceContainer.appendChild(item);
        });
    }
    
    const feedback = document.getElementById('feedback-kinestetik');
    if (feedback) {
        feedback.classList.remove('show');
        feedback.innerHTML = '';
    }
}

function mulaiMisiKinestetik() {
    const nama = document.getElementById('kinestetik-nama').value.trim();
    const kelas = document.getElementById('kinestetik-kelas').value.trim();
    const sekolah = document.getElementById('kinestetik-sekolah').value.trim();
    
    if (!nama) {
        alert("Silakan masukkan Nama Lengkap terlebih dahulu!");
        return;
    }
    
    // Sembunyikan form dan tampilkan gameplay
    const formContainer = document.getElementById('kinestetik-form-container');
    if (formContainer) formContainer.style.display = 'none';
    
    const gameplayContainer = document.getElementById('kinestetik-gameplay-container');
    if (gameplayContainer) gameplayContainer.style.display = 'block';
}

function bukaHalaman(idHalaman) {
    // Sembunyikan semua halaman
    document.querySelectorAll('.view-page').forEach(page => {
        page.classList.remove('active');
    });
    // Tampilkan halaman yang dituju
    document.getElementById(idHalaman).classList.add('active');
    
    // Reset state jika membuka misi visual/auditori/kinestetik
    if (idHalaman === 'visual-view') {
        resetVisualMission();
    } else if (idHalaman === 'auditori-view') {
        resetAuditoriMission();
    } else if (idHalaman === 'kinestetik-view') {
        resetKinestheticMission();
    }
    
    // Gulir ke atas
    window.scrollTo(0, 0);
}

function kembaliKeBeranda() {
    // Sembunyikan semua halaman
    document.querySelectorAll('.view-page').forEach(page => {
        page.classList.remove('active');
    });
    // Bersihkan semua feedback jika kembali ke beranda
    document.querySelectorAll('.feedback').forEach(el => {
        el.classList.remove('show');
        el.innerHTML = '';
    });
    // Tampilkan kembali beranda
    document.getElementById('home-view').classList.add('active');
    window.scrollTo(0, 0);
}


// FUNGSI FEEDBACK UMUM
function showFeedback(elementId, isCorrect, message) {
    const el = document.getElementById(elementId);
    el.classList.add('show');
    
    if (isCorrect) {
        el.style.color = '#a8ff78'; 
        el.style.border = '1px solid rgba(168, 255, 120, 0.3)';
        el.innerHTML = '<i class="fa-solid fa-circle-check"></i> ' + message;
    } else {
        el.style.color = '#ff4b2b'; 
        el.style.border = '1px solid rgba(255, 75, 43, 0.3)';
        el.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> ' + message;
        
        // Efek getar
        el.style.animation = 'shake 0.5s';
        setTimeout(() => el.style.animation = '', 500);
    }
}


// LOGIKA KELOMPOK VISUAL & AUDITORI
function cekJawaban(mode, jawaban, clickedBtn) {
    const jawabanBenar = {
        'visual-1': 'dipetik',
        'visual-2': 'dipukul',
        'visual-3': 'digoyangkan',
        'visual-4': 'ditiup',
        'visual-5': 'digesek',
        'visual-6': 'digoyangkan',
        'visual-7': 'dipukul',
        'visual-8': 'dipukul',
        'visual-9': 'dipukul',
        'visual-10': 'ditiup',
        'auditori-1': 'peluit',
        'auditori-2': 'drum',
        'auditori-3': 'angklung',
        'auditori-4': 'gong',
        'auditori-5': 'harpa',
        'auditori-6': 'seruling',
        'auditori-7': 'ketipung',
        'auditori-8': 'biola',
        'auditori-9': 'terompet',
        'auditori-10': 'piano'
    };

    if (mode.startsWith('visual-')) {
        const container = document.getElementById('soal-' + mode);
        if (!container) return;
        const buttons = container.querySelectorAll('.action-btn');
        
        // Nonaktifkan semua tombol pada soal ini agar tidak bisa diklik berulang
        buttons.forEach(btn => {
            btn.disabled = true;
        });

        const isCorrect = (jawaban === jawabanBenar[mode]);
        const qNum = parseInt(mode.split('-')[1]);
        visualUserAnswers[qNum] = {
            jawabanUser: jawaban,
            jawabanBenar: jawabanBenar[mode],
            status: isCorrect ? 'Benar' : 'Salah'
        };

        if (isCorrect) {
            playSoundEffect('benar');
            clickedBtn.style.background = '#2e7d32'; // Warna hijau jika benar
            showFeedback('feedback-' + mode, true, 'Hebat! Jawabanmu sangat tepat.');
            speakIndonesian('Hebat! Jawabanmu sangat tepat.');
            visualCorrectCount++;
        } else {
            playSoundEffect('salah');
            clickedBtn.style.background = '#c62828'; // Warna merah jika salah
            
            // Cari tombol jawaban yang benar dan warnai hijau
            buttons.forEach(btn => {
                if (btn.getAttribute('data-jawaban') === jawabanBenar[mode]) {
                    btn.style.background = '#2e7d32';
                }
            });
            
            showFeedback('feedback-' + mode, false, 'Ups, coba perhatikan kembali ya!');
            speakIndonesian('Ups, coba perhatikan kembali ya!');
            visualWrongCount++;
        }

        // Lanjutkan ke soal berikutnya setelah jeda singkat
        const currentNum = parseInt(mode.split('-')[1]);
        setTimeout(() => {
            const currentSoal = document.getElementById('soal-visual-' + currentNum);
            if (currentSoal) {
                currentSoal.style.display = 'none';
            }
            
            const nextNum = currentNum + 1;
            const nextSoal = document.getElementById('soal-visual-' + nextNum);
            if (nextSoal) {
                nextSoal.style.display = 'block';
            } else {
                const selesaiContainer = document.getElementById('visual-selesai');
                if (selesaiContainer) {
                    // Update skor akhir visual
                    const score = visualCorrectCount * 10;
                    document.getElementById('visual-benar-count').innerText = visualCorrectCount;
                    document.getElementById('visual-salah-count').innerText = visualWrongCount;
                    document.getElementById('visual-skor').innerText = score;
                    selesaiContainer.style.display = 'block';

                    // Kirim hasil ke Google Sheets
                    kirimDataKeSheets({
                        misi: 'visual',
                        nama: document.getElementById('visual-nama').value.trim(),
                        kelas: document.getElementById('visual-kelas').value.trim(),
                        sekolah: document.getElementById('visual-sekolah').value.trim(),
                        benar: visualCorrectCount,
                        salah: visualWrongCount,
                        skor: score,
                        jawabanDetail: [
                            visualUserAnswers[1]?.jawabanUser || '-',
                            visualUserAnswers[2]?.jawabanUser || '-',
                            visualUserAnswers[3]?.jawabanUser || '-',
                            visualUserAnswers[4]?.jawabanUser || '-',
                            visualUserAnswers[5]?.jawabanUser || '-',
                            visualUserAnswers[6]?.jawabanUser || '-',
                            visualUserAnswers[7]?.jawabanUser || '-',
                            visualUserAnswers[8]?.jawabanUser || '-',
                            visualUserAnswers[9]?.jawabanUser || '-',
                            visualUserAnswers[10]?.jawabanUser || '-'
                        ]
                    });
                }
            }
        }, 1200);
        
    } else if (mode.startsWith('auditori-')) {
        const container = document.getElementById('soal-' + mode);
        if (!container) return;
        const buttons = container.querySelectorAll('.choice-card-auditory');
        
        // Nonaktifkan semua tombol pada soal ini agar tidak bisa diklik berulang
        buttons.forEach(btn => {
            btn.disabled = true;
        });

        const isCorrect = (jawaban === jawabanBenar[mode]);
        const qNum = parseInt(mode.split('-')[1]);
        auditoriUserAnswers[qNum] = {
            jawabanUser: jawaban,
            jawabanBenar: jawabanBenar[mode],
            status: isCorrect ? 'Benar' : 'Salah'
        };

        if (isCorrect) {
            playSoundEffect('benar');
            clickedBtn.style.background = '#2e7d32'; // Warna hijau jika benar
            showFeedback('feedback-' + mode, true, 'Hebat! Jawabanmu sangat tepat.');
            speakIndonesian('Hebat! Jawabanmu sangat tepat.');
            auditoriCorrectCount++;
        } else {
            playSoundEffect('salah');
            clickedBtn.style.background = '#c62828'; // Warna merah jika salah
            
            // Cari tombol jawaban yang benar dan warnai hijau
            buttons.forEach(btn => {
                if (btn.getAttribute('data-jawaban') === jawabanBenar[mode]) {
                    btn.style.background = '#2e7d32';
                }
            });
            
            showFeedback('feedback-' + mode, false, 'Ups, coba perhatikan kembali ya!');
            speakIndonesian('Ups, coba perhatikan kembali ya!');
            auditoriWrongCount++;
        }

        // Lanjutkan ke soal berikutnya setelah jeda singkat
        const currentNum = parseInt(mode.split('-')[1]);
        setTimeout(() => {
            const currentSoal = document.getElementById('soal-auditori-' + currentNum);
            if (currentSoal) {
                currentSoal.style.display = 'none';
            }
            
            const nextNum = currentNum + 1;
            const nextSoal = document.getElementById('soal-auditori-' + nextNum);
            if (nextSoal) {
                nextSoal.style.display = 'block';
            } else {
                const selesaiContainer = document.getElementById('auditori-selesai');
                if (selesaiContainer) {
                    // Update skor akhir auditori
                    const score = auditoriCorrectCount * 10;
                    document.getElementById('auditori-benar-count').innerText = auditoriCorrectCount;
                    document.getElementById('auditori-salah-count').innerText = auditoriWrongCount;
                    document.getElementById('auditori-skor').innerText = score;
                    selesaiContainer.style.display = 'block';

                    // Kirim hasil ke Google Sheets
                    kirimDataKeSheets({
                        misi: 'auditori',
                        nama: document.getElementById('auditori-nama').value.trim(),
                        kelas: document.getElementById('auditori-kelas').value.trim(),
                        sekolah: document.getElementById('auditori-sekolah').value.trim(),
                        benar: auditoriCorrectCount,
                        salah: auditoriWrongCount,
                        skor: score,
                        jawabanDetail: [
                            auditoriUserAnswers[1]?.jawabanUser || '-',
                            auditoriUserAnswers[2]?.jawabanUser || '-',
                            auditoriUserAnswers[3]?.jawabanUser || '-',
                            auditoriUserAnswers[4]?.jawabanUser || '-',
                            auditoriUserAnswers[5]?.jawabanUser || '-',
                            auditoriUserAnswers[6]?.jawabanUser || '-',
                            auditoriUserAnswers[7]?.jawabanUser || '-',
                            auditoriUserAnswers[8]?.jawabanUser || '-',
                            auditoriUserAnswers[9]?.jawabanUser || '-',
                            auditoriUserAnswers[10]?.jawabanUser || '-'
                        ]
                    });
                }
            }
        }, 1200);
    }
}


// LOGIKA AUDIO MENGGUNAKAN FILE MP3
let currentAudio = null;

function putarSuara(tipe) {
    // Hentikan audio yang sedang diputar jika ada
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    const alertText = document.getElementById('custom-alert-text');
    
    if (tipe === 'peluit') {
        currentAudio = new Audio('suara_peluit.mp3');
        if (alertText) alertText.innerText = '"Priiiit! Priiiit!"';
    } else if (tipe === 'drum') {
        currentAudio = new Audio('suara_drumb.mp3');
        if (alertText) alertText.innerText = '"Dug! Tak! Dug! Tak!"';
    } else if (tipe === 'angklung') {
        currentAudio = new Audio('suara_angklung.mp3');
        if (alertText) alertText.innerText = '"Klung! Klung! Klung!"';
    } else if (tipe === 'gong') {
        currentAudio = new Audio('suara_gong.mp3');
        if (alertText) alertText.innerText = '"Gooong...!"';
    } else if (tipe === 'harpa') {
        currentAudio = new Audio('suara_harpa.mp3');
        if (alertText) alertText.innerText = '"Tring-tring-tring...!"';
    } else if (tipe === 'seruling') {
        currentAudio = new Audio('suara_seruling.mp3');
        if (alertText) alertText.innerText = '"Tuuut-tuuut-tuuut...!"';
    } else if (tipe === 'ketipung') {
        currentAudio = new Audio('suara_ketipung.mp3');
        if (alertText) alertText.innerText = '"Tak-tung-tak-tung...!"';
    } else if (tipe === 'biola') {
        currentAudio = new Audio('suara_biola.mp3');
        if (alertText) alertText.innerText = '"Ngeee-ngeee-ngeee...!"';
    } else if (tipe === 'terompet') {
        currentAudio = new Audio('suara_terompet.mp3');
        if (alertText) alertText.innerText = '"Preee-preee-preee...!"';
    } else if (tipe === 'piano') {
        currentAudio = new Audio('suara_piano.mp3');
        if (alertText) alertText.innerText = '"Teng-teng-teng...!"';
    }

    document.getElementById('custom-alert').style.display = 'flex';

    if (currentAudio) {
        currentAudio.play().catch(error => {
            console.log("Audio tidak bisa diputar:", error);
            let filename = 'suara_' + tipe + '.mp3';
            if (tipe === 'drum') filename = 'suara_drumb.mp3';
            alert("Gagal memutar suara. Pastikan file MP3 '" + filename + "' tersedia di folder.");
        });
    }
}

function tutupSuara() {
    document.getElementById('custom-alert').style.display = 'none';
    if (currentAudio) {
        currentAudio.pause();
    }
}


// LOGIKA DRAG AND DROP KINESTETIK
let draggedItem = null;

// Tambahkan event listener saat DOM selesai dimuat agar elemen drag terdeteksi dengan benar
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.drag-item').forEach(item => {
        item.addEventListener('dragstart', function(e) {
            draggedItem = this;
            setTimeout(() => this.style.opacity = '0.5', 0); 
        });

        item.addEventListener('dragend', function() {
            setTimeout(() => this.style.opacity = '1', 0);
            draggedItem = null;
        });
    });

    document.querySelectorAll('.drop-zone, #source-container').forEach(zone => {
        zone.addEventListener('dragover', function(e) {
            e.preventDefault(); 
            this.classList.add('drag-over');
        });

        zone.addEventListener('dragleave', function() {
            this.classList.remove('drag-over');
        });

        zone.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('drag-over');
            if (draggedItem) {
                this.appendChild(draggedItem);
            }
        });
    });
});

function cekDragDrop() {
    const sisaItem = document.getElementById('source-container').querySelectorAll('.drag-item').length;
    
    if (sisaItem > 0) {
        playSoundEffect('salah');
        showFeedback('feedback-kinestetik', false, 'Geser semua benda ke dalam dua kotak di bawah terlebih dahulu!');
        speakIndonesian('Geser semua benda ke dalam dua kotak di bawah terlebih dahulu!');
        return;
    }

    let correctCount = 0;
    let wrongCount = 0;
    
    // Iterasi semua item di zone-berbunyi
    document.getElementById('zone-berbunyi').querySelectorAll('.drag-item').forEach((item, index) => {
        const name = item.querySelector('span').innerText;
        const correctAnswer = item.getAttribute('data-jawaban'); // 'berbunyi' or 'tidak'
        const isCorrect = (correctAnswer === 'berbunyi');
        
        if (isCorrect) {
            correctCount++;
        } else {
            wrongCount++;
        }
        
        kinestetikUserAnswers[index + 1] = {
            namaBenda: name,
            jawabanBenar: 'Benda Berbunyi',
            jawabanUser: 'Benda Berbunyi',
            status: isCorrect ? 'Benar' : 'Salah'
        };
    });

    // Iterasi semua item di zone-tidak
    const offset = document.getElementById('zone-berbunyi').querySelectorAll('.drag-item').length;
    document.getElementById('zone-tidak').querySelectorAll('.drag-item').forEach((item, index) => {
        const name = item.querySelector('span').innerText;
        const correctAnswer = item.getAttribute('data-jawaban'); // 'berbunyi' or 'tidak'
        const isCorrect = (correctAnswer === 'tidak');
        
        if (isCorrect) {
            correctCount++;
        } else {
            wrongCount++;
        }
        
        kinestetikUserAnswers[offset + index + 1] = {
            namaBenda: name,
            jawabanBenar: correctAnswer === 'berbunyi' ? 'Benda Berbunyi' : 'Tidak Berbunyi',
            jawabanUser: 'Tidak Berbunyi',
            status: isCorrect ? 'Benar' : 'Salah'
        };
    });

    kinestetikCorrectCount = correctCount;
    kinestetikWrongCount = wrongCount;

    if (correctCount === 10) {
        playSoundEffect('benar');
        showFeedback('feedback-kinestetik', true, 'Luar biasa! Kamu berhasil mengelompokkan semuanya dengan sempurna.');
        speakIndonesian('Luar biasa! Kamu berhasil mengelompokkan semuanya dengan sempurna.');
    } else {
        playSoundEffect('salah');
        showFeedback('feedback-kinestetik', false, `Misi selesai! Kamu mengelompokkan ${correctCount} benda dengan benar dan ${wrongCount} salah.`);
        speakIndonesian(`Misi selesai! Kamu mengelompokkan ${correctCount} benda dengan benar dan ${wrongCount} salah.`);
    }

    // Pindah ke layar selesai setelah jeda singkat
    setTimeout(() => {
        const gameplayContainer = document.getElementById('kinestetik-gameplay-container');
        if (gameplayContainer) gameplayContainer.style.display = 'none';
        
        const selesaiContainer = document.getElementById('kinestetik-selesai');
        if (selesaiContainer) {
            const score = kinestetikCorrectCount * 10;
            document.getElementById('kinestetik-benar-count').innerText = kinestetikCorrectCount;
            document.getElementById('kinestetik-salah-count').innerText = kinestetikWrongCount;
            document.getElementById('kinestetik-skor').innerText = score;
            selesaiContainer.style.display = 'block';

            // Kirim hasil ke Google Sheets
            kirimDataKeSheets({
                misi: 'kinestetik',
                nama: document.getElementById('kinestetik-nama').value.trim(),
                kelas: document.getElementById('kinestetik-kelas').value.trim(),
                sekolah: document.getElementById('kinestetik-sekolah').value.trim(),
                benar: kinestetikCorrectCount,
                salah: kinestetikWrongCount,
                skor: score,
                jawabanDetail: [
                    kinestetikUserAnswers[1]?.jawabanUser || '-',
                    kinestetikUserAnswers[2]?.jawabanUser || '-',
                    kinestetikUserAnswers[3]?.jawabanUser || '-',
                    kinestetikUserAnswers[4]?.jawabanUser || '-',
                    kinestetikUserAnswers[5]?.jawabanUser || '-',
                    kinestetikUserAnswers[6]?.jawabanUser || '-',
                    kinestetikUserAnswers[7]?.jawabanUser || '-',
                    kinestetikUserAnswers[8]?.jawabanUser || '-',
                    kinestetikUserAnswers[9]?.jawabanUser || '-',
                    kinestetikUserAnswers[10]?.jawabanUser || '-'
                ]
            });
        }
    }, 2000);
}

// Animasi Shake
const style = document.createElement('style');
style.innerHTML = `
    @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        50% { transform: translateX(5px); }
        75% { transform: translateX(-5px); }
        100% { transform: translateX(0); }
    }
`;
document.head.appendChild(style);


// FUNGSI EFEK SUARA SYNTHESIZER (WEB AUDIO API - BEBAS DEPENDENSI)
function playSoundEffect(type) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();

        if (type === 'benar') {
            const now = ctx.currentTime;
            
            // Nada pertama (E6)
            const osc1 = ctx.createOscillator();
            const gain1 = ctx.createGain();
            osc1.type = 'sine';
            osc1.frequency.setValueAtTime(1318.51, now);
            gain1.gain.setValueAtTime(0.15, now);
            gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
            osc1.connect(gain1);
            gain1.connect(ctx.destination);
            osc1.start(now);
            osc1.stop(now + 0.15);

            // Nada kedua (A6) setelah jeda sangat pendek
            const osc2 = ctx.createOscillator();
            const gain2 = ctx.createGain();
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(1760.00, now + 0.08);
            gain2.gain.setValueAtTime(0.15, now + 0.08);
            gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
            osc2.connect(gain2);
            gain2.connect(ctx.destination);
            osc2.start(now + 0.08);
            osc2.stop(now + 0.3);

        } else if (type === 'salah') {
            const now = ctx.currentTime;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(220, now); // A3
            osc.frequency.linearRampToValueAtTime(110, now + 0.25); // Turun satu oktaf
            
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.start(now);
            osc.stop(now + 0.25);
        }
    } catch (e) {
        console.warn("AudioContext diblokir atau tidak didukung browser:", e);
    }
}


// FUNGSI TEXT-TO-SPEECH (SUARA PEREMPUAN BAHASA INDONESIA)
function speakIndonesian(text) {
    try {
        if (!('speechSynthesis' in window)) return;
        
        // Hentikan pembicaraan yang sedang berjalan agar tidak menumpuk
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'id-ID';
        
        // Dapatkan semua opsi suara yang didukung sistem operasi/browser
        const voices = window.speechSynthesis.getVoices();
        
        // Cari suara perempuan Indonesia yang cocok
        const indonesianFemaleVoice = voices.find(voice => 
            voice.lang.startsWith('id') && 
            (voice.name.toLowerCase().includes('female') || 
             voice.name.toLowerCase().includes('google') || 
             voice.name.toLowerCase().includes('zira') || 
             voice.name.toLowerCase().includes('gadis') || 
             voice.name.toLowerCase().includes('indonesia') || 
             voice.name.toLowerCase().includes('damayanti') || 
             voice.name.toLowerCase().includes('sintesa'))
        ) || voices.find(voice => voice.lang.startsWith('id'));
        
        if (indonesianFemaleVoice) {
            utterance.voice = indonesianFemaleVoice;
        }
        
        // Mengatur pitch & speed agar terdengar ramah, menyenangkan, dan feminin bagi anak-anak
        utterance.pitch = 1.25; // Pitch dinaikkan agar terdengar lebih ramah/feminin
        utterance.rate = 0.95;  // Sedikit diperlambat agar lebih jelas didengar anak-anak
        
        window.speechSynthesis.speak(utterance);
    } catch (e) {
        console.warn("Gagal menjalankan Text-to-Speech:", e);
    }
}

// Inisialisasi awal pengenalan suara browser agar daftar suara siap diakses
if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
    }
}

// FUNGSI UNDUH HASIL KE WORD (.DOC) DALAM BENTUK TABEL RAPI
function unduhHasilWord() {
    // Dapatkan data diri yang telah diisi
    const nama = document.getElementById('visual-nama').value.trim() || '-';
    const kelas = document.getElementById('visual-kelas').value.trim() || '-';
    const sekolah = document.getElementById('visual-sekolah').value.trim() || '-';

    // Dapatkan tanggal tes saat ini
    const dateStr = new Date().toLocaleDateString('id-ID', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    const instruments = [
        'Gitar', 'Drum', 'Lonceng', 'Terompet', 'Biola', 
        'Angklung', 'Gunungan', 'Darbuka', 'Gong', 'Pianika'
    ];
    const correctAnswers = [
        'Dipetik', 'Dipukul', 'Digoyangkan', 'Ditiup', 'Digesek', 
        'Digoyangkan', 'Dipukul', 'Dipukul', 'Dipukul', 'Ditiup'
    ];

    let rowsHtml = '';
    for (let i = 0; i < 10; i++) {
        const qNum = i + 1;
        const ans = visualUserAnswers[qNum] || { jawabanUser: '-', status: 'Belum Dijawab' };
        const statusColor = ans.status === 'Benar' ? '#2e7d32' : '#c62828';
        const userAnsText = ans.jawabanUser ? ans.jawabanUser.charAt(0).toUpperCase() + ans.jawabanUser.slice(1) : '-';
        
        rowsHtml += `
        <tr>
            <td style="text-align: center; border: 1px solid #cccccc; padding: 8px;">${qNum}</td>
            <td style="border: 1px solid #cccccc; padding: 8px;">${instruments[i]}</td>
            <td style="border: 1px solid #cccccc; padding: 8px;">${correctAnswers[i]}</td>
            <td style="border: 1px solid #cccccc; padding: 8px;">${userAnsText}</td>
            <td style="text-align: center; border: 1px solid #cccccc; padding: 8px; color: ${statusColor}; font-weight: bold;">${ans.status}</td>
        </tr>
        `;
    }

    const htmlContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
        <title>Hasil Misi Visual</title>
        <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333333; padding: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 15px; }
            th, td { border: 1px solid #cccccc; padding: 10px; text-align: left; }
            th { background-color: #f2f2f2; font-weight: bold; color: #333333; }
        </style>
    </head>
    <body>
        <!-- KOP HEADER DENGAN DATA DIRI DI SEBELAH KIRI & NILAI AKHIR DI SEBELAH KANAN -->
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border: none; margin-bottom: 25px;">
            <tr>
                <td style="border: none; width: 70%; padding: 0; text-align: left; vertical-align: top;">
                    <h2 style="color: #1f5f9c; margin: 0 0 5px 0; font-size: 1.6em;">LAPORAN HASIL BELAJAR</h2>
                    <h3 style="margin: 0 0 15px 0; color: #4a5568; font-size: 1.1em;">APLIKASI MENGENAL BUNYI (MISI VISUAL)</h3>
                    
                    <!-- Tabel Data Diri -->
                    <table border="0" cellpadding="2" cellspacing="0" style="border: none; font-size: 0.95em; color: #333333; width: 100%;">
                        <tr>
                            <td style="border: none; padding: 3px 0; font-weight: bold; width: 110px;">Nama Lengkap</td>
                            <td style="border: none; padding: 3px 0; width: 15px;">:</td>
                            <td style="border: none; padding: 3px 0;">${nama}</td>
                        </tr>
                        <tr>
                            <td style="border: none; padding: 3px 0; font-weight: bold;">Kelas</td>
                            <td style="border: none; padding: 3px 0;">:</td>
                            <td style="border: none; padding: 3px 0;">${kelas}</td>
                        </tr>
                        <tr>
                            <td style="border: none; padding: 3px 0; font-weight: bold;">Asal Sekolah</td>
                            <td style="border: none; padding: 3px 0;">:</td>
                            <td style="border: none; padding: 3px 0;">${sekolah}</td>
                        </tr>
                        <tr>
                            <td style="border: none; padding: 3px 0; font-weight: bold;">Tanggal Tes</td>
                            <td style="border: none; padding: 3px 0;">:</td>
                            <td style="border: none; padding: 3px 0;">${dateStr}</td>
                        </tr>
                    </table>
                </td>
                <td style="border: none; width: 30%; text-align: right; vertical-align: top; padding: 0;">
                    <div style="background-color: #1f5f9c; border-radius: 8px; padding: 12px 15px; color: white; display: inline-block; text-align: center; min-width: 110px; border: 1px solid #1a5083;">
                        <span style="font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; color: #e6f7ff; font-weight: bold;">Nilai Akhir</span>
                        <span style="font-size: 2.2em; font-weight: bold; line-height: 1.1; display: block; margin-top: 2px;">${visualCorrectCount * 10}</span>
                    </div>
                </td>
            </tr>
        </table>
        
        <hr style="border: 1px dashed #cccccc; margin: 10px 0 20px 0;">
        
        <h4 style="color: #1f5f9c; margin: 0 0 10px 0; font-size: 1.1em;">Rincian Jawaban Soal 1 - 10:</h4>
        <table style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr style="background-color: #1f5f9c; color: white;">
                    <th style="width: 10%; text-align: center; color: white; background-color: #1f5f9c; border: 1px solid #cccccc;">No</th>
                    <th style="width: 25%; color: white; background-color: #1f5f9c; border: 1px solid #cccccc;">Alat Musik</th>
                    <th style="width: 25%; color: white; background-color: #1f5f9c; border: 1px solid #cccccc;">Kunci Jawaban</th>
                    <th style="width: 25%; color: white; background-color: #1f5f9c; border: 1px solid #cccccc;">Jawaban Anda</th>
                    <th style="width: 15%; text-align: center; color: white; background-color: #1f5f9c; border: 1px solid #cccccc;">Hasil</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHtml}
            </tbody>
        </table>

        <br>
        
        <!-- RINGKASAN SKOR -->
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px; max-width: 400px;">
            <tr style="background-color: #f9f9f9;">
                <td style="padding: 8px; border: 1px solid #cccccc; font-weight: bold; width: 60%;">Total Jawaban Benar</td>
                <td style="padding: 8px; border: 1px solid #cccccc; text-align: right; color: #2e7d32; font-weight: bold; width: 40%;">${visualCorrectCount} Soal</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
                <td style="padding: 8px; border: 1px solid #cccccc; font-weight: bold;">Total Jawaban Salah</td>
                <td style="padding: 8px; border: 1px solid #cccccc; text-align: right; color: #c62828; font-weight: bold;">${visualWrongCount} Soal</td>
            </tr>
        </table>
        
        <p style="margin-top: 50px; text-align: right; font-size: 0.85em; font-style: italic; color: #666666;">Disiapkan secara otomatis oleh Aplikasi Mengenal Bunyi</p>
    </body>
    </html>
    `;

    const blob = new Blob(['\ufeff' + htmlContent], {
        type: 'application/msword'
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Hasil_Misi_Visual_${nama.replace(/\s+/g, '_')}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function unduhHasilAuditoriWord() {
    const nama = document.getElementById('auditori-nama').value.trim() || '-';
    const kelas = document.getElementById('auditori-kelas').value.trim() || '-';
    const sekolah = document.getElementById('auditori-sekolah').value.trim() || '-';

    const dateStr = new Date().toLocaleDateString('id-ID', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    const sounds = [
        'Suara Peluit', 'Suara Drum', 'Suara Angklung', 'Suara Gong', 'Suara Harpa', 'Suara Seruling', 'Suara Ketipung', 'Suara Biola', 'Suara Terompet', 'Suara Piano'
    ];
    const correctAnswers = [
        'Peluit', 'Drum', 'Angklung', 'Gong', 'Harpa', 'Seruling', 'Ketipung', 'Biola', 'Terompet', 'Piano'
    ];

    let rowsHtml = '';
    for (let i = 0; i < 10; i++) {
        const qNum = i + 1;
        const ans = auditoriUserAnswers[qNum] || { jawabanUser: '-', status: 'Belum Dijawab' };
        const statusColor = ans.status === 'Benar' ? '#2e7d32' : '#c62828';
        const userAnsText = ans.jawabanUser ? ans.jawabanUser.charAt(0).toUpperCase() + ans.jawabanUser.slice(1) : '-';
        
        rowsHtml += `
        <tr>
            <td style="text-align: center; border: 1px solid #cccccc; padding: 8px;">${qNum}</td>
            <td style="border: 1px solid #cccccc; padding: 8px;">${sounds[i]}</td>
            <td style="border: 1px solid #cccccc; padding: 8px;">${correctAnswers[i]}</td>
            <td style="border: 1px solid #cccccc; padding: 8px;">${userAnsText}</td>
            <td style="text-align: center; border: 1px solid #cccccc; padding: 8px; color: ${statusColor}; font-weight: bold;">${ans.status}</td>
        </tr>
        `;
    }

    const htmlContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
        <title>Hasil Misi Auditori</title>
        <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333333; padding: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 15px; }
            th, td { border: 1px solid #cccccc; padding: 10px; text-align: left; }
            th { background-color: #f2f2f2; font-weight: bold; color: #333333; }
        </style>
    </head>
    <body>
        <!-- KOP HEADER DENGAN DATA DIRI DI SEBELAH KIRI & NILAI AKHIR DI SEBELAH KANAN -->
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border: none; margin-bottom: 25px;">
            <tr>
                <td style="border: none; width: 70%; padding: 0; text-align: left; vertical-align: top;">
                    <h2 style="color: #ff9966; margin: 0 0 5px 0; font-size: 1.6em;">LAPORAN HASIL BELAJAR</h2>
                    <h3 style="margin: 0 0 15px 0; color: #4a5568; font-size: 1.1em;">APLIKASI MENGENAL BUNYI (MISI AUDITORI)</h3>
                    
                    <!-- Tabel Data Diri -->
                    <table border="0" cellpadding="2" cellspacing="0" style="border: none; font-size: 0.95em; color: #333333; width: 100%;">
                        <tr>
                            <td style="border: none; padding: 3px 0; font-weight: bold; width: 110px;">Nama Lengkap</td>
                            <td style="border: none; padding: 3px 0; width: 15px;">:</td>
                            <td style="border: none; padding: 3px 0;">${nama}</td>
                        </tr>
                        <tr>
                            <td style="border: none; padding: 3px 0; font-weight: bold;">Kelas</td>
                            <td style="border: none; padding: 3px 0;">:</td>
                            <td style="border: none; padding: 3px 0;">${kelas}</td>
                        </tr>
                        <tr>
                            <td style="border: none; padding: 3px 0; font-weight: bold;">Asal Sekolah</td>
                            <td style="border: none; padding: 3px 0;">:</td>
                            <td style="border: none; padding: 3px 0;">${sekolah}</td>
                        </tr>
                        <tr>
                            <td style="border: none; padding: 3px 0; font-weight: bold;">Tanggal Tes</td>
                            <td style="border: none; padding: 3px 0;">:</td>
                            <td style="border: none; padding: 3px 0;">${dateStr}</td>
                        </tr>
                    </table>
                </td>
                <td style="border: none; width: 30%; text-align: right; vertical-align: top; padding: 0;">
                    <div style="background-color: #ff9966; border-radius: 8px; padding: 12px 15px; color: white; display: inline-block; text-align: center; min-width: 110px; border: 1px solid #e68550;">
                        <span style="font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; color: #fff0e6; font-weight: bold;">Nilai Akhir</span>
                        <span style="font-size: 2.2em; font-weight: bold; line-height: 1.1; display: block; margin-top: 2px;">${auditoriCorrectCount * 10}</span>
                    </div>
                </td>
            </tr>
        </table>
        
        <hr style="border: 1px dashed #cccccc; margin: 10px 0 20px 0;">
        
        <h4 style="color: #ff9966; margin: 0 0 10px 0; font-size: 1.1em;">Rincian Jawaban Soal 1 - 10:</h4>
        <table style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr style="background-color: #ff9966; color: white;">
                    <th style="width: 10%; text-align: center; color: white; background-color: #ff9966; border: 1px solid #cccccc;">No</th>
                    <th style="width: 25%; color: white; background-color: #ff9966; border: 1px solid #cccccc;">Rekaman Suara</th>
                    <th style="width: 25%; color: white; background-color: #ff9966; border: 1px solid #cccccc;">Kunci Jawaban</th>
                    <th style="width: 25%; color: white; background-color: #ff9966; border: 1px solid #cccccc;">Jawaban Anda</th>
                    <th style="width: 15%; text-align: center; color: white; background-color: #ff9966; border: 1px solid #cccccc;">Hasil</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHtml}
            </tbody>
        </table>

        <!-- RINGKASAN PERSENTASE -->
        <div style="margin-top: 30px; background-color: #f9f9f9; border: 1px solid #dddddd; padding: 15px; border-radius: 8px;">
            <p style="margin: 0; font-size: 1.05em; color: #333333;">
                <strong>Ringkasan Hasil Ujian:</strong><br>
                Jumlah Benar: <span style="color: #2e7d32; font-weight: bold;">${auditoriCorrectCount}</span> dari 10 Soal<br>
                Jumlah Salah: <span style="color: #c62828; font-weight: bold;">${auditoriWrongCount}</span> dari 10 Soal
            </p>
        </div>
    </body>
    </html>
    `;

    const blob = new Blob(['\ufeff' + htmlContent], {
        type: 'application/msword'
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Hasil_Misi_Auditori_${nama.replace(/\s+/g, '_')}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function unduhHasilKinestetikWord() {
    const nama = document.getElementById('kinestetik-nama').value.trim() || '-';
    const kelas = document.getElementById('kinestetik-kelas').value.trim() || '-';
    const sekolah = document.getElementById('kinestetik-sekolah').value.trim() || '-';

    const dateStr = new Date().toLocaleDateString('id-ID', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    let rowsHtml = '';
    for (let i = 0; i < 10; i++) {
        const qNum = i + 1;
        const ans = kinestetikUserAnswers[qNum] || { namaBenda: '-', jawabanBenar: '-', jawabanUser: '-', status: 'Belum Dijawab' };
        const statusColor = ans.status === 'Benar' ? '#2e7d32' : '#c62828';
        
        rowsHtml += `
        <tr>
            <td style="text-align: center; border: 1px solid #cccccc; padding: 8px;">${qNum}</td>
            <td style="border: 1px solid #cccccc; padding: 8px;">${ans.namaBenda}</td>
            <td style="border: 1px solid #cccccc; padding: 8px;">${ans.jawabanBenar}</td>
            <td style="border: 1px solid #cccccc; padding: 8px;">${ans.jawabanUser}</td>
            <td style="text-align: center; border: 1px solid #cccccc; padding: 8px; color: ${statusColor}; font-weight: bold;">${ans.status}</td>
        </tr>
        `;
    }

    const htmlContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
        <title>Hasil Misi Kinestetik</title>
        <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333333; padding: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 15px; }
            th, td { border: 1px solid #cccccc; padding: 10px; text-align: left; }
            th { background-color: #f2f2f2; font-weight: bold; color: #333333; }
        </style>
    </head>
    <body>
        <!-- KOP HEADER DENGAN DATA DIRI DI SEBELAH KIRI & NILAI AKHIR DI SEBELAH KANAN -->
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border: none; margin-bottom: 25px;">
            <tr>
                <td style="border: none; width: 70%; padding: 0; text-align: left; vertical-align: top;">
                    <h2 style="color: #ff00cc; margin: 0 0 5px 0; font-size: 1.6em;">LAPORAN HASIL BELAJAR</h2>
                    <h3 style="margin: 0 0 15px 0; color: #4a5568; font-size: 1.1em;">APLIKASI MENGENAL BUNYI (MISI KINESTETIK)</h3>
                    
                    <!-- Tabel Data Diri -->
                    <table border="0" cellpadding="2" cellspacing="0" style="border: none; font-size: 0.95em; color: #333333; width: 100%;">
                        <tr>
                            <td style="border: none; padding: 3px 0; font-weight: bold; width: 110px;">Nama Lengkap</td>
                            <td style="border: none; padding: 3px 0; width: 15px;">:</td>
                            <td style="border: none; padding: 3px 0;">${nama}</td>
                        </tr>
                        <tr>
                            <td style="border: none; padding: 3px 0; font-weight: bold;">Kelas</td>
                            <td style="border: none; padding: 3px 0;">:</td>
                            <td style="border: none; padding: 3px 0;">${kelas}</td>
                        </tr>
                        <tr>
                            <td style="border: none; padding: 3px 0; font-weight: bold;">Asal Sekolah</td>
                            <td style="border: none; padding: 3px 0;">:</td>
                            <td style="border: none; padding: 3px 0;">${sekolah}</td>
                        </tr>
                        <tr>
                            <td style="border: none; padding: 3px 0; font-weight: bold;">Tanggal Tes</td>
                            <td style="border: none; padding: 3px 0;">:</td>
                            <td style="border: none; padding: 3px 0;">${dateStr}</td>
                        </tr>
                    </table>
                </td>
                <td style="border: none; width: 30%; text-align: right; vertical-align: top; padding: 0;">
                    <div style="background-color: #ff00cc; border-radius: 8px; padding: 12px 15px; color: white; display: inline-block; text-align: center; min-width: 110px; border: 1px solid #d600ab;">
                        <span style="font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; color: #ffe6fa; font-weight: bold;">Nilai Akhir</span>
                        <span style="font-size: 2.2em; font-weight: bold; line-height: 1.1; display: block; margin-top: 2px;">${kinestetikCorrectCount * 10}</span>
                    </div>
                </td>
            </tr>
        </table>
        
        <hr style="border: 1px dashed #cccccc; margin: 10px 0 20px 0;">
        
        <h4 style="color: #ff00cc; margin: 0 0 10px 0; font-size: 1.1em;">Rincian Jawaban Soal 1 - 10:</h4>
        <table style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr style="background-color: #ff00cc; color: white;">
                    <th style="width: 10%; text-align: center; color: white; background-color: #ff00cc; border: 1px solid #cccccc;">No</th>
                    <th style="width: 25%; color: white; background-color: #ff00cc; border: 1px solid #cccccc;">Nama Benda</th>
                    <th style="width: 25%; color: white; background-color: #ff00cc; border: 1px solid #cccccc;">Kelompok Seharusnya</th>
                    <th style="width: 25%; color: white; background-color: #ff00cc; border: 1px solid #cccccc;">Kelompok Pilihan</th>
                    <th style="width: 15%; text-align: center; color: white; background-color: #ff00cc; border: 1px solid #cccccc;">Hasil</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHtml}
            </tbody>
        </table>

        <!-- RINGKASAN PERSENTASE -->
        <div style="margin-top: 30px; background-color: #f9f9f9; border: 1px solid #dddddd; padding: 15px; border-radius: 8px;">
            <p style="margin: 0; font-size: 1.05em; color: #333333;">
                <strong>Ringkasan Hasil Ujian:</strong><br>
                Jumlah Benar: <span style="color: #2e7d32; font-weight: bold;">${kinestetikCorrectCount}</span> dari 10 Soal<br>
                Jumlah Salah: <span style="color: #c62828; font-weight: bold;">${kinestetikWrongCount}</span> dari 10 Soal
            </p>
        </div>
    </body>
    </html>
    `;

    const blob = new Blob(['\ufeff' + htmlContent], {
        type: 'application/msword'
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Hasil_Misi_Kinestetik_${nama.replace(/\s+/g, '_')}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function kirimDataKeSheets(data) {
    const sheetUrl = "https://script.google.com/macros/s/AKfycbwxYQ-TW-8-gB9bW_THu-odw2s_LYvsklnklyPCNGe9CMtVaOlQnZlLlpprhytsdCVk/exec";
    
    fetch(sheetUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        console.log("Data berhasil terkirim ke Google Sheets.");
    })
    .catch(err => {
        console.error("Gagal mengirim data ke Google Sheets:", err);
    });
}

function bukaLeaderboard(tipe) {
    const modal = document.getElementById('leaderboard-modal');
    const iframe = document.getElementById('leaderboard-iframe');
    
    if (modal && iframe) {
        let srcUrl = '';
        if (tipe === 'visual') {
            srcUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRBE2Wk7WA0jVrN69nZhTg5Ba5ZdHdCOPButcDP-TvyA1Oht2MiNiYmLSJhYGa3YORl6EdeA00ctouA/pubhtml?gid=1745867710&single=true&widget=true&headers=false";
        } else if (tipe === 'auditori') {
            srcUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRBE2Wk7WA0jVrN69nZhTg5Ba5ZdHdCOPButcDP-TvyA1Oht2MiNiYmLSJhYGa3YORl6EdeA00ctouA/pubhtml?gid=78889759&single=true&widget=true&headers=false";
        } else if (tipe === 'kinestetik') {
            srcUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRBE2Wk7WA0jVrN69nZhTg5Ba5ZdHdCOPButcDP-TvyA1Oht2MiNiYmLSJhYGa3YORl6EdeA00ctouA/pubhtml?gid=65325689&single=true&widget=true&headers=false";
        }
        
        iframe.src = srcUrl;
        modal.style.display = 'flex';
    }
}

function tutupLeaderboard() {
    const modal = document.getElementById('leaderboard-modal');
    const iframe = document.getElementById('leaderboard-iframe');
    if (modal) {
        modal.style.display = 'none';
    }
    if (iframe) {
        iframe.src = 'about:blank';
    }
}

// FUNGSI MENU UTAMA & DROPDOWN BERANDA
function toggleHomeMenu(event) {
    if (event) event.stopPropagation();
    const menu = document.getElementById('home-dropdown-menu');
    if (menu) {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'grid';
        } else {
            menu.style.display = 'none';
        }
    }
}

// Tutup dropdown jika klik di luar
window.addEventListener('click', function(e) {
    const menu = document.getElementById('home-dropdown-menu');
    const btn = document.querySelector('.home-icon-btn');
    if (menu && menu.style.display === 'grid') {
        if (btn && !btn.contains(e.target) && !menu.contains(e.target)) {
            menu.style.display = 'none';
        }
    }
});

// FUNGSI TAMPIL MODAL INFO DETAIL
function tampilInfo(tipe) {
    const modal = document.getElementById('info-modal');
    const titleEl = document.getElementById('info-modal-title');
    const bodyEl = document.getElementById('info-modal-body');
    
    // Tutup dropdown menu
    const menu = document.getElementById('home-dropdown-menu');
    if (menu) menu.style.display = 'none';
    
    if (!modal || !titleEl || !bodyEl) return;
    
    let titleHtml = '';
    let bodyHtml = '';
    
    if (tipe === 'video') {
        titleHtml = '🎥 Video Pembelajaran: Sumber Bunyi';
        bodyHtml = `
            <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; background: #000; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
                <iframe src="https://www.youtube.com/embed/DymP1CsLsRU" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allowfullscreen></iframe>
            </div>
            <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align: left; display: flex; flex-direction: column; gap: 10px;">
                <div>
                    <span style="font-weight: bold; color: #ff9966; font-size: 0.9em; text-transform: uppercase; letter-spacing: 0.5px;">Judul Video:</span>
                    <p style="color: #fff; font-weight: bold; font-size: 1.1em; margin-top: 2px;">Video Pembelajaran Kelas 1 BAB 1 (Bunyi Apa?)</p>
                </div>
                
                <div>
                    <span style="font-weight: bold; color: #ff9966; font-size: 0.9em; text-transform: uppercase; letter-spacing: 0.5px;">Nama Channel:</span>
                    <p style="color: #cbd5e1; margin-top: 2px; font-weight: 500;">Sri Apriyanti Andini</p>
                </div>
                
                <div>
                    <span style="font-weight: bold; color: #ff9966; font-size: 0.9em; text-transform: uppercase; letter-spacing: 0.5px;">Deskripsi:</span>
                    <p style="color: #94a3b8; font-size: 0.95em; line-height: 1.5; margin-top: 2px;">Video pembelajaran ini disusun oleh Sri Apriyanti Andini (F1081201021), mahasiswa Program Kampus Mengajar Angkatan 5 di SD Negeri 18 Pontianak Utara, untuk membantu mempermudah siswa memahami materi Bab 1 (Bunyi Apa?) Kelas 1 Sekolah Dasar secara interaktif.</p>
                </div>
                
                <div style="text-align: center; margin-top: 10px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 15px;">
                    <a href="https://youtu.be/DymP1CsLsRU?si=74nAbLSGHrx-sdZQ" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; background: #ff0000; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; font-size: 0.95em; transition: all 0.2s;" onmouseover="this.style.background='#cc0000'; this.style.transform='scale(1.05)';" onmouseout="this.style.background='#ff0000'; this.style.transform='scale(1)';">
                        <i class="fa-brands fa-youtube"></i> Tonton Langsung di YouTube
                    </a>
                </div>
            </div>
        `;
    } else if (tipe === 'materi') {
        titleHtml = '📖 Ringkasan Materi: Sumber Bunyi';
        bodyHtml = `
            <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 15px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                <p style="font-weight: bold; margin-bottom: 8px; color: #00d2ff; font-size: 1.1em;">Apa itu Sumber Bunyi?</p>
                <p style="line-height: 1.5; color: #cbd5e1;">Sumber bunyi adalah <strong>semua benda yang dapat menghasilkan bunyi</strong> karena benda tersebut bergetar. Getaran dari benda merambat melalui udara/media perantara hingga didengar telinga kita.</p>
            </div>
            
            <p style="font-weight: bold; margin-bottom: 12px; color: #ff9966; font-size: 1.1em;">Cara Menghasilkan Bunyi:</p>
            <div style="display: flex; flex-direction: column; gap: 12px;">
                <div style="background: rgba(255,255,255,0.02); padding: 10px 15px; border-radius: 8px; border-left: 4px solid var(--visual);">
                    <strong>🎸 Dipetik:</strong> Senar/dawai digetarkan dengan jari. <br><span style="font-size: 0.9em; color: #94a3b8;">Contoh: Gitar, Harpa, Kecapi</span>
                </div>
                <div style="background: rgba(255,255,255,0.02); padding: 10px 15px; border-radius: 8px; border-left: 4px solid var(--auditory);">
                    <strong>🥁 Dipukul:</strong> Badan benda diketuk atau ditabuh menggunakan pemukul. <br><span style="font-size: 0.9em; color: #94a3b8;">Contoh: Gong, Ketipung, Drumb, Kolintang</span>
                </div>
                <div style="background: rgba(255,255,255,0.02); padding: 10px 15px; border-radius: 8px; border-left: 4px solid var(--kinesthetic);">
                    <strong>🎺 Ditiup:</strong> Udara diembuskan ke dalam lubang resonator. <br><span style="font-size: 0.9em; color: #94a3b8;">Contoh: Seruling, Terompet, Pianika, Peluit</span>
                </div>
                <div style="background: rgba(255,255,255,0.02); padding: 10px 15px; border-radius: 8px; border-left: 4px solid #a8ff78;">
                    <strong>🎻 Digesek:</strong> Senar digosok menggunakan tongkat gesek khusus. <br><span style="font-size: 0.9em; color: #94a3b8;">Contoh: Biola, Rebab</span>
                </div>
                <div style="background: rgba(255,255,255,0.02); padding: 10px 15px; border-radius: 8px; border-left: 4px solid #ffcc00;">
                    <strong>🔔 Digoyangkan:</strong> Badan benda digerakkan agar menghasilkan tabrakan berulang. <br><span style="font-size: 0.9em; color: #94a3b8;">Contoh: Angklung, Marakas</span>
                </div>
            </div>
        `;
    } else if (tipe === 'petunjuk') {
        titleHtml = '📖 Petunjuk Penggunaan';
        bodyHtml = `
            <p style="font-weight: bold; margin-bottom: 10px; color: #ff9966;">Cara Menggunakan Aplikasi:</p>
            <ol style="margin-left: 20px; display: flex; flex-direction: column; gap: 8px;">
                <li>Pelajari materi dasar terlebih dahulu melalui tombol <strong>📖 MATERI SUMBER BUNYI</strong> atau tonton penjelasan video pembelajaran melalui tombol <strong>🎥 VIDEO SUMBER BUNYI</strong> yang tersedia di beranda.</li>
                <li>Pilih salah satu <strong>Kelompok Gaya Belajar</strong> di beranda utama (Visual, Auditori, atau Kinestetik).</li>
                <li>Isi <strong>Data Diri</strong> Anda (Nama Lengkap, Kelas, Asal Sekolah) secara lengkap.</li>
                <li>Jawab dan selesaikan seluruh misi soal tantangan sesuai petunjuk masing-masing kelompok belajar.</li>
                <li>Gunakan tombol <strong>Cek Jawaban / Hasil</strong> untuk memeriksa kebenaran respon Anda.</li>
                <li>Setelah misi selesai, Anda akan menerima ringkasan nilai dan dapat mengunduh dokumen laporan hasil belajar dalam bentuk format <strong>Microsoft Word (.doc)</strong>.</li>
                <li>Anda juga dapat melihat <strong>Papan Skor Live (Leaderboard)</strong> real-time melalui ikon Trophy di pojok halaman pengisian data diri.</li>
            </ol>
        `;
    } else if (tipe === 'tujuan') {
        titleHtml = '🎯 Tujuan Pembelajaran';
        bodyHtml = `
            <p style="font-weight: bold; margin-bottom: 10px; color: #ff9966;">Melalui media pembelajaran interaktif ini, diharapkan:</p>
            <ul style="margin-left: 20px; display: flex; flex-direction: column; gap: 8px; list-style-type: disc;">
                <li>Siswa dapat memperoleh pemahaman konsep awal yang kuat melalui <strong>Ringkasan Materi</strong> interaktif dan visualisasi <strong>Video Pembelajaran Kelas 1 Bab 1</strong>.</li>
                <li>Siswa dapat mengenal berbagai jenis <strong>sumber bunyi</strong> dari instrumen musik tradisional dan modern serta benda-benda sekitar dengan tepat.</li>
                <li>Siswa memahami <strong>cara menghasilkan bunyi</strong> (dipetik, ditiup, dipukul, digoyangkan, digesek) melalui media dengar, visual, dan aksi kinestetik.</li>
                <li>Siswa dapat mengelompokkan benda-benda berdasarkan kemampuannya dalam memancarkan getaran suara.</li>
                <li>Meningkatkan minat, retensi, dan pemahaman konsep sains dasar bunyi dengan menyesuaikan gaya belajar personal siswa.</li>
            </ul>
        `;
    } else if (tipe === 'pengembang') {
        titleHtml = '👩 Tentang Pengembang';
        bodyHtml = `
            <div style="text-align: center; margin-bottom: 15px;">
                <div style="width: 70px; height: 70px; border-radius: 50%; background: linear-gradient(135deg, #ff9966, #ff00cc); display: inline-flex; justify-content: center; align-items: center; font-size: 2em; color: white; border: 2px solid rgba(255,255,255,0.2); box-shadow: 0 4px 15px rgba(0,0,0,0.3);">👩‍🏫</div>
            </div>
            <table border="0" cellpadding="5" cellspacing="0" style="width: 100%; border: none; font-size: 0.95em; color: #cbd5e1;">
                <tr>
                    <td style="font-weight: bold; width: 120px; border: none; padding: 4px 0; color: #ff9966;">Nama Lengkap</td>
                    <td style="width: 15px; border: none; padding: 4px 0;">:</td>
                    <td style="border: none; padding: 4px 0; font-weight: bold; color: white;">Fudak Winduko, SH. M.Pd.</td>
                </tr>
                <tr>
                    <td style="font-weight: bold; border: none; padding: 4px 0; color: #ff9966;">Profesi/Peran</td>
                    <td style="border: none; padding: 4px 0;">:</td>
                    <td style="border: none; padding: 4px 0;">Pendidik / Pengembang Media Pembelajaran</td>
                </tr>
                <tr>
                    <td style="font-weight: bold; border: none; padding: 4px 0; color: #ff9966;">Tujuan Media</td>
                    <td style="border: none; padding: 4px 0;">:</td>
                    <td style="border: none; padding: 4px 0; line-height: 1.4;">Mengembangkan bahan ajar digital berbasis web guna mempermudah diferensiasi pembelajaran kognitif IPA Sekolah Dasar.</td>
                </tr>
            </table>
        `;
    } else if (tipe === 'kontak') {
        titleHtml = '📞 Kontak Pengembang';
        bodyHtml = `
            <p style="margin-bottom: 15px;">Silakan hubungi kami untuk masukan, saran pengembangan, maupun kolaborasi akademik lebih lanjut:</p>
            <div style="display: flex; flex-direction: column; gap: 12px;">
                <div style="display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.03); padding: 10px 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
                    <i class="fa-solid fa-envelope" style="color: #ff9966; font-size: 1.2em; width: 20px; text-align: center;"></i>
                    <span>Email: <strong>supartwindu@gmail.com</strong></span>
                </div>
                <div style="display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.03); padding: 10px 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
                    <i class="fa-brands fa-whatsapp" style="color: #25d366; font-size: 1.2em; width: 20px; text-align: center;"></i>
                    <span>WhatsApp: <strong>+62 821-4210-7586</strong></span>
                </div>
                <div style="display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.03); padding: 10px 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
                    <i class="fa-solid fa-location-dot" style="color: #ff00cc; font-size: 1.2em; width: 20px; text-align: center;"></i>
                    <span>Wilayah: <strong>Jawa Timur, Indonesia</strong></span>
                </div>
            </div>

            <div style="margin-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                <p style="font-weight: bold; margin-bottom: 10px; color: #ff9966;">Kirim Pesan Langsung:</p>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <textarea id="kontak-pesan" placeholder="Tulis masukan, pesan, atau pertanyaan Anda di sini..." style="width: 100%; height: 100px; padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.05); color: #fff; font-family: inherit; font-size: 0.95em; outline: none; resize: none; transition: border-color 0.3s;" onfocus="this.style.borderColor='var(--visual)'" onblur="this.style.borderColor='rgba(255,255,255,0.15)'"></textarea>
                    
                    <div style="display: flex; gap: 10px;">
                        <button onclick="kirimPesanKontak('wa')" style="flex: 1; background: #25d366; color: #fff; border: none; padding: 10px 15px; border-radius: 8px; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.9em; transition: all 0.2s;" onmouseover="this.style.background='#20ba5a'; this.style.transform='translateY(-2px)';" onmouseout="this.style.background='#25d366'; this.style.transform='translateY(0)';">
                            <i class="fa-brands fa-whatsapp"></i> Kirim WhatsApp
                        </button>
                        <button onclick="kirimPesanKontak('email')" style="flex: 1; background: #ff9966; color: #fff; border: none; padding: 10px 15px; border-radius: 8px; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.9em; transition: all 0.2s;" onmouseover="this.style.background='#e08554'; this.style.transform='translateY(-2px)';" onmouseout="this.style.background='#ff9966'; this.style.transform='translateY(0)';">
                            <i class="fa-solid fa-envelope"></i> Kirim Email
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    titleEl.innerHTML = titleHtml;
    bodyEl.innerHTML = bodyHtml;
    modal.style.display = 'flex';
}

function tutupInfoModal() {
    const modal = document.getElementById('info-modal');
    if (modal) {
        modal.style.display = 'none';
    }
    // Hentikan pemutaran video dengan mengosongkan konten modal
    const bodyEl = document.getElementById('info-modal-body');
    if (bodyEl) {
        bodyEl.innerHTML = '';
    }
}

function kirimPesanKontak(via) {
    const pesanInput = document.getElementById('kontak-pesan');
    if (!pesanInput) return;
    
    const pesan = pesanInput.value.trim();
    if (!pesan) {
        alert("Silakan tulis pesan Anda terlebih dahulu!");
        return;
    }
    
    const encodedText = encodeURIComponent(pesan);
    
    if (via === 'wa') {
        const url = "https://api.whatsapp.com/send?phone=6282142107586&text=" + encodedText;
        window.open(url, '_blank');
    } else if (via === 'email') {
        const url = "mailto:supartwindu@gmail.com?subject=" + encodeURIComponent("Pesan dari Aplikasi Sumber Bunyi") + "&body=" + encodedText;
        window.location.href = url;
    }
}

