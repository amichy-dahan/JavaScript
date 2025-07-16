


function safeJsonParse(str){

   try {

    let x = JSON.parse(str);
   
   return x;

   }catch {
    console.error("Invalid JSON format")
      
   }
}
console.log(safeJsonParse('{"name": "John"}')); 
// Output: { name: "John" }

safeJsonParse('invalid json')
// Output: "Invalid JSON format"