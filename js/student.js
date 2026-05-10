var slides = document.getElementsByClassName('caro-item');

var currslide = 1;  //start carousel item


//Previous btn
document.getElementById('prev').addEventListener('click',function(){
    carousel(currslide -= 1);
});

//Next btn
document.getElementById('next').addEventListener('click',function(){
    carousel(currslide += 1);
});



carousel(currslide);
function carousel(slidenum){

    //all carousel-items ko display none lot
    for(var x=0; x<slides.length; x++){
        slides[x].style.display = 'none';
    }

    //result for currslides 1 to 3 & 3 to 1 (4 to 1)  (0 to 4)
    if(slidenum > slides.length){
        currslide = 1;
    }else if(slidenum < 1){
        currslide = slides.length;
    }

    slides[currslide-1].style.display = 'block';
   

}



// Start Top Btn
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
    if(scrollPoint > 2550){
        topbtn.style.color = "#fff";
    }else{
        topbtn.style.color ="#6e57e0"
    }

});

// End Top Btn


// Start Advice
let gettitle = document.getElementsByClassName("boxhead");
let getmain = document.getElementsByClassName("boxmain");
let geticon = document.querySelectorAll(".boxhead i");

for(let x=0; x<gettitle.length;x++){
    gettitle[x].addEventListener('click',function(e){
        gettitle[x].classList.toggle("active");
        let newelement = this.nextElementSibling;
    if(newelement.style.height){
        newelement.style.height = null;
        geticon[x].className = "fas fa-caret-down";
        
    }else{
        newelement.style.height = newelement.scrollHeight+"px";
         geticon[x].className = "fas fa-sort-up";
    }

    
})
    if(gettitle[x].classList.contains("active")){
        getmain[x].style.height = getmain[x].scrollHeight+"px";
        
        
    }
}

const getmail = document.getElementById('email');
console.log(getmail);
getmail.addEventListener('focus',function(e){
    
    this.style.outline = "none"
})

//  Start Prepare 
const getlistinputs = document.querySelectorAll(".cardmain ul li input");

for (const getlistinput of getlistinputs) {
    getlistinput.addEventListener("change", function () {
        const listItem = this.closest("li");

        if (this.checked) {
            listItem.style.color = "#fff";
        } else {
            listItem.style.color = "";
        }
    });
}


//  End Prepare 