let menu = document.querySelector("#navbar");
let nav = document.querySelector(".menu");

let showcontactform = document.querySelector(".contact");
let myform = document.querySelector(".contact-form")

let formclose = document.querySelector("#form-close")


function hello() {
    var fname = document.getElementById('fname')
    var lname = document.getElementById('lname')
    var email = document.getElementById('email')
    console.log(fname,lname,email);
    
    if (fname===null || lname===null || email===null ) {
        
        alert('please enter an data');
    }
else {
    console.log(fname,lname,email);

}
    
}


menu.onclick = () =>{
    menu.classList.toggle("fa-times")
    nav.classList.toggle("active")
}
showcontactform.onclick = () =>{
    myform.classList.toggle('active')
}
formclose.onclick = () =>{
    myform.classList.remove('active')
}

