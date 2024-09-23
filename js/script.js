/*
  setInterval : 특정 함수를 일정시간마다 반복 호출

  setInterval(함수,인터벌시간) : 인터벌간격마다 함수 반복 호출
*/

const title = document.querySelector("h1");
const [em, spanHr, spanMin, spanSec] = title.children;

//1초마다 시간출력 반복
setInterval(() => {
  const now = new Date();
  const hr = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  let apm = hr < 13 ? "am" : "pm";

  em.innerText = apm;
  spanHr.innerText = hr;
  spanMin.innerText = min;
  spanSec.innerText = sec;
}, 1000);
