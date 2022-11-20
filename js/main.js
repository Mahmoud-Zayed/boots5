let btn = document.querySelector("div.top button");

window.onscroll = function () {
    if (window.scrollY >= 600) {
        btn.style.display = "block";
    } else { 
        btn.style.display = "none";
    }
};

btn.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};