console.log("hi1")
let a=[1,2,3]
let res=[];
function swap(a,id1,id2){
    temp=a[id1];
    a[id1]=a[id2];
    a[id2]=temp;
    return a;
    
}
function permute(id,a,res){
    if(id===a.length){
        res.push([...a])
        return;
    }
    for(let i=id;i<a.length;i++){
        swap(a,i,id);
        permute(id+1,a,res);
        swap(a,i,id) // backtrack
    }
}
permute(0,a,res);
console.log(res)