// Ticket Business Logic
function Ticket(name, age, time) {
 this.name = name;
 this.age =  age;
 this.time = time;
}

Ticket.prototype.price = function () {
  let agePrice = 0;
  let timePrice = 0;
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

  this.price = agePrice + timePrice;
  return this.price;
  //let total = agePrice + timePrice 
};

Ticket.prototype.checkPremier = function(movie) {
  return ((movie.premier === true) ? this.premier = true : this.premier = false);
}

// Movie Business Logic
function Movie(rating, movie, premier) {
  this.rating = rating;
  this.movie = movie;
  //this.time = [1200, 1430, 1900, 2100];
  this.premier = premier;
}

