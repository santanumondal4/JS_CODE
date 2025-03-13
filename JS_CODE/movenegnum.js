list=[1,-2,-3,4,5,-6,7]
//op=[-2,-3,-6,1,4,7]
let pos=0
for(let i=0;i<list.length;i++){
    if(list[i]<0){
        temp=list[i]
        for(let j=i;j>0+pos;j--){
            list[j]=list[j-1]
        }
        list[pos]=temp;
        pos=pos+1
    }
}
console.log(list)