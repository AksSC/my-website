var mod = document.getElementById("mode");
var mode = 0;

mod.addEventListener("mouseover", function() {
    if(!mode)
        mod.src = "https://s2.svgbox.net/hero-solid.svg?ic=moon&color=FFF";
    else
        mod.src = "https://s2.svgbox.net/hero-solid.svg?ic=sun&color=f0e68c";
});
mod.addEventListener("mouseout", function() {
    if(!mode)
        mod.src = "https://s2.svgbox.net/hero-solid.svg?ic=moon&color=000";
    else
        mod.src = "https://s2.svgbox.net/hero-solid.svg?ic=sun&color=000";
});

function swc(){
    var overlay = document.getElementById("overlay");
    overlay.style.opacity = 1;
    overlay.style.transform = "scale(1)";

    setTimeout(() => {
        var lght = document.querySelector("link[rel='stylesheet']");
        var drk = document.querySelector("link[rel='stylesheet alternate']");
        lght.setAttribute("rel", "stylesheet alternate");
        drk.setAttribute("rel", "stylesheet");
        if(mode){
            mode = 0;
            mod.src = "https://s2.svgbox.net/hero-solid.svg?ic=moon&color=000";
            localStorage.setItem("themePreference", "light");
        }
        else{
            mode = 1;
            mod.src = "https://s2.svgbox.net/hero-solid.svg?ic=sun&color=000";
            localStorage.setItem("themePreference", "dark");
        }
    }, 500);

    setTimeout(() => {
        overlay.style.opacity = 0;
        overlay.style.transform = "scale(0)";
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    var userPreference = localStorage.getItem("themePreference");

    console.log(userPreference);

    if (userPreference === "dark") {
        var lght = document.querySelector("link[rel='stylesheet']");
        var drk = document.querySelector("link[rel='stylesheet alternate']");
        lght.setAttribute("rel", "stylesheet alternate");
        drk.setAttribute("rel", "stylesheet");
        mode = 1;
        mod.src = "https://s2.svgbox.net/hero-solid.svg?ic=sun&color=000";
    }
});