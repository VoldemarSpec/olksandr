const noButton = document.getElementById("btn2");
const yesButton = document.getElementById("btn1");
const yestext = document.getElementById("text1");
noButton.addEventListener("mouseenter", () => {
    const maxX = window.innerWidth - noButton.clientWidth;
    const maxY = window.innerHeight - noButton.clientHeight;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    noButton.style.left = newX + "px";
    noButton.style.top = newY + "px";
});

yesButton.addEventListener("mouseover", () => {yestext.style.color = "red";})
yesButton.addEventListener("mouseleave", () => {yestext.style.color = "white";})