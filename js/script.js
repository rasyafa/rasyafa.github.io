// Dark and Light Theme

// Function to set theme based on localStorage or default to light mode
function setTheme(theme) {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
}

// Get saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light-mode';
setTheme(savedTheme);

// Button event listeners
document.getElementById('darkModeBtn').addEventListener('click', function () {
    setTheme('dark-mode');
});

document.getElementById('lightModeBtn').addEventListener('click', function () {
    setTheme('light-mode');
});

// Dynamic Modal Content

document.querySelectorAll('.btn[data-bs-target]').forEach(button => {
    button.addEventListener('click', function () {
        const card = this.closest('.card');
        const title = card.querySelector('.card-title').innerText;
        const body = card.querySelector('.card-text').innerText;
        const imageSrc = card.querySelector('img').src;

        document.getElementById('dynamicModalTitle').innerText = title;
        document.getElementById('dynamicModalContent').innerText = body;
        document.getElementById('dynamicModalImage').src = imageSrc;

        // Trigger the modal to open
        const dynamicModal = new bootstrap.Modal(document.getElementById('dynamicModal'));
        dynamicModal.show();
    });
});

//  Scroll Behavior

// Get the button element
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when the user scrolls down 100px from the top
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";  // Show button
    } else {
        scrollTopBtn.style.display = "none";  // Hide button
    }
};

// Scroll to the top of the page smoothly
scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Validation Submit Form
// Example of custom Bootstrap validation for forms
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Show the success alert
    var alertDiv = document.getElementById('alertSuccess');
    alertDiv.classList.add('show'); // Bootstrap's 'show' class makes it visible

    // Optionally submit the form
    this.submit();
});