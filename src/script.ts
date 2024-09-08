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
  
})
