let display=document.querySelector(".display");
let ac=document.querySelector(".ac");
let de=document.querySelector(".de");
let nine=document.querySelector(".nine");
let eight=document.querySelector(".eight");
let seven=document.querySelector(".seven");
let six=document.querySelector(".six");
let five=document.querySelector(".five");
let four=document.querySelector(".four");
let three=document.querySelector(".three");
let two=document.querySelector(".two");
let one=document.querySelector(".one");
let zero=document.querySelector(".zero");
let zeroZero=document.querySelector(".zero-zero");
let equals=document.querySelector(".equals");
let plus=document.querySelector(".plus");
let minus=document.querySelector(".minus");
let multiply=document.querySelector(".multiply");
let divide=document.querySelector(".divide");
let decimal=document.querySelector(".decimal");

ac.addEventListener("click",()=>{
    display.value="";
    display.focus();
    
});
de.addEventListener("click",()=>{
    display.value="";
    display.blur();
});
nine.addEventListener("click",()=>{
    display.value+="9";
});
eight.addEventListener("click",()=>{
    display.value+="8";
});
seven.addEventListener("click",()=>{
    display.value+="7";
});
six.addEventListener("click",()=>{
    display.value+="6";
});
five.addEventListener("click",()=>{
    display.value+="5";
});
four.addEventListener("click",()=>{
    display.value+="4";
});
three.addEventListener("click",()=>{
    display.value+="3";
});
two.addEventListener("click",()=>{
    display.value+="2";
});
one.addEventListener("click",()=>{
    display.value+="1";
});
divide.addEventListener("click",()=>{
    display.value+="/";
});
multiply.addEventListener("click",()=>{
    display.value+="*";
});
decimal.addEventListener("click",()=>{
    display.value+=".";
});
zero.addEventListener("click",()=>{
    display.value+="0";
});
zeroZero.addEventListener("click",()=>{
    display.value+="00";
});
plus.addEventListener("click",()=>{
    display.value+="+";
});
minus.addEventListener("click",()=>{
    display.value+="-";
});
equals.addEventListener("click",()=>{
    display.value=eval(display.value);
})