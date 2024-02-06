var likeDisp = document.getElementById("likeDisp");
var heart = document.getElementById("heart");

if(localStorage.getItem("likeCount1")){
    var likeCount = parseInt(localStorage.getItem("likeCount1"));
}else{
    var likeCount = 768;
    localStorage.setItem("likeCount1", likeCount);
}

likeDisp.textContent = likeCount;
heart.src = likeCount == 769 ? "https://s2.svgbox.net/hero-solid.svg?ic=heart&color=red" : "https://s2.svgbox.net/hero-outline.svg?ic=heart&color=red";

heart.addEventListener("click", function() {
    if (likeCount != 769) {
        likeCount++;
        localStorage.setItem("likeCount1", likeCount);
        likeDisp.textContent = likeCount;
        heart.src = "https://s2.svgbox.net/hero-solid.svg?ic=heart&color=red";
    }else{
        likeCount--;
        localStorage.setItem("likeCount1", likeCount);
        likeDisp.textContent = likeCount;
        heart.src = "https://s2.svgbox.net/hero-outline.svg?ic=heart&color=red";
    }
});