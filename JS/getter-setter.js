const products={
    product:10,

    get stock(){
        return this.product
    },

    set stock(value){
        if(value<0){
            console.log('Stock cannot be negative')
            return;
        }

        this.product=value
    }
}


products.stock=5
products.stock= -1


console.log(products.stock)