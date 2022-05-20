const navFeatures = document.querySelector(".features");
const navCompany = document.querySelector(".company");

let showContent = (e) => {
		e.currentTarget.nextElementSibling.style.display = "flex";
		console.log(navCompany.nextElementSibling);
		e.currentTarget.querySelector("img").src = "images/icon-arrow-up.svg";
	
};

let mobileContent = (e) => {
	console.log(e.currentTarget.nextElementSibling.style.display == "flex")
	console.log(e.currentTarget.nextElementSibling)
		if(e.currentTarget.nextElementSibling.style.display == "none"){
		e.currentTarget.nextElementSibling.style.display = "flex"
		e.currentTarget.querySelector("img").src = "images/icon-arrow-up.svg"}
		else if(e.currentTarget.nextElementSibling.style.display == "flex"){
			e.currentTarget.nextElementSibling.style.display = "none"
			e.currentTarget.querySelector("img").src = "images/icon-arrow-down.svg";
		}
};
navFeatures.addEventListener("mouseover", showContent);
navCompany.addEventListener("mouseover", showContent);
navFeatures.addEventListener("click", mobileContent);
navCompany.addEventListener("click", mobileContent);

let hideContent = (e) => {
	if (e.currentTarget !== e.target.parentNode) {
		e.currentTarget.style.display = "none";
		e.currentTarget.parentNode.querySelector("img").src =
			"images/icon-arrow-down.svg";
	}
};
navFeatures.nextElementSibling.addEventListener("mouseleave", hideContent);
navCompany.nextElementSibling.addEventListener("mouseleave", hideContent);

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("ham-active");
	const overlay = document.querySelector(".overlay");
	const nav = document.querySelector("nav");

	nav.classList.toggle("show_nav");
	overlay.classList.toggle("hide");
});
