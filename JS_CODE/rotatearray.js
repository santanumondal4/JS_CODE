list=[1,2,3,4,5,6,7]
//o/p=[5,6,7,1,2,3,4]
let k=0;
while(k<3){
    temp=list[6]
    
    for(let i=0;i<6;i++){
        list[6-i]=list[6-i-1]
    }
    list[0]=temp
    k=k+1
}
console.log(list)
