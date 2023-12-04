const menu = {
  _menu: "",
  _price: 0,
  //setter
// type checking to make sure meal accepts strings and price accepts numbers
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      return (this._meal = mealToCheck);
    }
  },
  //setter
// if its a string and number it gets assigned to the _meal or _price property and returns it
  set price(priceToCheck) {
    if (typeof pricetoCheck === "number") {
      return (this._price = priceToCheck);
    }
  },
// getter
  // getter method todaysSpecial that proactively checks if a meal and price have been properly set, before returning the values.
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Meal is ${this._meal} for $${this._price}!`;
    } else {
      return `Meal or price not set correctly!`;
    }
  },
};

menu._meal = "Pizza";
menu._price = 8;
// returns whole object
console.log(menu);
// returns Today's Meal is Pizza for $8! by calling the todaysSpecial method
console.log(menu.todaysSpecial);
