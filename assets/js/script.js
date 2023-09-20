// Wrap every letter in a span
var textWrapper = document.querySelector("#hero-text");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

var textWrapper = document.querySelector("#hero-text-strong");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: "#hero-text .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 600,
  delay: (el, i) => 100 * (i + 1),
}).add({
    targets: "#hero-text-strong .letter",
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 600,
    delay: (el, i) => 200 * (i + 1),
  });


