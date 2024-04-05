const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



let flechegauche = document.querySelector(".arrow_left") //creation de la variable flechegauche qui pointe vers la classe .arrow_left
let flechedroite = document.querySelector(".arrow_right")
let point = document.querySelector(".dots")
let imageCarrousel = document.querySelector(".banner-img")
let texteCarrousel = document.querySelector("#banner p")


for (let i = 0; i<4; i++) {
	let ajoutDivPoint = document.createElement("div")
	ajoutDivPoint.classList.add("dot")
	if (i===0){
		ajoutDivPoint.classList.add("dot_selected");
	}
	point.appendChild(ajoutDivPoint)
}

flechedroite.addEventListener("click", function() {
    let dotSelected = document.querySelector(".dot_selected");

    if (!dotSelected) {
        return;
    }

    let index = Array.from(point.children).indexOf(dotSelected);

    dotSelected.classList.remove("dot_selected");

    let nextIndex = (index + 1) % slides.length;
    point.children[nextIndex].classList.add("dot_selected");
    updateBanner(nextIndex);
});

flechegauche.addEventListener("click", function() {
    let dotSelected = document.querySelector(".dot_selected");

    if (!dotSelected) {
        return;
    }

    let index = Array.from(point.children).indexOf(dotSelected);

    dotSelected.classList.remove("dot_selected");

    let prevIndex = (index - 1 + slides.length) % slides.length;
    point.children[prevIndex].classList.add("dot_selected");
    updateBanner(prevIndex);
});

function updateBanner(index) {
    imageCarrousel.src = "./assets/images/slideshow/" + slides[index].image;
    texteCarrousel.innerHTML = slides[index].tagLine;
}