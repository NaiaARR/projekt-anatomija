java skript.js
// Selektiranje potrebnih elemenata iz HTML-a
const kostiForm = document.getElementById('kostiForm');
const nazivKostijuInput = document.getElementById('nazivKostiju');
const grupaKostijuInput = document.getElementById('grupaKostiju');
const koločinaKostijuInput = document.getElementById('koločinaKostiju');
const kostiList = document.getElementById('list');

// Funkcija za dodavanje nove pjesme u listu
songForm.addEventListener('submit', function (event) {
    event.preventDefault();  // Sprječava slanje forme i osvježavanje stranice

    // Dohvaćanje podataka iz input polja
    const nazivKostiju = nazivKostijuInput.value;
    const grupaKostiju = grupaKostijuInput.value;
    const koločinaKostiju = koločinaKostiju.value;

    // Kreiranje novog lista elementa
    const listItem = document.createElement('li');
    listItem.textContent = `${nazivKostiju} - ${grupaKostiju} (${koločinaKostiju})`;

    // Dodavanje novog elementa u listu
    kostiList.appendChild(listItem);

    // Resetiranje input polja
     nazivKostijuInput.value = '';
     grupaKostijuInput.value = '';
     koločinaKostiju.value = '';
});

// Carousel funkcionalnost
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Funkcija za prikazivanje sljedeće slike
function showImage(index) {
    // Sakrij sve slike
    images.forEach((img, i) => {
        img.style.display = 'none';
    });

    // Prikazivanje trenutne slike
    images[index].style.display = 'block';
}

// Klik na "prev" gumb
prevBtn.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
});

// Klik na "next" gumb
nextBtn.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
});

// Inicijalno prikazivanje prve slike
showImage(currentIndex);