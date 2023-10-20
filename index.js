randomNumber1 = Math.floor(Math.random()*6)+1;

let img1 = document.querySelector(".img1");
let newImg = `./images/dice${randomNumber1}.png` ;
img1.setAttribute("src",newImg);


randomNumber2 = Math.floor(Math.random()*6)+1;

let img2 = document.querySelector(".img2");
let newImg2 = `./images/dice${randomNumber2}.png` ;
img2.setAttribute("src",newImg2);


let h1 = document.querySelector("h1");
if(randomNumber1>randomNumber2){
    h1.innerText="🚩Player 1 Wins!"
}
else if(randomNumber1<randomNumber2){
    h1.innerText="Player 2 Wins!🚩"
}
else{
    h1.innerText="Draw!"
}


