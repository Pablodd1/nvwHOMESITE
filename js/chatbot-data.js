// NVW Chatbot Knowledge Base - Comprehensive Training Data
// This file contains all the information the chatbot needs to answer questions about NVW

const chatbotKnowledge = {
    // Company Information
    company: {
        name: "NVW - Napa Valley Wineries",
        location: "Napa, California",
        phone: "954 422 2894",
        phoneLink: "tel:9544222894",

        email: "anabel@nvw.wine",
        bookingApp: "https://napa-one.vercel.app/",
        social: {
            tiktok: "https://www.tiktok.com/@nvw.wine",
            instagram: "https://www.instagram.com/nvwcalifornia?igsh=MTEwcGJ3ankzaTVpaQ==",
        },
        designer: "Jasmel Acosta - AI Dynamics LLC"
    },

    // Mission and About
    about: {
        mission: "NVW is thrilled to showcase the incredible local wineries and restaurants in the beautiful Napa Valley, California! We are passionate about uplifting small businesses by giving them a platform to share their unique offerings and celebrating our vibrant local culture.",
        story: "Since relocating to the beautiful Napa Valley, we found it challenging to discover wineries that truly matched our tastes without spending hours researching and making endless phone calls. NVW was created to simplify the process and transform the way everyone enjoys wine tourism!",
        tagline: "Plan, explore, and book your perfect winery experience today with NVW"
    },

    // Booking Information
    booking: {
        howToBook: "Simply visit our booking app at https://napa-one.vercel.app/, select a winery, choose your preferred date and time, and complete your booking with just a few clicks.",
        rescheduling: "Yes, most wineries allow rescheduling or cancellations. You can manage your bookings directly through the app.",
        reservationsRequired: "Some wineries allow walk-ins, but most require reservations. NVW provides real-time booking to ensure availability.",
        groupBookings: "Absolutely! Use the 'Private Booking' filter to find wineries offering group tours and private events.",
        bookingLink: "https://napa-one.vercel.app/"
    },

    // Winery Features and Services
    features: {
        discovery: "Your winery will appear in search results tailored to user preferences. Visitors can easily find your winery based on attributes like wine types and amenities with priority placement options.",
        promotions: "Highlight exclusive offers like discounts and tasting packages. Leverage seasonal campaigns for events like harvest festivals with real-time updates on availability.",
        analytics: "Gain detailed analytics on what visitors search for and prefer. Understand trends like peak visiting times and popular experiences.",
        engagement: "Communicate directly with users, send personalized follow-ups and special offers to guests post-visit, and collect ratings and reviews.",
        management: "Add your winery profile, photos, and descriptions effortlessly. Update availability, events, and pricing in real-time.",
        realTimeBooking: "Make it easy for visitors to instantly book tours and tastings with interactive Google Maps integration and AI-powered recommendations."
    },

    // Filters and Search Options
    filters: {
        petFriendly: "Many wineries welcome pets. Use the 'Pet-Friendly' filter to find them.",
        familyFriendly: "Some wineries are family-friendly. Use the 'Family-Friendly' filter to find them.",
        foodPairing: "Several wineries in Napa Valley provide curated food and wine pairing experiences.",
        privateEvents: "Use the 'Private Booking' filter to find wineries offering group tours and private events.",
        nearMe: "Use the 'Near Me' feature on the app to discover wineries closest to you."
    },

    // Navigation and Directions
    navigation: {
        directions: "NVW integrates with Google Maps to provide step-by-step directions to your selected wineries.",
        nearbyWineries: "Yes! Use the 'Near Me' feature on the app to discover wineries closest to you.",
        multiWinery: "Yes, NVW's itinerary planner helps you map out multiple winery visits in a single trip.",
        fullyBooked: "NVW will suggest similar wineries nearby based on your preferences if your first choice is fully booked."
    },

    // App Information
    app: {
        accountRequired: "No, you can explore as a guest. However, creating an account allows you to save preferences, favorites, and booking history.",
        security: "Absolutely. NVW prioritizes your privacy and does not share your data with third parties.",
        platforms: "Access NVW through our website or download the mobile app for iOS and Android."
    },

    // Wine Tourism Tips
    tips: {
        dressCode: "Smart casual is recommended. Comfortable shoes are ideal for vineyard tours.",
        bestTime: "Harvest season (August to October) is the most popular, but spring (March to May) offers beautiful scenery and fewer crowds.",
        whatToBring: "Bring sunscreen, a hat, and water. Many wineries offer food, but check beforehand if you have dietary restrictions."
    },

    // Blog Topics
    blog: [
        "Hidden Gems—Exploring Beyond Napa and Sonoma: Discover lesser-known wine regions in California.",
        "Sustainability and Innovation—California's Green Wine Movement: Learn how California wineries are leading in sustainable practices.",
        "From Big Brands to Boutique—Exploring California's Diverse Wine Landscape",
        "The Judgment of Paris—How California Stole the Spotlight: The historic 1976 wine tasting that changed the industry.",
        "The Early Days of California Wine—From Mission Grapes to Modern Vines"
    ],

    // FAQ Categories
    faqs: {
        general: [
            { q: "How can I find the best wineries for my taste?", a: "NVW helps you find the best wineries tailored to your preferences. Use our filters to discover top-rated wineries based on wine types, amenities, and experiences." },
            { q: "Are pets allowed at wineries?", a: "Yes! Many wineries welcome pets. Use the 'Pet-Friendly' filter to find them." },
            { q: "Do wineries offer food and wine pairing experiences?", a: "Several wineries in Napa Valley provide curated food and wine pairing experiences. Use our filters to find the perfect match." },
            { q: "Do I need a reservation to visit a winery?", a: "Some wineries allow walk-ins, but most require reservations. NVW provides real-time booking to ensure availability." }
        ],
        booking: [
            { q: "How do I book a winery tour?", a: "Simply select a winery on the app or website, choose your preferred date and time, and complete your booking with just a few clicks." },
            { q: "Can I reschedule or cancel my booking?", a: "Yes, most wineries allow rescheduling or cancellations. You can manage your bookings directly through the app." },
            { q: "What if my preferred winery is fully booked?", a: "NVW will suggest similar wineries nearby based on your preferences." },
            { q: "Can I book for a large group or private event?", a: "Absolutely! Use the 'Private Booking' filter to find wineries offering group tours." }
        ]
    },

    // Contact Options
    contact: {
        phone: "Call us at 954 422 2894",
        email: "Email us at anabel@nvw.wine",

        form: "Fill out the contact form on our Contact page",
        social: "Connect with us on TikTok, Instagram"
    },

    // Operating Hours (if applicable)
    hours: {
        default: "Winery hours vary by location. Check individual winery details in the booking app for specific hours.",
        support: "Our customer support is available Monday-Friday, 9 AM - 5 PM Pacific Time"
    },

    // Podcast Information
    podcast: {
        title: "NVW Wine Stories Podcast",
        description: "Join us as we explore the stories behind Napa Valley's finest wineries, meet passionate winemakers, and discover the art of wine tourism.",
        listenOn: "Available on our website homepage with audio player"
    }
};

// Bilingual responses (English/Spanish)
const bilingualResponses = {
    en: {
        greeting: "Hi! I'm your NVW assistant. How can I help you today?",
        bookingInfo: "You can book your winery experience at: https://napa-one.vercel.app/",
        contactInfo: "Contact us:\n📞 Phone: 954 422 2894\n📧 Email: anabel@nvw.wine",
        needMoreHelp: "Need more help? Feel free to ask another question!",
        didntUnderstand: "I'm not sure I understood that. Could you rephrase your question? You can ask about bookings, wineries, tours, or contact information.",
        checkWebsite: "For more details, check our website pages or visit our booking app!"
    },
    es: {
        greeting: "¡Hola! Soy tu asistente NVW. ¿Cómo puedo ayudarte hoy?",
        bookingInfo: "Puedes reservar tu experiencia vinícola en: https://napa-one.vercel.app/",
        contactInfo: "Contáctanos:\n📞 Teléfono: 954 422 2894\n📧 Email: anabel@nvw.wine",
        needMoreHelp: "¿Necesitas más ayuda? ¡Pregunta lo que quieras!",
        didntUnderstand: "No estoy seguro de haber entendido. ¿Podrías reformular tu pregunta? Puedes preguntar sobre reservas, bodegas, tours o información de contacto.",
        checkWebsite: "¡Para más detalles, consulta nuestro sitio web o visita nuestra app de reservas!"
    }
};

// Smart keyword matching for better question understanding
const keywordPatterns = {
    booking: ['book', 'reserve', 'reservation', 'schedule', 'appointment', 'reserva', 'reservar', 'cita'],
    contact: ['contact', 'phone', 'email', 'call', 'reach', 'contacto', 'teléfono', 'correo', 'llamar'],
    hours: ['hours', 'time', 'open', 'close', 'when', 'horario', 'hora', 'abierto', 'cerrado', 'cuándo'],
    location: ['where', 'location', 'address', 'find', 'direction', 'map', 'dónde', 'ubicación', 'dirección', 'encontrar', 'mapa'],
    wineries: ['winery', 'wineries', 'vineyard', 'wine', 'bodega', 'bodegas', 'viñedo', 'vino'],
    tours: ['tour', 'tasting', 'visit', 'experience', 'tour', 'cata', 'visita', 'experiencia'],
    price: ['price', 'cost', 'fee', 'how much', 'precio', 'costo', 'cuánto'],
    pets: ['pet', 'dog', 'cat', 'animal', 'mascota', 'perro', 'gato'],
    family: ['family', 'kids', 'children', 'child', 'familia', 'niños', 'niño'],
    food: ['food', 'eat', 'restaurant', 'dining', 'pairing', 'comida', 'comer', 'restaurante', 'maridaje'],
    cancel: ['cancel', 'reschedule', 'change', 'modify', 'cancelar', 'reprogramar', 'cambiar', 'modificar'],
    account: ['account', 'login', 'sign up', 'register', 'cuenta', 'iniciar sesión', 'registrarse'],
    help: ['help', 'support', 'assist', 'question', 'ayuda', 'soporte', 'asistencia', 'pregunta'],
    about: ['about', 'who', 'what is', 'story', 'mission', 'acerca', 'quién', 'qué es', 'historia', 'misión']
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { chatbotKnowledge, bilingualResponses, keywordPatterns };
}
