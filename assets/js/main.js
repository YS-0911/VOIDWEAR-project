/* MAIN PAGE JS — VOIDWEAR */
(function () {
  "use strict";
  var heroItems = document.querySelectorAll(".hero-col");
  var slideNum = document.getElementById("slideNum");
  var slideBar = document.getElementById("slideBar");
  var prevBtn = document.getElementById("heroPrev");
  var nextBtn = document.getElementById("heroNext");
  var TOTAL = heroItems.length,
    currentSlide = 0,
    autoPlayTimer;
  var AUTOPLAY_DELAY = 4000;
  function updateIndicator() {
    if (slideNum)
      slideNum.textContent = String(currentSlide + 1).padStart(2, "0");
    if (slideBar)
      slideBar.style.width = ((currentSlide + 1) / TOTAL) * 100 + "%";
  }
  function goToSlide(index) {
    heroItems[currentSlide].classList.remove("is-active");
    currentSlide = (index + TOTAL) % TOTAL;
    heroItems[currentSlide].classList.add("is-active");
    updateIndicator();
  }
  function startAutoPlay() {
    clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(function () {
      goToSlide(currentSlide + 1);
    }, AUTOPLAY_DELAY);
  }
  if (TOTAL > 0) {
    heroItems[0].classList.add("is-active");
    updateIndicator();
    startAutoPlay();
    if (prevBtn)
      prevBtn.addEventListener("click", function () {
        goToSlide(currentSlide - 1);
        startAutoPlay();
      });
    if (nextBtn)
      nextBtn.addEventListener("click", function () {
        goToSlide(currentSlide + 1);
        startAutoPlay();
      });
    var touchStartX = 0;
    var heroEl = document.querySelector(".hero");
    if (heroEl) {
      heroEl.addEventListener(
        "touchstart",
        function (e) {
          touchStartX = e.changedTouches[0].clientX;
        },
        { passive: true },
      );
      heroEl.addEventListener(
        "touchend",
        function (e) {
          var diff = touchStartX - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 40) {
            goToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
            startAutoPlay();
          }
        },
        { passive: true },
      );
    }
  }
})();
