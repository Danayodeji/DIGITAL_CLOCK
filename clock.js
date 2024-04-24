// STEP 1 : store the id in a variable 

let getHourTime = document.getElementById("hr") 
let getMinutesTime = document.getElementById("min") 
let getSecondsTime = document.getElementById("sec")
 
// STEP 2: create a that show live time and assign hour, minutes,and seconds to new variables
const showDigitalClock = () => {
    let getDate = new Date();

    let getHour = getDate.getHours().toString().padStart(2,"0");
    let getMinutes = getDate.getMinutes().toString().padStart(2,"0");
    let getSeconds = getDate.getSeconds().toString().padStart(2,"0");

// STEP 3:  Display new content on the HTML
    getHourTime.textContent = getHour
    getMinutesTime.textContent = getMinutes
    getSecondsTime.textContent = getSeconds
};

// STEP 4: The following code make the counting live 

setInterval(() => {
    showDigitalClock();
}), 1000;
