let calauletor = {
add: function(x,y) {
    return x+y

} ,
subtract:function(x,y) {
  return x-y
}

}

const result1 = calauletor.add(20,1);
const result2 = calauletor.subtract(30, 9);

console.log(calauletor.add(result1, result2)) //should print 42