$(document).ready(function () {
  $("#birth").datepicker({
    dateFormat: "yy.mm.dd", // 표시 형식
    changeYear: true, // 연도 선택
    changeMonth: true, // 월 선택
    maxDate: 0, // 오늘 이전 날짜만
  });
});
