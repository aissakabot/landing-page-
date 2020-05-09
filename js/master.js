// cjeck if there local storage color option
let mainColors=localStorage.getItem("color_option")
if(mainColors !== null){
  document.documentElement.style.setProperty("--main-color",localStorage.getItem("color_option"))
  document.querySelectorAll(".color-list li").forEach(el=>{
    el.classList.remove("active")
    //add activre class to target el
    if(el.dataset.color == mainColors) 
   el.classList.add("active")
  })
}

//toggel spin class on icon
document.querySelector(".toggle-settings .fa-gear").onclick=function(){
    // toggle spin for rotation it self
this.classList.toggle("fa-spin")
//togle class for setting box 
document.querySelector(".settings-box").classList.toggle("open")
} 


//Swith colors
const colorsLi=document.querySelectorAll(".colors-list li");
colorsLi.forEach(li=>{
    //click on every list item
  li.addEventListener("click",(e)=>{
    //console.log(e.target.dataset.color)
    document.documentElement.style.setProperty("--main-color",e.target.dataset.color)
    // set color on local storage
    localStorage.setItem("color_option",e.target.dataset.color)
    // remove active class from all childrens 
    e.target.parentElement.querySelectorAll(".active").forEach(el=>{
      el.classList.remove("active")
      //add activre class to target el
      e.target.classList.add("active")
    })
  })
})

//Swith backround
const randBackLi=document.querySelectorAll(".random-back span");
randBackLi.forEach(span=>{
    //click on every span 
  span.addEventListener("click",(e)=>{
    //console.log(e.target.dataset.color)
   
    e.target.parentElement.querySelectorAll(".active").forEach(el=>{
      el.classList.remove("active")
      //add activre class to target el
      e.target.classList.add("active")
      if(e.target.dataset.background == "yes"){
        backgoundOption=true
        randomizeBack()
      } else {
        backgoundOption=false
        clearInterval(backroundInterval)
      }
    })
  })
})

let landingpage=document.querySelector(".landing-page")
let imgarray=["01.jpg","08.jpg","03.jpg","05.jpg","06.jpg","07.jpg"]


// random backround option
let backgoundOption=false
let backroundInterval
function randomizeBack(){
  if(backgoundOption === true){
    backroundInterval = setInterval(()=>{
    let randomNumber=Math.floor(Math.random()* imgarray.length)
    landingpage.style.backgroundImage='url("imgs/'+imgarray[randomNumber]+'")'
    
},1000)
  }
}
// check if there are local storage random backgroud
let backgroundLocalItem= localStorage.getItem("background_option")
if(backgroundLocalItem !== null){
  if(backgroundLocalItem ==true){
  backgoundOption= true
  } else {
    backgoundOption= true
  }
}
document.querySelectorAll(".random-Back span").forEach(el=>{
  el.classList.remove('active')
})
if(backgroundLocalItem =="true"){
  document.querySelector(".random-back .yes").classList.add("active")
} else{
  document.querySelector(".random-back .no").classList.add("active")
}
// select skills
let ourSkills=document.querySelector(".skills")
window.onscroll= function(){
 
 let skillOffsetTop=ourSkills.offsetTop;
 let skillOunterHeight= ourSkills.offsetHeight
 let windowHeight=this.innerHeight
 let windowscrollTop=this.pageYOffset 
  
//  console.log(skillOffsetTop + skillOunterHeight - windowHeight)
//   console.log(windowscrollTop)
  

 if(windowscrollTop > (skillOffsetTop + skillOunterHeight - windowHeight)) {
  
   let allSkills=document.querySelectorAll(".skill-box .skill-progress span")
 allSkills.forEach(el=>{
   el.style.width=el.dataset.progress
 })

}
 }
  // galery
  let ourGalery=document.querySelectorAll(".gallery img")
  ourGalery.forEach(imgg => {
    
    imgg.addEventListener("click",(e)=>{
      alert("clikc image")
    console.log(imgg.src)
let overlay=document.createElement("div")
overlay.className="overlay-popup"
// add el to body
document.body.appendChild(overlay)
 // add popup box
 let popupBox=document.createElement("div")
 popupBox.className="popup-box"
  //create the heading image
  if(imgg.alt !== null){
    let imageHeading=document.createElement("h3")
  let imagetext=document.createTextNode(imgg.alt)
  imageHeading.appendChild(imagetext)
  popupBox.appendChild(imageHeading)

}
  
 // create the image
 let popupImg= document.createElement("img")
 popupImg.src=imgg.src
 //add img to popupbox
 popupBox.appendChild(popupImg)
  //add popup to boody
  document.body.appendChild(popupBox)

  // create the close span
  let closeSpan=document.createElement("span")
  let closeText=document.createTextNode("X")
  closeSpan.appendChild(closeText)
  closeSpan.className="close-button"
  popupBox.appendChild(closeSpan)
  // close poppup
  document.addEventListener("click",function(e){
    if(e.target.className =="close-button"){
      e.target.parentNode.remove()
       // remove overlay 
       document.querySelector(".overlay-popup").remove()
    }
  })

    });
  });