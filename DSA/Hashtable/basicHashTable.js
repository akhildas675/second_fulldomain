
class Hashtable{
    constructor(size) {
        this.size=size;
        this.table=new Array(size)
    }

    hash(key){
        let hash=0
        for(let i=0;i<key.length;i++){
            hash+=key.charCodeAt(i)
        }
        return hash % this.size
    }

    set(key,value){
        let index=this.hash(key)
        this.table[index]=value;
    }

    get(key){
        let index=this.hash(key);
        return this.table[index]
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
                
            }
        }
    }
}


let table=new Hashtable(10)

table.set('name','Akhildas')


table.display()