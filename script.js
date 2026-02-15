// Typing Effect
const textArray = [
    "Frontend Developer",
    "Java Full Stack Developer",
    "AI Enthusiast",
    "React Specialist"
];

let typingElement = document.getElementById("typing");
let textIndex = 0;
let charIndex = 0;

function typeEffect(){
    if(charIndex < textArray[textIndex].length){
        typingElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect(){
    if(charIndex > 0){
        typingElement.textContent = textArray[textIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(eraseEffect, 40);
    } else {
        textIndex = (textIndex+1) % textArray.length;
        setTimeout(typeEffect, 200);
    }
}

typeEffect();

// Scroll Fade Animation
const sections = document.querySelectorAll(".fade-section");

window.addEventListener("scroll",()=>{
    sections.forEach(sec=>{
        const top = sec.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            sec.classList.add("visible");
        }
    });
});

// Project Alert
function showDetails(){
    alert("Built using CNN (VGG16 & ResNet) with TensorFlow & OpenCV for real-time prediction.");
}
