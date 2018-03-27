    <script>
        var jspurchbutton = document.querySelector(".purchise-info-button");
    var regpopup = document.querySelector(".registration-purchise-container");
    jspurchbutton.addEventListener("click", function (evt) {
        evt.preventDefault();
        regpopup.classList.toggle("registration-purchise-container-show");
    }); </script>