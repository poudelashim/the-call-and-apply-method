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
