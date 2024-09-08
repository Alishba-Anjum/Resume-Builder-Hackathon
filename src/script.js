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
document.addEventListener("DOMContentLoaded", function () {
    var userName = document.querySelector("#name");
    var userEmail = document.querySelector("#email");
    var userContact = document.querySelector("#number");
    var userExperience = document.querySelector("#experience");
    var userEducation = document.querySelector("#education");
    var userSkills = document.querySelector("#skills");
    var generateBtn = document.querySelector("button");
    var userNameResume = document.querySelector("#userNameresume");
    var userContactResume = document.querySelector("#userContactresume");
    var userEmailResume = document.querySelector("#userEmailresume");
    var userEducationResume = document.querySelector("#userEducationresume");
    var userExperienceResume = document.querySelector("#userExperienceresume");
    var userSkillsResume = document.querySelector("#userSkillsresume");
    var resume = document.querySelector(".resume");
    var form = document.querySelector("form");
    var download = document.querySelector("#download");
    generateBtn === null || generateBtn === void 0 ? void 0 : generateBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (userName && userNameResume) {
            userNameResume.innerHTML = "Name: ".concat(userName.value);
        }
        if (userContact && userContactResume) {
            console.log("Contact: ".concat(userContact.value));
            userContactResume.innerHTML = "Contact: ".concat(userContact.value);
        }
        if (userEmail && userEmailResume) {
            console.log("Email: ".concat(userEmail.value));
            userEmailResume.innerHTML = "Email: ".concat(userEmail.value);
        }
        if (userEducation && userEducationResume) {
            console.log("Education: ".concat(userEducation.value));
            userEducationResume.innerHTML = "Education: ".concat(userEducation.value);
        }
        if (userExperience && userExperienceResume) {
            console.log("Experience: ".concat(userExperience.value));
            userExperienceResume.innerHTML = "Experience: ".concat(userExperience.value);
        }
        if (userSkills && userSkillsResume) {
            console.log("Skills: ".concat(userSkills.value));
            userSkillsResume.innerHTML = "Skills: ".concat(userSkills.value);
        }
        userContact.value = "";
        userEducation.value = "";
        userEmail.value = "";
        userName.value = "";
        userSkills.value = "";
        userExperience.value = "";
        resume.style.display = "block";
        form.style.display = "none";
        download.style.display = "block";
    });
});
var editCode = document.querySelectorAll(".detail");
editCode.forEach(function (element) {
    element.addEventListener("click", function () {
        var edit = prompt("Edit Value");
        element.innerHTML = edit;
    });
});
function download() {
    var elements = document.querySelector(".resume");
    html2pdf()
        .from(elements)
        .save();
}
