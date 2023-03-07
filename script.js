// set variables
var owkAPI = "e39446cd1b964186c052e34bedb04020";
var newCity = "";
var oldCity = "";


// New city search button event listener
$('#search-button').on("click", (event) => {
    event.preventDefault();
    newCity = $('#search-city').val();
    getCurrentConditions(event);
    });


var getCurrentConditions = (event) => {
        // searched city
        let city = $('#search-city').val();
        currentCity= $('#search-city').val();
        // Set    queryURL to fetch from API using weather search
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=" + owmAPI;
        fetch(queryURL)
        //.then(handleErrors)
        .then((response) => {
            return response.json();
        })
    
    .then((response) => {
        // Save city to local storage
        saveCity(city);
        $('#search-error').text("");
        // Create icon for the current weather using Open Weather Maps
        let currentWeatherIcon="https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        // Offset UTC timezone - using moment.js
        let currentTimeUTC = response.dt;
        let currentTimeZoneOffset = response.timezone;
        let currentTimeZoneOffsetHours = currentTimeZoneOffset / 60 / 60;
        let currentMoment = moment.unix(currentTimeUTC).utc().utcOffset(currentTimeZoneOffsetHours);
        // Render cities list
        renderCities();
        // Obtain the 5day forecast for the searched city
        getFiveDayForecast(event);
        // Set the header text to the found city name
        $('#header-text').text(response.name);
        // HTML for the results of search
        let currentWeatherHTML = `
        <h3>${response.name} ${currentMoment.format("(MM/DD/YY)")}<img src="${currentWeatherIcon}"></h3>
        <ul class="list-unstyled">
            <li>Temperature: ${response.main.temp}&#8457;</li>
            <li>Humidity: ${response.main.humidity}%</li>
            <li>Wind: ${response.wind.speed} mph</li>
            <li id="uvIndex">UV Index:</li>
        </ul>`;
    // Append the results to the DOM
    $('#current-weather').html(currentWeatherHTML);
    // Get the latitude and longitude for the UV search from Open Weather Maps API
    let latitude = response.coord.lat;
    let longitude = response.coord.lon;
    let uvQueryURL = "api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&APPID=" + owkAPI;
    // API solution for Cross-origin resource sharing (CORS) error: https://cors-anywhere.herokuapp.com/
    uvQueryURL = "https://cors-anywhere.herokuapp.com/" + uvQueryURL;
   
    });
}


//list of searched cities
var renderCities = () => {
    $('#city-results').empty();
    // If localStorage is empty
    if (localStorage.length===0){
        if (oldCity){
            $('#search-city').attr("value", oldCity);
        } else {
            $('#search-city').attr("value", "Columbus");
        }
    } else {
        // Build key of last city written to localStorage
        let lastCityKey="cities"+(localStorage.length-1);
        oldCity=localStorage.getItem(lastCityKey);
        // Set search input to last city searched
        $('#search-city').attr("value", lastCity);
        // Append stored cities to page
        for (let i = 0; i < localStorage.length; i++) {
            let city = localStorage.getItem("cities" + i);
            let cityEl;
            // Set to oldCity if newCIty not set
            if (newCity===""){
                newCity=oldCity;
            }
            // Set button class to active for currentCity
            if (city === newCity) {
                cityEl = `<button type="button" class="list-group-item list-group-item-action active">${city}</button></li>`;
            } else {
                cityEl = `<button type="button" class="list-group-item list-group-item-action">${city}</button></li>`;
            } 
            // Append city to page
            $('#city-results').prepend(cityEl);
        }
    }}

//direct geocoding
http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

//latitude and longitude ^^^^
//http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}

// zip code
//http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}