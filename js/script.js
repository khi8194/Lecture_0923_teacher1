//미션1 - new Date()를 활용해서 시간,분,초를 각각 span안에 출력
//미션2 - 현재 시간이 13시를 넘기면 em안쪽의 'am'을 'pm'로 출력
const title = document.querySelector("h1");
const [em, spanHr, spanMin, spanSec] = title.children;

const now = new Date();
const hr = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();
let apm = hr < 13 ? "am" : "pm";

em.innerText = apm;
spanHr.innerText = hr;
spanMin.innerText = min;
spanSec.innerText = sec;
