let promoTimeInSeconds;
let promoTimer;
let countdown = document.querySelector("#countdown");

document.querySelector("#timer").style.display = "none";

document.querySelector("#setTime").addEventListener("click", () => {
  promoTimeInSeconds = parseInt(document.querySelector("#time").value) * 60;
  console.log("promoTimeInSeconds", promoTimeInSeconds);
  clearInterval(promoTimer);
  document.querySelector("#timer").style.display = "flex";
  startCountDown();
});

function startCountDown() {
  promoTimer = setInterval(() => {
    if (promoTimeInSeconds <= 0) {
      clearInterval(promoTimer);
      countdown.innerHTML = "Time is up";
    } else {
      promoTimeInSeconds--;
      const Days = Math.floor(promoTimeInSeconds / (60 * 60 * 24));

      const hour = Math.floor(
        (promoTimeInSeconds % (60 * 60 * 24)) / (60 * 60)
      );
      const min = Math.floor(promoTimeInSeconds / 60);

      document.querySelector(
        "#days"
      ).innerHTML = `<span class="count">${Days}</span>
        <span class="label">Days</span>`;
      document.querySelector(
        "#hours"
      ).innerHTML = `<span class="count">${hour}</span>
      <span class="label">Hours</span>`;
      document.querySelector(
        "#minutes"
      ).innerHTML = `<span class="count">${min}</span>
        <span class="label">Min</span>`;
      document.querySelector(
        "#seconds"
      ).innerHTML = `<span class="count">${promoTimeInSeconds}</span>
        <span class="label">Sec</span>`;
    }
  }, 1000);
}

// startCountDown();
