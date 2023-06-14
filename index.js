// Write your code here

console.log("hello");

class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

//const bfast = new Breakfast("eggs", "juice") ----> Testing

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}


class Dinner {
    #dessert

    constructor(salad,soup,entree,dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }

}