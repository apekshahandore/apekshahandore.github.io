const mobile_nav= document.querySelector(".mobile_nav_icon");
const close_nav= document.querySelector(".close_icon");
const nav_header= document.querySelector(".show_sidebar");
const addClass=()=>{
    nav_header.classList.add("active"); 
    // alert("hello")  

}
const removeClass=()=>{
    nav_header.classList.remove("active"); 
    // alert("hello")  

}
mobile_nav.addEventListener('click',()=>addClass());
close_nav.addEventListener('click',()=>removeClass());