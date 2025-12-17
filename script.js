// DATABASE SIMULATION (LocalStorage)
// ============================================
const DB = {
    get: (key) => JSON.parse(localStorage.getItem(`studiokomm_${key}`) || 'null'),
    set: (key, value) => localStorage.setItem(`studiokomm_${key}`, JSON.stringify(value)),
    init: () => {
        // Always reinitialize with new services
        DB.set('services', [
            { id: 1, icon: 'camera', title: { en: 'Photography', fr: 'Photographie', ar: 'التصوير الفوتوغرافي' }, description: { en: 'Professional photo sessions for events, portraits, and commercial projects. 400 DH/day.', fr: 'Séances photo professionnelles pour événements, portraits et projets commerciaux. 400 DH/jour.', ar: 'جلسات تصوير احترافية للمناسبات والبورتريه والمشاريع التجارية' } },
            { id: 2, icon: 'video', title: { en: 'Video Production', fr: 'Production Vidéo', ar: 'إنتاج الفيديو' }, description: { en: 'Cinematic video production and professional editing. Starting at 70 DH/video.', fr: 'Production vidéo cinématographique et montage professionnel. À partir de 70 DH/vidéo.', ar: 'إنتاج فيديو سينمائي ومونتاج احترافي' } },
            { id: 3, icon: 'wedding', title: { en: 'Wedding Services', fr: 'Services Mariage', ar: 'خدمات الزفاف' }, description: { en: 'Complete wedding coverage plus material rentals. Tables, decorations, and all essentials.', fr: 'Couverture complète de mariage plus location de matériel. Tables, décorations et tous les essentiels.', ar: 'تغطية كاملة للزفاف بالإضافة إلى تأجير المواد' } },
            { id: 4, icon: 'event', title: { en: 'Event Coverage', fr: 'Couverture Événements', ar: 'تغطية الفعاليات' }, description: { en: 'Birthdays, gala dinners, team building, kick-offs and corporate events.', fr: 'Anniversaires, dîners de gala, team building, kick-offs et événements corporate.', ar: 'أعياد الميلاد، حفلات العشاء، بناء الفريق والفعاليات' } },
            { id: 5, icon: 'content', title: { en: 'Content Creation', fr: 'Création de Contenu', ar: 'إنشاء المحتوى' }, description: { en: 'Social media content management, strategy, and creative direction.', fr: 'Gestion de contenu réseaux sociaux, stratégie et direction créative.', ar: 'إدارة محتوى وسائل التواصل الاجتماعي والاستراتيجية' } },
            { id: 6, icon: 'rental', title: { en: 'Wedding Rentals', fr: 'Location Mariage', ar: 'تأجير معدات الزفاف' }, description: { en: 'Tables, chairs, decorations and all wedding materials available for rent.', fr: 'Tables, chaises, décorations et tout le matériel de mariage disponible à la location.', ar: 'طاولات، كراسي، ديكورات وجميع مواد الزفاف للإيجار' } }
        ]);
        
        DB.set('portfolio', [
            { id: 1, title: { en: 'Marrakech Wedding', fr: 'Mariage Marrakech', ar: 'زفاف مراكش' }, category: 'wedding', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600', description: { en: 'Beautiful traditional Moroccan wedding', fr: 'Magnifique mariage traditionnel marocain', ar: 'زفاف مغربي تقليدي جميل' } },
            { id: 2, title: { en: 'Corporate Gala', fr: 'Gala Corporate', ar: 'حفل الشركات' }, category: 'event', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600', description: { en: 'Annual corporate gala dinner coverage', fr: 'Couverture du dîner de gala annuel', ar: 'تغطية حفل العشاء السنوي للشركات' } },
            { id: 3, title: { en: 'Brand Photoshoot', fr: 'Shooting Marque', ar: 'جلسة تصوير العلامة التجارية' }, category: 'photography', image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600', description: { en: 'Professional brand photography session', fr: 'Séance photo de marque professionnelle', ar: 'جلسة تصوير احترافية للعلامة التجارية' } },
            { id: 4, title: { en: 'Birthday Celebration', fr: 'Fête Anniversaire', ar: 'احتفال عيد الميلاد' }, category: 'event', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600', description: { en: 'Vibrant birthday party coverage', fr: 'Couverture de fête d\'anniversaire', ar: 'تغطية حفل عيد ميلاد نابض بالحياة' } },
            { id: 5, title: { en: 'Team Building Day', fr: 'Journée Team Building', ar: 'يوم بناء الفريق' }, category: 'corporate', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600', description: { en: 'Corporate team building event', fr: 'Événement de team building', ar: 'فعالية بناء فريق الشركة' } },
            { id: 6, title: { en: 'Product Video', fr: 'Vidéo Produit', ar: 'فيديو المنتج' }, category: 'video', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600', description: { en: 'Creative product video production', fr: 'Production vidéo produit créative', ar: 'إنتاج فيديو إبداعي للمنتجات' } }
        ]);
        
        if (!DB.get('messages')) {
            DB.set('messages', []);
        }
    }
};

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.pricing': 'Pricing',
        'nav.events': 'Events',
        'nav.contact': 'Contact',
        'hero.description': 'STUDIOKOMM is a creative agency specializing in photography, video production, events, and wedding services. We capture your precious moments with artistic excellence.',
        'hero.cta1': 'Book a Session',
        'hero.cta2': 'View Our Work',
        'about.tagline': 'Meet the Founder',
        'about.title1': 'The Vision Behind',
        'services.tagline': 'What We Offer',
        'services.title1': 'Our',
        'services.title2': 'Services',
        'services.description': 'From capturing precious moments to creating stunning content, we offer comprehensive creative services tailored to your needs.',
        'portfolio.tagline': 'Our Work',
        'portfolio.title1': 'Featured',
        'portfolio.title2': 'Projects',
        'events.tagline': 'What We Cover',
        'events.title1': 'Event',
        'events.title2': 'Services'
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.about': 'À Propos',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.pricing': 'Tarifs',
        'nav.events': 'Événements',
        'nav.contact': 'Contact',
        'hero.description': 'STUDIOKOMM est une agence créative spécialisée dans la photographie, la production vidéo, les événements et les services de mariage.',
        'hero.cta1': 'Réserver',
        'hero.cta2': 'Voir Nos Travaux',
        'about.tagline': 'Rencontrez le Fondateur',
        'about.title1': 'La Vision Derrière',
        'services.tagline': 'Ce Que Nous Offrons',
        'services.title1': 'Nos',
        'services.title2': 'Services',
        'services.description': 'De la capture de moments précieux à la création de contenu, nous offrons des services créatifs complets.',
        'portfolio.tagline': 'Nos Travaux',
        'portfolio.title1': 'Projets',
        'portfolio.title2': 'Vedettes',
        'events.tagline': 'Ce Que Nous Couvrons',
        'events.title1': 'Services',
        'events.title2': 'Événements'
    },
    ar: {
        'nav.home': 'الرئيسية',
        'nav.about': 'من نحن',
        'nav.services': 'الخدمات',
        'nav.portfolio': 'الأعمال',
        'nav.pricing': 'الأسعار',
        'nav.events': 'الفعاليات',
        'nav.contact': 'اتصل بنا',
        'hero.description': 'ستوديو كوم هي وكالة إبداعية متخصصة في التصوير الفوتوغرافي وإنتاج الفيديو والفعاليات وخدمات الزفاف.',
        'hero.cta1': 'احجز الآن',
        'hero.cta2': 'شاهد أعمالنا',
        'about.tagline': 'تعرف على المؤسس',
        'about.title1': 'الرؤية وراء',
        'services.tagline': 'ما نقدمه',
        'services.title1': '',
        'services.title2': 'خدماتنا',
        'services.description': 'من التقاط اللحظات الثمينة إلى إنشاء محتوى مذهل، نقدم خدمات إبداعية شاملة.',
        'portfolio.tagline': 'أعمالنا',
        'portfolio.title1': 'المشاريع',
        'portfolio.title2': 'المميزة',
        'events.tagline': 'ما نغطيه',
        'events.title1': 'خدمات',
        'events.title2': 'الفعاليات'
    }
};

let currentLang = 'en';

// ============================================
// ICONS
// ============================================
const icons = {
    camera: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    video: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>',
    wedding: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>',
    event: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',
    content: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>',
    rental: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>'
};

// ============================================
// CHATBOT RESPONSES
// ============================================
function getChatResponse(message) {
    const lower = message.toLowerCase();
    
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('bonjour') || lower.includes('سلام')) {
        return "Hello! Welcome to STUDIOKOMM. How can I assist you today?";
    }
    if (lower.includes('price') || lower.includes('pricing') || lower.includes('cost') || lower.includes('tarif') || lower.includes('prix')) {
        return "Our pricing:\n📸 Photography: 400 DH/day\n🎬 Video Editing: 70 DH/video\n📱 Content Manager: Negotiable\n🎉 Events: Negotiable\n\nWould you like to book? Contact us on WhatsApp: +212 621 695 312";
    }
    if (lower.includes('service') || lower.includes('offer') || lower.includes('خدم')) {
        return "We offer:\n• Photography (400 DH/day)\n• Video Production & Editing\n• Wedding Coverage & Rentals\n• Event Coverage (birthdays, galas, team building)\n• Content Creation & Management\n\nWhich service interests you?";
    }
    if (lower.includes('wedding') || lower.includes('mariage') || lower.includes('زفاف')) {
        return "We offer complete wedding services! 💒\n• Photography & Video\n• Material rentals (tables, chairs, decorations)\n• Full day coverage\n\nContact us on WhatsApp for a personalized quote: +212 621 695 312";
    }
    if (lower.includes('contact') || lower.includes('book') || lower.includes('whatsapp') || lower.includes('phone')) {
        return "You can reach us:\n📱 WhatsApp: +212 621 695 312\n📍 Location: Marrakech, Morocco\n📸 Instagram: @studiokom.ma\n🎵 TikTok: @studiokom.ma\n\nOr fill out the contact form above!";
    }
    if (lower.includes('event') || lower.includes('événement') || lower.includes('فعالي')) {
        return "We cover all types of events:\n🎂 Birthdays\n🎩 Gala Dinners\n🤝 Team Building\n🚀 Kick-off Events\n🏢 Corporate Events\n\nPricing is negotiable based on your needs. Contact us for a quote!";
    }
    
    return "Thanks for your message! I can help you with:\n• Services & Pricing\n• Wedding packages\n• Event coverage\n• Booking information\n\nOr contact us directly on WhatsApp: +212 621 695 312";
}

// ============================================
// APP INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    DB.init();
    initApp();
});

function initApp() {
    // Set initial theme based on system preference or default to dark
    if (localStorage.getItem('theme') === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
        document.documentElement.classList.remove('dark');
        document.body.classList.add('light-mode');
    } else {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark-mode');
    }
    
    // Update theme toggle icon
    const toggle = document.getElementById('themeToggle');
    const darkIcon = toggle.querySelector('.dark-icon');
    const lightIcon = toggle.querySelector('.light-icon');
    if (document.documentElement.classList.contains('dark')) {
        darkIcon.classList.remove('hidden');
        lightIcon.classList.add('hidden');
    } else {
        darkIcon.classList.add('hidden');
        lightIcon.classList.remove('hidden');
    }
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 1500);
    
    initCursor();
    initScrollAnimations();
    initThemeToggle();
    initLanguageSelector();
    initMobileMenu();
    initNavigation();
    initChatbot();
    initContactForm();
    initCounters();
    
    loadServices();
    loadPortfolio();
    updateTranslations();
}

// ============================================
// COUNTER ANIMATION
// ============================================
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// ============================================
// CURSOR FOLLOWER
// ============================================
function initCursor() {
    const cursor = document.getElementById('cursorFollower');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        requestAnimationFrame(animate);
    }
    animate();
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible', 'active');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.page-section, .reveal').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// THEME TOGGLE
// ============================================
function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const darkIcon = toggle.querySelector('.dark-icon');
    const lightIcon = toggle.querySelector('.light-icon');
    
    toggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        

    });
}

// ============================================
// LANGUAGE SELECTOR
// ============================================
function initLanguageSelector() {
    const selector = document.getElementById('langSelector');
    selector.addEventListener('change', (e) => {
        currentLang = e.target.value;
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLang;
        updateTranslations();
        loadServices();
        loadPortfolio();
    });
}

function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[currentLang] && translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
    
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const nav = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            nav.style.background = 'rgba(10, 10, 15, 0.95)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.05)';
        }
    });
}

// ============================================
// CHATBOT
// ============================================
function initChatbot() {
    const toggle = document.getElementById('chatbotToggle');
    const container = document.getElementById('chatbotContainer');
    const form = document.getElementById('chatForm');
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    
    toggle.addEventListener('click', () => {
        container.classList.toggle('active');
        toggle.querySelector('.chat-icon').classList.toggle('hidden');
        toggle.querySelector('.close-icon').classList.toggle('hidden');
    });
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const msg = input.value.trim();
        if (!msg) return;
        
        messages.innerHTML += `
            <div class="flex gap-3 justify-end">
                <div class="glass rounded-2xl rounded-tr-none p-3 max-w-[80%] bg-indigo-500/20">
                    <p class="text-sm">${msg}</p>
                </div>
            </div>
        `;
        
        input.value = '';
        
        setTimeout(() => {
            const response = getChatResponse(msg);
            messages.innerHTML += `
                <div class="flex gap-3">
                    <div class="w-8 h-8 gradient-bg rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">SK</div>
                    <div class="glass rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                        <p class="text-sm whitespace-pre-line">${response}</p>
                    </div>
                </div>
            `;
            messages.scrollTop = messages.scrollHeight;
        }, 800);
        
        messages.scrollTop = messages.scrollHeight;
    });
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        const messages = DB.get('messages') || [];
        messages.push({
            id: Date.now(),
            ...data,
            date: new Date().toISOString(),
            read: false
        });
        DB.set('messages', messages);
        
        showToast('Message sent successfully! We will contact you soon.');
        form.reset();
    });
}

// ============================================
// LOAD CONTENT
// ============================================
function loadServices() {
    const grid = document.getElementById('servicesGrid');
    const services = DB.get('services') || [];
    
    grid.innerHTML = services.map((service, i) => `
        <div class="glass rounded-2xl p-8 card-3d hover:border-indigo-500/50 transition-all reveal reveal-delay-${i % 4 + 1}">
            <div class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6 text-white">
                ${icons[service.icon] || icons.camera}
            </div>
            <h3 class="text-xl font-bold mb-3">${service.title[currentLang] || service.title.en}</h3>
            <p class="opacity-70">${service.description[currentLang] || service.description.en}</p>
        </div>
    `).join('');
    
    initScrollAnimations();
}

function loadPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    const portfolio = DB.get('portfolio') || [];
    
    grid.innerHTML = portfolio.map((item, i) => `
        <div class="group relative overflow-hidden rounded-2xl card-3d reveal reveal-delay-${i % 4 + 1}">
            <div class="aspect-[4/3] overflow-hidden">
                <img src="${item.image}" alt="${item.title[currentLang] || item.title.en}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span class="text-xs uppercase tracking-wider text-indigo-400 mb-2">${item.category}</span>
                <h3 class="text-xl font-bold mb-2">${item.title[currentLang] || item.title.en}</h3>
                <p class="text-sm opacity-70">${item.description[currentLang] || item.description.en}</p>
            </div>
        </div>
    `).join('');
    
    initScrollAnimations();
}

// ============================================
// TOAST NOTIFICATION
// ============================================
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMessage');
    toastMsg.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
        toast.classList.remove('translate-y-0', 'opacity-100');
    }, 3000);
}
