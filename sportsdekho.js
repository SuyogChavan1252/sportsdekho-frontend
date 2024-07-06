let btndrag=document.querySelector(".arbtn");
let btnexit=document.querySelector(".exitbtn");
let middlefoot=document.querySelector(".middle-foot");
btndrag.addEventListener("click",function(){
    middlefoot.classList.add("scrollbar");
    
})

btnexit.addEventListener("click",function(){
    middlefoot.classList.remove("scrollbar");
//   btndrag.style.opacity=0;
})