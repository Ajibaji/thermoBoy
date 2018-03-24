$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  updateEfficiency();

    $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=115502d1a16be514f9f8abc5b6bfd3c0&units=metric', function(data) {
      var info = data.main.temp;
      var sumary = data.weather[0].icon;
      info = (Math.round(info).toString()) + "°C";
      sumary = 'http://openweathermap.org/img/w/' + sumary + '.png';
      $('#temperature').text(info);
      //$('#weatherWidget').text(sumary);
      setImageSource(sumary);
    })

    $('#increaseTemp').click(function() {
      thermostat.increaseTemp();
      updateTemperature();
      updateEfficiency();
    });

    $('#decreaseTemp').click(function() {
      thermostat.decreaseTemp();
      updateTemperature();
      updateEfficiency();
    });

    $('#reset').click(function() {
      thermostat.reset();
      updateTemperature();
      updateEfficiency();
    });

    $('#psmButton').click(function() {
      thermostat.switchPSM();
      if (thermostat.powerSavingMode === true) {
        $('#PSM').text('PSM');
      } else {
        $('#PSM').text('');
      }
      updateTemperature();
      updateEfficiency();
    })

    function updateEfficiency() {
      thermostat.calcEnergyUsage();
      if (thermostat.energyUsage === 'low-usage') {
        $('#efficiency').text('low');
      } else if (thermostat.energyUsage === 'medium-usage') {
        $('#efficiency').text('medium');
      } else {
        $('#efficiency').text('high');
      }
    };

    function setImageSource(imageSrc) {
      $('#weatherWidget').attr('src', imageSrc);
    }

    function updateTemperature() {
      $('#currentTemp').text(thermostat.currentTemp + '°');
    };
  });
