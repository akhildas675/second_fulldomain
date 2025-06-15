class Node{
    constructor(value) {
        this.value=value
        this.left=null;
        this.right=null;
    }
}


class treeSearch{
    constructor() {
        this.root=null;
    }

    isEmpty(){
        return this.root==null
    }


    insert(value){

        let newNode = new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }


    insertNode(root,node){
        if(root.value>node.value){
            if(root.left==null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }


    search(root,value){
        if(!root){
            return false
        }

        if(root.value===value){
            return true
        }else if(root.value>value){
            return this.search(root.left,value)
        }else{
           return this.search(root.right,value)
        }
    }
}


let bst = new treeSearch()

bst.insert(9)
bst.insert(14)
bst.insert(7)
bst.insert(10)
bst.insert(5)

console.log(bst.search(bst.root,10))