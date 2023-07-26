var minWidth = 0;
var maxWidth = window.innerWidth-100;
var minHeight = 0;
var maxHeight = window.innerHeight - 100;
let box = document.querySelector(".box");
box.addEventListener("mousemove", function () {
    box.style.top = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight+"px";
    box.style.left = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth+"px";
})