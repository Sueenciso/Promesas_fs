let i=0
function x(){
    i=i+1
    return 10;
}
i+=x()
console.log(i);