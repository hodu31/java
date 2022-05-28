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