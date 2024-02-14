const titles = ["ну пж","ну погна","да бро(","блин","НУ ПЖЖ","НАЖМИ НА ДРУГУЮ КОПКУ ПЖ","БРО ДА ДАВАЙ","мяу","муу","папочка зол","будет весело","ну пжшка","неправильный ответ","да блчтб"];
const button = document.getElementById("noButt");

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber((window.innerHeight - this.offsetHeight)*0.3);
    const left = getRandomNumber((window.innerWidth - this.offsetWidth)*0.3);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
    button.innerHTML = titles[Math.floor(Math.random()*titles.length)];
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};


