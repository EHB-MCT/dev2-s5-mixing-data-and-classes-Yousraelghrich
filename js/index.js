"use strict";

const app = {
	items: [],
	init() {},
	getData() {},
	onSearch() {},
	render(message) {},
};
app.init();

class Joke {
	constructor(category, joke, setup, delivery) {
		this.category = category;
		this.joke = joke;
		this.setup = setup;
		this.delivery = delivery;
	}
}

const jokeRacist = new Joke("racist");
