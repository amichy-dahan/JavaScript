class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }


   insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if(newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }

      //ex2
     findNode (newVal) {
        if (this.value === newVal) {
            return true;
        }
        else {
           try{
              if(this.value > newVal){
               return this.leftChild.findNode(newVal)
            }else{
               return   this.rightChild.findNode(newVal)
            }
           }catch{

             return false;
           } 
          
        }
        
    }

    // ex3.
     findCommonParent  (Val1 , Val2) {

        if (this.value === Val1 || this.value === Val2) {
    return this.value;
}
        if(
    (Val1 < this.value && Val2 > this.value) ||
    (Val1 > this.value && Val2 < this.value)
){
           return this.value;
        }else if(this.leftChild && Val1 < this.value && Val2 < this.value){
            return this.leftChild.findCommonParent(Val1,Val2)
        }else if (this.rightChild && Val1 > this.value && Val2 > this.value) {
                    return this.rightChild.findCommonParent(Val1, Val2);
                }
                return null;
        
    }


            removeNode(currentNode, value, parent = null) {
            if (value < currentNode.value) {
                parent = currentNode;
                return this.removeNode(currentNode.leftChild , value);
            } else if (value > currentNode.value) {
                parent = currentNode;
                return this.removeNode(currentNode.rightChild , value ,parent );



             } else
     {

    if (!currentNode.leftChild && !currentNode.rightChild) {
      if (parent === null) {
        // זה השורש
        return null;
      } else if (parent.leftChild === currentNode) {
        parent.leftChild = null;
      } else {
        parent.rightChild = null;
      }
    }

    else if (currentNode.leftChild && !currentNode.rightChild) {
      if (parent === null) {
        return currentNode.leftChild;
      } else if (parent.leftChild === currentNode) {
        parent.leftChild = currentNode.leftChild;
      } else {
        parent.rightChild = currentNode.leftChild;
      }
    } else if (!currentNode.leftChild && currentNode.rightChild) {
      if (parent === null) {
        return currentNode.rightChild;
      } else if (parent.leftChild === currentNode) {
        parent.leftChild = currentNode.rightChild;
      } else {
        parent.rightChild = currentNode.rightChild;
      }
  }   else{
         let maxNode = this.getMaxNode(currentNode.leftChild);
          currentNode.value = maxNode.value;
         this.removeNode(currentNode.leftChild, maxNode.value, currentNode);
  }
   
}
    return currentNode;
            }



            getMaxNode(node) {
            while (node.rightChild) {
                node = node.rightChild;
                }
                return node;
                }
        }


module.exports = BSNode;