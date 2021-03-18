function Counter(){
    let i=0;
    function incr(){
        i = i+1;
        return i;
    }
    return incr;
}
let count = Counter();
console.log(count());
console.log(count());
console.log(count());