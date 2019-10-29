// Your code goes here
//1
document.querySelectorAll(".nav a").forEach(navLink => {
    navLink.addEventListener("mouseover", () => {
        navLink.style.transform = "scale(1.2)";
        navLink.style.transition = "transform 0.3s";
    })
});

//2

document.querySelectorAll(".nav a").forEach(navLink => {
    navLink.addEventListener("mouseleave", () => {
        navLink.style.transform = "scale(1)";
        navLink.style.transition = "transform 0.3s";
    })
});

//3

const logo = document.querySelector(".logo-heading");
logo.addEventListener("dblclick", () => {
    alert(`Get on the bus!!!`);
});

//4

document.querySelectorAll("div .destination").forEach(card => {
    console.log(card);
    window.addEventListener("keydown", event => {
        if (event.keyCode == '38') {
            return;
        };
        card.style.backgroundColor = "darkcyan";
        card.style.color = "white";
        card.style.borderRadius = "50px";
    })
});

//5

const headerImg = document.querySelector(".intro img");
window.addEventListener("scroll", () => {
    headerImg.src = "img/destination.jpg";
});

//6

const body = document.querySelector("body");
window.addEventListener("resize", () => {
    body.style.backgroundColor = "lightcyan";
});

//7

document.querySelectorAll("img").forEach(img => {
    img.addEventListener("wheel", (event) => {
        event.preventDefault();
        scale += event.deltaY * -0.01;
        scale = Math.min(Math.max(.125, scale), 4);
        img.style.transform = `scale(${scale})`;
    })

    let scale = 1;
});

//8

const home = document.querySelector(".intro");
home.addEventListener("auxclick", () => {
    home.style.backgroundColor = "darkseagreen";
});

const welcome = document.querySelector(".intro h2");
welcome.addEventListener("auxclick", (event) => {
    welcome.style.color = "teal";
    event.stopPropagation();
})

//9

window.addEventListener("load", () => {
    alert(`READY TO ROLL`);
});

//10

window.addEventListener("drag", () => {
    alert(`ouch.`);
})