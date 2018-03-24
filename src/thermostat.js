
function Thermostat() {
  this.currentTemp = 20;
  this.minTemp = 10;
  this.powerSavingMode = false;
  this.maxTemp = 32;
  this.energyUsage = 'medium-usage';
  this.colour = 'black';
}

Thermostat.prototype.increaseTemp = function() {
  if (this.currentTemp < this.maxTemp) {
    this.currentTemp += 1;
  }
}

Thermostat.prototype.decreaseTemp = function() {
  if (this.currentTemp > this.minTemp) {
    this.currentTemp -= 1;
  }
}

Thermostat.prototype.switchPSM = function() {
  if (this.powerSavingMode === true){
    this.powerSavingMode = false;
    this.maxTemp = 32;
  } else {
      this.powerSavingMode = true;
      this.maxTemp = 25;
  }
  this.lowerToLimit();
}

Thermostat.prototype.lowerToLimit = function() {
  if (this.powerSavingMode === true && this.currentTemp > this.maxTemp) {
    this.currentTemp = this.maxTemp;
  }
}

Thermostat.prototype.reset = function() {
  this.currentTemp = 20;
}

Thermostat.prototype.calcEnergyUsage = function() {
  if (this.currentTemp < 18) {
    this.energyUsage = 'low-usage';
    this.colour = 'green';
  } else if (this.currentTemp > 24) {
    this.energyUsage = 'high-usage';
    this.colour = 'red';
  } else {
    this.energyUsage = 'medium-usage';
    this.colour = 'black';
  }
}
