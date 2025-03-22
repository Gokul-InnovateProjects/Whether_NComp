const button = document.getElementById("button");
const WeatherContent = document.getElementById("WeatherContent");
const Weather = document.getElementById("Weather");

button.onclick = () => {
  axios
    .get(
"https://freetestapi.com/api/v1/Weathers")
    .then(function (response){
        console.log(response) 
      button.textContent ="NEXT!";
      Weather.textContent ="";
      console.log(response.data[count].country);
      WeatherContent.textContent = response.data[count].country;
      setTimeout(function (){
      }, 1500);
    })
    .catch(function (error) {
      console.log(error);
    });
};