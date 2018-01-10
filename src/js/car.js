const car = {
	color: 'white',
	doors: 4,
	speed: 0,
	defaultSpeed: 60,
	maxSpeed: 100,
	seats: 4,
	passengers: [],
	put() {
		(this.passengers.length > this.seats);
	},
	land() {

	},
	drive(newSpeed) {

	},
};

module.exports = car;