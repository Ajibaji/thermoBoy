// describe('FizzBuzz', function() {
//
//   var fizzBuzz;
//
//   beforeEach(function() {
//     fizzBuzz = new FizzBuzz();
//   });
//
//   describe('multiples of 3', function() {
//     it('fizzes for 3', function() {
//       expect(fizzBuzz.play(3)).toEqual('Fizz');
//     });
//
//     it('fizzes for 6', function() {
//       expect(fizzBuzz.play(6)).toEqual('Fizz');
//     });
//   });
// });


describe('Thermostat', function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('checks starting temperature value', function() {
    expect(thermostat.currentTemp).toEqual(20);
  });

  it('checks that temperature has increased by one', function() {
    thermostat.increaseTemp();
    expect(thermostat.currentTemp).toEqual(21);
  });

  it('checks that temperature has decreased by one', function() {
    thermostat.decreaseTemp();
    expect(thermostat.currentTemp).toEqual(19);
  });

  it('checks the minimum temperature', function() {
    expect(thermostat.minTemp).toEqual(10);
  });

  it('checks the max temp while Power Saving Mode is on', function () {
    powerSavingMode = true;
    expect(thermostat.maxTemp).toEqual(25);
  });

  it('checks the max temp while Power Saving Mode is off', function () {
    thermostat.switchPSM();
    expect(thermostat.maxTemp).toEqual(32);
  });

  it('checks the currentTemp has been reset back to 20', function() {
    thermostat.increaseTemp();
    thermostat.reset();
    expect(thermostat.currentTemp).toEqual(20);
  });

  it('assigns low-usage to a variable if currentTemp is less than 18', function() {
    thermostat.currentTemp = 17;
    thermostat.calcEnergyUsage();
    expect(thermostat.energyUsage).toEqual('low-usage');
  });

  it('assigns medium-usage to a variable if currentTemp is less than 25 but greater than 18', function() {
    thermostat.currentTemp = 19;
    thermostat.calcEnergyUsage();
    expect(thermostat.energyUsage).toEqual('medium-usage');
  });

  it('assigns high-usage to a variable if currentTemp is greater than 24', function() {
    thermostat.currentTemp = 26;
    thermostat.calcEnergyUsage();
    expect(thermostat.energyUsage).toEqual('high-usage');
  });


});
