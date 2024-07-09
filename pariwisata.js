document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    
    let slideInterval;

    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";

        // Menghentikan interval jika ada klik pada panah
        clearInterval(slideInterval);

        // Mulai lagi interval setelah 5 detik jika tidak ada klik
        slideInterval = setTimeout(() => {
            showSlides();
        }, 3000); // Ganti gambar setiap 5 detik
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    document.querySelector('.prev').addEventListener('click', () => {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', () => {
        plusSlides(1);
    });
});
