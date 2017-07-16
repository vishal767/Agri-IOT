var API_KEY = "ddefdsy6sga68ssfsysgcsthgcx";
var cel = false;
var wd;

function displayTemp(fTemp, c){
 
  return  " F";
}

function render(wd, cel){
      var commodity = wd.name;
      var modal_num=displayTemp(wd.main.price,cel);
      var high = displayTemp(wd.main.temp_max, cel);
      var low = displayTemp(wd.main.temp_min, cel);



}

$(function(){

  var commodity;

    $.getJSON('http://api.data.gov.in/resource/2.5/commodityprice?units=imperial&lat='
              + loc[0] + '&lon=' + loc[1] + '&APPID=' + API_KEY, function(apiData){
      wd = apiData;

      render(apiData, cel);



    })
  })
})
