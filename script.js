const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book("239", "Ashim Poudel");
lufthansa.book("635", "John Doe");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};
const book = lufthansa.book;

//does not work
// book(23, "Sarah Williams");

//the call method

book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Sara Will");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Airlines",
  iataCode: "LX",
  bookings: [],
};
book.call(swiss, 583, "Ashma Pyakurel");
console.log(swiss);

//the apply method
//apply method is not mostly used in modern js.

const flightData = [586, "Ram Bahadur"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

console.log(
  "--------------------------------BIND METHOD--------------------------------------------"
);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(25, "Ashim Poudel");

const bookEW23 = book.bind(eurowings, 1234);
bookEW23("Ashim POUDEL");
bookEW23("Prithivi Narayan Shah");

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// // lufthansa.buyPlane();
// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
console.log(addVat(23));
console.log(addVat(100));
