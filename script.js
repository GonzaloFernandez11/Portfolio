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

link1.addEventListener('click', () => {
    scrollToElement('.container');
});

link2.addEventListener('click', () => {
    scrollToElement('#targets');
});

link3.addEventListener('click', () => {
    scrollToElement('#projects');
});

link4.addEventListener('click', () => {
    scrollToElement('#contact');
});

link5.addEventListener('click', () => {
    scrollToElement('#home');
});

const translations = {
    "en": {
        "Persiguiendo la excelencia en el mundo del desarrollo": "Pursuing excellence in the world of development",

        "Hola, soy Gonza, Desarrollador Web": "Hi, i'm Gonza, Web Developer",

        "Soy un Desarrollador Web con gran capacidad para trabajar en equipo, resolver problemas y una profunda pasión por el código y las tecnologías. Soy un desarrollador altamente comprometido, con muchas ganas de aprender sobre el negocio y ayudar a las empresas a alcanzar sus objetivos, con la ambición de seguir aprendiendo y liderar proyectos significativos.": "I am a Web Developer with a strong ability to work in teams, solve problems, and a deep passion for code and technologies. I am a highly committed developer, eager to learn about the business and assist companies in achieving their goals, with the ambition to continue learning and spearhead significant projects.",

        "Me caracterizo por ser muy consistente, participativa y empática, con altas capacidades de aprendizaje, trabajo en equipo y comunicación efectiva.": "I am known for being very consistent, participative, and empathetic, with high capabilities for learning, teamwork, and effective communication.",

        "Mi experiencia académica me permitió aprender y desarrollar habilidades técnicas tanto en Back-End como Front-End a través de proyectos reales, aplicando JavaScript, HTML, CSS, Sequelize, React, Redux, Node y Express. También adquirí habilidades en 'planificación de proyectos', 'organización de proyectos' (tanto individuales como grupales) y 'resolución de problemas'.": "My academic experience allowed me to learn and develop technical skills in both Back-End and Front-End through real projects, applying JavaScript, HTML, CSS, Sequelize, React, Redux, Node, and Express. I also acquired skills in 'project planning', 'project organization' (both individual and group), and 'problem-solving'.",

        "MIS OBJETIVOS": "MY TARGETS",

        "Excelencia en el Desarrollo": "Developer Excellence",
        "Desarrollo de Productos de Alta Calidad": "High-Quality Product Development",
        "Compresión del Negocio": "Business Understanding",
        "Contribución a la Comunidad": "Community Contribution",

        "Integrarse en el mundo laboral, colaborar con colegas, aprender de ellos y trabajar en proyectos reales para mejorar y alcanzar la excelencia en el campo del desarrollo.": "To integrate into the workforce, collaborate with colleagues, learn from them, and work on real projects to enhance and achieve excellence in the field of development.",

        "Me esfuerzo constantemente por mejorar para poder ofrecer productos de alta calidad escribiendo código limpio, realizando pruebas rigurosas y manteniendo estándares de alto rendimiento.": "I am constantly striving to improve to be able to deliver high-quality products by writing clean code, conducting rigorous testing, and maintaining high-performance standards.",

        "Comprender el funcionamiento interno y las necesidades del negocio es, para mí, absolutamente esencial. Aspiro a contribuir al éxito de la empresa y ser un componente clave en el logro de sus objetivos.": "Understanding the inner workings and business needs is, to me, absolutely essential. I aspire to contribute to the company's success and be a key component in achieving its objectives.", 

        "Estoy comprometido a retribuir a la comunidad y contribuir a proyectos de código abierto. Creo que la colaboración es crucial y compartir conocimientos y experiencias es una forma de mejorar como desarrollador y apoyar a la comunidad.": "I am committed to giving back to the community and contributing to open-source projects. I believe that collaboration is crucial, and sharing knowledge and experiences is a way to improve as a developer and support the community.",

        "MIS PROYECTOS": "MY PROJECTS",
        "CONTACTAME PARA EXPLORAR POTENCIALES COLABORACIONES:": "CONTACT ME TO EXPLORE POTENTIAL COLLABORATIONS:",
        "Colaboremos por un mundo mejor a través de la innovación": "Let's collaborate for a better world through innovation.",

        "MoviePlay es una aplicación web que nos permite registrarnos con total seguridad y tiene como objetivo la adquisición de películas y series a través de una pasarela de pago.": "MoviePlay is a web application that allows us to register with complete security and aims at the acquisition of movies and series through a payment gateway.",

        "Dogs-App es una aplicación web diseñada para proporcionar información detallada sobre muchas razas en un formato de tarjeta con funciones como filtros y un formulario de creación.": "Dogs-App is a web application designed to provide detailed information about many breeds in an easily readable card format with features such as filters and a form for create a new breed",

        "Glass Gradient es una aplicación web que te permite generar código personalizado para efectos de vidrio translúcido, permitiéndote elegir el color y la intensidad deseados con facilidad.": "Glass Gradient is a web application that allows you to generate custom code for translucent glass effects, letting you choose your desired color and intensity with ease.",
    },
    "es": {
        "Pursuing excellence in the world of development": "Persiguiendo la excelencia en el mundo del desarrollo",

        "Hi, i'm Gonza, Web Developer": "Hola, soy Gonza, Desarrollador Web",

        "I am a Web Developer with a strong ability to work in teams, solve problems, and a deep passion for code and technologies. I am a highly committed developer, eager to learn about the business and assist companies in achieving their goals, with the ambition to continue learning and spearhead significant projects.": "Soy un Desarrollador Web con gran capacidad para trabajar en equipo, resolver problemas y una profunda pasión por el código y las tecnologías. Soy un desarrollador altamente comprometido, con muchas ganas de aprender sobre el negocio y ayudar a las empresas a alcanzar sus objetivos, con la ambición de seguir aprendiendo y liderar proyectos significativos.",

        "I am known for being very consistent, participative, and empathetic, with high capabilities for learning, teamwork, and effective communication.": "Me caracterizo por ser muy consistente, participativo y empático, con altas capacidades de aprendizaje, trabajo en equipo y comunicación efectiva.",

        "My academic experience allowed me to learn and develop technical skills in both Back-End and Front-End through real projects, applying JavaScript, HTML, CSS, Sequelize, React, Redux, Node, and Express. I also acquired skills in 'project planning', 'project organization' (both individual and group), and 'problem-solving'.": "Mi experiencia académica me permitió aprender y desarrollar habilidades técnicas tanto en Back-End como Front-End a través de proyectos reales, aplicando JavaScript, HTML, CSS, Sequelize, React, Redux, Node y Express. También adquirí habilidades en 'planificación de proyectos', 'organización de proyectos' (tanto individuales como grupales) y 'resolución de problemas'.",

        "MY TARGETS": "MIS OBJETIVOS",

        "Developer Excellence": "Excelencia en el Desarrollo",
        "High-Quality Product Development": "Desarrollo de Productos de Alta Calidad",
        "Business Understanding": "Compresión del Negocio",
        "Community Contribution": "Contribución a la Comunidad",

        "To integrate into the workforce, collaborate with colleagues, learn from them, and work on real projects to enhance and achieve excellence in the field of development.": "Integrarse en el mundo laboral, colaborar con colegas, aprender de ellos y trabajar en proyectos reales para mejorar y alcanzar la excelencia en el campo del desarrollo.",

        "I am constantly striving to improve to be able to deliver high-quality products by writing clean code, conducting rigorous testing, and maintaining high-performance standards.": "Me esfuerzo constantemente por mejorar para poder ofrecer productos de alta calidad escribiendo código limpio, realizando pruebas rigurosas y manteniendo estándares de alto rendimiento.",

        "Understanding the inner workings and business needs is, to me, absolutely essential. I aspire to contribute to the company's success and be a key component in achieving its objectives.": "Comprender el funcionamiento interno y las necesidades del negocio es, para mí, absolutamente esencial. Aspiro a contribuir al éxito de la empresa y ser un componente clave en el logro de sus objetivos.",

        "I am committed to giving back to the community and contributing to open-source projects. I believe that collaboration is crucial, and sharing knowledge and experiences is a way to improve as a developer and support the community.": "Estoy comprometido a retribuir a la comunidad y contribuir a proyectos de código abierto. Creo que la colaboración es crucial y compartir conocimientos y experiencias es una forma de mejorar como desarrollador y apoyar a la comunidad.",

        "MY PROJECTS": "MIS PROYECTOS",
        "CONTACT ME TO EXPLORE POTENTIAL COLLABORATIONS:": "CONTACTAME PARA EXPLORAR POTENCIALES COLABORACIONES:",
        "Let's collaborate for a better world through innovation.": "Colaboremos por un mundo mejor a través de la innovación.",

        "MoviePlay is a web application that allows us to register with complete security and aims at the acquisition of movies and series through a payment gateway.": "MoviePlay es una aplicación web que nos permite registrarnos con total seguridad y tiene como objetivo la adquisición de películas y series a través de una pasarela de pago.",  

        "Dogs-App is a web application designed to provide detailed information about many breeds in an easily readable card format with features such as filters and a form for create a new breed": "Dogs-App es una aplicación web diseñada para proporcionar información detallada sobre muchas razas en un formato de tarjeta con funciones como filtros y un formulario de creación.",

        "Glass Gradient is a web application that allows you to generate custom code for translucent glass effects, letting you choose your desired color and intensity with ease.": "Glass Gradient es una aplicación web que te permite generar código personalizado para efectos de vidrio translúcido, permitiéndote elegir el color y la intensidad deseados con facilidad.",
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