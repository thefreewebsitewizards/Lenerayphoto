// Modern portfolio functionality
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, observerOptions);

    // Observe all sections and gallery items
    document.querySelectorAll('section, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Header scroll effect
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(7, 16, 40, 0.95)';
            header.style.backdropFilter = 'blur(25px)';
        } else {
            header.style.background = 'rgba(7, 16, 40, 0.9)';
            header.style.backdropFilter = 'blur(20px)';
        }
        
        lastScrollY = currentScrollY;
    });
    // Mobile menu functionality - No sliding/swiping
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobileMenu = document.getElementById('closeMobileMenu');
    
    // Open mobile menu as static overlay
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('menu-open');
        mobileMenu.classList.remove('translate-x-full');
        document.body.classList.add('menu-open');
        document.body.style.overflow = 'hidden';
    });
    
    // Close mobile menu overlay
    closeMobileMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('menu-open');
        mobileMenu.classList.add('translate-x-full');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
    });
    
    // Close mobile menu when clicking on navigation links
    document.querySelectorAll('#mobileMenu nav a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('menu-open');
            mobileMenu.classList.add('translate-x-full');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
        });
    });
    
    // Close mobile menu when clicking on the overlay background
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu || e.target.classList.contains('mobile-menu-bg')) {
            mobileMenu.classList.remove('menu-open');
            mobileMenu.classList.add('translate-x-full');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
        }
    });
    
    // Disable swipe gestures on mobile menu
    mobileMenu.addEventListener('touchstart', function(e) {
        e.preventDefault();
    }, { passive: false });
    
    mobileMenu.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, { passive: false });
    
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

            // Image modal functionality
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImage");
        const closeBtn = document.getElementsByClassName("close")[0];
        
        // Get all gallery images
        const galleryImages = document.querySelectorAll('.gallery-img img');
        
        // Add click event to each image
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = "block";
                modalImg.src = this.src;
            });
        });
        
        // Close modal when clicking X
        closeBtn.onclick = function() { 
            modal.style.display = "none";
        }
        
        // Close modal when clicking outside image
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    // Enhanced link functionality for better user experience
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    const smsLinks = document.querySelectorAll('a[href^="sms:"]');

    // Add click tracking for analytics (optional)
    emailLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log('Email link clicked:', link.href);
        });
    });

    phoneLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log('Phone link clicked:', link.href);
        });
    });

    smsLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log('SMS link clicked:', link.href);
        });
    });
});