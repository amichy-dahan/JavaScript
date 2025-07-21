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
            let type = word.length;
            let root = this;
            let s = false;
            let cal = 0;
              while(cal < type){
               if(!root.children[word[cal]]){
                return s;
               } else{
            
                    root = root.children[word[cal]]
                  cal++;
                 if(root.endOfWord ===true && cal === word.length){
                     s =true ;
                }
                  
               }   
            }
            return s;
        }
}


module.exports = AutoCompleteTrie;