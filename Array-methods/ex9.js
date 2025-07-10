let x = [92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81];

let wordCount = x.reduce(function(wordCount, grade) {
        
      if(grade >= 90 && grade<=100){
        word = "A"
        wordCount[word] = wordCount[word] ? wordCount[word]+1 : 1;
        
      } else  if(grade >= 80 && grade<=89){
        word = "B"
        wordCount[word] = wordCount[word] ? wordCount[word]+1 : 1;
       
      } else if(grade>= 70 && grade<=79){
        word = "C"
        wordCount[word] = wordCount[word] ? wordCount[word]+1 : 1;
      
      } else if(grade < 70){
        word = "F"
        wordCount[word] = wordCount[word]  ? wordCount[word]+1 : 1;
    
      }  
        return wordCount;   
  }, {})



console.log(wordCount)

