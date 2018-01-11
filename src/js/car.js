const car = {
	color: 'white',
	doors: 4,
	speed: 0,
	defaultSpeed: 60,
	maxSpeed: 100,
	seats: 4,
	passengers: [],
	put() {
		if (this.seats > this.passengers.length) {
			this.passengers.push(2);
		}
	},
	land() {
		this.passengers.shift(2);
	},
	drive(newSpeed) {
		if (this.passengers.length > 0) {
			if (arguments.length === 0) {
				this.speed = this.defaultSpeed;
			} else if (this.maxSpeed < newSpeed) {
				this.speed = this.maxSpeed;
			}
			this.speed = newSpeed;
		} else {
			this.speed = 0;
		}
	}
};

module.exports = car;