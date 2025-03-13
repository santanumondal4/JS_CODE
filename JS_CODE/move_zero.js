let arr1=[0,1,2,0,1,3,4,0,5,4,0]
let l=arr1.length
console.log(l)
for(let i=0;i<l;i++){
    if(arr1[i]==0){
        
        for(let j=i;j<l-1;j++){
            arr1[j]=arr1[j+1]
        }
    
        arr1[l-1]=0;//  putting 0 at end
        l=l-1;
        
    }
}
console.log(arr1)