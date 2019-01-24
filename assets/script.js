const catArray = [
    "1.gif", 
    "2.gif", 
    "3.gif", 
    "4.gif", 
    "5.gif", 
    "6.gif", 
    "7.gif", 
    "8.gif", 
    "9.gif", 
    "10.gif", 
    "11.gif", 
    "12.gif", 
    "13.gif", 
    "14.gif"
];

const path = "assets/gifs/";
const catDiv = document.querySelector(".cat");

function randomCat() {
    for (let i = 0; i < 13; i++) {
         random = catArray[Math.floor(Math.random() * catArray.length)];
    }

    const image = new Image();
    image.src = path + random;
    image.alt = "Cat Knocking Stuff Over"
    catDiv.appendChild(image);
}

randomCat();

