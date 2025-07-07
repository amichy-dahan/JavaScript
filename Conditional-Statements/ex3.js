

let temperature = 13;
let weather = "cloudy";

if( weather === "sunny" && temperature > 24){
    console.log("Go to the beach")
}else if (weather === "sunny" && (temperature <= 24  && temperature>=15)){
    console.log("Go for a walk")
}else if (weather === "sunny" && temperature <15){
    console.log("Stay inside and read")
}else if (weather === "rainy"){
    console.log("Watch a movie indoors")
}else if (weather === "cloudy" && temperature >21){
    console.log("Go hiking")
}
else if (weather === "cloudy" && temperature <=21){
    console.log("Visit a museum")
}
