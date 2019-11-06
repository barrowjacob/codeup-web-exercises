
var latitude = 29.4241;
var longitude = -98.4936;
var currentWeather = $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyToken + "/" + latitude + "," + longitude);



              $('#latLngButton').click(function () {
                  latitude = $('#latty').val();
                  console.log(latitude);
                  longitude = $('#longy').val();
                  currentWeather = $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyToken + "/" + latitude + "," + longitude);
                  newWeather();
              }  );
var newWeather;
currentWeather.done(function(data) {
    var i = 0;
    do {
            var dateObj = JSON.stringify(new Date(data.daily.data[i].time * 1000)).split('').slice(1, 11).join('');
            console.log(dateObj);

            newWeather = function () {
                $('#weatherDisplay').append(
                    "<div class='card bg-dark p-1' id='mainDiv'>" +
                    "<div class='card-title bg-info p-1'>" +
                    "<h3>" + dateObj + "</h3>" +
                    "</div>" +
                    "<div class='card-body bg-light p-1'>" +
                    "<div class='w_icon'></div>" +
                    "<h5>" + data.daily.data[i].summary + " </h5>" +
                    "<h6> High: " + parseInt(data.daily.data[i].temperatureHigh) + "°F / Low: " + parseInt(data.daily.data[i].temperatureLow) + "°F </h6>" +
                    "<h6>Humidity: " + (data.daily.data[i].humidity * 100) + "% </h6>" +
                    "<h6>Wind Speed: " + parseInt(data.daily.data[i].windSpeed) + "<span style='font-size: .8em'>mph</span></h6>" +
                    "<h6>Pressure: " + parseInt(data.daily.data[i].pressure) + "<span style='font-size: .8em'>hPa</span></h6> " +
                    "</div>" +
                    "</div>");
                console.log(data);
            };
            //begin weather icons
            var weatherIcons = [
                {
                    summary: "clear-day",
                    image: '<img src="icons/sunny.png">'
                }, {
                    summary: "clear-night",
                    image: '<img src="icons/quarterMoon.png">'
                }, {
                    summary: "rain",
                    image: '<img src="icons/rain.png">'
                }, {
                    summary: "snow",
                    image: '<img src="icons/snow.png">'
                }, {
                    summary: "sleet",
                    image: '<img src="icons/snow.png">'
                }, {
                    summary: "windy",
                    image: '<img src="icons/windy.png">'
                }, {
                    summary: "fog",
                    image: '<img src="icons/windy.png">'
                }, {
                    summary: "cloudy",
                    image: '<img src="icons/cloudy.png">'
                }, {
                    summary: "partly-cloudy-day",
                    image: '<img src="icons/partly-cloudy.png">'
                }, {
                    summary: "partly-cloudy-night",
                    image: '<img src="icons/cloud-moon.png">'
                }
            ];
            weatherIcons.forEach(function (type) {
                if (data.daily.data[i].icon === type.summary) {
                    $('.w_icon').html(type.image);
                }
            });
            //end weather icons
            i++;

    }
        while (i <= 2);


});