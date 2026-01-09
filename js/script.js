// Enhanced NVW Chatbot with Training Data
document.addEventListener('DOMContentLoaded', function() {
    console.log('NVW Website - Interactive features loaded successfully');
    
    // Load knowledge base
    const KB = typeof NVW_KNOWLEDGE_BASE !== 'undefined' ? NVW_KNOWLEDGE_BASE : {};
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
        
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav') && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
    
    // Language Switcher
    const langButtons = document.querySelectorAll('.lang-btn');
    const currentLang = localStorage.getItem('language') || 'en';
    
    setLanguage(currentLang);
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            localStorage.setItem('language', lang);
        });
    });
    
    function setLanguage(lang) {
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
        
        document.documentElement.lang = lang;
        
        const elements = document.querySelectorAll('[data-en][data-es]');
        elements.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = text;
                } else {
                    element.innerHTML = text;
                }
            }
        });
        
        const placeholderElements = document.querySelectorAll('[data-placeholder-en][data-placeholder-es]');
        placeholderElements.forEach(element => {
            const placeholder = element.getAttribute(`data-placeholder-${lang}`);
            if (placeholder) {
                element.placeholder = placeholder;
            }
        });
    }
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
    
    // Newsletter Form
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            const subject = 'Newsletter Subscription';
            const body = `New newsletter subscription from: ${email}`;
            window.location.href = `mailto:info@winesnvw.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            const lang = localStorage.getItem('language') || 'en';
            const message = lang === 'es' 
                ? '¡Gracias por suscribirte! Revisa tu cliente de correo para enviar la suscripción.' 
                : 'Thank you for subscribing! Please check your email client to send the subscription.';
            alert(message);
            this.reset();
        });
    });
    
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            const mailSubject = `Contact Form: ${subject}`;
            const mailBody = `Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}`;
            
            window.location.href = `mailto:info@winesnvw.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
            
            const lang = localStorage.getItem('language') || 'en';
            const alertMessage = lang === 'es' 
                ? '¡Gracias por tu mensaje! Revisa tu cliente de correo para enviarlo.' 
                : 'Thank you for your message! Please check your email client to send it.';
            alert(alertMessage);
            this.reset();
        });
    }
    
    // ENHANCED AI CHATBOT with Training Data
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotMessages = document.getElementById('chatbotMessages');
    
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', function() {
            chatbotContainer.classList.toggle('active');
        });
    }
    
    if (chatbotClose) {
        chatbotClose.addEventListener('click', function() {
            chatbotContainer.classList.remove('active');
        });
    }
    
    // Quick questions
    const quickQuestions = document.querySelectorAll('.quick-question');
    quickQuestions.forEach(button => {
        button.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            addUserMessage(question);
            setTimeout(() => {
                getBotResponse(question);
            }, 500);
        });
    });
    
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message) {
            addUserMessage(message);
            chatbotInput.value = '';
            setTimeout(() => {
                getBotResponse(message);
            }, 500);
        }
    }
    
    if (chatbotSend) {
        chatbotSend.addEventListener('click', sendMessage);
    }
    
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    function addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message user-message';
        messageDiv.innerHTML = `<p>${message}</p>`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    function addBotMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message bot-message';
        messageDiv.innerHTML = `<p>${message}</p>`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // SMART BOT RESPONSE with Training Data and Context Understanding
    function getBotResponse(question) {
        const lang = localStorage.getItem('language') || 'en';
        const lowerQuestion = question.toLowerCase();
        
        // Load chatbot knowledge (if available)
        const kb = typeof chatbotKnowledge !== 'undefined' ? chatbotKnowledge : null;
        const responses = typeof bilingualResponses !== 'undefined' ? bilingualResponses : null;
        const patterns = typeof keywordPatterns !== 'undefined' ? keywordPatterns : null;
        
        // Helper to match question against keyword patterns
        function matchesPattern(text, patternKey) {
            if (!patterns || !patterns[patternKey]) return false;
            return patterns[patternKey].some(keyword => text.includes(keyword));
        }
        
        // Check for booking questions
        if (matchesPattern(lowerQuestion, 'booking')) {
            return addBotMessage(lang === 'es' 
                ? `¡Puedes reservar fácilmente visitando nuestra aplicación en ${kb?.company?.bookingApp || 'https://napa-one.vercel.app/'}! 

Simplemente:
1. Selecciona tu bodega preferida
2. Elige fecha y hora
3. Completa la reserva en segundos

¡Recibirás confirmación instantánea!` 
                : `You can easily book by visiting our app at ${kb?.company?.bookingApp || 'https://napa-one.vercel.app/'}!

Simply:
1. Select your preferred winery
2. Choose your date and time  
3. Complete booking in seconds

You'll get instant confirmation!`);
        }
        
        // Winery questions
        if (matchesPattern(lowerQuestion, 'wineries')) {
            return addBotMessage(lang === 'es' 
                ? `¡Tenemos increíbles bodegas en todo el Valle de Napa! 

Puedes filtrar por:
• Tipos de vino (Cabernet, Chardonnay, Pinot Noir, etc.)
• Experiencias (catas, tours, maridajes)
• Comodidades (pet-friendly, familiar, orgánico)

Visita nuestra app para explorar todas las opciones: ${kb?.company?.bookingApp || 'https://napa-one.vercel.app/'}`
                : `We feature amazing wineries throughout Napa Valley!

You can filter by:
• Wine types (Cabernet, Chardonnay, Pinot Noir, etc.)
• Experiences (tastings, tours, pairings)
• Amenities (pet-friendly, family-friendly, organic)

Visit our app to explore all options: ${kb?.company?.bookingApp || 'https://napa-one.vercel.app/'}`);
        }
        
        // Tours and experiences
        if (matchesPattern(lowerQuestion, 'tours')) {
            return addBotMessage(lang === 'es'
                ? `¡Ofrecemos experiencias increíbles!

🍷 Catas de vino
🚶 Tours de viñedos
🍽️ Maridajes de comida y vino
👥 Eventos privados y grupales
🎉 Festivales de cosecha
👨‍🍳 Cenas con enólogos

Reserva en: ${kb?.company?.bookingApp || 'https://napa-one.vercel.app/'}`
                : `We offer amazing experiences!

🍷 Wine tastings
🚶 Vineyard tours  
🍽️ Food and wine pairings
👥 Private events and group bookings
🎉 Harvest festivals
👨‍🍳 Winemaker dinners

Book now: ${kb?.company?.bookingApp || 'https://napa-one.vercel.app/'}`);
        }
        
        // Contact information
        if (matchesPattern(lowerQuestion, 'contact')) {
            const phone = kb?.company?.phone || '954 422 2894';
            const email = kb?.company?.email || 'info@winesnvw.com';
            const whatsapp = kb?.company?.whatsapp || '+1 954 422 2894';
            
            return addBotMessage(lang === 'es'
                ? `¡Estamos aquí para ayudarte!

📞 Teléfono: ${phone}
📧 Email: ${email}
💬 WhatsApp: ${whatsapp} (¡Haz clic en el botón verde!)

También puedes usar nuestro formulario de contacto en la página de contacto.`
                : `We're here to help!

📞 Phone: ${phone}
📧 Email: ${email}
💬 WhatsApp: ${whatsapp} (Click the green button!)

You can also use our contact form on the contact page.`);
        }
        
        // Hours
        if (matchesPattern(lowerQuestion, 'hours')) {
            return addBotMessage(lang === 'es'
                ? `Los horarios varían según la bodega. La mayoría están abiertas:

🕐 10:00 AM - 5:00 PM

Verifica horarios específicos en nuestra app: ${kb?.company?.bookingApp || 'https://napa-one.vercel.app/'}

💡 Consejo: ¡La temporada de cosecha (agosto-octubre) es la más popular! Reserva con anticipación.`
                : `Winery hours vary by location. Most are open:

🕐 10:00 AM - 5:00 PM

Check specific hours in our app: ${kb?.company?.bookingApp || 'https://napa-one.vercel.app/'}

💡 Tip: Harvest season (August-October) is most popular! Book ahead.`);
        }
        
        // Prices
        if (matchesPattern(lowerQuestion, 'price')) {
            return addBotMessage(lang === 'es'
                ? `Los precios varían según la bodega y la experiencia:

🍷 Catas básicas: $25-$50
🍽️ Catas con maridaje: $75-$150
🚶 Tours privados: $100-$300

Usa nuestra app para filtrar por rango de precio: ${kb?.company?.bookingApp || 'https://napa-one.vercel.app/'}`
                : `Prices vary by winery and experience:

🍷 Basic tastings: $25-$50
🍽️ Pairing experiences: $75-$150
🚶 Private tours: $100-$300

Use our app to filter by price range: ${kb?.company?.bookingApp || 'https://napa-one.vercel.app/'}`);
        }
        
        // Pet-friendly
        if (matchesPattern(lowerQuestion, 'pets')) {
            const petInfo = kb?.filters?.petFriendly || "Many wineries welcome pets. Use the 'Pet-Friendly' filter to find them.";
            return addBotMessage(lang === 'es'
                ? `¡Sí! Muchas bodegas aceptan mascotas. 🐕

Usa el filtro "Pet-Friendly" en nuestra app para encontrar bodegas que dan la bienvenida a tus amigos peludos.

Algunas incluso tienen áreas al aire libre perfectas para mascotas!`
                : `Yes! ${petInfo} 🐕

Use the "Pet-Friendly" filter in our app to find wineries that welcome your furry friends.

Some even have outdoor areas perfect for pets!`);
        }
        
        // Family-friendly
        if (matchesPattern(lowerQuestion, 'family')) {
            return addBotMessage(lang === 'es'
                ? `¡Algunas bodegas son perfectas para familias! 👨‍👩‍👧‍👦

Usa el filtro "Family-Friendly" en nuestra app para encontrar bodegas con:
• Actividades para niños
• Áreas de juego
• Menús para niños
• Espacios amplios

Reserva en: ${kb?.company?.bookingApp || 'https://napa-one.vercel.app/'}`
                : `Some wineries are perfect for families! 👨‍👩‍👧‍👦

Use the "Family-Friendly" filter in our app to find wineries with:
• Activities for kids
• Play areas
• Children's menus
• Spacious grounds

Book now: ${kb?.company?.bookingApp || 'https://napa-one.vercel.app/'}`);
        }
        
        // Food pairing
        if (matchesPattern(lowerQuestion, 'food')) {
            return addBotMessage(lang === 'es'
                ? `¡Sí! Muchas bodegas ofrecen experiencias de maridaje de comida y vino. 🍽️🍷

Encuentra experiencias gourmet que incluyen:
• Quesos artesanales
• Charcutería local
• Menús de temporada
• Cenas con maridaje

Explora opciones en: ${kb?.company?.bookingApp || 'https://napa-one.vercel.app/'}`
                : `Yes! Many wineries offer food and wine pairing experiences. 🍽️🍷

Find gourmet experiences featuring:
• Artisan cheeses
• Local charcuterie
• Seasonal menus
• Pairing dinners

Explore options at: ${kb?.company?.bookingApp || 'https://napa-one.vercel.app/'}`);
        }
        
        // Cancellation/rescheduling
        if (matchesPattern(lowerQuestion, 'cancel')) {
            return addBotMessage(lang === 'es'
                ? `¡Sí! La mayoría de las bodegas permiten reprogramar o cancelar. 📅

Puedes gestionar tus reservas directamente a través de la app.

Consejo: Revisa la política de cancelación específica de cada bodega antes de reservar.`
                : `Yes! Most wineries allow rescheduling or cancellations. 📅

You can manage your bookings directly through the app.

Tip: Check each winery's specific cancellation policy before booking.`);
        }
        
        // About NVW / Story
        if (matchesPattern(lowerQuestion, 'about')) {
            const story = kb?.about?.story || "NVW was created to simplify wine tourism in Napa Valley!";
            return addBotMessage(lang === 'es'
                ? `¡Sobre NVW! 🍷

NVW nació de la necesidad de simplificar la exploración de bodegas en el Valle de Napa. Nos apasiona conectar a los visitantes con las mejores bodegas locales.

Misión: Celebrar la vibrante cultura vinícola local y apoyar a las pequeñas empresas.

¡Explora más en nuestra app!`
                : `About NVW! 🍷

${story}

Mission: Celebrate local wine culture and support small businesses.

Explore more in our app!`);
        }
        
        // Directions/location
        if (matchesPattern(lowerQuestion, 'location')) {
            const location = kb?.company?.location || "Napa, California";
            return addBotMessage(lang === 'es'
                ? `Estamos en el hermoso ${location}! 🍇

Para direcciones a bodegas específicas:
1. Visita nuestra app: ${kb?.company?.bookingApp || 'https://napa-one.vercel.app/'}
2. Selecciona una bodega
3. Toca "Obtener Direcciones"

Nuestra app se integra con Google Maps para guiarte paso a paso.`
                : `We're in beautiful ${location}! 🍇

For directions to specific wineries:
1. Visit our app: ${kb?.company?.bookingApp || 'https://napa-one.vercel.app/'}
2. Select a winery
3. Tap "Get Directions"

Our app integrates with Google Maps for turn-by-turn guidance.`);
        }
        
        // For wineries / business
        if (matchesPattern(lowerQuestion, 'help') || lowerQuestion.includes('winery owner') || lowerQuestion.includes('partner') || lowerQuestion.includes('join')) {
            return addBotMessage(lang === 'es'
                ? `¿Eres propietario de una bodega? ¡Únete a NVW!

Beneficios:
✅ Mayor visibilidad
✅ Reservas en tiempo real
✅ Análisis de visitantes
✅ Herramientas promocionales
✅ Gestión fácil

Contáctanos: ${kb?.company?.email || 'info@winesnvw.com'} o visita nuestra página "For Wineries"`
                : `Are you a winery owner? Join NVW!

Benefits:
✅ Enhanced visibility
✅ Real-time booking
✅ Visitor analytics
✅ Promotional tools
✅ Easy management

Contact us: ${kb?.company?.email || 'info@winesnvw.com'} or visit our "For Wineries" page`);
        }
        
        // Default response with all contact methods
        const phone = kb?.company?.phone || '954 422 2894';
        const email = kb?.company?.email || 'info@winesnvw.com';
        const whatsapp = kb?.company?.whatsapp || '+1 954 422 2894';
        const bookingApp = kb?.company?.bookingApp || 'https://napa-one.vercel.app/';
        
        return addBotMessage(lang === 'es'
            ? `¡Gracias por preguntar! Aquí está cómo puedo ayudarte:

📱 Reservar una bodega: ${bookingApp}
📞 Llamar: ${phone}
📧 Email: ${email}
💬 WhatsApp: ${whatsapp}

¿Tienes alguna pregunta específica sobre reservas, bodegas, tours o precios?`
            : `Thanks for asking! Here's how I can help:

📱 Book a winery: ${bookingApp}
📞 Call: ${phone}
📧 Email: ${email}
💬 WhatsApp: ${whatsapp}

Do you have a specific question about bookings, wineries, tours, or prices?`);
    }
    
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Scroll Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const animateElements = document.querySelectorAll('.feature-card, .blog-card, .testimonial-grid, .story-grid');
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Back to Top Button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});