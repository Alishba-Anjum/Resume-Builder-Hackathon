var skills = document.querySelector(".skills");
var skillsBtn = document.querySelector("#skillsBtn");
var showSkills = true;
skillsBtn === null || skillsBtn === void 0 ? void 0 : skillsBtn.addEventListener("click", function () {
    if (showSkills === true) {
        skills.style.display = "block";
        skillsBtn.innerText = "Hide Skills";
        showSkills = false;
    }
    else {
        skills.style.display = "none";
        skillsBtn.innerText = "Show Skills";
        showSkills = true;
    }
});
