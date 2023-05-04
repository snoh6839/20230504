const NOW = new Date();
console.log("--- 현재 시간 가져오기 --- const NOW = new Date();");
console.log("NOW : "+ NOW);

console.log("\n--- 연도만 가져오기 ---");
console.log("NOW.getFullYear() : " + NOW.getFullYear());

console.log("--- 달(월)만 가져오기 ---");
console.log("(NOW.getMonth() + 1) : " + (NOW.getMonth() + 1));

console.log("--- 날짜(일)만 가져오기 ---");
console.log("NOW.getDate() : " + NOW.getDate());

console.log("--- 요일 가져오기 var arrDayStr = ['일', '월', '화', '수', '목', '금', '토']; ---");
var arrDayStr = ['일', '월', '화', '수', '목', '금', '토'];
console.log("arrDayStr[NOW.getDay()] : " + arrDayStr[NOW.getDay()])

console.log("\n--- 오늘 날짜 가져오기 ---");
console.log(NOW.getFullYear() + "년 " + (NOW.getMonth() + 1) + "월 " + NOW.getDate() + "일 " + arrDayStr[NOW.getDay()] + "요일");

console.log("\n--- 시간 가져오기 (Linux) ---");
console.log("NOW.getTime() : " + NOW.getTime());

console.log("--- 시 가져오기 (hour) ---");
console.log("NOW.getHours() : " + NOW.getHours());
console.log("--- 분 가져오기 (minutes) ---");
console.log("NOW.getMinutes() : " + NOW.getMinutes());
console.log("--- 초 가져오기 (second) ---");
console.log("NOW.getSeconds() : " + NOW.getSeconds());

var pastDate = new Date ('2022-09-30 19:20:10')
console.log((NOW.getFullYear() - pastDate.getFullYear()) + "년 " + ((NOW.getMonth() + 1) - (pastDate.getMonth() + 1)) + "개월 " + (NOW.getDate() - pastDate.getDate()) + "일 " + (NOW.getHours() - pastDate.getHours()) + "시간 " + (NOW.getMinutes() - pastDate.getMinutes()) + "분 " + (NOW.getSeconds() - pastDate.getSeconds()) + "초 지났습니다.");