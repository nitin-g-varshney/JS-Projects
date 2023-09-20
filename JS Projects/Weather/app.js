const apiKey = "35a797acf72aa25f4efd4d299998ecf5";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=aligarh";

async function checkWeather(){
    const response= await fetch(apiUrl + `&appid=${apiKey}`)
    var data= await response.json(); 

    console.log(data);
}

checkWeather();