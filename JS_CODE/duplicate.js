list=[1,2,3,1,4,5,5,6,7,7,8,9,9,5]
let l=list.length;
console.log(l)
for(let i=0;i<list.length;i++){
    for(let j=i+1;j<list.length;j++){
        if(list[i]==list[j]){
            for(let k=j;k<list.length-1;k++){
                list[k]=list[k+1]
            }
            
            j=j-1;
            list.pop()
    }
    
}
}
console.log(list)