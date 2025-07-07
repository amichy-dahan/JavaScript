const reservations = {
  Bob: { claimed: false ,
    fname:"Bob",

  },
  Ted: { claimed: true,
    fname: "Ted",

   }
}

let client = "Bob";
const name1 = reservations.Bob;



console.log(name1.claimed);

if (name1 === undefined) {
   console.log("there is nothing under their name")
}else{
     if( name1.claimed === true ){
            console.log("Hmm, someone already claimed this reservation")
     }else{
            console.log("Welcome " + name1.fname)
       
     }
}