


window.addEventListener("scroll", function () {
    let scrollPoint = window.scrollY;

    if (scrollPoint >= 400) {
        document.querySelector(".env_container").style.opacity="1";
        document.querySelector(".info1").classList.add("moveleft");
        document.querySelector(".info2").classList.add("movetop");
        document.querySelector(".info3").classList.add("movedown");
        document.querySelector(".info4").classList.add("moveright");

       
    } else {
        document.querySelector(".env_container").style.opacity="0.1";
        document.querySelector(".info1").classList.remove("moveleft");
        document.querySelector(".info2").classList.remove("movetop");
        document.querySelector(".info3").classList.remove("movedown");
        document.querySelector(".info4").classList.remove("moveright");

        document.querySelector(".topbtn a #topbtn").classList.remove("fa-arrow-alt-circle-up");
    }
});


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
    if(scrollPoint > 2500){
        topbtn.style.color = "#fff";
    }else{
        topbtn.style.color ="#6e57e0"
    }

});


// text effect
let gettexts = document.querySelectorAll('.future div p');
// console.log(gettexts);

gettexts.forEach(function(gettext){
    // console.log(gettext);

    let arrtexts = gettext.textContent.split('');
    // console.log(arrtexts);
    gettext.textContent = ''; 
    arrtexts.forEach(function(arrtext,index){
        // console.log(arrtext);
        // console.log(index);
        
        let newElement = document.createElement('p');
        
        newElement.textContent = arrtext;
        newElement.className = 'textp';
        // console.log(newElement);
        newElement.style.animationDelay = `${index*0.05}s`;
        gettext.append(newElement);
        
        
    })
})


const getmail = document.getElementById('email');
console.log(getmail);
getmail.addEventListener('focus',function(e){
    
    this.style.outline = "none"
})








