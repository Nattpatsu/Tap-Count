const countNumber = document.getElementById("number");
const changeTime = document.getElementById("time");
const buttonTap = document.getElementById("tap");

//navbar
const buttonToggle = document.getElementById("togglenav");
const menuList = document.getElementById("menu");
const openSetting = document.getElementById("openSetting");
const closeSetting = document.getElementById("closeSetting");
const menuSetting = document.getElementById("menuSetting");
const saveSetting = document.getElementById("saveSetting");

//count variable
let count = 0;
let second = document.getElementById("timecoutset").value;
let interval = null;

const test = () => {
  alert("Waiting for upgrade");
};

//changeNumber active when press "TAP"

const changeNumber = () => {
  count++;
  countNumber.innerHTML = count;
  timer();
  startTime();
  changeTime.classList.replace("text-red-400", "text-black");
  changeTime.classList.remove("blink-text");
  //console.log(count);
};

//resetNumber active when press "RESET"

const resetNumber = () => {
  //Reset count number
  countNumber.innerHTML = 0;
  count = 0;
  //Reset Time
  changeTime.innerHTML = document.getElementById("timecoutset").value;
  changeTime.classList.replace("text-red-400", "text-black");
  changeTime.classList.remove("blink-text");
  stopTime();
};

//Timer set up

const setTime = () => {
  //const minutes = Math.floor(second / 60);
  const seconds = second % 60;
  changeTime.innerHTML = `${seconds}`;
  //console.log("settime");
  if (seconds === 0) {
    stopTime();
    //blinking(changeTime);
    changeTime.classList.replace("text-black", "text-red-400");
    changeTime.classList.add("blink-text");
    //let timeCountset = document.getElementById("timecoutset").value;
    //second = timeCountset;
  } else {
    console.log(seconds);
  }
};

const timer = () => {
  second--;
  //seconds--;
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
  second =
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
saveSetting.addEventListener("click", () => {
  let timeCountset = document.getElementById("timecoutset").value;
  //console.log(second, timeCountset);
  second = timeCountset;
  changeTime.innerHTML = second;
  //console.log(second, timeCountset);
  menuSetting.classList.toggle("hidden");
  menuList.classList.toggle("hidden");
});
