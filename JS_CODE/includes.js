list=[1,2,1,3,2,4,3,4,5,6,7,8,8,9]
console.log(list)
let b=[];
b.push(list[0])
let flag=-1
for(let i=1;i<list.length;i++){
    for(let j=0;j<b.length;j++){
        if(b[j]!==list[i]){
            flag=0
        }else{
            flag=1;
            break;
        }
    }
    //console.log('flag----------',flag)
    if(flag==0){
        b.push(list[i])
        
    }
    //console.log(b)
}
console.log(b)