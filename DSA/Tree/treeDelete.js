class Node{
    constructor(value) {
        this.value=value;
        this.left=null;
        this.right=null;
    }
}


class treeDeletion{
    constructor() {
        this.root=null
    }

    isEmpty(){
        return this.root===null;
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

        if(root.value==value){
            return true
        }else if(root.value>value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }

    }


    deleteNode(root,value){
        if(this.root===null){
            return null;
        }

        if(value<root.value){
            root.left= this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right= this.deleteNode(root.right,value)
        }else{

            
            if(!root.left && !root.right){
                return null
            }
            
            if(!root.left){
                return root.right
            }
            
            if(!root.right){
                return root.left
            }
            
            root.value=this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
            
        }
        return root
    }

    min(node){
        let current=node;
        while(current==null){
            current=current.left
        }
        return current
    }

   
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)

        }
    }
}

let bst = new treeDeletion();

bst.insert(8)
bst.insert(16)
bst.insert(9)
bst.insert(5)
bst.insert(10)

bst.preOrder(bst.root)

console.log(bst.search(bst.root,10));


console.log('Min',bst.min(bst.root));


console.log('deleted',bst.deleteNode(bst.root,5))

bst.preOrder(bst.root)