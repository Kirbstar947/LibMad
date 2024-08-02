let Name = prompt("Hello! What's your name?");
alert("Hello " + "'" + Name + "'" + "!" + " You'll be participating in a madlib. Please enter random words into the next few prompts and check the console by inspecting the website to see the story");
let Friends = 2; //numeric value
let Fri = Friends.toString(); 
let Object1 = prompt("Enter an object"); //word
let Minutes = 3*10; //calculated number
let Min = Minutes.toString();
let Cashier = prompt("Enter a name");
let Object2 = prompt("Enter another object");
let Object3 = prompt("Enter the last object");
let boolean = false;
let opposite = !boolean; 
let string = opposite.toString();

let Story = ("On one random morning, " + Name + " decided to go to Starbucks." + " Along with " + "'" + Name + "'" + " 's " + "'" + Friends + "'" + " friends, "
    + "they decided to order 3 " + "'" + Object1 + "'" + "s. " + " The order came out after " + "'" + Min + "'" + " minutes, the " + "'" + Cashier + "'" + 
    "handed them " + "'" + Object2 + "'" + " instead!" + " The cashier asked if it would be cash or card, but " + "'" + Name + "'" + " pays with " + "'" + Object3 
    + "'" + "s. The cashier was stunned, and " + "'" + Name + "'" + " said any form of payment is payment while " + "'" + Cashier + "'" + " says that's " + string);
    // toString();
console.log(Story);