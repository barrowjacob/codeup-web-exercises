$(document).ready(function () {

//*******************************
//          VARIABLES
//*******************************
    var currentWeather = $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyToken + "/" + 29.4241 + "," + -98.4936);
    var latLng;
    var i = 0;
    var latitude;
    var longitude;
    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.4936, 29.4241],
        zoom: 9
    });
    var markerOptions = {
        color: "#ff0000",
        draggable: true
    };
    var marker = new mapboxgl.Marker(markerOptions)
        .setLngLat([-98.4936, 29.4241])
        .addTo(map);
    var weatherIcons = [
        {
            summary: "clear-day",
            image: '<img src="icons/sunny.png" alt="weather icon">'
        }, {
            summary: "clear-night",
            image: '<img src="icons/quarterMoon.png" alt="weather icon">'
        }, {
            summary: "rain",
            image: '<img src="icons/rain.png" alt="weather icon">'
        }, {
            summary: "snow",
            image: '<img src="icons/snow.png" alt="weather icon">'
        }, {
            summary: "sleet",
            image: '<img src="icons/snow.png" alt="weather icon">'
        }, {
            summary: "windy",
            image: '<img src="icons/windy.png" alt="weather icon">'
        }, {
            summary: "fog",
            image: '<img src="icons/windy.png" alt="weather icon">'
        }, {
            summary: "cloudy",
            image: '<img src="icons/cloudy.png" alt="weather icon">'
        }, {
            summary: "partly-cloudy-day",
            image: '<img src="icons/partly-cloudy.png" alt="weather icon">'
        }, {
            summary: "partly-cloudy-night",
            image: '<img src="icons/partly-cloudy-night.png" alt="weather icon">'
        }
    ];

//*******************************
//  BUILD DIVS WITH DARKSKY
//*******************************

    var newNew = function () {
        currentWeather.done(function (data) {
            $('.imageClass').hide();
            i = 0;
            while (i <= 2) {

    //****************************************
    //  BUILD FIRST DIV WITH .CURRENTLY DATA
    //****************************************
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
                        "<h6> " + Math.round(data.currently.apparentTemperature) + "°F </h6>" +
                        "<h6>Humidity: " + Math.round(data.currently.humidity * 100) + "% </h6>" +
                        "<h6>Wind Speed: " + Math.round(data.currently.windSpeed) + "<span style='font-size: .8em'>mph</span></h6>" +
                        "<h6>Pressure: " + Math.round(data.currently.pressure) + "<span style='font-size: .8em'>hPa</span></h6> " +
                        "</div>" +
                        "</div>");
                    console.log(data);
                    i++;


    //*****************************************
    //  BUILD REMAINING DIVS WITH .DAILY DATA
    //*****************************************

                } else {
                    dateObj = JSON.stringify(new Date(data.daily.data[i].time * 1000)).split('').slice(1, 11).join('');
                    console.log(dateObj);
                    $('#weatherDisplay').append(
                        "<div class='card bg-dark p-1' id='otherDivs'>" +
                        "<div class='card-title bg-info p-1'>" +
                        "<h3>" + dateObj + "</h3>" +
                        "</div>" +
                        "<div class='card-body bg-light p-1'>" +
                        "<div class='w_icon'></div>" +
                        "<h5>" + data.daily.data[i].summary + " </h5>" +
                        "<h6> High: " + Math.round(data.daily.data[i].temperatureHigh) + "°F / Low: " + parseInt(data.daily.data[i].temperatureLow) + "°F </h6>" +
                        "<h6>Humidity: " + Math.round(data.daily.data[i].humidity * 100) + "% </h6>" +
                        "<h6>Wind Speed: " + Math.round(data.daily.data[i].windSpeed) + "<span style='font-size: .8em'>mph</span></h6>" +
                        "<h6>Pressure: " + Math.round(data.daily.data[i].pressure) + "<span style='font-size: .8em'>hPa</span></h6> " +
                        "</div>" +
                        "</div>");
                    console.log(data);
                    i++;

                }
                    //************************************
                    // LOOP THROUGH ARRAY ICON CONDITIONAL
                    //************************************

                weatherIcons.forEach(function (type) {
                    if (data.daily.data[0] === type.summary) {
                        $('.w_icon').html(type.image);
                    }
                    else {
                        console.log('nope');
                    }
                });
                weatherIcons.forEach(function (type) {
                    if (data.daily.data[1].icon === type.summary) {
                        $('.w_icon').html(type.image);
                    }
                    else {
                        console.log('nope');
                    }
                });
                weatherIcons.forEach(function (type) {
                    if (data.daily.data[2].icon === type.summary) {
                        $('.w_icon').html(type.image);
                    }
                    else {
                        console.log('nope');
                    }
                });
            };

        });

    };
    newNew();



    $('#latLngButton').click(function () {
        $('#weatherDisplay').html("");
        latitude = $('#latty').val();
        console.log(latitude);
        longitude = $('#longy').val();
        console.log(longitude);
        currentWeather = $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyToken + "/" + latitude + "," + longitude);
        newNew();
    });

//******************************
//  SET MARKER LATLONG DRAGEND
//******************************
    function onDragEnd() {
            latLng = marker.getLngLat();
                $('#weatherDisplay').html("");
            latitude = latLng.lat;
            longitude = latLng.lng;
            currentWeather = $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyToken + "/" + latitude + "," + longitude);
            newNew();
        }
    marker.on('dragend', onDragEnd);

//*******************************
//  SET MARKER TYPED LOCATION
//*******************************

    function typedLocation() {
        marker.on('dragend', onDragEnd);
        var search;
        var token;

        $('#searchButton').click(function () {
            onDragEnd();
            marker.remove();
            search = $('#searchInput').val();
            token = mapboxToken;
            geocode(search, mapboxToken).then(function (result) {
                map.flyTo({
                    center: result,
                    zoom: 14,
                    speed: 0.2
                });
                marker.setLngLat(result);
                marker.addTo(map);

            });
        })
    }
    typedLocation();
    // $('.card').mouseenter(function() {
    //     $(this).animate({
    //         width: "800px",
    //     })
    // })

});
