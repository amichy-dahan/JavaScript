const AutoCompleteTrie = require("./AutoCompleteTrie");

let a = new AutoCompleteTrie();
a.addWord("amihai")
a.addWord("cat")
a.addWord("car")
a.addWord("card")
a.addWord("care")
a.addWord("caresdssd")



// console.log(a.findWord("card"));
// console.log(a.predictWords("car"));

console.log(a.predictWords("c"))