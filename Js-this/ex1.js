const person = {
  hungry: true,

  feed: function () {
    if (this.hungry) {
      console.log('Im no longer hungry!')
    }
  }
}  

person.feed() //should log "I'm no longer hungry"