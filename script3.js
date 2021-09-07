var weather =[];
var x = 273.15;
function AjaxCall(city){
    var key="e21ac76ebbeaafcfc199a338e595b0ac"
    var url=`https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&appid=${key}`
    var http = new XMLHttpRequest();
    http.open("GET",url);
    http.send()
    http.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            console.log(JSON.parse(this.response));
            weather = JSON.parse(this.response)

        //document.getElementById("box").innerHTML =weather.main.temp_max;
        //document.getElementById("box").innerHTML =weather.sys.country;
        document.getElementById("box").innerHTML =`<h3>${weather.name}</h3>
        <h2>${Math.round(weather.main.temp- x)}&deg;c</h2>
        <h5>max-${Math.round(weather.main.temp_max - x)}&deg;c / min-${Math.round(weather.main.temp_min - x)}&deg;c</h5>
        <p>weather description :${weather.weather[0].description}</p>`;
        }
    }
}
var data1 =[]
function AjaxCall1(country){
var business = "own";
var key = "45fb8d1e6ab94c37b0f23afffb884a69";
var url = `https://newsapi.org/v2/top-headlines?country=
${country}&category=${business}&apiKey=${key}`;
var http = new XMLHttpRequest();
http.open("GET",url);
http.send()
http.onreadystatechange = function(){

    if(this.readyState == 4 && this.status ==200){
        console.log(JSON.parse(this.response));
        news = JSON.parse(this.response)

        //document.getElementById("").innerhtml = ``
    }
}
}