function display(name,callback){
    console.log('My name is'+' '+name);
    callback()
}
function show(){
    console.log('This is the callback function');
}
display('akhildas',show)