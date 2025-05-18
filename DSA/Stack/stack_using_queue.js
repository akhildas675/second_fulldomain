class StackUsingQueue{
    constructor() {
        this.queue1=[]
        this.queue2=[]
    }

    push(value){
        this.queue1.push(value);
    }

    pop(){
        if(!this.queue1.length){
            `The stack is empty`
        }

        while(this.queue1.length>1){
            this.queue2.length(this.queue1.shift())
        }
    }
}