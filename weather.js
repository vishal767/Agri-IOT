var API_KEY = "cc7e26cda7b9ae0d08bbad00a5f2cdbf";
var cel = false;
var wd;

function displayTemp(fTemp, c){
  if(c) return Math.round((fTemp - 32)*(5/9)) + " C";
  return Math.round(fTemp) + " F";
}

function render(wd, cel){
      var currentLocation = wd.name;
      var currentWeather = wd.weather[0].description;
      var currentTemp = displayTemp(wd.main.temp, cel);
      var high = displayTemp(wd.main.temp_max, cel);
      var low = displayTemp(wd.main.temp_min, cel);



}

$(function(){

  var loc;
  $.getJSON('http://ipinfo.io', function(d){
    loc = d.loc.split(",");
    console.log(loc);

    $.getJSON('http://api.openweathermap.org/data/2.5/weather?units=imperial&lat='
              + loc[0] + '&lon=' + loc[1] + '&APPID=' + API_KEY, function(apiData){
      wd = apiData;

      render(apiData, cel);



    })
  })
})
