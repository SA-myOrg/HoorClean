document.addEventListener("DOMContentLoaded", function () {
  // تفعيل مكتبة AOS للأنيميشن
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
  });

  // تبديل القائمة في الأجهزة الصغيرة
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    this.querySelector("i").classList.toggle("fa-times");
    this.querySelector("i").classList.toggle("fa-bars");
  });

  // تبديل وضع النهار/الليل
  const themeToggle = document.getElementById("themeToggle");
  const currentTheme = localStorage.getItem("theme") || "light";

  document.body.setAttribute("data-theme", currentTheme);

  themeToggle.addEventListener("click", function () {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

  // زر الصعود لأعلى
  const scrollToTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }

    // إضافة كلاس للنافبار عند التمرير
    if (window.pageYOffset > 100) {
      document.querySelector(".navbar").classList.add("scrolled");
    } else {
      document.querySelector(".navbar").classList.remove("scrolled");
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // إغلاق القائمة عند النقر على رابط
  const navItems = document.querySelectorAll(".nav-links a");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        menuToggle.querySelector("i").classList.add("fa-bars");
        menuToggle.querySelector("i").classList.remove("fa-times");
      }
    });
  });

  // الأسئلة الشائعة
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const faqItem = this.parentElement;
      faqItem.classList.toggle("active");

      const answer = this.nextElementSibling;
      if (faqItem.classList.contains("active")) {
        answer.style.display = "block";
      } else {
        answer.style.display = "none";
      }
    });
  });

  // نموذج الاتصال
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("شكرًا لتواصلك معنا، سنقوم بالرد عليك في أقرب وقت ممكن.");
    this.reset();
  });
});
