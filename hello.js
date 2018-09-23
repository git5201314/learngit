function hello(){
    console.error('hello world');
}

function func(a, b){
    return a + b;
}

function createObj(obj){
    var instance = Object.create(obj);
    return instance;
}