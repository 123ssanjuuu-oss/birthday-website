/* =========================
   CONFIGURATION
========================= */

const correctPassword = "Shuganti";

let musicStarted = false;

let memoryIndex = 0;


/* =========================
   LOADING COUNTDOWN
========================= */

let count = 3;

const countdown = document.getElementById("countdown");

const countdownTimer = setInterval(() => {

    count--;

    if (count > 0) {

        countdown.textContent = count;

    } else {

        countdown.textContent = "❤️";

        clearInterval(countdownTimer);

        setTimeout(() => {

            document.getElementById("loadingScreen")
                .classList.add("hidden");

            document.getElementById("passwordScreen")
                .classList.remove("hidden");

        }, 1200);

    }

}, 1000);


/* =========================
   PASSWORD
========================= */

function checkPassword() {

   const input =
    document.getElementById("passwordInput").value
    .trim();

    const error =
        document.getElementById("passwordError");

    if (input === correctPassword) {

        document
            .getElementById("passwordScreen")
            .classList.add("hidden");

        document
            .getElementById("mainWebsite")
            .classList.remove("hidden");

        startMusic();

        createConfetti();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        error.textContent =
            "That's not the secret password... ❤️";

    }

}


/* ENTER KEY */

document
    .getElementById("passwordInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
            checkPassword();
        }

    });


/* =========================
   MUSIC
========================= */

function startMusic() {

    const music =
        document.getElementById("bgMusic");

    music.volume = 0.35;

    music.play()
        .then(() => {

            musicStarted = true;

            document.getElementById("musicBtn")
                .textContent = "🔊";

        })
        .catch(() => {

            document.getElementById("musicBtn")
                .textContent = "🎵";

        });

}


function toggleMusic() {

    const music =
        document.getElementById("bgMusic");

    if (music.paused) {

        music.play();

        document.getElementById("musicBtn")
            .textContent = "🔊";

    } else {

        music.pause();

        document.getElementById("musicBtn")
            .textContent = "🔇";

    }

}


/* =========================
   RAIN
========================= */

function createRain() {

    const rain =
        document.getElementById("rain");

    for (let i = 0; i < 100; i++) {

        const drop =
            document.createElement("div");

        drop.classList.add("drop");

        drop.style.left =
            Math.random() * 100 + "%";

        drop.style.animationDuration =
            (0.5 + Math.random() * 1.2) + "s";

        drop.style.animationDelay =
            Math.random() * 2 + "s";

        rain.appendChild(drop);

    }

}

createRain();


/* =========================
   FLOATING HEARTS
========================= */

function createHearts() {

    const container =
        document.getElementById("hearts");

    setInterval(() => {

        const heart =
            document.createElement("div");

        heart.classList.add("floating-heart");

        heart.textContent =
            Math.random() > .5 ? "❤️" : "♡";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            (10 + Math.random() * 20) + "px";

        heart.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);

    }, 500);

}

createHearts();


/* =========================
   GIFT
========================= */

function openGift(id) {

    if (id === "birthdayGift") {

        createConfetti();

        showModal(
            `
            <h2><h2>En Manasukku Nerukkamana Oruvar</h2> ❤️</h2>
            <p>
           Indha naal full-a unakkaga dhaan Thangom. ❤️
            <br><br>
           Indha chinna surprise un mugathula oru azhagaana sirippu vara vachaa,
adhuve enakku romba santhosham.Nee eppovum happy-a irukkanum,
nee aasai padra ellam unakku kidaikkanum.
            <br><br>
            — Unakkaga ❤️
            </p>
            `
        );

    }

}


/* =========================
   LETTER
========================= */

function openLetter() {

    const envelope =
        document.querySelector(".envelope");

    envelope.classList.toggle("open");

}


/* =========================
   SURPRISES
========================= */

function showSurprise(number) {

    const messages = {

        1:
        `
        <h2>Konjam Love ❤️</h2>
        <p>
       Nee enakku evlo mukkiyam nu
        solradhukku vaarthaiye illa da. ❤️

        Unna pathi nenachaale
        enakku smile vandhudum.

        Adhanala dhaan nee enakku
        romba special.
        </p>
        `,

        2:
        `
        <h2> Oru Nyaabagam  📸</h2>
        <p>
       Namma serndhu irundha
       ovvoru moment-um enakku
       romba precious da. ❤️

       Sila memories marakka mudiyadhu...

       Adhula nee dhaan hero.
        </p>
        `,

        3:
        `
        <h2>Oru Vaaku 💍</h2>
        <p>
       Namma ippadiye
       sirichittu pesittu
       santhoshama irukkanum da. ❤️

      Innum neraya memories
      serndhu create pannanum.
        </p>
        `,

        4:
        `
        <h2> Unakkaga ❤️ 💝</h2>
        <p>
       Indha website la irukkura
       ovvoru photo-vum,
       ovvoru line-um
       unnai nenachu dhaan panninen. ❤️

       Pidichirukkumnu namburen da.
        </p>
        `

    };

    showModal(messages[number]);

}


/* =========================
   MODAL
========================= */

function showModal(content) {

    document.getElementById("modalContent")
        .innerHTML = content;

    document.getElementById("modal")
        .classList.add("show");

}


function closeModal() {

    document.getElementById("modal")
        .classList.remove("show");

}


/* =========================
   HEART
========================= */

function openHeart() {

    document
        .getElementById("heartMessage")
        .classList.add("show");

    createConfetti();

}


/* =========================
   MEMORY BOOK
========================= */

const memories = [

    { 
    image: "photos/photo4.jpg", 
    title: "Pirantha Naal Vaazhthukkal En Anbe ❤️", 
    text: "Innum pala azhagana ninaivugaludan thodangum pudhu aththiyayam." 
}, 

{ 
    image: "photos/photo5.jpg", 
    title: "Pirantha Naal Vaazhthukkal En Chellame ❤️", 
    text: "Oru pugaippadam, aayiram azhagana ninaivugal." 
}, 

{ 
    image: "photos/photo6.jpg", 
    title: "Namma Azhagana Tharunam ✨", 
    text: "Siriya tharunama irunthaalum sila ninaivugal endrum manadhil nilaithirukkum." 
}, 

{ 
    image: "photos/photo7.jpg", 
    title: "Enakku Romba Pidichavanga ❤️", 
    text: "Nee en vaazhkaiyil iruppathunaala ovvoru naalum innum azhaga irukku." 
}, 

{ 
    image: "photos/photo8.jpg", 
    title: "Oru Azhagana Ninaivu 📸", 
    text: "Indha azhagana tharunathai naan endrum en manadhil vaithiruppen." 
}, 

{ 
    image: "photos/photo9.jpg", 
    title: "Endrum Naam 💕", 
    text: "Naam pagirndha azhagana ninaivugalin oru siriya thoguppu idhu." 
}, 

{ 
    image: "photos/photo10.jpg", 
    title: "Endrum Maaradha Punnagai 😊", 
    text: "Un punnagai enakku romba pidicha azhagana vishayangalil onnu." 
}, 

{ 
    image: "photos/photo11.jpg", 
    title: "Namma Kadhai 📖", 
    text: "Ovvoru pugaippadamum namma kadhaiyin oru azhagana paguthiyai solgiradhu." 
}, 

{ 
    image: "photos/photo12.jpg", 
    title: "En Magizhchiyana Idam ❤️", 
    text: "Sila azhagana tharunangalukku naduvil, naan en magizhchiyai kandukitten." 
}, 

{ 
    image: "photos/photo13.jpg", 
    title: "Endrum Endrendrum ❤️", 
    text: "Namma ninaivugalin azhagana kadhaiyil idhu innum oru aththiyayam mattum dhaan." 
}

];


function updateMemory() {

    const memory =
        memories[memoryIndex];

    document.getElementById("memoryImage")
        .src = memory.image;

    document.getElementById("memoryTitle")
        .textContent = memory.title;

    document.getElementById("memoryText")
        .textContent = memory.text;

    document.querySelector(".memory-number")
        .textContent =
        String(memoryIndex + 1).padStart(2, "0")
        + " / 10";

}


function nextMemory() {

    const page =
        document.getElementById("bookPage");

    page.classList.add("turn-next");

    setTimeout(() => {

        memoryIndex++;

        if (memoryIndex >= memories.length) {
            memoryIndex = 0;
        }

        updateMemory();

        page.classList.remove("turn-next");

    }, 650);

}



function previousMemory() {

    memoryIndex--;

    if (memoryIndex < 0) {
        memoryIndex = memories.length - 1;
    }

    const page =
        document.getElementById("bookPage");

    page.style.transform =
        "rotateY(180deg)";

    setTimeout(() => {

        updateMemory();

        page.style.transform =
            "rotateY(0deg)";

    }, 400);

}


/* =========================
   SWIPE SUPPORT
========================= */

let touchStartX = 0;

const bookPage =
    document.getElementById("bookPage");

bookPage.addEventListener("touchstart", function(event) {

    touchStartX =
        event.changedTouches[0].screenX;

});


bookPage.addEventListener("touchend", function(event) {

    const touchEndX =
        event.changedTouches[0].screenX;

    if (touchEndX < touchStartX - 50) {

        nextMemory();

    }

    if (touchEndX > touchStartX + 50) {

        previousMemory();

    }

});


/* =========================
   SCROLL
========================= */

function scrollToSection(id) {

    document.getElementById(id)
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const piece =
            document.createElement("div");

        piece.style.position = "fixed";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top = "-20px";

        piece.style.width = "8px";
        piece.style.height = "8px";

        piece.style.background =
            Math.random() > .5
            ? "#d49aa8"
            : "#ffffff";

        piece.style.zIndex = "10000";

        piece.style.pointerEvents = "none";

        piece.style.borderRadius = "2px";

        const duration =
            2 + Math.random() * 3;

        piece.style.transition =
            `transform ${duration}s linear,
             opacity ${duration}s linear`;

        document.body.appendChild(piece);

        setTimeout(() => {

            piece.style.transform =
                `translateY(110vh)
                 rotate(${Math.random() * 1000}deg)`;

            piece.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            piece.remove();

        }, duration * 1000 + 100);

    }

}


/* =========================
   CLOSE MODAL OUTSIDE
========================= */

document.getElementById("modal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeModal();
        }

    });