let array=[4,51,34,25,2,46,234,23,4,42,456,432,23,43,3,32]


function bubbleSort(arr){
    let swapped;
    do {
        swapped=false;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                swapped=true;
            }
        }
    } while (swapped);

    return arr
}


console.log(bubbleSort(array))

let name='akhildas';

function bubbleSortName(string){
    let swapped;
    let str=string.split('')
    do {
        swapped=false;
        for(let i=0;i<str.length;i++){
            if(str[i]>str[i+1]){
                let temp=str[i];
                str[i]=str[i+1];
                str[i+1]=temp;
                swapped=true
            }
        }
    } while (swapped);

    return str
}


console.log(bubbleSortName(name))

