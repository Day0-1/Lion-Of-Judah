const lamp = document.querySelector(".menu-logo");
const hero = document.querySelector(".hero");
const ab = document.getElementById("ba");
const menutxt = document.getElementById("menu");
const sidenav = document.querySelector(".side-nav");

let abc= true;

lamp.addEventListener('click', function(){
    if(abc=!abc){
        sidenav.style.display='none'
        ab.style.backgroundColor='transparent';
        ab.style.left="-20%"
        hero.style.marginLeft="5%"
        menutxt.innerHTML="<b>MENU</b>"
        menutxt.style.color= 'white'
    }else{
        sidenav.style.display='block'
        ab.style.backgroundColor="white";
        ab.style.left="0"
        hero.style.marginLeft="30%"
        menutxt.innerHTML="<b>CLOSE</b>"
        menutxt.style.color= 'black'
    }
})


