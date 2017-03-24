setTimeout(function() {
	var typer = document.querySelector(".arrow-wrap");
	typer.classList.add("anima-flecha");
}, 5000);

window.onscroll = function(){
	var inicio = document.querySelector("#inicio");
	var about = document.querySelector("#about");
	var work = document.querySelector("#work");
	var skills = document.querySelector("#skills");
	var circles = document.querySelectorAll(".slice");
	var proyect = document.querySelector("#proyects");
	var proyects = document.querySelectorAll("#proyects .proyect-wrap");
	var header = document.querySelector("header");

	if(window.pageYOffset >= inicio.offsetHeight){
		header.classList.add("menu-fondo");
	}
	else
	{
		header.classList.remove("menu-fondo");
	}
	if( window.pageYOffset >= about.offsetHeight -200){
		document.querySelector(".perfil-wrap").style.opacity = "1";
		var descriptions = document.querySelectorAll("#about .description");

		var len =descriptions !== null ?descriptions.length : 0;

			for (var i = 0; i < len; i++) {
				descriptions[i].style.left = "0";
			
		}
	}
	if( window.pageYOffset >= work.offsetHeight + 300){
		document.querySelector(".primer-art").style.left = "0";
		document.querySelector(".segundo-art").style.left = "0";
	}
	if( window.pageYOffset >= skills.offsetHeight + 600){
	
			var len =circles !== null ?circles.length : 0;

			for (var i = 0; i < len; i++) {
				circles[i].classList.add("rotar");
			
		}
		
	}

	if( window.pageYOffset >= proyect.offsetHeight + 1200){
	
			var len =proyects !== null ?proyects.length : 0;

			for (var i = 0; i < len; i++) {
				proyects[i].style.right = "0";
			
		}
		
	}
}
