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
        <h5>max-${Math.ceil(weather.main.temp_max - x)}&deg;c / min-${Math.floor(weather.main.temp_min - x)}&deg;c</h5>
        <p>weather description :${weather.weather[0].description}</p>`;
        }
    }
}
function AjaxCall1(country){
var business = "business";
var key = "45fb8d1e6ab94c37b0f23afffb884a69";
var url = `https://newsapi.org/v2/top-headlines?country=
${country}&category=${business}&apiKey=${key}`;
var http = new XMLHttpRequest();
http.open("GET",url);
http.send()
http.onreadystatechange = function(){

    if(this.readyState == 4 && this.status ==200){
        console.log(JSON.parse(this.response));
        var result = JSON.parse(this.response)
        BindNews(result.articles)
    }
}
}

function BindNews(news){
    var temp = ``
    news.forEach((n,i) => {
       temp +=`<div id="newsbox">`
       temp += `<div id="news-title">Title:${n.title==null?'No title':n.title}</div>`
       temp += `<div id="news-author">Author:${n.author==null?'No author':n.author}</div>`
       temp += `<div id="news-content">Content:${n.content==null?'No content':n.content}</div>`
       temp += `<div id="news-description">Description:${n.description==null?'No description':n.description}</div></div>`
       temp += `<div id="news-img"><img src="${n.urlToImage}"/></div></div>`
    });
    document.getElementById("news1").innerHTML = temp;
}