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
 