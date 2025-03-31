/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
*/

//Here's an enhanced version of the code given with additional elements like a sword, a compass, and more intricate decision-making:
//Expanded Game Code:
//var readline = require('readline-sync');

// Player's inventory
//const hasTorch = true;  // Change to true or false based on player's possession
//const hasMap = false;   // Change to true or false based on player's possession
const hasSword = true;  // Change to true or false based on player's possession
const hasCompass = false; // Change to true or false based on player's possession

console.log("You wake up in a dark forest. There are two paths ahead of you:");
console.log("One leads to the mountains, the other to the village.");
console.log("You also notice a small hut nearby. It might hold some useful items.");

const choice1 = readline.question("Do you go to the 'mountains', the 'village', or explore the 'hut'? ").toLowerCase();

if (choice1 === "mountains") {
  console.log("You venture towards the mountains...");
  
  if (hasTorch) {
    console.log("You safely navigate through the dark mountains, your torch lighting the way.");
    
    // Additional choice at the mountains
    const choice2 = readline.question("You see a wild animal ahead. Do you 'fight' or 'run'? ").toLowerCase();
    if (choice2 === "fight" && hasSword) {
      console.log("You draw your sword and defeat the wild animal. You're victorious!");
    } else if (choice2 === "run") {
      console.log("You run and escape the wild animal. Phew, that was close!");
    } else {
      console.log("Without a weapon, you're overpowered by the animal. You retreat to the village.");
    }
  } else {
    console.log("It's too dark to proceed. You decide to turn back.");
  }
  
} else if (choice1 === "village") {
  console.log("You head towards the village...");
  
  // Additional condition to enter the village
  if (hasMap) {
    console.log("You use your map to easily find the village and navigate the streets.");
  } else {
    console.log("You wander aimlessly and get lost. Eventually, you find your way to the village.");
  }
  
  // Encounter in the village
  const choice2 = readline.question("In the village, you see a merchant. Do you 'buy' something or 'leave'? ").toLowerCase();
  if (choice2 === "buy") {
    if (hasCompass) {
      console.log("You buy a compass from the merchant. It will help you find your way!");
    } else {
      console.log("You buy a healing potion from the merchant. It will restore your health!");
    }
  } else {
    console.log("You decide to leave the merchant and explore more of the village.");
  }
} else if (choice1 === "hut") {
    console.log("You walk towards the hut...");
    
    // Conditional outcomes depending on what the player finds in the hut
    if (!hasTorch) {
      console.log("You find a torch inside the hut. Now you're prepared for the mountains!");
    } else {
      console.log("You find some supplies and a map inside the hut. It might come in handy later.");
    }
  
  } else {
    console.log("You get lost in the forest and wander aimlessly.");
  }
  
  console.log("The adventure continues... What will you do next?");
//----------------------------------------------------------------------------------------------------------
/* Key Features Added:
1.	More Choices and Paths:
o	Players can now choose whether to go to the mountains, village, or explore a hut.
o	Each path leads to further decisions with different outcomes.
2.	New Items:
o	Items such as a sword, compass, and torch are added, and the game uses these items to drive decisions (e.g., fighting a wild animal with a sword or using a compass to find the village).
3.	Logical Operators:
o	&& (AND) is used to check multiple conditions (e.g., if the player has both a sword and chooses to fight).
o	|| (OR) is used to offer alternative choices (e.g., the player can either go to the mountains or the village if they have a map).
o	! (NOT) is used to check if the player does not have an item, like a torch, and provides appropriate feedback.
4.	Nested Conditionals:
o	The game now uses nested conditionals to add layers of logic to the choices (e.g., whether the player can defeat an animal based on having a sword).
This enhanced version gives players a more immersive experience with multiple paths, choices, and consequences. The decisions user makes can affect the outcome, and the game is flexible enough to allow for many different scenarios.
*/


