function downloadCV() {
    const link = document.createElement("a");
    link.href = "https://your-direct-cv-link.com/cv.pdf"; // Replace with your actual CV URL
    link.download = "Ongeziwe_Qwayede_CV.pdf"; // Set the name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function toggleDescription() {
    const description = document.querySelector('.about-description');
    const readMoreBtn = document.querySelector('.btn-read-more');

    if (description.classList.contains('expanded')) {
        description.classList.remove('expanded');
        readMoreBtn.textContent = 'Read More';
    } else {
        description.classList.add('expanded');
        readMoreBtn.textContent = 'Read Less';
    }
}

function redirectToContact() {
    window.location.href = '#contact'; // Replace '#contact' with the actual ID or URL of your contact section
}

var typed = new Typed(".typing", {
    strings:["","Web Developer","Front-end Developer","UI/UX designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
 