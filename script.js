// set variables
var owkAPI = "e39446cd1b964186c052e34bedb04020";
var inputEl = document.querySelector('.input');
var citiesListEl = document.querySelector(".cities-list");
var travelCity = localStorage.getItem('travelCityStore'); //save searched city
var lat = coord.lat;
var lon = coord.lon;

// city search button event listener
searchBtnEl.addEventListener('click', recordCityData);

// current city big cont
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + travelCity + "&units=metric" + owkAPI ;

//5 day weather
var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + travelCity + "&units=metric" + owkAPI;

function recordCityData() {
    localStorage.setItem('travelCityStore', inputEl.value);
}

// Append the search input from localStorage to the cities list
for (var i = 0; i < localStorage.length; i++) {
    $(".cities-list").append("<p>" + localStorage.getItem(localStorage.key(i)) + "</p>");
}

// Current Day Forecast function
$.ajax ({
    url: forecastURL,
    method: "GET"
})
.then(function (response) {

    var dayOne = moment(response.list[0].dt_txt).format("ddd, MMM D");
    // day 1 
    $(".day-one-temperature").text("Temp: " + response.list[0].main.temp + " F");
    $(".day-one-date").html("<h6>" + dayOne + "</h6>");
    $(".day-one-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    $(".day-one-humidity").text("Humidity: " + response.list[0].main.humidity + "%");

    var dayTwo = moment(response.list[8].dt_txt).format("ddd, MMM D");
    // day 2 
    $(".day-two-temperature").text("Temp: " + response.list[8].main.temp + " F");
    $(".day-two-date").html("<h6>" + dayTwo + "</h6>");
    $(".day-two-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[8].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    $(".day-two-humidity").text("Humidity: " + response.list[8].main.humidity + "%");

    var dayThree = moment(response.list[16].dt_txt).format("ddd, MMM D");
    // day 3 
    $(".day-three-temperature").text("Temp: " + response.list[16].main.temp + " F");
    $(".day-three-date").html("<h6>" + dayThree + "</h6>");
    $(".day-three-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[16].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    $(".day-three-humidity").text("Humidity: " + response.list[16].main.humidity + "%");

    var dayFour = moment(response.list[24].dt_txt).format("ddd, MMM D");
    // day 4 
    $(".day-four-temperature").text("Temp: " + response.list[24].main.temp + " F");
    $(".day-four-date").html("<h6>" + dayFour + "</h6>");
    $(".day-four-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[24].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    $(".day-four-humidity").text("Humidity: " + response.list[24].main.humidity + "%");

    var dayFive = moment(response.list[32].dt_txt).format("ddd, MMM D");
    // day 5 
    $(".day-five-temperature").text("Temp: " + response.list[32].main.temp + " F");
    $(".day-five-date").html("<h6>" + dayFive + "</h6>");
    $(".day-five-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[32].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    $(".day-five-humidity").text("Humidity: " + response.list[32].main.humidity + "%");

});
