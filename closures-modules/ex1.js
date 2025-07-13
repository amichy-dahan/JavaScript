const StringFormatter = function(){
     function capitalizeFirst (){
     } 
     return {

        capitalizeFirst
     }
}


formatter.capitalizeFirst("dorothy") //should return Dorothy
formatter.toSkewerCase("blue box") //should return blue-box

module.exports = {StringFormatter}