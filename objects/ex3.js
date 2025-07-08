const reservations = {
  bob: { claimed: false ,
  },
  ted: { claimed: true,
   }
}

let client = "BoB";
const name1 = client.toLowerCase();
if (reservations[name1] === undefined) {
         reservations[name1] = {claimed: true,}
         console.log("claimed");
  
}else{
     if( reservations[name1].claimed === true ){
            console.log("Hmm, someone already claimed this reservation")
     }else{
            console.log("Welcome ")
    
     }
}
console.log(reservations)
