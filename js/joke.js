"use strict";

class Joke {
	constructor(category, joke, setup, delivery) {
		this.category = category;
		this.joke = joke;
		this.setup = setup;
		this.delivery = delivery;
	}
}

const jokeRacist = new Joke("racist");
