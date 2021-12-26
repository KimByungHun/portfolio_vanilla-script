const gnb_li = document.querySelectorAll("#gnb>li");


//1뎁스 li마다 반복을 돌면서 이벤트 연결
gnb_li.forEach((li, index)=>{
    //각 1뎁스 li에 마우스 호버시 서브패널 보이기
    li.addEventListener("mouseenter", e=>{
        e.currentTarget.querySelector(".sub").style.display="block";
    })
    //각 1뎁스 li에 마우스 호버시 서브패널 숨기기
    li.addEventListener("mouseleave",e=>{
        e.currentTarget.querySelector(".sub").style.display="none";
    })
    //각 1뎁스 li에 포커스 발생시 해당요소의 자식 서브패널 보이기
    li.addEventListener("focusin", e=>{
        e.currentTarget.querySelector(".sub").style.display="block";
    })
    //각 1depthli의 .sub ul까지 탐색후 마지막 자식 li 요소를 선택해서
    //해당 요소에서의 포커스가 떠나면 제일 가까운 부모여소인 sub를 숨김처리
    li.querySelector(".sub ul").lastElementChild.addEventListener("focusout", e=>{
        e.currentTarget.closest(".sub").style.display="none"
    })
})


//스킵네비게이션 이벤트 
const btns = document.querySelectorAll("#skip a");
btns.forEach((btn, index)=>{
    btn.addEventListener("focusin",e=>{
        e.currentTarget.classList.add("on");
    })
    btn.addEventListener("focusout",e=>{
        e.currentTarget.classList.remove("on");
    })
})

const h1 = document.querySelector(".scroll_test");

window.addEventListener("scroll", e=>{
    let scroll = window.scrollY || window.pageYOffset;
    h1.innerText = scroll;
})