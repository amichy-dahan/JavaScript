const {SongsManager} = require('./ex3');

const songsManager = SongsManager()


songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("how long") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ

 
 
 