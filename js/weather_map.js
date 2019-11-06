





var currentWeather = $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyToken + "/29.4241,-98.4936");

currentWeather.done(function(data) {
    var i = 0;
    do {
        console.log(data);
        $('#weatherDisplay').append(
            "<div class='card bg-dark p-1'>" +
                "<div class='card-title bg-info p-1'>" +
                "<h3> Weather</h3>" +
                "</div>" +
                "<div class='card-body bg-light p-1'> " + data.daily.data[i].temperatureHigh + " / " + data.daily.data[0].temperatureLow +
                    "<div class='w_icon'></div>" +
                    "<h6>Humidity " + data.daily.data[i].humidity + " </h6>" +
                    "<h6>Wind Speed " + data.daily.data[i].windSpeed + " </h6>" +
                    "<h6>Pressure " + data.daily.data[i].pressure + " </h6>" +
                // add the date here
                "</div>" +
            "</div>");

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
            image: '<img src="icons/cloud-moon.svg">'
        }
    ];
    weatherIcons.forEach(function(type){
        if (data.daily.data[i].icon === type.summary) {
            $('.w_icon').html(type.image);
        }
    });
    //end weather icons
        i++;
    } while (i <= 2);
});

