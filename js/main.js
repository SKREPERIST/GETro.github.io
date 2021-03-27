$(function () {
  $(".slider__big").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".slider__small",
  });
  $(".slider__small").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".slider__big",
    variableWidth: true,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
  });

  $(".header__menu-btn").on("click", function () {
    $(".header__menu > a").slideToggle();
  });

  let btn = document.querySelector(".header__menu-btn");

  btn.onclick = () => {
    btn.classList.toggle("active");
  };
});
