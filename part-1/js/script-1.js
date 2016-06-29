//PRACTICE WITH ARRAYS

/* 

// BEGIN problem 1

var favorites = ["The Harry Potter Series", "Shaun of the Dead", "Spirited Away", "The Halloween Series", "Elizabeth",];

window.console.log(favorites);

// END problem 1
*/


/* 
// BEGIN problem 2

var movies = [];
movies[0] = "The Harry Potter Series";
movies[1] = "Shaun of the Dead";
movies[2] = "Spirited Away";
movies[3] = "The Halloween Series";
movies[4] = "Elizabeth";

window.console.log(movies[0]);

// END problem 2
*/


/*
// BEGIN problem 3

var movies = ["The Harry Potter Series", "Shaun of the Dead", "Spirited Away", "The Halloween Series", "Elizabeth",];

movies.splice(5, 0, "X-Men");

window.console.log(movies);
window.console.log(movies.length + " movies in array");

// END problem 3
*/


/* 
// BEGIN problem 4

var movies = [];
movies[0] = "The Harry Potter Series";
movies[1] = "Shaun of the Dead";
movies[2] = "Spirited Away";
movies[3] = "The Halloween Series";
movies[4] = "Elizabeth";

movies.shift();

window.console.log(movies);

// END problem 4
*/


/* 
// BEGIN problem 5

var movies = [];
movies[0] = "The Harry Potter Series";
movies[1] = "Shaun of the Dead";
movies[2] = "Spirited Away";
movies[3] = "The Halloween Series";
movies[4] = "Elizabeth";
movies[5] = "X-Men";
movies[6] = "The Incredibles";

for (var i = 0; i < movies.length; i++) {
window.console.log(movies[i]);
}

// END problem 5
*/


/* 
// BEGIN problem 6

var movies = [];
movies[0] = "The Harry Potter Series";
movies[1] = "Shaun of the Dead";
movies[2] = "Spirited Away";
movies[3] = "The Halloween Series";
movies[4] = "Elizabeth";
movies[5] = "X-Men";
movies[6] = "The Incredibles";

for (var index in movies) {
window.console.log(movies[index]);
};

// END problem 6
*/


/*
// BEGIN problem 7

var movies = [];
movies[0] = "The Harry Potter Series";
movies[1] = "Shaun of the Dead";
movies[2] = "Spirited Away";
movies[3] = "The Halloween Series";
movies[4] = "Elizabeth";
movies[5] = "X-Men";
movies[6] = "The Incredibles";

movies.sort();

for (var index in movies) {
window.console.log(movies[index]);
};

// END problem 7
*/

/*
// BEGIN problem 8
var leastFavMovies = ["The Village", "The Lady in the Water", "Fear Dot Com"];

window.console.log(leastFavMovies + "\n \n \n");

window.console.log("Movies I regret watching:" + "\n \n" + leastFavMovies);

// END problem 8
*/


/*
// BEGIN problem 9

var list1 = ["The Harry Potter Series", "The Incredibles"];
var list2 = ["The Halloween Series", "Pride and Prejudice", "The Village"];
var movies = list1.concat(list2);

movies.reverse();
window.console.log(movies);

// END problem 9
*/


/*
// BEGIN problem 10

var movies = ["The Harry Potter Series", "Shaun of the Dead", "The Incredibles"];

window.console.log(movies.slice(-1)[0]);

// END problem 10
*/


/*
// BEGIN problem 11

var movies = ["The Harry Potter Series", "Shaun of the Dead", "The Incredibles"];

window.console.log(movies.slice(0)[0]);

// END problem 11
*/

/*
// BEGIN problem 12

var leastFavMovies = ["The Village", "The Lady in the Water", "Fear Dot Com"];

// Disliked movie index numbers below variables
var displayMovies1 = leastFavMovies.indexOf("The Village");
var displayMovies2 = leastFavMovies.indexOf("The Lady in the Water");
var displayMovies3 = leastFavMovies.indexOf("Fear Dot Com");

// Add movies liked into disliked movie index numbers variables below

// Display disliked movie index and name below
window.console.log(displayMovies1, leastFavMovies.slice(0)[0]);
window.console.log(displayMovies2, leastFavMovies.slice(0)[0]);
window.console.log(displayMovies3, leastFavMovies.slice(0)[0]);

// Simple line break below
window.console.log("\n");

// Replace disliked movies by index and display below
window.console.log(displayMovies1,"The Harry Potter Series");
window.console.log(displayMovies2,"Shaun of the Dead");
window.console.log(displayMovies3,"The Incredibles");
*/

// END problem 12


/*
// BEGIN problem 13

var employee1 = [];
employee1["emplyee id"] = 4235;
employee1["name"] = "Anita Bath";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["currentEmployee"] = true;

var employee2 = [];
employee2["emplyee id"] = 5324;
employee2["name"] = "Alex Blaine Layder";
employee2["title"] = "Tech support";
employee2["department"] = "IT";
employee2["currentEmployee"] = true;

var employee = [employee1, employee2];

window.console.log(employee[1]["name"]);
*/


// END problem 13



// BEGIN problem 14

/*
var employee1 = [];
employee1["emplyee id"] = 4235;
employee1["name"] = "Anita Bath";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["currentEmployee"] = true;

var employee2 = [];
employee2["emplyee id"] = 5324;
employee2["name"] = "Alex Blaine Layder";
employee2["title"] = "Tech support";
employee2["department"] = "IT";
employee2["currentEmployee"] = true;

var employee = [employee1, employee2];

for (var i = 0; i < employee.length; i++) {
window.console.log(employee[i]["name"]);
}
*/

// END problem 14


// BEGIN problem 15

//UNSOLVED

// END problem 15


// BEGIN problem 16

/*
function movieOnly(movies) {
  return length.movies >= 1;
}

var movies = [["Movie1",1],["Movie2",2],["Movie3",3],["Movie4",4],["Movie5",5]];

for (var i = 0; i < movies.length; i++) {
window.console.log(movies[i][0]);
}
*/

// END problem 16


// PRACTICE WITH FUNCTIONS

/*
// BEGIN problem 1

function displayMessage ( oneHere ) {
    window.console.log(oneHere);
}
displayMessage("Hello there stranger.")
*/

// END problem 1


/*
// BEGIN problem 2

function calculate ( oneHere, twoHere ) {
    window.console.log(oneHere % twoHere);
}
calculate( 12, 5 );

// END problem 2
*/


/*
// BEGIN problem 3

var employees = [];
employees[0] = "Zak";
employees[1] = "Jessica";
employees[2] = "Mark";
employees[3] = "Fred";
employees[4] = "Sally";

function showEmployee () {
    for (i = 0; i < employees.length; i++) {
console.log("Employees:" + "\n \n" + employees[0] + "\n" + employees[1] + "\n" + employees[2] + "\n" + employees[3] + "\n" + employees[4]); }
}
showEmployee();

// END problem 3
*/

