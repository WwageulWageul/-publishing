$(document).ready(function () {
  var swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    spaceBetween: 10,
  });

  $(".tab-item").on("click", function () {
    $(".tab-item").removeClass("active");
    $(this).addClass("active");

    var tabId = $(this).data("tab");
    $(".tab-panel").removeClass("active");
    $("#" + tabId).addClass("active");
  });
});
