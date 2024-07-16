const lampu = document.getElementById("lampu");
let judul = document.getElementById("judul");
let isi = document.getElementById("isi");
let count = document.getElementById("hitung");
let hitung = 1;

window.addEventListener('load', (event) => {
    runLampuLaluLintas();
});

function hitungMundur(callback) {
    for (let i = 3; i >= 0; i--) {
        setTimeout(() => {
            count.textContent = i;
            if (i === 0) {
                callback();
            }
        }, (3 - i) * 1000); // Multiply delay by the iteration index
    }
}

function runLampuLaluLintas() {
    if (hitung === 1) {
        hitungMundur(() => {
            lampu.src = "images/merah (1).png";
            hitung = 2;
            judul.textContent = "Stop"
            isi.textContent = "Be Patient"
            judul.style.color = "red"
            isi.style.color = "red"
            count.style.color = "red"
            runLampuLaluLintas();
        });
    } else if (hitung === 2) {
        hitungMundur(() => {
            lampu.src = "images/kuning (1).png";
            hitung = 3;
            judul.textContent = "Wait"
            isi.textContent = "Be Careful"
            judul.style.color = "yellow"
            isi.style.color = "yellow"
            count.style.color = "yellow"
            runLampuLaluLintas();
        });
    } else if (hitung === 3) {
        hitungMundur(() => {
            lampu.src = "images/hijau (1).png";
            hitung = 4;
            judul.textContent = "Go"
            isi.textContent = "Lets Go"
            judul.style.color = "green"
            isi.style.color = "green"
            count.style.color = "green"
            runLampuLaluLintas();
        });
    } else if (hitung === 4) {
        hitungMundur(() => {
            lampu.src = "images/3lampu.png";
            hitung = 1;
            judul.textContent = "Traffic Light"
            isi.textContent = "HTML CSS Javascript"
            judul.style.color = "black"
            isi.style.color = "black"
            count.style.color = "black"
            runLampuLaluLintas();
        });
    }
}