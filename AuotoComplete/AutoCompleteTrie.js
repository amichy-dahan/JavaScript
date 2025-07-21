class AutoCompleteTrie {
    constructor(value) {
        this.value = value;
        this.children = {}
        this.endOfWord = false;
    }

 addWord(str) {

    let root = this
         for (const char of str) {
            if(!root.children[char]){
                root.children[char] = new AutoCompleteTrie(char);
            }
            root = root.children[char]
         }
    root.endOfWord = true;
 }


        findWord(word){
            word = word.toLowerCase();
            let root = this;
            let bool = false;
            let cal = 0;
              while(cal < word.length){
               if(!root.children[word[cal]]){
                return bool;
               } else{
                    root = root.children[word[cal]] // im down from the root to the next child with the current word , and work with him
                  cal++;
                 if(root.endOfWord ===true && cal === word.length){
                     bool =true ;
                }
               }   
            }
            return bool;
        }


        predictWords(prefix) {
              let arr =[];
              let root = this;
              let text ='' ;
              prefix = prefix.toLowerCase();
              let cal = 0;
               while(cal < prefix.length){
               if(!root.children[prefix[cal]]){
                console.log("dont Exist");
                break;
               } else{
                 
                root = root.children[prefix[cal]] // im down from the root to the next child with the current word , and work with him
                text+=prefix[cal];
                cal++;
               }   
            }
            
            for (const key in root.children) {
                console.log(root.children[key])
            }

        }
}


module.exports = AutoCompleteTrie;