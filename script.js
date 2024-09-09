window.onload = function() {
    setTimeout(function () {
        const menu = document.getElementById("menu");
        menu.classList.remove("hidden");
        menu.style.animation = "fadeInUp 1s forwards";
    }, 2000);
};