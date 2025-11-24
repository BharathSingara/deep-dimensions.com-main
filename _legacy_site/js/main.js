// Enhanced JavaScript for Deep Dimensions 3D Website

// Initialize all components when the DOM is ready
function initDeepDimensions() {
    initPreloader();
    initScrollProgress();
    // initHeroAnimation(); // Disabled - Using hero-robot.js instead
    initAboutAnimation();
    initParticles();
    initServiceParticles();
    initCustomCursor();
    initScrollAnimations();
    initHeaderScroll();
    initMobileMenu();
    initThemeToggle();
    initScrollToTop();
    initServiceCards();
    initTypedText();
    initAOS();
    initFormHandling();
    initSmoothScrolling();
    initPerformanceOptimizations();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDeepDimensions);
} else {
    initDeepDimensions();
}

// Enhanced Preloader
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    if (!preloader) return;
    
    // Add loading progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 10; // finish loading in ~1 second
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            setTimeout(() => {
                preloader.classList.add('fade-out');
                document.body.classList.remove('loading');
            }, 200); // shorter delay before fade-out
        }
    }, 100);
}

// Scroll Progress Bar
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}


// Enhanced Three.js scene for hero section
function initHeroAnimation() {
    const container = document.getElementById('hero-3d');
    if (!container) return;
    
    // Create scene
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    
    // Create a group to hold all objects
    const group = new THREE.Group();
    scene.add(group);
    
    // Create a glowing sphere with enhanced materials
    const sphereGeometry = new THREE.SphereGeometry(1, 64, 64);
    const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x3a10e5,
        wireframe: true,
        transparent: true,
        opacity: 0.8
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    group.add(sphere);
    
    // Create enhanced particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
        // Position
        posArray[i] = (Math.random() - 0.5) * 8;
        posArray[i + 1] = (Math.random() - 0.5) * 8;
        posArray[i + 2] = (Math.random() - 0.5) * 8;
        
        // Color
        colorArray[i] = Math.random();
        colorArray[i + 1] = 0.5 + Math.random() * 0.5;
        colorArray[i + 2] = 1;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.03,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    group.add(particlesMesh);
    
    // Create multiple rings with different properties
    const rings = [];
    const ringConfigs = [
        { radius: 1.5, tube: 0.05, color: 0x00f0ff, opacity: 0.8, speed: 0.01 },
        { radius: 1.8, tube: 0.03, color: 0x3a10e5, opacity: 0.6, speed: -0.008 },
        { radius: 2.1, tube: 0.02, color: 0xffffff, opacity: 0.4, speed: 0.006 },
        { radius: 2.4, tube: 0.015, color: 0x00ff88, opacity: 0.3, speed: -0.004 }
    ];
    
    ringConfigs.forEach((config, index) => {
        const ringGeometry = new THREE.TorusGeometry(config.radius, config.tube, 16, 100);
        const ringMaterial = new THREE.MeshBasicMaterial({
            color: config.color,
            transparent: true,
            opacity: config.opacity
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / (2 + index);
        ring.rotation.y = Math.PI / (4 + index);
        ring.userData = { speed: config.speed };
        group.add(ring);
        rings.push(ring);
    });
    
    // Add enhanced lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const pointLight1 = new THREE.PointLight(0x00f0ff, 1, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0x3a10e5, 0.8, 100);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);
    
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    container.addEventListener('mousemove', (event) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    });
    
    // Handle window resize
    const handleResize = () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        const time = Date.now() * 0.001;
        
        // Rotate the main group
        group.rotation.y += 0.005;
        group.rotation.z += 0.002;
        
        // Mouse interaction
        group.rotation.x += (mouseY * 0.1 - group.rotation.x) * 0.05;
        group.rotation.y += (mouseX * 0.1 - group.rotation.y) * 0.05;
        
        // Animate rings
        rings.forEach(ring => {
            ring.rotation.z += ring.userData.speed;
        });
        
        // Pulse the sphere
        sphere.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
        
        // Animate particles
        const positions = particlesMesh.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] += Math.sin(time + positions[i]) * 0.001;
        }
        particlesMesh.geometry.attributes.position.needsUpdate = true;
        
        renderer.render(scene, camera);
    }
    
    animate();
}

// Enhanced Three.js scene for about section
function initAboutAnimation() {
    const container = document.getElementById('about-3d');
    if (!container) return;
    
    // Create scene
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 6;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    
    // Create a group to hold all objects
    const group = new THREE.Group();
    scene.add(group);
    
    // Create enhanced DNA-like double helix structure
    const helixGroup = new THREE.Group();
    group.add(helixGroup);
    
    // Parameters for the helix
    const helixRadius = 1.5;
    const helixHeight = 5;
    const helixTurns = 4;
    const helixPoints = 60;
    const sphereSize = 0.1;
    
    // Create the first strand with enhanced visuals
    const strand1Points = [];
    for (let i = 0; i < helixPoints; i++) {
        const t = i / helixPoints;
        const angle = t * Math.PI * 2 * helixTurns;
        const y = (t - 0.5) * helixHeight;
        
        const x = Math.cos(angle) * helixRadius;
        const z = Math.sin(angle) * helixRadius;
        
        strand1Points.push(new THREE.Vector3(x, y, z));
        
        const sphereGeometry = new THREE.SphereGeometry(sphereSize, 16, 16);
        const sphereMaterial = new THREE.MeshBasicMaterial({
            color: 0x3a10e5,
            transparent: true,
            opacity: 0.8
        });
        
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(x, y, z);
        sphere.userData = { originalScale: 1, phase: i * 0.1 };
        helixGroup.add(sphere);
    }
    
    // Create the second strand
    const strand2Points = [];
    for (let i = 0; i < helixPoints; i++) {
        const t = i / helixPoints;
        const angle = t * Math.PI * 2 * helixTurns + Math.PI;
        const y = (t - 0.5) * helixHeight;
        
        const x = Math.cos(angle) * helixRadius;
        const z = Math.sin(angle) * helixRadius;
        
        strand2Points.push(new THREE.Vector3(x, y, z));
        
        const sphereGeometry = new THREE.SphereGeometry(sphereSize, 16, 16);
        const sphereMaterial = new THREE.MeshBasicMaterial({
            color: 0x00f0ff,
            transparent: true,
            opacity: 0.8
        });
        
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(x, y, z);
        sphere.userData = { originalScale: 1, phase: i * 0.1 + Math.PI };
        helixGroup.add(sphere);
    }
    
    // Create smooth curves for the strands
    const curve1 = new THREE.CatmullRomCurve3(strand1Points);
    const curve2 = new THREE.CatmullRomCurve3(strand2Points);
    
    const tubeGeometry1 = new THREE.TubeGeometry(curve1, 100, 0.02, 8, false);
    const tubeMaterial1 = new THREE.MeshBasicMaterial({
        color: 0x3a10e5,
        transparent: true,
        opacity: 0.6
    });
    const tube1 = new THREE.Mesh(tubeGeometry1, tubeMaterial1);
    helixGroup.add(tube1);
    
    const tubeGeometry2 = new THREE.TubeGeometry(curve2, 100, 0.02, 8, false);
    const tubeMaterial2 = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.6
    });
    const tube2 = new THREE.Mesh(tubeGeometry2, tubeMaterial2);
    helixGroup.add(tube2);
    
    // Add connecting lines between strands
    for (let i = 0; i < helixPoints; i += 6) {
        const point1 = strand1Points[i];
        const point2 = strand2Points[i];
        
        const points = [point1, point2];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.4
        });
        
        const line = new THREE.Line(lineGeometry, lineMaterial);
        helixGroup.add(line);
    }
    
    // Add enhanced lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x00f0ff, 1, 100);
    pointLight.position.set(0, 0, 8);
    scene.add(pointLight);
    
    // Handle window resize
    const handleResize = () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        const time = Date.now() * 0.001;
        
        // Rotate the helix
        helixGroup.rotation.y += 0.008;
        helixGroup.rotation.x = Math.sin(time * 0.5) * 0.1;
        
        // Animate individual spheres
        helixGroup.children.forEach(child => {
            if (child.userData && child.userData.phase !== undefined) {
                const scale = 1 + Math.sin(time * 2 + child.userData.phase) * 0.2;
                child.scale.setScalar(scale);
            }
        });
        
        renderer.render(scene, camera);
    }
    
    animate();
}

// Enhanced particles background
function initParticles() {
    const particlesContainer = document.getElementById('particles-js');
    if (!particlesContainer || typeof particlesJS === 'undefined') return;
    
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 120,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            color: {
                value: ['#00f0ff', '#3a10e5', '#ffffff']
            },
            shape: {
                type: ['circle', 'triangle'],
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.6,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 4,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 180,
                color: '#3a10e5',
                opacity: 0.3,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 0.8
                    }
                },
                push: {
                    particles_nb: 6
                }
            }
        },
        retina_detect: true
    });
}

// Particles for services section
function initServiceParticles() {
    const container = document.getElementById('services-particles');
    if (!container || !window.tsParticles) return;

    tsParticles.load('services-particles', {
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: '#ffffff' },
            opacity: {
                value: { min: 0.1, max: 1 },
                animation: { enable: true, speed: 1, sync: false }
            },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: { min: 0.1, max: 1 } }
        },
        detectRetina: true
    });
}

// Enhanced custom cursor
function initCustomCursor() {
    if (window.innerWidth <= 768) return; // Disable on mobile
    
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    const follower = document.createElement('div');
    follower.classList.add('cursor-follower');
    document.body.appendChild(follower);
    
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
    
    // Smooth follower animation
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
        requestAnimationFrame(animateFollower);
    }
    animateFollower();
    
    // Enhanced hover effects
    const hoverElements = document.querySelectorAll('a, button, .service-card, .tech-item, .case-study-card');
    hoverElements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('hover');
            follower.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('hover');
            follower.classList.remove('hover');
        });
    });
}

// Enhanced scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Trigger the animation
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Unobserve after animating
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .tech-item, .case-study-card, .contact-item');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Enhanced header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide header when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Enhanced mobile menu
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (!menuBtn || !nav) return;
    
    menuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuBtn.classList.toggle('active');
        
        // Animate hamburger icon
        const icon = menuBtn.querySelector('i');
        if (nav.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            menuBtn.classList.remove('active');
            menuBtn.querySelector('i').className = 'fas fa-bars';
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !menuBtn.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuBtn.classList.remove('active');
            menuBtn.querySelector('i').className = 'fas fa-bars';
            document.body.style.overflow = '';
        }
    });
}

// Theme toggle
function initThemeToggle() {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('light-mode');
        const icon = toggleBtn.querySelector('i');
        if (document.body.classList.contains('light-mode')) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    });
}

// Enhanced scroll to top button
function initScrollToTop() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    if (!scrollTopBtn) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Enhanced service cards
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.classList.add('glow');
            
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(0, 240, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('glow');
        });
    });
    
    // Add ripple animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Enhanced Typed.js for hero section
function initTypedText() {
    const typedElement = document.querySelector('.typed-text');
    
    if (typedElement && typeof Typed !== 'undefined') {
        new Typed(typedElement, {
            strings: [
                'Startups',
                'Enterprises', 
                'Government Agencies',
                'Healthcare Providers',
                'Financial Institutions'
            ],
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 1000,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            smartBackspace: true
        });
    }
}

// Enhanced AOS initialization
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1200,
            once: true,
            offset: 120,
            easing: 'ease-out-cubic',
            anchorPlacement: 'top-bottom'
        });
    } else {
        // Fallback: reveal elements if AOS library fails to load
        document.body.classList.add('no-aos');
        document.querySelectorAll('[data-aos]').forEach(el => {
            el.classList.add('aos-animate');
        });
    }
}

// Form handling with validation
function initFormHandling() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    const inputs = contactForm.querySelectorAll('.form-control');
    
    // Add real-time validation
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearErrors);
    });
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });
    
    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        
        clearFieldError(field);
        
        if (!value) {
            showFieldError(field, 'This field is required');
            return false;
        }
        
        if (field.type === 'email' && !isValidEmail(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
        
        return true;
    }
    
    function validateForm() {
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField({ target: input })) {
                isValid = false;
            }
        });
        return isValid;
    }
    
    function showFieldError(field, message) {
        field.classList.add('error');
        
        let errorElement = field.parentNode.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.style.color = '#ff4444';
            errorElement.style.fontSize = '0.9rem';
            errorElement.style.marginTop = '5px';
            field.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }
    
    function clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    function clearErrors(e) {
        clearFieldError(e.target);
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function submitForm() {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        
        // Simulate form submission
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.background = 'linear-gradient(45deg, #00ff88, #00f0ff)';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
                submitBtn.style.background = '';
                contactForm.reset();
            }, 2000);
        }, 1500);
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Performance optimizations
function initPerformanceOptimizations() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.classList.add('loading');
        imageObserver.observe(img);
    });
    
    // Debounce scroll events
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.onscroll = function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) {
                originalScrollHandler();
            }
        }, 10);
    };
    
    // Preload critical resources
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800&family=Rajdhani:wght@300;400;500;600;700&display=swap'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'style';
        document.head.appendChild(link);
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    
    // Graceful degradation for 3D animations
    if (e.error && e.error.message.includes('THREE')) {
        console.warn('3D animations disabled due to WebGL issues');
        const containers = document.querySelectorAll('.animation-container');
        containers.forEach(container => {
            container.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--accent-color); font-size: 1.2rem;">3D Animation Unavailable</div>';
        });
    }
});

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Skip to main content
    if (e.key === 'Tab' && e.target === document.body) {
        const mainContent = document.querySelector('main') || document.querySelector('#home');
        if (mainContent) {
            mainContent.focus();
        }
    }
    
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const nav = document.querySelector('nav');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (nav && nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuBtn.classList.remove('active');
            menuBtn.querySelector('i').className = 'fas fa-bars';
            document.body.style.overflow = '';
        }
    }
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}