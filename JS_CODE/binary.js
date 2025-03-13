let c=[]
function binary(id,c){
    if(id==3){
        console.log(c)
        return;
    }
    c.push(1);
    binary(id+1,c);
    c.pop()
    c.push(0)
    binary(id+1,c)
    c.pop()

}
binary(0,c)