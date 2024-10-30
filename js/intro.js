function openTab(evt, tabName) {
  // 두 번째 탭("tab2")이 클릭되었을 때 페이지 이동
  if (tabName === "tab2") {
    window.location.href = "../html/join.html"; // 이동할 URL을 설정하세요.
    return;
  }

  var i, tabcontent, tabbuttons;

  // 모든 탭 콘텐츠 숨기기
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // 모든 탭 버튼에서 active 클래스 제거
  tabbuttons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabbuttons.length; i++) {
    tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
  }

  // 선택된 탭 콘텐츠만 표시하고, 버튼에 active 클래스 추가
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
