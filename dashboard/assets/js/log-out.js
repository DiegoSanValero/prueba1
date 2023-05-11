document.body.addEventListener("load", initComponents());

function initComponents() {
    const EXIT_BUTON = document.querySelector(".header__nav-link");

    EXIT_BUTON.addEventListener("click", () => {
        localStorage.removeItem("AUTH_STAFF");
        location.pathname = "/home.html";
    })
}