// 1.-------------------------------------

// function Car(model, speed) {
//     this.model = model;
//     this.currentSpeed = speed;
// }
//
// function EV(model, speed, charge) {
//     Car.call(this, model, speed)
//     this.charge = charge;
// }
//
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;
//
// EV.prototype.chargeBattery = function (chargeTo) {
//     this.charge = chargeTo;
//     console.log(`Заряд батареи равен ${this.charge}%`);
// }
//
// EV.prototype.accelerate = function () {
//     this.currentSpeed += 20;
//     this.charge -= 1;
//     console.log(`${this.model} едет со скоростью ${this.currentSpeed}км/ч, заряд составляет ${this.charge}%`);
// }
//
// EV.prototype.brake = function () {
//     this.currentSpeed -= 10;
//     console.log(`${this.model} едет со скоростью ${this.currentSpeed}км/ч, заряд составляет ${this.charge}%`);
// }
//
// const ev = new EV('Tesla', 120, 23);
// ev.chargeBattery(90);
// ev.accelerate();
// ev.brake();
// console.log(ev);

class CarCl {
    constructor(model, speed) {
        this.model = model;
        this.currentSpeed = speed;
    }
}

class EV extends CarCl {
    constructor(model, speed, charge) {
        super(model, speed);
        this.charge = charge;
    }

    showInfoCar() {
        console.log(`${this.model} едет со скоростью ${this.currentSpeed}км/ч, заряд составляет ${this.charge}%`);
    }

    chargeBattery(chargeTo) {
        this.charge = chargeTo;
        return this;
    }

    accelerate() {
        this.currentSpeed += 20;
        this.charge -= 1;
        return this;
    }

    brake() {
        this.currentSpeed -= 10;
        return this;
    }
}

const ev = new EV('Rivian', 120, 23);
ev.chargeBattery(90).accelerate().accelerate().brake().showInfoCar();
