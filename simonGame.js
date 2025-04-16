let gameSeq = [];
let userSeq = [];
let someHi;

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let colors = ["yellow", "red", "green", "purple"];

// Frist Step
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});

// Step 2
function levelUp() {
  userSeq = [];
  level++;

  //
  let maxScore = level;
  if (maxScore > level) {
    let h3 = document.querySelector("h3");
    h3.innerText = `Highest score ${maxScore * 5}`;
  } else {
    let h3 = document.querySelector("h3");
    h3.innerText = `Highest score ${level * 5}`;
    h3.style.display = "none";
  }
  //

  h2.innerText = `Level ${level}`;
//  console.log( h2.innerHTML);

  // flash the random button
  let randomIdx = Math.floor(Math.random() * 3);
  let randomCol = colors[randomIdx];
  gameSeq.push(randomCol);
  console.log(gameSeq);
  let randomBtn = document.querySelector(`.${randomCol}`);
  btnFlash(randomBtn);
}

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 100); // 1000 = 1 sec, 100 = 0.1 sec
}

// Step 3
function btnPress() {
  let btn = this;
  btnFlash(btn);
  // console.log(this);
  let userCol = btn.getAttribute("id");
  console.log(userCol);
  userSeq.push(userCol);
  checkBtns(userSeq.length - 1);
}

function checkBtns(idx) {
  // console.log("current lavel " + level);
  // let idx = level - 1;
  if (gameSeq[idx] === userSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
     h2.innerHTML = ` Game over! <b> your score ${level * 5} <br> press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "bisque";
    }, 100);
    reset();
  }
}

// document.querySelector("body").style.backgroundColor = rgb(9, 195, 237);
let btn = document.querySelectorAll(".btn");

for (btns of btn) {
  btns.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
