// set variables
//var owkAPI = "e39446cd1b964186c052e34bedb04020";
//var newCity = "";
//var oldCity = "";


$(document).ready(function () {
    //search btn
    $("#search-button").on("click", function () {
      var searchTerm = $("#search-value").val();
      //empty input field.
      $("#search-value").val("");
      weatherFunction(searchTerm);
      weatherForecast(searchTerm);
    });

//save city
function saveCity(text) {
        var listItem = $("<li>").addClass("list-group-item").text(text);
        $(".history").append(listItem);
      }
    
//listener for li on click 
      $(".history").on("click", "li", function () {
        weatherFunction($(this).text());
        weatherForecast($(this).text());
      });

function weatherFunction(searchTerm) {

    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=e39446cd1b964186c052e34bedb04020",
    
    }).then(function (data) {
        //if index of search value does not exist
        if (history.indexOf(searchTerm) === -1) {
          //push searchValue to history array
          history.push(searchTerm);
          //places item pushed into local storage
          localStorage.setItem("history", JSON.stringify(history));
          createRow(searchTerm);
        }


//direct geocoding
http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}


//latitude and longitude
let latitude = response.coord.lat;
let longitude = response.coord.lon;
let uvQueryURL = "api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&APPID=" + owkAPI;


//latitude and longitude ^^^^
http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}

// zip code
http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}