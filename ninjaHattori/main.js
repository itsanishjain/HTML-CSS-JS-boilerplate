// variables

const hero = document.querySelector(".hero");
const heroboy = document.querySelector("hero-boy");
const villain = document.querySelector(".villain");

let villianLeft;

console.log(
  "COMPUTED STYLE VILLIAN:",
  window.getComputedStyle(villain).getPropertyValue("left")
);

console.log(
  "COMPUTED STYLE HERO:",
  window.getComputedStyle(hero).getPropertyValue("left")
);

const score = document.querySelector(".score");

function jump() {
  hero.classList.add("animate");
  villain.style.animation = "move 1s infinite linear";

  // after 2sec we remove the class animate
  setTimeout(() => {
    hero.classList.remove("animate");
  }, 300);
}

// jump();

document.addEventListener("keydown", (e) => {
  if (e.code == "Space") {
    villianLeft = parseInt(
      window.getComputedStyle(villain).getPropertyValue("left")
    );
    // console.log("space key pressed with", villianLeft);
    jump();
    if (villianLeft <= 100) {
      score.innerHTML++;
    }
  }
});

let isAlive = setInterval(() => {
  console.log("DSFSADF");
  villianLeft = parseInt(
    window.getComputedStyle(villain).getPropertyValue("left")
  );

  console.log(villianLeft);
}, 10);
