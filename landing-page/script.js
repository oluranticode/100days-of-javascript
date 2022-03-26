const toggleDarkMode = document.querySelector(".toggle-darkmode");
const toggleText = document.querySelector(".toggle-text");

let darkMode = localStorage.getItem("darkMode");

     // set Dark Mode
     const enableDarkMode = () => {
          document.body.classList.add("darkmode"); 
          toggleText.textContent = "Light";
          localStorage.setItem("darkMode", "enabled");
     }

     // disable dark mode
     const disableDarkMode = () => {
          document.body.classList.remove("darkmode"); 
          toggleText.textContent = "Dark";
          localStorage.setItem("darkMode", null);
     }

     //save DarkMode History
     if(darkMode === "enabled") {
          enableDarkMode();
     }

     toggleDarkMode.addEventListener("click", ()=>{
          let darkMode = localStorage.getItem("darkMode");
          
          if(darkMode !== "enabled"){
               enableDarkMode();
          } else {
               disableDarkMode();
          }
     });