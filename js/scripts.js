// Ticket Business Logic
function Ticket(name, age, time) {
 this.name = name;
 this.age =  age;
 this.time = time;
}

Ticket.prototype.price = function () {
  let agePrice = 0;
  let timePrice = 0;
  let premierPrice = 0;
  if (this.age < 13 ) {
    agePrice = 3;
  } else if (this.age > 65) {
    agePrice = 5;
  } else {
    agePrice = 8;
  }
  if (this.time < 1400 && this. time > 1000) {
    timePrice = 5;
  } else if (this. time < 2000 && this.time > 1400) {
    timePrice = 8;
  } else {
    timePrice = 12; 
  }
  if (this.premier === true) {
    premierPrice += 4;
  } 
  this.price = agePrice + timePrice + premierPrice;
  return this.price;
};

Ticket.prototype.checkPremier = function(movie) {
  return ((movie.premier === true) ? this.premier = true : this.premier = false);
}

// Movie Business Logic
function Movie(rating, movie, premier) {
  this.rating = rating;
  this.movie = movie;
  this.premier = premier;
}

// Theater Business Logic
function Theater() {
  this.movies = {};
  this.tickets = {};
}

Theater.prototype.addMovie = function(currentMovie) {
  this.movies[currentMovie.movie] = currentMovie;
};

Theater.prototype.addTicket = function(currentTicket) {
  this.tickets[currentTicket.name] = currentTicket;
};
// Global Variables
let theater = new Theater();
let dune = new Movie("R", "Dune", true);
theater.addMovie(dune);
let spiderman = new Movie("PG-13", "Spiderman", false);
theater.addMovie(spiderman);

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    let name = $("input#customerName").val();
    let age = parseInt($("input#customerAge").val());
    let movieName = $("select#movie").val();
    console.log(movieName);
    let time = parseInt($("select#time").val());
    let newTicket = new Ticket(name, age, time);
    newTicket.checkPremier(newTicket.movie);
    newTicket.price();
    console.log(newTicket);
  });
});