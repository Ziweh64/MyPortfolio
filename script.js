function downloadCV() {
    const link = document.createElement("a");
    link.href = "https://your-direct-cv-link.com/cv.pdf"; // Replace with your actual CV URL
    link.download = "Ongeziwe_Qwayede_CV.pdf"; // Set the name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function toggleDescription() {
    const aboutDesc = document.querySelector('.about-description');
    const readMoreBtn = document.querySelector('.btn-read-more');
    if (aboutDesc.classList.contains('expanded')) {
        aboutDesc.classList.remove('expanded');
        readMoreBtn.textContent = 'Read More';
    } else {
        aboutDesc.classList.add('expanded');
        readMoreBtn.textContent = 'Read Less';
    }
}

function redirectToContact() {
    const contactSection = document.querySelector('#contacts');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}


document.querySelectorAll('.nav-items a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


var typed = new Typed(".typing", {
    strings:["","Web Developer","Front-end Developer","UI/UX designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


    function toggleMenu() {
        const navItems = document.querySelector('.nav-items');
        navItems.classList.toggle('show');
    }

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check local storage for saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem("theme", "dark");
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem("theme", "light");
        }
    });
});


 