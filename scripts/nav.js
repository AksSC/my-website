var links = document.querySelectorAll("a[href^='#']");
links.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({behavior: "smooth"});
    });
});

var git = document.getElementById("git");
var insta = document.getElementById("insta");
var email = document.getElementById("email");

git.addEventListener("mouseover", function() {
    git.src = "https://s2.svgbox.net/social.svg?ic=github&color=A8A8A8";
});
git.addEventListener("mouseout", function() {
    git.src = "https://s2.svgbox.net/social.svg?ic=github&color=FFF";
});

insta.addEventListener("mouseover", function() {
    insta.src = "https://s2.svgbox.net/social.svg?ic=instagram&color=A8A8A8";
});
insta.addEventListener("mouseout", function() {
    insta.src = "https://s2.svgbox.net/social.svg?ic=instagram&color=FFF";
});

email.addEventListener("mouseover", function() {
    email.src = "https://s2.svgbox.net/social.svg?ic=gmail&color=A8A8A8";
});
email.addEventListener("mouseout", function() {
    email.src = "https://s2.svgbox.net/social.svg?ic=gmail&color=FFF";
});

var navToggle = document.querySelector(".nav-toggle");
var links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    links.classList.toggle("show");
    navToggle.classList.toggle("active");
});