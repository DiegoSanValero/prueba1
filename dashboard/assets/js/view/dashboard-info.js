document.body.addEventListener("load", initComponents());
function initComponents() {
    const USER_INFO = JSON.parse(localStorage.getItem("USER_INFO"));
    const USER_PROFILE = document.querySelectorAll(".gh-form__input");
    const USER_IMAGE = document.querySelectorAll(".user__header-profile");

    USER_IMAGE[0].src = "/assets/img/profile/" + USER_INFO.profileImg;
    USER_PROFILE[0].value = USER_INFO.name;
    USER_PROFILE[1].value = USER_INFO.surName;
    USER_PROFILE[2].value = USER_INFO.email;
    USER_PROFILE[3].value = USER_INFO.department;
    USER_PROFILE[4].value = USER_INFO.position;
    USER_PROFILE[5].value = USER_INFO.bankAccount;
}