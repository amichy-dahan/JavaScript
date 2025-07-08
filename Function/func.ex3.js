function checkExists (arr , num) {
    let boolean = false;
    for (const element of arr) {
        if(element === num){
            boolean = true;
        }
    }
    return boolean;
}
console.log(checkExists([1, 2, 3], 1))