// function debounce(fn, delay) {
//   let timer;
//   return function(...args) {
//     clearTimeout(timer); // clear previous timer
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }

// // Example usage
// function searchQuery(query) {
//   console.log("Fetching results for:", query);
// }

// const debouncedSearch = debounce(searchQuery, 500);

// // Simulate typing in a search bar
// debouncedSearch("a");
// debouncedSearch("ak");
// debouncedSearch("akhil");
// // 👉 Only "akhil" will be executed after 500ms



function debounce(fn,delay){
    let timer;

    return function(...args){
        clearTimeout(timer);
        timer=setTimeout(() => {
            fn.apply(this,args)
        },delay);
    }
}


function searchQuery(query){
    console.log('search query',query)
}

const debouncedSearch =debounce(searchQuery,500)

debouncedSearch('a')
debouncedSearch('ak')
debouncedSearch('akhil')