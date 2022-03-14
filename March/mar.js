
const API = "967ea1389e64323c6035f319c4268771";

const icon= document.getElementById('icon');
const haze = document.getElementById('haze');
const inputtext= document.getElementById('inputtext');
const name_city = document.getElementById('nameCity');
const description = document.getElementById('description');
const temp = document.getElementById('temp');
const wind = document.getElementById('wind');


const convert_fn =function(res){
    return res.json();
}

const handle_data= function(original_data){
   
    name_city.innerHTML= original_data.name;
    temp.innerHTML = "Temp. is "+original_data.main.temp+"&degC" ;
    description.innerHTML = "you will see "+original_data.weather[0].description;
    haze.innerHTML = "Humidity feels like "+original_data.main.humidity+" %";
    wind.innerHTML = "Wind is flowing at "+original_data.wind.speed+" m/s"
    icon.src="http://openweathermap.org/img/wn/"+original_data.weather[0].icon+"@2x.png";
    name_city.style.color="#7e437a";
    name_city.style.fontFamily="cursive";
    name_city.style.fontSize="70px";
    temp.style.color="#7e437a";
    temp.style.fontSize = "35px";
    temp.style.fontStyle = "italic";
    haze.style.color="#7e437a";
    haze.style.fontSize = "32px";
    haze.style.fontStyle = "italic";
    description.style.color="#7e437a";
    description.style.fontSize = "32px";
    description.style.fontStyle = "italic";
    wind.style.color="#7e437a";
    wind.style.fontSize = "32px";
    wind.style.fontStyle = "italic";



}

const show_data = function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputtext.value}&units=metric&appid=${API}`).then(convert_fn).then(handle_data);

}

/*............ */

const handle1_data= function(original_data){
   
    name_city.innerHTML= original_data.name;
    temp.innerHTML = "Temp. is "+original_data.main.temp+"&degC" ;
    description.innerHTML = "you will see "+original_data.weather[0].description;
    haze.innerHTML = "Humidity feels like "+original_data.main.humidity+" %";
    wind.innerHTML = "Wind is flowing at "+original_data.wind.speed+" m/s"

    icon.src="http://openweathermap.org/img/wn/"+original_data.weather[0].icon+"@2x.png";
    name_city.style.color="#7e437a";
    name_city.style.fontFamily="cursive";
    name_city.style.fontSize="70px";
    temp.style.color="#7e437a";
    temp.style.fontSize = "35px";
    temp.style.fontStyle = "italic";
    haze.style.color="#7e437a";
    haze.style.fontSize = "32px";
    haze.style.fontStyle = "italic";
    description.style.color="#7e437a";
    description.style.fontSize = "32px";
    description.style.fontStyle = "italic";
    wind.style.color="#7e437a";
    wind.style.fontSize = "32px";
    wind.style.fontStyle = "italic";


}
fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${API}`).then(convert_fn).then(handle1_data);

/*............ */


