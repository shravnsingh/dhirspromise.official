// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission (basic alert for demo)
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    e.target.reset();
});
// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        console.log('Hamburger menu toggled');
    });
} else {
    console.error('Hamburger or nav-links not found');
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            console.log('Smooth scroll to', this.getAttribute('href'));
        } else {
            console.error('Scroll target not found:', this.getAttribute('href'));
        }
    });
});

// Form submission (contact form)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! We will get back to you soon.');
        e.target.reset();
        console.log('Contact form submitted');
    });
} else {
    console.log('Contact form not found (expected on non-contact pages)');
}

// Generate unique bill ID
function generateBillID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = 'DP-';
    for (let i = 0; i < 6; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
}

// WhatsApp order form
const orderForms = document.querySelectorAll('.order-form');
const billDisplay = document.getElementById('bill-id-display');
const billIDSpan = document.getElementById('bill-id');

if (orderForms.length > 0) {
    orderForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Order form submitted');

            const quantity = form.querySelector('input[name="quantity"]').value;
            const address = form.querySelector('input[name="address"]').value;
            const product = form.getAttribute('data-product');
            const price = form.getAttribute('data-price');
            const total = (quantity * price).toFixed(2);
            const billID = generateBillID();

            console.log('Generated Bill ID:', billID);
            console.log('Order details:', { product, quantity, total, address });

            // Display bill ID
            if (billDisplay && billIDSpan) {
                billIDSpan.textContent = billID;
                billDisplay.style.display = 'block';
                console.log('Bill ID displayed:', billID);
            } else {
                console.error('Bill ID display elements not found');
                alert('Your Bill ID is ' + billID + '. Please note it down.');
            }

            // Create WhatsApp message
            const message = `New Order\nBill ID: ${billID}\nProduct: ${product}\nQuantity: ${quantity}kg\nTotal: $${total}\nDelivery Address: ${address}\nPlease confirm order and provide payment details.`;
            const phoneNumber = 'YOUR_PHONE_NUMBER'; // Replace with your WhatsApp number, e.g., '+1234567890'
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            console.log('WhatsApp message:', message);
            window.open(whatsappUrl, '_blank');
            form.reset();
            console.log('Form reset and WhatsApp URL opened');
        });
    });
} else {
    console.log('No order forms found (expected on non-vegetables pages)');
}
