const slider = document.querySelector("#figure");
const slide_ul = slider.querySelector("ul");
const slide_lis = slide_ul.querySelectorAll("li");
const slide_prev = slider.querySelector(".prev");
const slide_next = slider.querySelector(".next");
const slide_speed = 500;
const slide_len = slide_lis.length;
let enableClick = true;


init();


slide_next.addEventListener("click", e => {
    e.preventDefault();

    if (enableClick) {
        enableClick = false;
        nextSlide();
    }
})

slide_prev.addEventListener("click", e => {
    e.preventDefault();

    if (enableClick) {
        enableClick = false;
        prevSlide();
    }
})

function init() {
    slide_ul.style.width = `${100 * slide_len}%`;
    slide_lis.forEach(slide_li => slide_li.style.width = `${100 / slide_len}%`);
    slide_ul.style.left = "-100%";
    slide_ul.prepend(slide_ul.lastElementChild);
}

function nextSlide() {
    new Anim(slide_ul, {
        prop: "left",
        value: "-200%",
        duration: slide_speed,
        callback: () => {
            slide_ul.style.left = "-100%";
            slide_ul.append(slide_ul.firstElementChild);
            enableClick = true;
        }
    })
}

function prevSlide() {
    new Anim(slide_ul, {
        prop: "left",
        value: "0%",
        duration: slide_speed,
        callback: () => {
            slide_ul.style.left = "-100%";
            slide_ul.prepend(slide_ul.lastElementChild);
            enableClick = true;
        }
    })
}
