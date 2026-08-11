const startBtn = document.getElementById("startBtn");
const goBtn = document.getElementById("goBtn");
const finalBtn = document.getElementById("finalBtn");

const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");

const darkScreen = document.getElementById("darkScreen");
const scooter = document.getElementById("scooter");
const engineSound = document.getElementById("engineSound");

const welcomeText = document.getElementById("welcomeText");

const logo = document.querySelector(".cafe-logo");
const dateItem = document.querySelector(".info-date");
const timeItem = document.querySelector(".info-time");
const addressItem = document.querySelector(".info-address");

const finalContent = document.getElementById("finalContent");


/* صفحه ۱ → صفحه موتور */

startBtn.addEventListener("click", function () {

    scene1.style.display = "none";
    scene2.style.display = "block";

    setTimeout(function () {
        darkScreen.style.opacity = "1";
    }, 100);

    setTimeout(function () {
        engineSound.play().catch(() => {});
        scooter.classList.add("show");
    }, 900);

    setTimeout(function () {
        darkScreen.style.opacity = "0";
    }, 1700);

    setTimeout(function () {
        welcomeText.classList.add("show");
    }, 3900);

    setTimeout(function () {
        goBtn.classList.add("show");
    }, 6900);

});


/* صفحه موتور → اطلاعات */

goBtn.addEventListener("click", function () {

    scene2.style.display = "none";
    scene3.style.display = "block";

    setTimeout(function () {
        logo.classList.add("show");
    }, 300);

    setTimeout(function () {
        dateItem.classList.add("show");
    }, 1400);

    setTimeout(function () {
        timeItem.classList.add("show");
    }, 2400);

    setTimeout(function () {
        addressItem.classList.add("show");
    }, 3400);

    setTimeout(function () {
        finalBtn.classList.add("show");
    }, 4700);

});


/* اطلاعات → صفحه پایانی */

finalBtn.addEventListener("click", function () {

    scene3.style.display = "none";
    scene4.style.display = "flex";

    setTimeout(function () {
        finalContent.classList.add("show");
    }, 700);

});