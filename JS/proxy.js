const target={
    name:"Akhildas",
    place:"Palakkad",
}


const handler={
    get:(target,prop)=>{
        console.log(`Accessing target ${prop}`)
        return target[prop]
    },

    set:(target,prop,value)=>{
        console.log(`Setting ${prop} to ${value}`)

        return target[prop]=value
    }
}


const proxy = new Proxy(target,handler)

console.log(proxy.name)
console.log(proxy.place)
proxy.id="12343"

console.log(proxy.id)