//https://api.openweathermap.org/data/2.5/weather?q=Luanda&lang=pt_br&appid=353ba8d3c9de3fac8fe2158b1f438bb7
var hora = new Date().getHours()

if (hora < 12) {
    document.body.style.backgroundImage = "url('./src/assets/images/dia.jpg')"
} else if (hora < 18) {
    document.body.style.backgroundImage = "url('./src/assets/images/tarde.jpg')"
} else {
    document.body.style.backgroundImage = "url('./src/assets/images/noite.jpg')"
}