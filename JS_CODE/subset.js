b=[1,2,3]
c=[];
let arr1=[]
function subset(id,b,c){
    if(id==3){
        //console.log(c)
        arr1.push([...c])
        return;
    }
    c.push(b[id])
    subset(id+1,b,c)
    c.pop()
    subset(id+1,b,c)

}
subset(0,b,c)
console.log(arr1)