class LoopSlider {
    constructor(selector, opt){      
       this.initDOM(selector, opt);
       this.bindingEvent();     
    }
 
    initDOM(selector, opt){
       this.slider = document.querySelector(selector);
       this.ul = this.slider.querySelector(opt.panel);
       this.lis = this.ul.querySelectorAll("li");
       this.prev = document.querySelector(opt.prev);
       this.next = document.querySelector(opt.next);
       this.speed = opt.speed;
       this.len = this.lis.length;
       this.enableClick = true;
    }
 
    bindingEvent(){
       this.init();
 
       this.next.addEventListener("click", e=>{
          e.preventDefault();
 
          if(this.enableClick){
             this.enableClick= false;
             this.nextSlide();
          }     
       })
 
       this.prev.addEventListener("click", e=>{
          e.preventDefault();
 
          if(this.enableClick){
             this.enableClick= false;
             this.prevSlide();
          }   
       })
    }
 
    init(){
       this.ul.style.width = `${100*this.len}%`;
       this.lis.forEach(li=> li.style.width = `${100/this.len}%`);
       this.ul.style.left = "-100%";
       this.ul.prepend(this.ul.lastElementChild);
    }
 
    nextSlide(){
       new Anim(this.ul, {
          prop: "left",
          value: "-200%",
          duration: this.speed,
          callback: ()=>{
             this.ul.style.left= "-100%";
             this.ul.append(this.ul.firstElementChild);
             this.enableClick = true;
          }
       })
    }
 
    prevSlide(){
       new Anim(this.ul, {
          prop: "left",
          value: "0%",
          duration: this.speed,
          callback: ()=>{
             this.ul.style.left= "-100%";
             this.ul.prepend(this.ul.lastElementChild);
             this.enableClick = true;
          }
       })
    }
 }
 
 
 
 
 
 
 
 
 