const AutoCompleteTrie = require("./AutoCompleteTrie");

let a = new AutoCompleteTrie();
a.addWord("amihai")
a.addWord("cat")



console.log(a.findWord("Cat"));
