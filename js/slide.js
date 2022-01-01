class LoopSlider {
    constructor(selector, opt){      
        this.initDOM(selector, opt);
        this.bindingEvent();     
     }

     initDOM(selector, opt){
        this.slider = document.querySelector(selector);
        this.slide_ul = this.slider.querySelector(opt.panel);
        this.slide_lis = this.slide_ul.querySelectorAll("li");
        this.slide_prev = this.slider.querySelector(opt.prev);
        this.slide_next = this.slider.querySelector(opt.next);
        this.slide_speed = opt.speed;
        this.slide_len = this.slide_lis.length;
        this.enableClick = true;
    }

    bindingEvent(){
        this.init();

        this.slide_next.addEventListener("click", e => {
            e.preventDefault();

            if (this.enableClick) {
                this.enableClick = false;
                this.nextSlide();
            }
        })

        this.slide_prev.addEventListener("click", e => {
            e.preventDefault();

            if (this.enableClick) {
                this.enableClick = false;
                this.prevSlide();
            }
        })

    }

    init() {
        this.slide_ul.style.width = `${100 * this.slide_len}%`;
        this.slide_lis.forEach(li=> li.style.width = `${100/this.slide_len}%`);
        this.slide_ul.style.left = "-100%";
        this.slide_ul.prepend(this.slide_ul.lastElementChild);
    }

    nextSlide() {
        new Anim(this.slide_ul, {
            prop: "left",
            value: "-200%",
            duration: this.slide_speed,
            callback: () => {
                this.slide_ul.style.left = "-100%";
                this.slide_ul.append(this.slide_ul.firstElementChild);
                this.enableClick = true;
            }
        })
    }

    prevSlide() {
        new Anim(this.slide_ul, {
            prop: "left",
            value: "0%",
            duration: this.slide_speed,
            callback: () => {
                this.slide_ul.style.left = "-100%";
                this.slide_ul.prepend(this.slide_ul.lastElementChild);
                this.enableClick = true;
            }
        })
    }
}





