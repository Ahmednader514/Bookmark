// Tabs Start

let tabs = document.querySelectorAll("#tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll("#content > div");
let divsArray = Array.from(divs);

tabsArray.forEach((ele) => {

    ele.addEventListener("click", function (e) {

    tabsArray.forEach((ele) => {
        ele.classList.remove("active");
    });

    e.currentTarget.classList.add("active");

    divsArray.forEach((div) => {

        div.style.display = "none";

    });
    
    document.querySelector(e.currentTarget.dataset.cont).style.display = "flex";

});

});

// Tabs End

// FAQ Start

document.querySelector(".button-1").addEventListener("click", function() {
    document.querySelector(".arrow-1").classList.toggle("rotate");
    document.querySelector(".arrow-1").classList.toggle("filter-red");
});

document.querySelector(".arrow-1").addEventListener("click", function() {
    this.classList.toggle("rotate");
    this.classList.toggle("filter-red");
});

document.querySelector(".button-2").addEventListener("click", function() {
    document.querySelector(".arrow-2").classList.toggle("rotate");
    document.querySelector(".arrow-2").classList.toggle("filter-red");
});

document.querySelector(".arrow-2").addEventListener("click", function() {
    this.classList.toggle("rotate");
    this.classList.toggle("filter-red");
});

document.querySelector(".button-3").addEventListener("click", function() {
    document.querySelector(".arrow-3").classList.toggle("rotate");
    document.querySelector(".arrow-3").classList.toggle("filter-red");
});

document.querySelector(".arrow-3").addEventListener("click", function() {
    this.classList.toggle("rotate");
    this.classList.toggle("filter-red");
});

document.querySelector(".button-4").addEventListener("click", function() {
    document.querySelector(".arrow-4").classList.toggle("rotate");
    document.querySelector(".arrow-4").classList.toggle("filter-red");
});

document.querySelector(".arrow-4").addEventListener("click", function() {
    this.classList.toggle("rotate");
    this.classList.toggle("filter-red");
});

function show_1() {
    document.querySelector(".answer-1").classList.toggle("show-1");
}

function show_2() {
    document.querySelector(".answer-2").classList.toggle("show-2");
}

function show_3() {
    document.querySelector(".answer-3").classList.toggle("show-3");
}

function show_4() {
    document.querySelector(".answer-4").classList.toggle("show-4");
}

// FAQ End

// Nav Start

function hamMenu() {

    let links = document.querySelector(".links");
    let body = document.querySelector("body");
    let hamMenu = document.querySelector(".hamburger-menu");
    let closeMenu = document.querySelector(".close-menu");
    let iconText = document.querySelector(".icon-text");

    hamMenu.style.display = "none";
    closeMenu.style.display = "block";

    body.classList.toggle("layer");
    iconText.classList.toggle("logo-text")

    if(links.style.display === "block") {
        links.style.display = "none"
    } else {
        links.style.display = "block"
    }

}

function closeMenu() {
    let hamMenu = document.querySelector(".hamburger-menu");
    let closeMenu = document.querySelector(".close-menu");
    let iconText = document.querySelector(".icon-text");

    closeMenu.style.display = "none";
    hamMenu.style.display = "block";

    let links = document.querySelector(".links");
    let body = document.querySelector("body");

    body.classList.toggle("layer");
    iconText.classList.toggle("logo-text")

    if(links.style.display === "block") {
        links.style.display = "none"
    } else {
        links.style.display = "block"
    }
}

// Nav End