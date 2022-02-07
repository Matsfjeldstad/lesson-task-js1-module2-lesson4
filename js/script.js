// Using the HTML provided write code that does the following:

// -   when the button is pressed and held down start a counter that increments by 1 every second
// -   When the button is released stop the counter and create an amount of text boxes equal to the counter value
// -   when the counter is pressed and held down again set the counter to 0, clear the text inputs and repeat the previous step

const button = document.querySelector(".toolbar > button");
const counter = document.querySelector(".counter");
const inputContainer = document.querySelector(".inputs");

console.log(button);

let count;
let intervalId;

const mouseDownHandler = function () {
  count = 0;
  this.textContent = "Release to stop counting";
  inputContainer.innerHTML = "";
  counter.innerHTML = count;
  intervalId = setInterval(function () {
    count++;
    counter.innerHTML = count;
  }, 1000);
};

const mouseUpHandler = function () {
  clearInterval(intervalId);
  this.textContent = "Press and hold to count";

  for (let i = 0; i < count; i++) {
    inputContainer.innerHTML += `<input name="input${i}" id="input${i}" placeholder="Input ${i}" />`;
  }
};

button.addEventListener("mousedown", mouseDownHandler);

button.addEventListener("mouseup", mouseUpHandler);
