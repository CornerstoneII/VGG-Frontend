/*
1.
We have the following arrays
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

o = ["th","st","nd","rd"]

Write a JavaScript program to display the colors in the following way :
"1st choice is Blue."
"2nd choice is Green."
"3rd choice is Red."
*/
/******Solution********/
var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

var o = ["th","st","nd","rd"];

var output = "";

for (var i = 0; i < color.length; i++) {

	switch(i){

    case 0: 
    output += "1" + o[1] + " choice is " + color[i] + ",\n"; 
    break;

    case 1: 
    output += "2" + o[2] + " choice is " + color[i] + ",\n"; 
    break;

    case 2: 
    output += "3" + o[3] + " choice is " + color[i] + ",\n"; 
    break;

    default: 
    output += i+1 + o[0] + " choice is " + color[i] + ",\n"; 
    break;
	}
}


/*
2.
Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/
/******Solution********/
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));