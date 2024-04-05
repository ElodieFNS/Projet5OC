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


for (let i = 0; i<4; i++) { //création des points sur le carrousel
	let ajoutDivPoint = document.createElement("div")
	ajoutDivPoint.classList.add("dot")
	if (i===0){
		ajoutDivPoint.classList.add("dot_selected")
	}
	point.appendChild(ajoutDivPoint)
}

flechedroite.addEventListener("click", function() { //écouteur d'évènement, ici au click, au click la fonction est déclanché
    let dotSelected = document.querySelector(".dot_selected"); //création d'une variable avec une séléction pour la classe : dot.selected

    if (!dotSelected) { //si aucune classe dotSelected existe et donc ne peut etre séléction, la fonction s'arrête prématurement
        return;
    }

    let index = Array.from(point.children).indexOf(dotSelected); //point.children renvoit à tous les enfants de la classe dot, indefOf() recherche l'indice de l'élément dotSelected, elle renvoie la position de l'élément dotSelected dans la liste des points de navigation
	//array.from est utilisé pour transformer en tableau, car si ce n'est pas un tableau indexOf ne pourrait pas etre utilisé

    dotSelected.classList.remove("dot_selected"); //suppression de la classe dot_selected de l'élément dot actuellement sélectionné

    let nextIndex = (index + 1) % slides.length; //calcule l'indice de la prochaine diapo, grace à l'opérateur modulo (%), ça permet de faire une boucle pour la carrousel
    point.children[nextIndex].classList.add("dot_selected"); //séléctionne l'élément dot de la prochaine diapo pour lui ajouter la classe dot_selected
    updateBanner(nextIndex); //appel de la fonction updateBanner, pour mettre à jour le contenu du carrousel en affichant la prochaine diapositive, en utilisant l'indice de la prochaine diapositive
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
    imageCarrousel.src = "./assets/images/slideshow/" + slides[index].image; //slides[index] récupère l'objet diapo correspondant à l'indice donné dans le tableau, slides[index].image c'est la propriété de l'objet dipo qui contient le chemin de l'image
	//imageCarrousel.src met à jour la source de l'image affiché dans le carrousel en assignant le chemin complet de l'image 
    texteCarrousel.innerHTML = slides[index].tagLine; //texteCarrousel.innerHTML met à jour le contenu HTML de l'élément texteCarrousel en assignant le texte de la diapo
}