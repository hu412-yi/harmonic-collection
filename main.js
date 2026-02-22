
const buttons = document.querySelectorAll(".choices button");

if (buttons.length > 0) {
  const realIndex = Math.floor(Math.random() * buttons.length);

  buttons[realIndex].classList.add("real");

  buttons[realIndex].addEventListener("click", () => {
    const nextPages = document.body.dataset.next
      ? document.body.dataset.next.split(",")
      : ["index.html"];

    const target =
      nextPages[Math.floor(Math.random() * nextPages.length)];

    window.location.href = target;
  });
}

document.body.style.opacity = 0;
setTimeout(() => {
  document.body.style.transition = "opacity 0.6s ease";
  document.body.style.opacity = 1;
}, Math.random() * 200);