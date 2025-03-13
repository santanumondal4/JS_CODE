list=[1,2,3,4,5,6,7]
//o/p=[7,6,5,1,2,3,4]
let k=0;
let pos=0;
while(k<3){
    
    temp=list[6]
    for(let i=0;i<6-pos;i++){
        list[6-i]=list[5-i]
    }
    list[pos]=temp;
    pos++
    k++
}
console.log(list)