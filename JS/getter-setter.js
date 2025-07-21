const product={
    avlStock:10,


    get stock(){
       return this.avlStock
    },

    set stock(value){
        if(value<0){
            console.log('Stock cannot be negative')
            return;
        }
        this.avlStock=value
    }
}

product.stock=5
product.stock= -1

console.log(product.avlStock)