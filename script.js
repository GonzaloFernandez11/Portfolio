function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5"); // antes faltaba esta línea

link1.addEventListener('click', (e) => {
  e.preventDefault();
  scrollToElement('#home');
});

link2.addEventListener('click', (e) => {
    e.preventDefault(); // frena el salto instantáneo del navegador si el <a> tiene href
    scrollToElement('#about');
});

link3.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToElement('#projects');
});

link4.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToElement('#contact');
});

link5.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToElement('#home');
});

const translations = {
    "en": {
        "Hola, soy":"Hi, i'm",

        "Desarrollador Full Stack & Estudiante de Ingeniería en Sistemas":"Full Stack Developer & Systems Engineering Student",

        "Construyo aplicaciones web con JavaScript, TypeScript, React y Node.js":"I build web applications with JavaScript, TypeScript, React and Node.js",

        "Inicio":"Home",

        "Acerca de mí":"About me",

        "Proyectos":"Projects",

        "Contáctame":"Get in Touch",

        "ACERCA DE MI": "ABOUT ME",

        "MIS PROYECTOS": "MY PROJECTS",

        "CONTACTAME PARA EXPLORAR POTENCIALES COLABORACIONES:": "CONTACT ME TO EXPLORE POTENTIAL COLLABORATIONS:",

        "Colaboremos por un mundo mejor a través de la innovación": "Let's collaborate for a better world through innovation.",

        "MoviePlay es una aplicación web que nos permite registrarnos con total seguridad y tiene como objetivo la adquisición de películas y series a través de una pasarela de pago.": "MoviePlay is a web application that allows us to register with complete security and aims at the acquisition of movies and series through a payment gateway.",

        "Dogs-App es una aplicación web diseñada para proporcionar información detallada sobre muchas razas en un formato de tarjeta con funciones como filtros y un formulario de creación.": "Dogs-App is a web application designed to provide detailed information about many breeds in an easily readable card format with features such as filters and a form for create a new breed",

        "Glass Gradient es una aplicación web que te permite generar código personalizado para efectos de vidrio translúcido, permitiéndote elegir el color y la intensidad deseados con facilidad.": "Glass Gradient is a web application that allows you to generate custom code for translucent glass effects, letting you choose your desired color and intensity with ease.",

        "Chat-App es una aplicación de chat diseñada para que te comuniques con tus amigos. Puedes registrarte, iniciar sesión, añadir amigos, bloquear o desbloquear, y enviar imágenes y emojis fácilmente.": "Chat-App is a chat application designed for you to communicate with your friends. You can register, log in, add friends, block or unblock users, and easily send images and emojis.",
    },
    "es": {
        "Hi, i'm":"Hola, soy",

        "Full Stack Developer & Systems Engineering Student":"Desarrollador Full Stack & Estudiante de Ingeniería en Sistemas",

        "I build web applications with JavaScript, TypeScript, React and Node.js":"Construyo aplicaciones web con JavaScript, TypeScript, React y Node.js",

        "Home":"Inicio",

        "About me":"Acerca de mí",

        "Projects":"Proyectos",

        "Get in Touch":"Contáctame",

        "ABOUT ME":"ACERCA DE MI",

        "MY PROJECTS": "MIS PROYECTOS",

        "CONTACT ME TO EXPLORE POTENTIAL COLLABORATIONS:": "CONTACTAME PARA EXPLORAR POTENCIALES COLABORACIONES:",

        "Let's collaborate for a better world through innovation.": "Colaboremos por un mundo mejor a través de la innovación.",

        "MoviePlay is a web application that allows us to register with complete security and aims at the acquisition of movies and series through a payment gateway.": "MoviePlay es una aplicación web que nos permite registrarnos con total seguridad y tiene como objetivo la adquisición de películas y series a través de una pasarela de pago.",

        "Dogs-App is a web application designed to provide detailed information about many breeds in an easily readable card format with features such as filters and a form for create a new breed": "Dogs-App es una aplicación web diseñada para proporcionar información detallada sobre muchas razas en un formato de tarjeta con funciones como filtros y un formulario de creación.",

        "Glass Gradient is a web application that allows you to generate custom code for translucent glass effects, letting you choose your desired color and intensity with ease.": "Glass Gradient es una aplicación web que te permite generar código personalizado para efectos de vidrio translúcido, permitiéndote elegir el color y la intensidad deseados con facilidad.",

        "Chat-App is a chat application designed for you to communicate with your friends. You can register, log in, add friends, block or unblock users, and easily send images and emojis.": "Chat-App es una aplicación de chat diseñada para que te comuniques con tus amigos. Puedes registrarte, iniciar sesión, añadir amigos, bloquear o desbloquear, y enviar imágenes y emojis fácilmente.",
    }
}

let currentLanguage = "en";

function changeLanguage() {
    currentLanguage = (currentLanguage === 'en') ? 'es' : 'en';

    const elementsToTranslate = document.querySelectorAll(".translate, .header, .frase, .card__description");

    elementsToTranslate.forEach(e => {
        const originalText = e.innerText;
        if(translations[currentLanguage][originalText]) {
            e.innerText = translations[currentLanguage][originalText];
        }
    });
}
