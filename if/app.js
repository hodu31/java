console.log("AFTER CONDITIONAL")
let random = Math.random();
if (random < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5!!!")
    console.log(random);
} 
console.log("AFTER CONDITIONAL")

const dayofweek = 'Saturday';

if (dayofweek === 'monday') {
    console.log("ughhh i hate mondays!")
} else if (dayofweek === 'Saturday') {
    console.log("yay i love saturdays!")
} else if (dayofweek==='friday'){
    console.log("firdays are decent, especially after work!")
} else console.log("else")

let num = 2;
{
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
   if (num % 2 == 0 ) { console.log("even");}
   
    //AND THIS LINE ↑↑↑↑↑
}

function getColor(phrase){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
   if (phrase == 'stop') {console.log("red");}
   else if (phrase == 'slow') {console.log("yellow");}
   else if (phrase == 'go') {console.log("green");}
   else console.log("purple");
   //AND THIS LINE ↑↑↑↑↑
}

const password = prompt("please enter a new password");

if ( password.length >= 6) {
    console.log("LONG ENOUGH PASSWORD!")
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}

if (password.indexOf('') === -1) {
    console.log("good job! no space!")
} else { 
    console.log("password cannot contain spaces!")
}

