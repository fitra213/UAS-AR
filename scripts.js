document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("splash-screen").style.display = "none";
    }, 3000); // 3000 ms = 3 detik
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("carousel-item");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}



function toggleText(span) {
    let shortText = span.previousElementSibling.previousElementSibling;
    let fullText = span.previousElementSibling;
    
    if (fullText.style.display === "none") {
        fullText.style.display = "inline";
        shortText.style.display = "none";
        span.textContent = "Tutup";
        
    } else {
        fullText.style.display = "none";
        shortText.style.display = "inline";
        span.textContent = "Baca lebih Lanjut";
    }
}


let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scroll down
        document.querySelector("footer").style.bottom = "-50px"; // Menggeser footer ke atas
    } else {
        // Scroll up
        document.querySelector("footer").style.bottom = "0"; // Mengembalikan footer ke posisi awal
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Mengatur scroll top
});

