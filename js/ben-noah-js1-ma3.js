// Module Assignment 3
// Level 1

// Question 1

// Convert the function below to an arrow function:

/*function(a, b) {
    return a - b;
}*/

(a, b) => a - b;


// Question 2
// Refer: lesson 2 / 4

// Make a call to the URL below, 
//pass the JSON it returns to a function 
//and inside that function loop through the results and log each game's name.
//In the catch method of your code, redirect to error.html if there is an error.
//https://api.rawg.io/api/games?genres=sports



// Make a call to the URL below, 
    const baseUrl = "https://api.rawg.io/api/games?genres=sports";
//pass the JSON it returns to a function 
fetch(baseUrl)
.then(function(response) {
    return response.json();
})
.then(function (json) {
    loadGames(json);
})
.catch(function(error) {
    console.dir(error);
});

//and inside that function loop through the results and log each game's name.

function loadGames(json){
    const sportsGame = json.results;

    for(let i = 0; i < sportsGame.length; i++){
        console.log(sportsGame[i].name);
    };
}

// question 3

// Refer: lesson 3
// Replace the word cats
// with the word giraffes in the following sentence:

const genreHeading = document.querySelector("h2");
const formattedGenres = genreHeading.innerHTML.replace (/cats/g, "giraffes");
genreHeading.innerHTML = formattedGenres;

// question 4
// Refer: lesson 4

// Given the URL below, write code that checks if there is a userId parameter 
// in the query string.

// If there is no userID parameter, 
// redirect the browser to third.html.
// If there is a userID parameter and its value is less than 10, 
// redirect to first.html.
// If there is a userID parameter and its value is 10 or greater,
// redirect to second.html.
// https://my.site.com?userId=7


// Given the URL below, 
// write code that checks if there is a userId parameter 
// Not sure
/*
const queryString = document.location.search;

const params = new URLSearchParams(queryString);
console.log(params)

//If there is no userID parameter, redirect the browser to third.html.

if (!params.has("userId")) {
  document.location.href="third.html";
// If there is a userID parameter and its value is less than 10, redirect to first.html.
} else if (params.get("userId")< 10) {
    document.location.href="first.html";
//  If there is a userID parameter and its value is 10 or greater,redirect to second.html.
} else {
    document.location.href="second.html";
}*/

// question 5
// ref lesson 4
// Write code that removes the button, and only the button, 
// from its parent element in the HTML below:

// <div class="container">
 //<p>Lorem ipsum dolor</p>
   // <button class="btn">Click me</button>
//</div>


const button = document.querySelector(".btn");
// Write code that removes the button, and only the button, 
// from its parent element in the HTML below:
button.parentNode.removeChild(button);

// question 6 
// Refer: lesson 4
// Create an li element with a text value 
// of Parrots and a class of parrots.
// Add the new item as the second item in the ul below 
// (add it after Cows).


// Create an li element with a text value 
const li = document.createElement("li");
// Create an li element with a text value of Parrots
// and a class of parrots.



























































