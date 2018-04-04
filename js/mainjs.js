var jsPurchButton = document.querySelector(".purchise-info-button");
var regPopup = document.querySelector(".registration-purchise-container");
var startDate = regPopup.querySelector("[name=start-date]");
var endDate = regPopup.querySelector("[name=end-date]");
var adultNumber = regPopup.querySelector("[name=adult-number]");
var chilrdernNumber = regPopup.querySelector("[name=children-number]");
regPopup.classList.add("registration-purchise-container-hide");
jsPurchButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	regPopup.classList.toggle("registration-purchise-container-hide");
	regPopup.classList.toggle("registration-purchise-container-animation");
});
regPopup.addEventListener("submit", function (evt) {
	if (!startDate.value || !endDate.value || !adultNumber.value || !chilrdernNumber.value) {
		evt.preventDefault();
		regPopup.classList.remove("modal-error");
		regPopup.offsetWidth = regPopup.offsetWidth;
		regPopup.classList.add("modal-error");
	}
});