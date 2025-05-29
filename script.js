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

// Form submission (contact form)
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    e.target.reset();
});

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
document.querySelectorAll('.order-form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const quantity = form.querySelector('input[name="quantity"]').value;
        const address = form.querySelector('input[name="address"]').value;
        const product = form.getAttribute('data-product');
        const price = form.getAttribute('data-price');
        const total = (quantity * price).toFixed(2);
        const billID = generateBillID();
        
        // Display bill ID to customer
        const billDisplay = document.getElementById('bill-id-display');
        const billIDSpan = document.getElementById('bill-id');
        billIDSpan.textContent = billID;
        billDisplay.style.display = 'block';
        
        // Create WhatsApp message
        const message = `New Order\nBill ID: ${billID}\nProduct: ${product}\nQuantity: ${quantity}kg\nTotal: $${total}\nDelivery Address: ${address}\nPlease confirm order and provide payment details.`;
        const phoneNumber = '+91 7454841719'; // Replace with your WhatsApp number, e.g., '+1234567890'
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        form.reset();
    });
});
