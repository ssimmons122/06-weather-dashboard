// set variables
var owkAPI = "e39446cd1b964186c052e34bedb04020";
var newCity = "";
var oldCity = "";



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