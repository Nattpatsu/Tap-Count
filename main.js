const countNumber = document.getElementById("number");
let count = 0;

const test = () => {
  alert("Waiting for upgrade");
};

const changeNumber = () => {
  count++;
  countNumber.innerHTML = count;
  //console.log(count);
};

const resetNumber = () => {
  count = 0;
  countNumber.innerHTML = count;
};
