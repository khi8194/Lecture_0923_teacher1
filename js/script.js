const screen = document.querySelector(".screen");
const [spanHr, spanMin, spanSec] = screen.children;

//1초마다 시간출력 반복
setInterval(() => {
  const now = new Date();
  const hr = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  spanHr.innerText = hr;
  spanMin.innerText = min;
  spanSec.innerText = sec;
}, 1000);
