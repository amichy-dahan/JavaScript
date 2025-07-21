const AutoCompleteTrie = require("./AutoCompleteTrie");

let a = new AutoCompleteTrie();
a.addWord("amihai")
a.addWord("cat")
a.addWord("car")
a.addWord("card")
a.addWord("care")



console.log(a.findWord("card"));
a.predictWords("");