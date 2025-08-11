let themeImg = document.getElementById('theme-image'); 
let switchSound = new Audio('../../assets/sounds/light-switch.wav');  

function toggleTheme() {

    switchSound.currentTime = 0; 
    switchSound.play(); 

    document.body.classList.toggle("dark-theme"); 
    if(document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark-theme"); 
        themeImg.src = '../../assets/navigation/sun-symbol-compressed.webp'; 

    } else {
        localStorage.removeItem("theme"); 
        themeImg.src = '../../assets/navigation/dark-theme-toggle.webp'; 
    }
}

const btn = document.getElementById("theme"); 
btn.addEventListener("click", toggleTheme);

if(localStorage.getItem("theme")==="dark-theme") {
    document.body.classList.add("dark-theme");
    themeImg.src = '../../assets/navigation/sun-symbol-compressed.webp';
   
} else {
    themeImg.src = '../../assets/navigation/dark-theme-toggle.webp'; 
}
