let BSNode = require("./BSnode");

let root = null;

const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]
let Bstree = new BSNode() 
letters.forEach(l => {
    if(!root){
   root = new BSNode(l);
    }else{
        root.insertNode(l);
    }

})

console.log(root.findCommonParent("B" ,"I"));
console.log(root.findCommonParent("B", "I") )//should return "H"
console.log(root.findCommonParent("B", "G") )//should return "E"
console.log(root.findCommonParent("B", "L") )//should return "J"
console.log(root.findCommonParent("L", "Y") )//should return "R"
console.log(root.findCommonParent("E", "H")) //should return "J"

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied) 
    
console.log(nodeWithOneChild)
let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5)