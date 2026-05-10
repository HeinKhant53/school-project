window.addEventListener("scroll",function(){
    let scrollPoint = window.scrollY;
    if (scrollPoint == 0) {
        topbtn.classList.remove("fa-arrow-alt-circle-up");
       topbtn.classList.add("fa-arrow-alt-circle-down");
       topbtn.style.color = "#6e57e0";
    }
    else{
        topbtn.classList.remove("fa-arrow-alt-circle-down");
        topbtn.classList.add("fa-arrow-alt-circle-up");
    }
    if(scrollPoint > 1500){
        topbtn.style.color = "#fff";
    }else{
        topbtn.style.color ="#6e57e0"
    }

})
let topbtn = document.querySelector(".topbtn a #topbtn");
let toplink = document.querySelector(".topbtn a");
topbtn.addEventListener("click",e=>{
    if(e.target.className == "fas fa-arrow-alt-circle-down" ){
        toplink.setAttribute("href","#content");
        e.target.style.color = "#fff";
    }else{
        toplink.setAttribute("href","#home");
        e.target.style.color = "#6e57e0";

    }
    
});

const getmail = document.getElementById('email');
console.log(getmail);
getmail.addEventListener('focus',function(e){
    
    this.style.outline = "none"
})