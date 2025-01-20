/*
Movie Management System
	Array Object: Create an array movies to store objects with properties: title, genre, isAvailable, and rating.
Functions:
	addMovie(title, genre, rating): Add a new movie to the collection with isAvailable defaulting to true.
	rentMovie(title): Mark the movie as unavailable by setting isAvailable to false.
	returnMovie(title): Mark the movie as available by setting isAvailable to true.
	listAvailableMovies(): List all movies with isAvailable as true.
	lilterMoviesByGenre(genre): List all movies of a specific genre.
*/

const movies = [];
function addMovie(title, genre, rating) {
  const movie = { title: title, genre, rating, isAvailable: true };
  movies.push(movie);
  console.log("Added movies: " + title);
}
function rentMovie(title) {
  const movie = movies.find((movie) => movie.title === title);
  if (movie) {
    movie.isAvailable = false;
  } else {
    console.log("Movie not available: " + title);
  }
}
function returnMovie(title) {
  const movie = movies.find((movie) => movie.title === title);
  if (movie) {
    movie.isAvailable = true;
  } else {
    console.log("Movie not rented: " + title);
  }
}
function listAvailableMovies() {
  const availableMovies = movies.filter((movie) => movie.isAvailable === true);
  if(availableMovies.length > 0){
	  console.log(availableMovies);
  }else{
	console.log("No movies at the moment")
  }
}
function lilterMoviesByGenre(genre) {
	const availableMovies = movies.filter((movie) => movie.genre === genre && movie.isAvailable == true);
	if(availableMovies.length > 0){
		console.log(availableMovies);
	}else{
	  console.log("No movies genre at the moment")
	}
}

addMovie("GOAT", "Action", "5")
addMovie("LION", "Romance", "3")
addMovie("ROAST", "Drama", "4")
addMovie("Possible", "Action", "5")
listAvailableMovies();
console.log("-------")
rentMovie("GOAT");
rentMovie("ROAST");
listAvailableMovies();
console.log("-------")
returnMovie("koushik")
listAvailableMovies();
returnMovie("ROAST");
console.log("-------")
listAvailableMovies();
console.log("-------")
lilterMoviesByGenre("Action")
// listAvailableMovies();



