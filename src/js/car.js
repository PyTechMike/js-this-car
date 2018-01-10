const car = {
	color: 'white',
	doors: 4,
	speed: 0,
	defaultSpeed: 60,
	maxSpeed: 100,
	seats: 4,
	passengers: [],
	put() {
		// if (this.seats > this.passengers.length) {
		this.passengers.push(1);
	},
	land() {

	},
	drive(newSpeed) {

	},
};

module.exports = car;