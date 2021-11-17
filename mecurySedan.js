//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

import  Vehicle  from "./vehicleBaseClass";

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPasseners = 5;
        this.pasenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fule = 10;
        this.scheduleService = false;
    }
    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }
    loadPassener(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");
            }

        }
    }
}
scheduleService(mileage) {
    if (this.mileage > 30000) {            
        this.scheduleService == true
        return this.scheduleService;                       
     }
}
