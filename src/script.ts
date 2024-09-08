const skills = document.querySelector(".skills")as HTMLDivElement;
const skillsBtn = document.querySelector("#skillsBtn")as HTMLButtonElement;

let showSkills:boolean = true
skillsBtn?.addEventListener("click", function(){
  if(showSkills === true){
    skills.style.display = "block";
  skillsBtn.innerText = "Hide Skills"
  showSkills = false;
  }else{
    skills.style.display = "none";
  skillsBtn.innerText = "Show Skills"
  showSkills = true;
  }
  
});
document.addEventListener("DOMContentLoaded", () => {
  const userName = document.querySelector("#name") as HTMLInputElement;
  const userEmail = document.querySelector("#email") as HTMLInputElement;
  const userContact = document.querySelector("#number") as HTMLInputElement;
  const userExperience = document.querySelector("#experience") as HTMLInputElement;
  const userEducation = document.querySelector("#education") as HTMLInputElement;
  const userSkills = document.querySelector("#skills") as HTMLInputElement;
  const generateBtn = document.querySelector("button") as HTMLButtonElement;

  const userNameResume = document.querySelector("#userNameresume");
  const userContactResume = document.querySelector("#userContactresume");
  const userEmailResume = document.querySelector("#userEmailresume");
  const userEducationResume = document.querySelector("#userEducationresume");
  const userExperienceResume = document.querySelector("#userExperienceresume");
  const userSkillsResume = document.querySelector("#userSkillsresume");
  const resume:any = document.querySelector(".resume")
  const form :any = document.querySelector("form")
  const download:any = document.querySelector("#download")
  


  
  generateBtn?.addEventListener("click", function (e) {
    e.preventDefault();

    

    if (userName && userNameResume) {
      userNameResume.innerHTML = `Name: ${userName.value}`;
    }
    if (userContact && userContactResume) {
      console.log(`Contact: ${userContact.value}`);
      userContactResume.innerHTML = `Contact: ${userContact.value}`;
    }
    if (userEmail && userEmailResume) {
      console.log(`Email: ${userEmail.value}`);
      userEmailResume.innerHTML = `Email: ${userEmail.value}`;
    }
    if (userEducation && userEducationResume) {
      console.log(`Education: ${userEducation.value}`);
      userEducationResume.innerHTML = `Education: ${userEducation.value}`;
    }
    if (userExperience && userExperienceResume) {
      console.log(`Experience: ${userExperience.value}`);
      userExperienceResume.innerHTML = `Experience: ${userExperience.value}`;
    }
    if (userSkills && userSkillsResume) {
      console.log(`Skills: ${userSkills.value}`);
      userSkillsResume.innerHTML = `Skills: ${userSkills.value}`;
    }
    userContact.value = "";
    userEducation.value = "";
    userEmail.value = "";
    userName.value = "";
    userSkills.value = "";
    userExperience.value = "";
    resume.style.display = "block" 
    form.style.display = "none";
    download.style.display = "block";

  });
});
const editCode:any = document.querySelectorAll(".detail")

editCode.forEach((element) => {
element.addEventListener("click", function(){
  let edit = prompt("Edit Value");
  element.innerHTML = edit;
})
})

function download(){
  const elements = document.querySelector(".resume");
  html2pdf()
  .from(elements)
  .save()
}
