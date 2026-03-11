/* ================================
   CATEGORY PAGE JS — VOIDWEAR
================================ */

(function () {
  "use strict";

  /* ── Category Tabs ── */
  const catTabs = document.querySelectorAll(".cat-tab");
  catTabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      catTabs.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  /* ── Filter Tabs ── */
  const filterTabs = document.querySelectorAll(".cat-filter-tab");
  filterTabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterTabs.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
})();
