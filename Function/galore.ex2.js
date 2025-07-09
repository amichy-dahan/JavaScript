const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}


let x =story.split(",").join(" ")
x =x.split(".").join(" ")
x = x.toLowerCase();
x= x.split(" ");

obj = {};
  
for (let index = 0; index < x.length; index++) {
      
    if(obj[x[index]]){
       obj[x[index]]++;
    }else{
        obj[x[index]]=1; 
    }
       
}

console.log(obj)