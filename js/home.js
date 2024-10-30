$(document).ready(function () {
  // Swiper 초기화
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    on: {
      slideChange: function () {
        updatePagination();
      },
    },
  });

  // 페이지네이션 업데이트 함수
  function updatePagination() {
    const currentIndex = swiper.activeIndex + 1; // 슬라이드 번호 (1부터 시작)
    const totalSlides = swiper.slides.length; // 전체 슬라이드 수
    $("#custom-pagination").text(`${currentIndex} / ${totalSlides}`);
  }

  // 초기 페이지네이션 설정
  updatePagination();
});
