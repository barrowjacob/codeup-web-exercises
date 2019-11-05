





var currentWeather = $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyToken + "/29.4241,-98.4936");

currentWeather.done(function(data) {
    console.log(data);
        $('#weatherDisplay').append(
            "<div class='card bg-dark p-1'>" +
                "<div class='card-title bg-info p-1'>" +
                "<h3>Today's Weather</h3>" +
                "</div>" +
                "<div class='card-body bg-light p-1'> " + data.daily.data[0].temperatureHigh +" / " + data.daily.data[0].temperatureLow +
                    "<div>" + data.daily.data[0].icon + " </div>" +
                     "<h6>Humidity " + data.daily.data[0].humidity + " </h6>" +
                     "<h6>Wind Speed " + data.daily.data[0].windSpeed  + " </h6>" +
                     "<h6>Pressure " + data.daily.data[0].pressure + " </h6>" +
                     // add the date here
                "</div>" +
            "</div>");
    $('#weatherDisplay').append(
        "<div class='card bg-dark p-1'>" +
            "<div class='card-title bg-info p-1'>" +
            "<h3>Tomorrow's Weather</h3>" +
            "</div>" +
            "<div class='card-body bg-light p-1'> " + data.daily.data[1].temperatureHigh +" / " + data.daily.data[1].temperatureLow +
                "<div>"  + data.daily.data[1].icon + "</div>" +
                "<h6>Humidity " + data.daily.data[1].humidity + "</h6>" +
                "<h6>Wind Speed " + data.daily.data[1].windSpeed  + "</h6>" +
                "<h6>Pressure " + data.daily.data[1].pressure + "</h6>" +
                // add the date here
            "</div>" +
        "</div>");
    $('#weatherDisplay').append(
        "<div class='card bg-dark p-1'>" +
            "<div class='card-title bg-info p-1'>" +
            "<h3>Day After Tomorrow's Weather</h3>" +
            "</div>" +
                "<div class='card-body bg-light p-1'> " + data.daily.data[2].temperatureHigh +" / " + data.daily.data[2].temperatureLow +
                "<div>"  + data.daily.data[2].icon + "</div>" +
                "<h6>Humidity " + data.daily.data[2].humidity + "</h6>" +
                "<h6>Wind Speed " + data.daily.data[2].windSpeed  + "</h6>" +
                "<h6>Pressure " + data.daily.data[2].pressure + "</h6>" +
                // add the date here
            "</div>" +
        "</div>")
    });



    var weatherIcons = [
        {
            summary: "cloudy",
            image: 'img/logo.jpg'
        }, {
            summary: "partly-cloudy",
            image: 'img/map.jpg'
        }
    ];


