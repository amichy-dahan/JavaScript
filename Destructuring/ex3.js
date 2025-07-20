let employeesArr = [
  { name : "Joey" , id: 1 , age: 26},
  { name : "Lily" , id: null , age: 24},
  { name : "Alice" , id: 7 , age: null},
  { name : "Sam" , id: 8 , age: 24},
  { name : "Ray" , id: null , age: null}
  ]

   

  employeesArr.forEach(  a => {
  if (a.id ===null){
        let id = a.id;
        console.log(id ?? a.name)
  }
    
     
  })