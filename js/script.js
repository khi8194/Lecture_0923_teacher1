const main = document.querySelector("main");
const numbers = document.querySelectorAll(".screen span");
const [am, pm] = document.querySelectorAll(".screen em");

setInterval(() => {
  changeTheme();
  getTime().forEach((num, idx) => setTime(num, idx));
}, 1000);

//시간값을 구해서 반환하는 함수
function getTime() {
  const now = new Date();
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  if (hr >= 13) {
    am.classList.remove("on");
    pm.classList.add("on");
  } else {
    pm.classList.remove("on");
    am.classList.add("on");
  }
  return [hr, min, sec];
}

//반환된 시간값을 DOM에 세팅하는 함수
function setTime(num, index) {
  num = num < 10 ? "0" + num : num;
  numbers[index].innerText = num;
}

//시간에 따른 테마 변경 함수
function changeTheme() {
  const hr = new Date().getHours();

  if (hr >= 5 && hr < 11) {
    main.className = "";
    main.classList.add("morning");
  }
  if (hr >= 11 && hr < 16) {
    main.className = "";
    main.classList.add("afternoon");
  }
  if (hr >= 16 && hr < 20) {
    main.className = "";
    main.classList.add("evening");
  }
  if (hr >= 20 || hr < 5) {
    main.className = "";
    main.classList.add("night");
  }
}
