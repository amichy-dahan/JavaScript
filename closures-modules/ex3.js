const SongsManager = function (){
   const obj = {
    addSong: function addSong (name, x){
      let id = x.slice(x.indexOf("=") +1);
       this.songs[name]= id
       
     },
      getSong: function getSong (name){
      console.log(`https://www.youtube.com/watch?v=${this.songs[name]}`)
     },

     songs :{

     }
   }
    return obj
}


module.exports = {SongsManager}