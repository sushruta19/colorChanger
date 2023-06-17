
//Define a function to set the background color
function setBg() {
  let randomNum = Math.round(Math.random()*16777215).toString(16);
  let randomColor = "#" + randomNum;
  document.querySelector("body").style.backgroundColor = randomColor;
  document.querySelector(".color-hexcode").textContent = randomColor;
}

//Adding event listener to button element
document.querySelector(".btn").addEventListener("click", setBg);

//Set the initial background color
setBg();