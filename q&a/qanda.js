document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq-item");
    const searchInput = document.getElementById("faqSearch");
  
    //토글
    faqs.forEach(faq => {
      faq.querySelector(".question").addEventListener("click", () => {
        faq.classList.toggle("active");
      });
    });
  
    // 검색바 기능
    searchInput.addEventListener("input", () => {
      const keyword = searchInput.value.toLowerCase();
      faqs.forEach(faq => {
        const question = faq.querySelector(".question").textContent.toLowerCase();
        faq.style.display = question.includes(keyword) ? "block" : "none";
      });
    });
  });
  