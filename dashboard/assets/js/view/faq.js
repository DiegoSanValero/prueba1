document.body.addEventListener("load", initComponents());

function initComponents() {
    const BTN_FAQ = document.querySelectorAll(".committee__faq-icon");
    const SECTION_DETAILS_FAQ = document.querySelectorAll(".committee__faq-details");

    // Frequently Asked Questions sections
    BTN_FAQ.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            SECTION_DETAILS_FAQ[index].classList.toggle("committee__faq-details--actived");
        });
    });
}