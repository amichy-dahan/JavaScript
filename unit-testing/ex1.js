class Exercises {

 isLetter(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}
      
// ex1
      isEven(n) {

        if(n === 0){
               return {error: "zero is not option "}
        }else if(this.isLetter(n)){
             return {error: "this a letter"}
        }
        
        else{
            return n % 2 == 0 ? true : false
        }
    }


        
    // ex2   
        removeAtLeastOne(arr) {
            let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
            arr.splice(0, numItemsToRemove)
            console.log(arr)
            return arr
        }
// ex3
          validate(arr) {
            const bool = arr.filter(a => typeof a === "boolean");

            if(bool.length === 0 ){
                return {error: "Need at least one boolean"}
            }else if(arr.some(a => a ===null)) {

                 return "hi"

            }else{
                      let x =0;
                      let y =0;
                      bool.forEach(element => {
                          if(element){
                            x++;
                          }
                          else{
                            y++
                          }
                      });

                      if(x>y){
                        return true;
                      }else{
                        return false;
                      }

            }

        }



    // ex4
            simplify(str) {

                if(str === ""){
                      return {error:" is empty"}
                }else{
                let symbols = ["!", "#", ".", ",", "'"]
                return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
                }
            }

        
  
}
const ex = new Exercises();
ex.removeAtLeastOne([1,3,5,74,2]);



module.exports = Exercises;