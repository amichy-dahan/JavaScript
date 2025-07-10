let x = [92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81];

let wordCount = x.reduce(function(wordCount, grade) {
        
      if(grade >= 90 && grade<=100){
        word = "A"
        wordCount[word] +=1;
      } else  if(grade >= 80 && grade<=89){
        word = "B"
        wordCount[word] += 1;
       
      } else if(grade>= 70 && grade<=79){
        word = "C"
        wordCount[word] +=1;
      
      } else if(grade < 70){
        word = "F"
        wordCount[word] += 1;
      }  
        return wordCount;   
  }, {A:0,B:0,C:0,F:0})



console.log(wordCount)

