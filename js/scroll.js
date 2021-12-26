const sections = document.querySelectorAll("section");  
const lis = document.querySelectorAll("#scroll_ui li"); 
let posArr =[]; 

 for(let el of sections){
     posArr.push(el.offsetTop);
 }
 console.log(posArr);

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