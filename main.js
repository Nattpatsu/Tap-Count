const countNumber = document.getElementById("number");
const changeTime = document.getElementById("time");
const buttonTap = document.getElementById("tap");

//navbar
const buttonToggle = document.getElementById("togglenav");
const menuList = document.getElementById("menu");
const openSetting = document.getElementById("openSetting");
const closeSetting = document.getElementById("closeSetting");
const menuSetting = document.getElementById("menuSetting");

//count variable
let count = 0;
let second = 30;
let interval = null;

const test = () => {
  alert("Waiting for upgrade");
};

const changeNumber = () => {
  count++;
  countNumber.innerHTML = count;
  timer();
  startTime();
  //console.log(count);
};

const resetNumber = () => {
  //Reset count number
  countNumber.innerHTML = 0;

  //Reset Time
  stopTime();
  changeTime.innerHTML = 30;
};

//Timer set up

const setTime = () => {
  //const minutes = Math.floor(second / 60);
  const seconds = second % 60;
  changeTime.innerHTML = `${seconds}`;
  //console.log("settime");
  seconds === 0 ? stopTime() : console.log(seconds);
};

const timer = () => {
  second--;
  setTime();
  //console.log("timer");
};

const startTime = () => {
  //change color text
  buttonTap.classList.replace("text-black", "text-gray-400");
  //clearInterval(interval);
  interval = setInterval(timer, 1000);
  buttonTap.disabled = true;
};

const stopTime = () => {
  clearInterval(interval);
  second = 30;
  //console.log(second);
  buttonTap.disabled = false;
  buttonTap.classList.replace("text-gray-400", "text-black");
};

//navbar action

buttonToggle.addEventListener("click", () => {
  //alert("test fn event listener");
  menuList.classList.toggle("hidden");
});

openSetting.addEventListener("click", () => {
  menuSetting.classList.toggle("hidden");
});
closeSetting.addEventListener("click", () => {
  menuSetting.classList.toggle("hidden");
  menuList.classList.toggle("hidden");
});
