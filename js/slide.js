const slider = document.querySelector("#figure");
const ul = slider.querySelector("ul");
const slider_lis = ul.querySelectorAll("li");
const prev = slider.querySelector(".prev");
const next = slider.querySelector(".next");
const slider_speed = 500;
const slider_len = slider_lis.length;
let enableClick = true;



init();

ul.style.left = "-100%";

next.addEventListener("click", e => {
    e.preventDefault();

    if (enableClick) {
        enableClick = false;
        nextSlide();
    }
})

function init() {
    ul.style.width = `${100 * slider_len}%`;
    slider_lis.forEach(li => li.style.width = `${100 / slider_len}%`);
    ul.style.left = "-100%";
    ul.prepend(ul.lastElementChild);
}


function nextSlide() {
    new Anim(ul, {
        prop: "left",
        value: "-200%",
        duration: slider_speed,
        callback: () => {
            ul.style.left = "-100%";
            ul.append(ul.firstElementChild);
            enableClick = true;
        }
    })
}

function prevSlide() {
    new Anim(ul, {
        prop: "left",
        value: "0%",
        duration: slider_speed,
        callback: () => {
            ul.style.left = "-100%";
            ul.prepend(ul.lastElementChild);
            enableClick = true;
        }
    })
}