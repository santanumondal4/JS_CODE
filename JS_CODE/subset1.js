let b=[];
let c=[];
 let list=[1,2,3]
function binary(id,list,b){

    c.push([...b])
    for(let i=id;i<list.length;i++){
        b.push(list[i]);
        binary(i+1,list,b);
        b.pop();
        
        //binary(id+1,list,b);
        
    }
    
}
binary(0,list,b);
console.log(c)