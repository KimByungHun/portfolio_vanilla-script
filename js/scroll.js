const sections = document.querySelectorAll("section");  
const lis = document.querySelectorAll("#scroll_ui li"); 
let posArr =[]; 

 for(let el of sections){
     posArr.push(el.offsetTop);
 }

// 스크롤 버튼 클릭

 lis.forEach((el,index)=>{
     el.addEventListener("click", e=>{

        new Anim(window, {
            prop : "scroll",
            value : posArr[index],
            duration : 500
        })

        for(let el of lis){
            el.classList.remove("on");
        }
        e.currentTarget.classList.add("on");
     })
 })
 

 // 브라우저 스크롤시
window.addEventListener("scroll", e=>{
    let scroll = window.scrollY || window.pageYOffset;

    sections.forEach((el, index)=>{
        if(scroll >= posArr[index]){
            for(let el of lis){
                el.classList.remove("on");
            }
            lis[index].classList.add("on");
        }
    })
});