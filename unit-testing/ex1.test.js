const Exercises = require('./ex1');
const Ex = new Exercises()




test("//should return true if n is even, false otherwise", () => {
    
   let sum = Ex.isEven(6)
    expect(sum).toBeTruthy();
     sum = Ex.isEven(0)
    expect(sum).toEqual({error:"zero is not option "});
    sum = Ex.isEven("d")
    expect(sum).toEqual({error:"this a letter"});
})

test("//should remove at least one element from the array `arr`", ()=> {
    let arr = Ex.removeAtLeastOne([1,3,6,98,4]);
    expect(arr.length).toBeLessThan(5);
});


test( "should return a clean string without these symbols: !, #, ., ,, ' ", ()=> {
    let str = Ex.simplify("dfdfdsd!")
    expect(str).toBe("dfdfdsd");
     str = Ex.simplify("")
    expect(str).toEqual({error:" is empty"});
});


test( "should return a false or true or error", ()=> {
    let x = Ex.validate([])
    expect(x).toEqual({error: "Need at least one boolean"}); 
     x = Ex.validate([false,3,true,true])
    expect(x).toEqual(true); 
     x = Ex.validate([false,3,false,true])
    expect(x).toEqual(false); 
     let y = Ex.validate([null,3,false,true])
    expect(y).toEqual("hi"); 
    
});