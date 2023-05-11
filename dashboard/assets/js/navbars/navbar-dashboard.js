document.body.addEventListener("load", initComponents());

function initComponents() {
    const BTN_OCCUPATIONAL_PROFILE = document.querySelector("#user__nav-item-profile");
    const BTN_OCCUPATIONAL_HAZARDS = document.querySelector("#user__nav-item-occupational-hazards");
    const BTN_COMMITTEE = document.querySelector("#user__nav-item-committee");
    const SECTION_PROFILE = document.querySelector("#dashboard__profile");
    const SECTION_OCCUPATIONAL_HAZARDS = document.querySelector("#dashboard__occupational-hazards");
    const SECTION_COMMITTEE = document.querySelector("#dashboard__committee");

    // Profile dashboard section
    BTN_OCCUPATIONAL_PROFILE.addEventListener("click", () => {
        BTN_OCCUPATIONAL_PROFILE.classList.add("user__nav-item--actived");
        BTN_OCCUPATIONAL_HAZARDS.classList.remove("user__nav-item--actived");
        BTN_COMMITTEE.classList.remove("user__nav-item--actived");
        SECTION_PROFILE.classList.add("user__section--actived");
        SECTION_OCCUPATIONAL_HAZARDS.classList.remove("user__section--actived");
        SECTION_COMMITTEE.classList.remove("user__section--actived");
    });

    // Occupational hazards dashboard section
    BTN_OCCUPATIONAL_HAZARDS.addEventListener("click", () => {
        BTN_OCCUPATIONAL_PROFILE.classList.remove("user__nav-item--actived");
        BTN_OCCUPATIONAL_HAZARDS.classList.add("user__nav-item--actived");
        BTN_COMMITTEE.classList.remove("user__nav-item--actived");
        SECTION_PROFILE.classList.remove("user__section--actived");
        SECTION_OCCUPATIONAL_HAZARDS.classList.add("user__section--actived");
        SECTION_COMMITTEE.classList.remove("user__section--actived");
    });

    // Committee dashboard section
    BTN_COMMITTEE.addEventListener("click", () => {
        BTN_OCCUPATIONAL_PROFILE.classList.remove("user__nav-item--actived");
        BTN_OCCUPATIONAL_HAZARDS.classList.remove("user__nav-item--actived");
        BTN_COMMITTEE.classList.add("user__nav-item--actived");
        SECTION_PROFILE.classList.remove("user__section--actived");
        SECTION_OCCUPATIONAL_HAZARDS.classList.remove("user__section--actived");
        SECTION_COMMITTEE.classList.add("user__section--actived");
    });
}