const btnStart = document.getElementById("btn-start");
const btnBack = document.getElementById("btn-back");
const btnTest = document.getElementById("btn-test");

//ventanas de accion
const winboxWin = document.getElementById("winboxWin");
const winBoxLose = document.getElementById("winboxLose");
const winBoxFinal = document.getElementById("winboxFinal");
// botones de las ventanas
const btnWinboxWin = document.getElementById("btnWinboxWin");
const btnWinBoxLose = document.getElementById("btnWinBoxLose");
const btnWinBoxResFinal = document.getElementById("btnWinBoxResFinal");

// items de la caja
const itemBox1 = document.getElementById("itemBox1");
const itemBox2 = document.getElementById("itemBox2");
const itemBox3 = document.getElementById("itemBox3");
const itemBox4 = document.getElementById("itemBox4");
//seleccionando todos los itembox
const boxGame = document.getElementById("boxGame");

const subtitle = document.getElementById("subtitle");
const subtitle2 = document.getElementById("subtitle2");

//contador de niveles
const levelControl = document.getElementById("counter-control");

//efectos de sonido
const clickEffect = document.getElementById("clickEffect");
const mscFondo = document.getElementById("mscFondo");


let itemsBoxList = [itemBox1, itemBox2, itemBox3, itemBox4];

let copySerieTemp;

let testSerie = [0, 0, 0, 0];

let level = 9;
levelControl.innerHTML = level;

function serieControl() {
  let nivelSerie = [];

  for (let i = 1; i <= 4; i++) {
    let jump = Math.round(Math.random() * 3);
    nivelSerie.push(jump);
  }

  itemJumps(nivelSerie, itemsBoxList);
  copySerieTemp = nivelSerie;
}

function serieControlRepeat(jumps) {
  itemJumps(jumps, itemsBoxList);
}

function itemJumps(jumps, itemsBoxList) {
  setTimeout(() => {
    itemsBoxList[0].style.animationName = "activated";
    itemsBoxList[0].style.animationIterationCount = jumps[0];
  }, 1000);

  setTimeout(() => {
    itemsBoxList[1].style.animationName = "activated";
    itemsBoxList[1].style.animationIterationCount = jumps[1];
  }, 2000);

  setTimeout(() => {
    itemsBoxList[2].style.animationName = "activated";
    itemsBoxList[2].style.animationIterationCount = jumps[2];
  }, 3000);

  setTimeout(() => {
    itemsBoxList[3].style.animationName = "activated";
    itemsBoxList[3].style.animationIterationCount = jumps[3];
  }, 4500);

  setTimeout(() => {
    itemsBoxList[0].style.animationName = "none";
    itemsBoxList[1].style.animationName = "none";
    itemsBoxList[2].style.animationName = "none";
    itemsBoxList[3].style.animationName = "none";

    subtitleControl();
  }, 6000);
}

function subtitleControl() {
  subtitle.classList.toggle("off");
  subtitle2.classList.toggle("off");
  btnTest.classList.toggle("off");
}

function WinOrLose(test, copy) {
  let testi = JSON.stringify(test);
  let copyi = JSON.stringify(copy);

  if (testi === copyi) {
    winboxWin.classList.toggle("off");
  } else {
    winBoxLose.classList.toggle("off");
  }

  btnBack.classList.toggle("off");
  btnTest.classList.toggle("off");

  testSerie = [0, 0, 0, 0];
  copySerieTemp = [];
}

function ClickEffect() {
  clickEffect.src = "./src/click.mp3";
  setTimeout(() => {
    clickEffect.src = "";
  }, 1000);
}

btnStart.addEventListener("click", () => {
  serieControl();

  btnStart.classList.toggle("off");
  btnBack.classList.toggle("off");

  subtitle.classList.toggle("off");
  ClickEffect();
  mscFondo.src = "./src/mscfondo.mp3";
});

btnBack.addEventListener("click", () => {
  serieControlRepeat(copySerieTemp);
  subtitleControl();
  testSerie = [0, 0, 0, 0];
  ClickEffect();
});

boxGame.addEventListener("click", (e) => {
  let itemClicked = e.target.id;

  let test1 = itemsBoxList[0].id;
  let test2 = itemsBoxList[1].id;
  let test3 = itemsBoxList[2].id;
  let test4 = itemsBoxList[3].id;

  if (itemClicked == test1) {
    testSerie[0]++;
  } else if (itemClicked == test2) {
    testSerie[1]++;
  } else if (itemClicked == test3) {
    testSerie[2]++;
  } else if (itemClicked == test4) {
    testSerie[3]++;
  }

  ClickEffect();
});

btnTest.addEventListener("click", () => {
  WinOrLose(testSerie, copySerieTemp);
  ClickEffect();
});

btnWinboxWin.addEventListener("click", () => {
  testSerie = [0, 0, 0, 0];
  copySerieTemp = [];
  winboxWin.classList.toggle("off");

  level++;
  levelControl.innerHTML = level;
  btnStart.classList.toggle("off");
  subtitle2.classList.toggle("off");

  if (level == 11) {
    winBoxFinal.classList.toggle("off");
  }
  ClickEffect();
});

btnWinBoxLose.addEventListener("click", () => {
  testSerie = [0, 0, 0, 0];
  copySerieTemp = [];
  winBoxLose.classList.toggle("off");

  level = 1;
  levelControl.innerHTML = level;
  btnStart.classList.toggle("off");
  subtitle2.classList.toggle("off");
  ClickEffect();
});

btnWinBoxResFinal.addEventListener("click", () => {
  testSerie = [0, 0, 0, 0];
  copySerieTemp = [];

  level = 1;
  levelControl.innerHTML = level;
  winBoxFinal.classList.toggle("off");
  ClickEffect();
});
