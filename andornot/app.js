/* const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf('') === -1) {
    console.log("VALID PASSWORD!")
} else {
    console.log("INCORRECT FORMAT FOR PASSWORD!")
}

const age = 1000;
if (age < 5 || age >= 65) {
    console.log("FREE");
} else if (age < 10) {
    console.log("$10")
} else if (age < 65) {
    console.log("$20")
} */
/* 
const age = 10;
if (!(age>= 0 && age < 5 || age >= 65)) {
    console.log("YOU ARE NOT A BABY OR A SENIOR!")
} */

const day = 4;
switch (day) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6: 
    case 7:
        console.log("WEEKEND!");
        break; 
    default:
        console.log("I DINT KNOW THAT!"); 
}