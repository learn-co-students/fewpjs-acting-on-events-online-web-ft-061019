// Your code here

const getDodger = () => document.querySelector("#dodger");

const moveDodgerLeft = () => {
  let dodger = getDodger();
  let left = parsePos(dodger.style.left);
  if(left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

const moveDodgerRight = () => {
  let dodger = getDodger();
  let left = parsePos(dodger.style.left);
  if(left < (400 - dodger.style.width)) {
    dodger.style.left = `${left + 1}px`;
  }
}

const parsePos = string => parseInt(string.split("px")[0], 10);