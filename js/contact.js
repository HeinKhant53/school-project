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
    if(scrollPoint > 200){
        topbtn.style.color = "#fff";
    }else{
        topbtn.style.color ="#6e57e0"
    }

});

// End Top Btn


// Start Contact



const inforlist = document.querySelector(".infor-list");
const inforones = document.querySelectorAll(".infor-list .infor-list-item input");
var newcheck = "";
for (const inforone of inforones) {
    inforone.addEventListener("change", function () {
        const listItem = this.closest("li");

        if (this.checked) {
            inforones.forEach((cb) => {
                if (cb !== this) cb.checked = false;
            });
            newcheck = `<p>${listItem.textContent}</p>`;
        } 
    });
}


const number1 = document.querySelector(".contact-flow-group .number1");
const number2 = document.querySelector(".contact-flow-group .number2");
const number3 = document.querySelector(".contact-flow-group .number3");
const contactinfro = document.querySelector(".contact-infro");
const btnsend = document.querySelector(".submit");
const infortwo = document.querySelector(".infor-two .infor-message");
const inforname = document.querySelector('.name');
const inforjapnaname = document.querySelector('.jname');
const inforschool = document.querySelector('.school');
const infortel = document.querySelector('input[type="tel"]');
const inforemail = document.querySelector('input[type="email"]');
const inforsendp = document.querySelector('.infor-send p');
const inforreturn = document.querySelector('.infor-send .return');
const inforsend = document.querySelector('.infor-send .send');
const inforhomebtn = document.querySelector('.infor-send .homebtn');


inforreturn.addEventListener('click', function(e){
    e.preventDefault();

    if (document.referrer !== "") {
        window.location.href = "contact.html";
    } 
});

btnsend.addEventListener("click", function (e) {
   
    e.preventDefault();
     
    contactinfro.style.textAlign = "center";
    contactinfro.textContent = "以下の内容で間違いがなければ、「送信する」ボタンを押してください。";
        

        inforlist.innerHTML = newcheck;
        inforlist.classList.add("p-newStyle");

        


        const infortwonew = infortwo.value;
        const p = document.createElement("p");
        p.textContent = infortwonew;
        p.classList.add("p-newStyle");
        infortwo.replaceWith(p);


        const infornamenew = inforname.value;
        const name = document.createElement("p");
        name.textContent = infornamenew;
        name.classList.add("p-newStyle");
        inforname.replaceWith(name);


        const inforjapnanamenew = inforjapnaname.value;
        const jname = document.createElement("p");
        jname.textContent = inforjapnanamenew;
        jname.classList.add("p-newStyle");
        inforjapnaname.replaceWith(jname);

        const inforschoolnew = inforschool.value;
        const school = document.createElement("p");
        school.textContent = inforschoolnew;
        school.classList.add("p-newStyle");
        inforschool.replaceWith(school);

        const infortelnew = infortel.value;
        const tel = document.createElement("p");
        tel.textContent = infortelnew;
        tel.classList.add("p-newStyle");
        infortel.replaceWith(tel);

        const inforemailnew = inforemail.value;
        const email = document.createElement("p");
        email.textContent = inforemailnew;
        email.classList.add("p-newStyle");
        inforemail.replaceWith(email);


        inforsendp.style.opacity = '0';

        inforreturn.style.display = 'inline';
        inforsend.style.display = 'inline';

        btnsend.style.display = 'none';
        number1.children[0].classList.remove("active");
        number1.children[1].classList.remove("active-text");


        number2.children[0].classList.add("active"); 
        number2.children[1].classList.add("active-text"); 


});

const messageContainer = document.querySelector("#messageContainer");
const contactBox = document.querySelector("#contactBox");
inforsend.addEventListener('click',function(e){
    e.preventDefault();

    number2.children[0].classList.remove("active");
    number2.children[1].classList.remove("active-text");

    number3.children[0].classList.add("active"); 
    number3.children[1].classList.add("active-text"); 
    contactBox.style.display = "none";


    contactinfro.style.textAlign = "center";
    contactinfro.innerHTML = "お問い合わせいただいた内容は、担当者が確認してご連絡差し上げます。<br>なお、3営業日を過ぎても返信がない場合は、<br>メールの受信がうまく行えていない可能性がありますので、<br>お電話にてお問い合わせください。";

    inforreturn.style.display = 'none';
    inforsend.style.display = 'none';

    inforhomebtn.style.display ="inline";
    topbtn.style.opacity = "0";
});

inforhomebtn.addEventListener('click',function(e){
    e.preventDefault();

    if (document.referrer !== "") {
        window.location.href = "index.html";
    }
});
//End Contact