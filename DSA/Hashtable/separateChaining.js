class Hashtable{
    constructor(size) {
        this.size=size;
        this.table=[...Array(size)].map(()=>[])
    }

    hash(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash+=key.charCodeAt(i);
        }
        return hash%this.size;
    }

    set(key,value){
        let index=this.hash(key)
       if(!this.table[index]){
        this.table[index]=[]
       }
       let bucket=this.table[index];
       for(let i=0;i<bucket.length;i++){
        if(bucket[i][0]==key){
            bucket[i][1]=value;
            return;
        }
       }
       bucket.push([key,value])
    }
    get(key){
        let index=this.hash(key);
        if(!this.table[index]){
            return  undefined
        }

        let bucket=this.table[index]

        for(let i=0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                return bucket[i][1]
                
            }
        }
        return undefined
    }

    remove(key){
        let index= this.hash(key)
        let bucket=this.table[index];
        if(!bucket){
            return undefined
        }

        for(let i=0;i<bucket.length;i++){
            if(bucket[i][0]==key){
                 bucket.splice(i,1)
                 return
            }
        }
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            console.log(i,this.table[i]);
            
        }
    }
}


let table=new Hashtable(10);


table.set('name','Akhildas')
table.set('mane','Akhil')

console.log(table.get('name'));

table.remove('mane')

table.display()