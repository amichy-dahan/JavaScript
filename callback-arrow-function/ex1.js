
function pushPull (callback){
       
       callback();

}


const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}

pushPull(push) 
pushPull(pull) 