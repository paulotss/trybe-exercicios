let header = document.getElementById('header-container');
header.style.backgroundColor = "green";

let emergency = document.querySelectorAll('.emergency-tasks div');
for(let val of emergency) {
    val.style.backgroundColor = 'pink';
}

let noEmergency = document.querySelectorAll('.no-emergency-tasks div');
for(let val of noEmergency) {
    val.style.backgroundColor = 'yellow';
}

let emergencyH3 = document.querySelectorAll('.emergency-tasks div h3');
for(let val of emergencyH3) {
    val.style.backgroundColor = '#A334A4';
}

let noEmergencyH3 = document.querySelectorAll('.no-emergency-tasks div h3');
for(let val of noEmergencyH3) {
    val.style.backgroundColor = 'black';
}

let footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#074242';