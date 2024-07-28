// decision making with code

// IF , ELSE IF STATEMENT -->

// const daysOfWeek = "monday";
// if (daysOfWeek === "Saturday") {
//     console.log("I love saturday")
// } else if (daysOfWeek === "monday") {
//     console.log("Ugh I hate that")
// }

// 0-5= free
// 5-15= $10, child price
// 15-45=$30
// 45+ = $10


// IF, ELSE IF , ELSE STATEMENT -->

// const age = 37;
// if (age < 5) {
//     console.log("You are a baby. Its free for you")
// }
// else if (age < 15) {
//     console.log("You are child. Pay $10")
// }
// else if (age < 45) {
//     console.log("You are adult. Pay $30")
// }
// else {
//     console.log("You are senior. Pay $10")
// }

// const password = prompt("ENTER THE PASSWORD");
// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log("valid password");
//     }
//     else {
//         console.log(" password contain spaces")
//     }
// }
// else {
//     console.log("password too short")
// }


// LOGICAL AND

// const age = 50;
// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("you are free")
// } else if (age >= 5 && age < 10) {
//     console.log("10 dollar")
// } else if (age >= 10 && age < 65) {
//     console.log("30 dollar")
// } else {
//     console.log('invalid')
// }

// LOGICAL NOT

// let firstName = prompt("enter your first name");
// if (!firstName) {
//     firstName = prompt("Try Again !!");
// }

// SWITCH STATEMENT

const day = 3;
switch (day) {
    case 1:
        console.log('Monday')
        // run this code
        break;

    case 2:
        console.log('Tuesday')
        // run this code instead
        break;


    case 3:
        console.log('Wednesday')
        // run this code instead
        break;

    case 4:
        console.log('Thursday')
        // run this code instead
        break;

    case 5:
        console.log('Friday')
        // run this code instead
        break;

    case 6:
        console.log('Saturday')
        // run this code instead
        break;

    case 6:
        console.log('Weekend!')
        // run this code instead
        break;
    default:
        console.log("I don't know that")
    // include as many cases as you like
}