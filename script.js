let button = document.querySelector(".buttonn");

let body = document.querySelector("body");
let score = document.querySelector(".score")
let start =document.querySelector(".start")
let input =document.querySelector("input")
let soroq = document.querySelector(".soroq")
let highscore= document.querySelector(".highscore")
let main =document.querySelector(".main")
let rendom = parseInt(Math.random()*20);
button.addEventListener("click", () => {
    if(input.value < rendom ){
        start.innerHTML= "🔝teparoq chiqing";
    }
    else if(input.value > rendom ){
        start.innerHTML="↘ pastroqga tushing"
    }
    else{
        start.innerHTML= "🎺 javob to'gri"
        body.style.backgroundColor= "green"
        soroq.innerHTML =`${rendom}`
        main.innerHTML = "👑 ura yutdiz"
        highscore.innerHTML= "✔ togri javob 1";
    }l
    
   
}
)
button.addEventListener("click",helsay)     
let star=20
function helsay() {
    score.innerHTML=`💯score:${star-=1}`
    if(star==0||star<0){
        body.style.backgroundColor = 'red'
        main.innerHTML="😔Game over"
    }
}
button.addEventListener("click", helsays)
let starts=0
function helsays() {
    highscore.innerHTML=`🏅Highscore:${starts+=1}`
}
let button1=document.querySelector(".button_1")
button1.addEventListener("click",function () {
    location.reload()
})