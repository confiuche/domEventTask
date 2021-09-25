//1. Insert only the essential script to gap for the Document object Model to load,
//to make sure that anything you manipulate in the Document object Model has 
//loaded. Try to achieve this by adding an event listener or any other methods 
//you prefer.


//2. Replace the text "Change me" with "Hello World!".
let chg = document.getElementsByTagName("change_heading").innerHTML="Hello World!"
console.log(chg)

//3. When a user hovers over one of the colored boxes change the text to display 
//the color that is being hovered over.
let br = document.getElementById("brown").hover.style.innerHTML="Brown"  //.style.color="black"//.innerHTML="Brown"
//br:hover.style.color="black"

//4. Create a new div element.


//5. Give your new div a class of purple and style it so that it has a background 
//color of purple.


//6. Append your new div to the page to the section tag.




//Part 2
//Develop a game (RACING) with the three cars. When the race button is pressed, the 
//three cars should move across the screen until one of them is at the end of the 
//screen. When one of the blocks reaches the end - you should alert "winner!"