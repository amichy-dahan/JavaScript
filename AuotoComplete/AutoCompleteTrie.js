class AutoCompleteTrie {
    constructor(value) {
        this.value = value;
        this.children = {}
        this.endOfWord = false;
    }

 addWord(str) {

    let root = this
    if(str !== ""){
         for (const char of str) {
            if(!root.children[char]){
                root.children[char] = new AutoCompleteTrie(char);
            }
            root = root.children[char]
         }
    root.endOfWord = true;
    return true
      }else{
       return false;
      }
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

        
              
                
        _getRemainingTree(prefix, node){
              node = this;
              prefix = prefix.toLowerCase();
              let cal = 0;
               while(cal < prefix.length){
               if(!node.children[prefix[cal]]){
                return null
               } else{
                node = node.children[prefix[cal]] 
                cal++;
               }   
            }
            return node;
        }



        _allWordsHelper(prefix, node, allWords){
            
           if(node.endOfWord){
              allWords.push(prefix)
           }
            for (let char in node.children) {
              this._allWordsHelper(prefix + char , node.children[char] , allWords)
            }

            return allWords;
          }

      


                
        predictWords(prefix) {
              let node = this._getRemainingTree(prefix);
               if (!node) return []; 
              let allWords =[];
              let arr = this._allWordsHelper(prefix, node, allWords)
      
              return arr;
        }

      }

        



module.exports = AutoCompleteTrie;

