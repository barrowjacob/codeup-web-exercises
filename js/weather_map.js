$(document).ready(function () {
//original ajax get
    var currentWeather = $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyToken + "/" + 29.4241 + "," + -98.4936);
    var i = 0;

    //create function build divs and input data from darksky
    var newNew = function () {
        currentWeather.done(function (data) {
            i = 0;
            while (i <= 2) {
                if (i <= 0) {
                    var dateObj = JSON.stringify(new Date(data.daily.data[i].time * 1000)).split('').slice(1, 11).join('');

                    $('#weatherDisplay').append(
                        "<div class='card bg-dark p-1' id='mainDiv'>" +
                        "<div class='card-title bg-info p-1'>" +
                        "<h3>" + dateObj + "</h3>" +
                        "</div>" +
                        "<div class='card-body bg-light p-1'>" +
                        "<div class='w_icon'></div>" +
                        "<h5>" + data.currently.summary + " </h5>" +
                        "<h6> " + data.currently.apparentTemperature + "°F </h6>" +
                        "<h6>Humidity: " + Math.round(data.currently.humidity * 100) + "% </h6>" +
                        "<h6>Wind Speed: " + Math.round(data.currently.windSpeed) + "<span style='font-size: .8em'>mph</span></h6>" +
                        "<h6>Pressure: " + Math.round(data.currently.pressure) + "<span style='font-size: .8em'>hPa</span></h6> " +
                        "</div>" +
                        "</div>");
                    console.log(data);
                    i++;
                } else {
                    var dateObj = JSON.stringify(new Date(data.daily.data[i].time * 1000)).split('').slice(1, 11).join('');
                    console.log(dateObj);
                    $('#weatherDisplay').append(
                        "<div   class='card bg-dark p-1' id='mainDiv'>" +
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
                    i++;
                    weatherIcons.forEach(function (type) {
                        if (data.currently.icon === type.summary || data.daily.data[i].icon === type.summary) {
                            $('.w_icon').html(type.image);
                        }
                    });
                }
            };
        });
    };
    //begin weather icons arrra
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
    //end weather icons
    newNew();


    $('#latLngButton').click(function () {
        $('#weatherDisplay').html("");
        var latitude = $('#latty').val();
        console.log(latitude);
        var longitude = $('#longy').val();
        console.log(longitude);
        currentWeather = $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyToken + "/" + latitude + "," + longitude);
        newNew();




    });
    // begin mapbox functionality

    //create a mapbox
        mapboxgl.accessToken = mapboxToken;
        var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            center: [-98.4936, 29.4241], // starting position [lng, lat]
            zoom: 9 // starting zoom


        });

        // marker options
    var markerOptions = {
        color: "#ff0000",
        draggable: true
    };
        var marker = new mapboxgl.Marker(markerOptions)
            .setLngLat([-98.4936, 29.4241])
            .addTo(map);



});
