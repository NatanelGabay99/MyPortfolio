
var x = document.getElementById("myLinks");
var icon = document.querySelector(".fa.fa-bars");

icon.addEventListener("click", function () {
    if (x.style.display === "flex") {
        x.style.display = "none";
        icon.classList.remove("fa-solid", "fa-x");
        icon.classList.add("fa-bars");
    } else {
        x.style.display = "flex";
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-solid", "fa-x");
    }
});

var links = document.querySelectorAll("#myLinks a");
links.forEach(function (link) {
    link.addEventListener("click", function () {
        setTimeout(function () {
            x.style.display = "none";
            icon.classList.remove("fa-solid", "fa-x");
            icon.classList.add("fa-bars");
        }, 500);
    });
});