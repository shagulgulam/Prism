// Smooth scrolling function
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Form validation function
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    return isValid;
}

// Interactive feature example (toggle class)
function toggleClass(element, className) {
    const el = document.querySelector(element);
    if (el) {
        el.classList.toggle(className);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.getElementById('scrollToSection');
    if (scrollButton) {
        scrollButton.addEventListener('click', () => smoothScroll('#targetSection'));
    }
    const form = document.getElementById('myForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            if (!validateForm(form)) {
                e.preventDefault();
                alert('Please fill all fields.');
            }
        });
    }
});