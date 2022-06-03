function singSong(){
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
function greet(acdj) {
    console.log(`firstName is: ${acdj}`)
}

function rant(message){
    console.log(`${message.toUpperCase()}`);
}

function repeat(str, numTimes) {
    let result = '';
    for (let i= 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function isSnakeEyes (a,b){
    if (a==1 && b==1) {
        console.log("Snake Eyes!")
    }
    else {
        console.log("Not Snake Eyes!")
    }
}

function add (a,b){
    let sum = a + b;
		return sum;
}

function multiply (a,b) {
    answer= a * b;
    return answer;
}

function lastElement(input) {
    const element = input;
    if (element.length - 1 === -1) {
        return null;
    }
    return element[element.length +1];
}

function capitalize (input) {
    return input[0].toUpperCase() + input.slice(1);
}

function sumArray (input) {
    let ioi = 0;
    for (let element of input) {
        ioi += element;
      }
      return ioi;
}

function returnDay (input) {
    if(input == 1){
        return 'Monday';
    }
    else if(input == 2){
        return 'Tuesday';
    }
    else if(input == 3){
        return 'Wednesday';
    }
    else if(input == 4){
        return 'Thursday';
    }
    else if(input == 5){
        return 'Friday';
    }
    else if(input == 6){
        return 'Saturday';
    }
    else if(input == 7){
        return 'Sunday';
    }
    else{
        return null
    }
}

let bird = 'Scarlet Macaw';
function birdWatch() {
    let bird = 'Great Blue Heron';
    console.log(bird);
}
birdWatch

function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Bat Women']
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`PLEASE HELP US, ${hero.toUppercase()}`);
        }
    }
    cryForHelp();
}

function callTwice(func) {
    func();
    func();
}

function callTenTimes(f){
    for(let  i = 0; i < 10; i++){
        f()
    }
}

function rollDie() {
     const roll = Math.floor(Math.random() * 6) + 1
     console.log(roll)
}

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

//coding exercise 45

const square = {
    area (input) {
        return input * input;
    },
    perimeter(input) {
        return input * 4;
    }
}

//217 lecture

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWW`);
    }
}

const meow2 = cat.meow;

//coding exercise 46

const hen = {
    name : 'Helen',
    eggCount :  0,
    layAnEgg() {
        this.eggCount += 1;
        return "EGG";
    }
}

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log("Please pass a string next time!")
    }
}

