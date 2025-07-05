// the dropdowm i  the side menu

const year1 = document.getElementById("Year1");
const year2 = document.getElementById("Year2");
const year3 = document.getElementById("Year3");
const year4 = document.getElementById("Year4");
const yr1 = document.getElementById("Yr1");
const yr2 = document.getElementById("Yr2");
const yr3 = document.getElementById("Yr3");
const yr4 = document.getElementById("Yr4");

let toggle= true;

yr1.addEventListener('click', function(){
    if(toggle=!toggle){
    year1.style.display='block';
    year2.style.display='none';
    year3.style.display='none';
    year4.style.display='none';
    year1.innerHTML="<button id='lam'>Cost Accounting</button><button>Managerial Accounting</button><button>Financial Accounting</button>"
    }else{
    year1.style.display='none'
    }
})
yr2.addEventListener('click', function(){
    if(toggle=!toggle){
    year2.style.display='block';
    year1.style.display='none';
    year3.style.display='none';
    year4.style.display='none';
    year2.innerHTML="<button>Accounting</button><button>Managerial office Accounting</button><button>Financial Accounting</button>";
}else{
    year2.style.display='none';
    }
});
yr3.addEventListener('click', function(){
    if(toggle=!toggle){
    year3.style.display='block';
    year2.style.display='none';
    year1.style.display='none';
    year4.style.display='none';
year3.innerHTML="<button>Data Processing</button><button>Managerial Accounting</button><button>Financial Accounting</button>";
    }else{
    year3.style.display='none';
    }
});
yr4.addEventListener('click', function(){
    if(toggle=!toggle){
    year4.style.display='block'
    year3.style.display='none';
    year2.style.display='none';
    year1.style.display='none';
year4.innerHTML="<button>Cost Accounting</button><button>Managerial Accounting</button><button>Financial Accounting</button>";
    }else{
    year4.style.display='none';
    }
});

