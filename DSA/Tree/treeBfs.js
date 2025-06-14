class Node{
    constructor(value){
        this.value=value
        this.left=null;
        this.right=null
    }
}


class TreeBFS{
    constructor() {
        this.root=null;
    }

    isEmpty(){
        return this.root==null;
    }


    insert(value){
        let newNode = new Node(value);


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


    bfs(){
        let queue=[]
        let count=0;
        queue.push(this.root);

        while(queue.length){
            let current = queue.shift();
            count++
            console.log(current.value);

            if(current.left){
                queue.push(current.left)
            }

            if(current.right){
                queue.push(current.right)
            }
            
        }

        console.log('Number of count', count);
        
    }



    preOrder(root){
        if(root){
            console.log(root.value);
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
            console.log(root.value);
            
        }
    }



}

let bst = new TreeBFS()


bst.insert(9)
bst.insert(7)
bst.insert(8)
bst.insert(4)
bst.insert(3)

bst.inOrder(bst.root)

bst.bfs()