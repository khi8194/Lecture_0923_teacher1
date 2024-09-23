const numbers = document.querySelectorAll(".screen span");

setInterval(() => {
  getTime().forEach((num, idx) => setTime(num, idx));
}, 1000);

//시간값을 구해서 반환하는 함수
function getTime() {
  const now = new Date();
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  return [hr, min, sec];
}

//반환된 시간값을 DOM에 세팅하는 함수
function setTime(num, index) {
  //전달받은 첫번째 인수값이 한자리 숫자면 앞에 "0"붙여 출력 그렇지 않으면 그냥 값 출력
  num = num < 10 ? "0" + num : num;
  //각 span배열에서 두번째 인수로 전달받은 index번째 요소에 위에서 가공한 num값을 출력
  numbers[index].innerText = num;
}
