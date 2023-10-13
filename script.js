// function scrollToElement(elementSelector, instance = 0) {
//     // Select all elements that match the given selector
//     const elements = document.querySelectorAll(elementSelector);
//     // Check if there are elements matching the selector and if the requested instance exists
//     if(elements.length > instance) {
//         // Scroll to the specified instance of the element
//         elements[instance].scrollIntoView({ behavior: 'smooth' });
//     }
// }

// const link1 = document.getElementById("link1"); //about
// const link2 = document.getElementById("link2"); //targets
// const link3 = document.getElementById("link3"); // projects

// link1.addEventListener('click', () => {
//     scrollToElement('.about');
// });

function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
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