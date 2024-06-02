const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 
const hireMeButton = document.getElementById("hire-me-button");

hireMeButton.addEventListener("click", () => {
	
    window.open("https://www.linkedin.com/in/shashank-prabhu21/");
});
hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});
