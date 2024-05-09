// Header Function START
window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 5);
})

// Menu Toggle

function menu(){

    const menuToggle = document.querySelector(".menuToggle");
    const navigation = document.querySelector(".navigation");

    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");

}


// Function dark mode and store preference in local storage


function toggleDarkMode() {
    const elementsToToggle = [
        "header",
        "#home",
        "#featured",
        "#games",
        "#about",
        "#review",
        "#test",
        "#sponsor",
        "footer",
        "#backToTop",
        "#facility"
    ];

    elementsToToggle.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.classList.toggle("active");
        }
    });

    const isDarkMode = document.querySelector("header").classList.contains("active");
    localStorage.setItem("darkMode", isDarkMode);
}

function applySettingsFromLocalStorage() {

    const isDarkMode = localStorage.getItem("darkMode") === "true";

    const slider = document.getElementById("check");

    slider.checked = isDarkMode;
    
    if (isDarkMode) {
        toggleDarkMode();
    }

}

document.addEventListener("DOMContentLoaded", applySettingsFromLocalStorage);

const darkModeButton = document.querySelector("#check");

if (darkModeButton) {
    darkModeButton.addEventListener("change", toggleDarkMode);
}



// Back to Top Button

// Change to the chatBot

// let mybutton = document.getElementById("backToTop");

// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {

//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         mybutton.style.display = "block";

//     } 
    
//     else {
//         mybutton.style.display = "none";
//     }
// }


// Testimony Slider


var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

// Scroll Reveal

const scroll = ScrollReveal({
    distance: "100px",
    duration: 2500,
    // reset: true,
});
  
scroll.reveal(`#home`, {
    origin: "top",
    interval: 100,
});

scroll.reveal(`#arrivals`, {
    origin: "top",
});

scroll.reveal(`#facility, #sponsor`, {
    origin: "left",
});

scroll.reveal(`#sound`, {
    origin: "right",
});

scroll.reveal(`#about, #featured`, {
    origin: "bottom",
});
  
  

// Dark Mode without Saving to the lcoal storage (Archieved)

// function darkmode(){

//     const header = document.querySelector("header");
//     const home = document.querySelector("#home");
//     const featured = document.querySelector("#featured");
//     const arrivals = document.querySelector("#arrivals");
//     const about = document.querySelector("#about");
//     const sound = document.querySelector("#sound");
//     const sponsor = document.querySelector("#sponsor");
//     const footer = document.querySelector("footer");
//     const backToTop = document.querySelector("#backToTop");
//     const facility = document.querySelector("#facility");

//     header.classList.toggle("active");
//     home.classList.toggle("active");
//     featured.classList.toggle("active");
//     arrivals.classList.toggle("active");
//     about.classList.toggle("active");
//     sponsor.classList.toggle("active");
//     footer.classList.toggle("active");
//     backToTop.classList.toggle("active");
//     sound.classList.toggle("active");
//     facility.classList.toggle("active");
// }