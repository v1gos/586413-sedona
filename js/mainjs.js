var jspurchbutton = document.querySelector(".purchise-info-button");
var regpopup = document.querySelector(".registration-purchise-container");
regpopup.classList.add("registration-purchise-container-hide");
jspurchbutton.addEventListener("click", function(evt) {
    evt.preventDefault();
	regpopup.classList.toggle("registration-purchise-container-hide");
	regpopup.classList.toggle("registration-purchise-container-animation");
});