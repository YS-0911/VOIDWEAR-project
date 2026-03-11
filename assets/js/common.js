/* COMMON JS — VOIDWEAR */
(function () {
  "use strict";
  var header = document.getElementById("site-header");
  var dropdown = document.getElementById("mega-dropdown");
  var searchBtn = document.getElementById("searchToggle");
  var searchBtn2 = document.getElementById("searchToggle2");
  var searchBar = document.getElementById("searchBar");
  var searchClose = document.getElementById("searchClose");
  var gnbItems = document.querySelectorAll(".gnb-item");

  /* Scroll: compact header */
  window.addEventListener(
    "scroll",
    function () {
      if (!header) return;
      if (window.scrollY > 80) {
        header.classList.add("is-compact");
      } else {
        header.classList.remove("is-compact");
      }
    },
    { passive: true },
  );

  /* Mega Dropdown — per-menu content */
  var dropdownTimer;
  function showSet(menu) {
    document.querySelectorAll(".dropdown-set").forEach(function (s) {
      s.classList.remove("is-active");
    });
    var set = document.querySelector('.dropdown-set[data-for="' + menu + '"]');
    if (set) set.classList.add("is-active");
  }
  function openDropdown(item) {
    clearTimeout(dropdownTimer);
    if (dropdown) dropdown.classList.add("is-open");
    gnbItems.forEach(function (i) {
      i.classList.remove("is-active");
    });
    if (item) {
      item.classList.add("is-active");
      var m = item.dataset.menu;
      if (m) showSet(m);
    }
  }
  function closeDropdown() {
    dropdownTimer = setTimeout(function () {
      if (dropdown) dropdown.classList.remove("is-open");
      gnbItems.forEach(function (i) {
        i.classList.remove("is-active");
      });
    }, 150);
  }
  gnbItems.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      openDropdown(item);
    });
    item.addEventListener("mouseleave", closeDropdown);
  });
  if (dropdown) {
    dropdown.addEventListener("mouseenter", function () {
      clearTimeout(dropdownTimer);
    });
    dropdown.addEventListener("mouseleave", closeDropdown);
  }
  document.addEventListener("click", function (e) {
    if (header && !header.contains(e.target)) closeDropdown();
  });

  /* Search Toggle (PC) */
  function toggleSearch() {
    if (!searchBar) return;
    searchBar.classList.toggle("is-open");
    if (searchBar.classList.contains("is-open")) {
      var input = searchBar.querySelector("input");
      if (input)
        setTimeout(function () {
          input.focus();
        }, 50);
      if (dropdown) dropdown.classList.remove("is-open");
    }
  }
  if (searchBtn) searchBtn.addEventListener("click", toggleSearch);
  if (searchBtn2) searchBtn2.addEventListener("click", toggleSearch);
  if (searchClose)
    searchClose.addEventListener("click", function () {
      if (searchBar) searchBar.classList.remove("is-open");
    });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (searchBar) searchBar.classList.remove("is-open");
      if (dropdown) dropdown.classList.remove("is-open");
      if (mobileSearchBar) mobileSearchBar.classList.remove("is-open");
    }
  });

  /* Mobile Search Toggle */
  var mobSearchBtn = document.querySelector(".mob-nav-item.nav-search");
  var mobileSearchBar = document.getElementById("mobileSearchBar");
  var mobileSearchClose = document.getElementById("mobileSearchClose");
  if (mobSearchBtn) {
    mobSearchBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (mobileSearchBar) {
        mobileSearchBar.classList.toggle("is-open");
        if (mobileSearchBar.classList.contains("is-open")) {
          var input = mobileSearchBar.querySelector("input");
          if (input)
            setTimeout(function () {
              input.focus();
            }, 50);
          closeMobileMenu();
        }
      }
    });
  }
  if (mobileSearchClose) {
    mobileSearchClose.addEventListener("click", function () {
      if (mobileSearchBar) mobileSearchBar.classList.remove("is-open");
    });
  }

  /* Mobile Menu */
  var mobCatBtn = document.getElementById("mobCatBtn");
  var mobileMenuPanel = document.getElementById("mobileMenuPanel");
  function closeMobileMenu() {
    if (mobileMenuPanel) mobileMenuPanel.classList.remove("is-open");
    if (mobCatBtn) mobCatBtn.classList.remove("is-active");
    document.body.style.overflow = "";
  }
  if (mobCatBtn) {
    mobCatBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (mobileMenuPanel && mobileMenuPanel.classList.contains("is-open")) {
        closeMobileMenu();
      } else {
        if (mobileMenuPanel) mobileMenuPanel.classList.add("is-open");
        if (mobCatBtn) mobCatBtn.classList.add("is-active");
        document.body.style.overflow = "hidden";
        if (mobileSearchBar) mobileSearchBar.classList.remove("is-open");
      }
    });
  }
  document.addEventListener("click", function (e) {
    if (
      mobileMenuPanel &&
      mobileMenuPanel.classList.contains("is-open") &&
      !mobileMenuPanel.contains(e.target) &&
      mobCatBtn &&
      !mobCatBtn.contains(e.target)
    ) {
      closeMobileMenu();
    }
  });

  /* Mobile Accordion — only one open at a time */
  function toggleAccordion(li) {
    var isOpen = li.classList.contains("is-open");
    document
      .querySelectorAll(".mob-menu-item.is-open")
      .forEach(function (item) {
        if (item !== li) item.classList.remove("is-open");
      });
    if (isOpen) {
      li.classList.remove("is-open");
    } else {
      li.classList.add("is-open");
    }
  }

  document.querySelectorAll(".mob-menu-plus").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var li = btn.closest(".mob-menu-item");
      if (li) toggleAccordion(li);
    });
  });

  document.querySelectorAll(".mob-menu-item > a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var li = link.closest(".mob-menu-item");
      if (li) toggleAccordion(li);
    });
  });

  /* Responsive: close mobile menu when resizing to desktop */
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      if (mobileMenuPanel && mobileMenuPanel.classList.contains("is-open")) {
        closeMobileMenu();
      }
      if (mobileSearchBar && mobileSearchBar.classList.contains("is-open")) {
        mobileSearchBar.classList.remove("is-open");
      }
    }
  });

  /* Scroll to Top Button */
  var scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    window.addEventListener(
      "scroll",
      function () {
        if (window.scrollY > 300) {
          scrollTopBtn.classList.add("is-visible");
        } else {
          scrollTopBtn.classList.remove("is-visible");
        }
      },
      { passive: true },
    );
    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
