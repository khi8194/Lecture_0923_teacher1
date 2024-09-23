const themeData = [
	{ className: "morning", period: [5, 11] },
	{ className: "afternoon", period: [11, 16] },
	{ className: "evening", period: [16, 20] },
	{ className: "night", period: [20, 5] }
];

//해당 data.js안에 있는 데이터중 themeData라는 값만 비구조화할당으로 추출해서 내보냄
export { themeData };
