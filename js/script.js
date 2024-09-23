/*
  scope : 특정 변수의 정보값에 접근할 수 있는 범위 유효범위 
  전역변수 : 시스템상에서 모두 접근할 수 있는 변수 (window객체에 등록되는 변수)
  지역변수 : 특정 코드 블록안쪽에서 선언된 변수 : 선언된 코드블록 안쪽에서만 접근 가능

  전역변수의 오염 : window객체에 등록된 변수는 다른 스크립트 파일이라고 하더라도 해당 변수값을 공유하므로
  실수로 A.js에서 B.js에 있는 변수를 변형시킬수 있는 이슈

  script연결시 type='module'이라고 지정하면 해당 파일 안쪽의 선언된 변수는 설사 코드블록 밖에서 선언되었더라도
  파일자체의 전용 스코프가 설정되어 다른파일에서 해당 파일의 변수 접근이 불가능한 모듈화 상태 유지

  type='module'지정시 defer와 마찬가지로 스크립트와 body안쪽코드가 비동기적으로(동시에) 해석됨
*/

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
		//13시가 넘어설때 12를 뺀 값을 다시 hr변수에 재할당
		hr = hr - 12;
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

	const themeData = [
		{ className: "morning", period: [5, 11] },
		{ className: "afternoon", period: [11, 16] },
		{ className: "evening", period: [16, 20] },
		{ className: "night", period: [20, 5] }
	];

	main.className = "";

	themeData.forEach(data => {
		if (data.className != "night") {
			if (hr >= data.period[0] && hr < data.period[1]) main.classList.add(data.className);
		} else {
			if (hr >= data.period[0] || hr < data.period[1]) main.classList.add(data.className);
		}
	});
}
//2시 30분 까지 위의 반복문 패턴 정리
