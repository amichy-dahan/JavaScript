const findDuplicates = function (ages) {
    ages.sort((a,b) => a-b);

    for (let i =1; i < ages.length; i++) {
      
        if(ages[i-1] ==ages[i]){
            console.log(ages[i])
        } 
    }
}



findDuplicates([1,2,4,5,5,6,6])