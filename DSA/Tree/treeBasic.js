class Node{
    constructor(value) {
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BST{
    constructor() {
        this.root=null
    }

    isEmpty(){
        return this.root===null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,node){
        if(node.value<root.value){
            if(root.left==null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right=node;
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    findMax() {
    if (!this.root) return null;

    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.value;
  }
}

let bst = new BST()

bst.insert(6)
bst.insert(5)
bst.insert(2)
bst.insert(4)
bst.insert(1)

// bst.preOrder(bst.root)

// bst.inOrder(bst.root)
bst.postOrder(bst.root)

console.log("Largest element in BST:", bst.findMax())