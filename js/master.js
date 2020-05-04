//toggel spin class on icon
document.querySelector(".toggle-settings .fa-gear").onclick=function(){
    // toggle spin for rotation it self
this.classList.toggle("fa-spin")
//togle class for setting box 
document.querySelector(".settings-box").classList.toggle("open")
} 

let landingpage=document.querySelector(".landing-page")
let imgarray=["01.jpg","08.jpg","03.jpg","05.jpg","06.jpg","07.jpg"]

setInterval(()=>{
    let randomNumber=Math.floor(Math.random()* imgarray.length)
    landingpage.style.backgroundImage='url("imgs/'+imgarray[randomNumber]+'")'
    
},10000)