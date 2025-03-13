let list=[0,1,1,0,2,2,0,3,0,4,0,0,8,0]
let b=[];
for(let i=0;i<list.length;i++){
    if(list[i]==0){
        let sum=0;
        let j=i+1
        while(list[j]>0){
            sum=sum+list[j];
            j=j+1;
        }
        if(list[j]==0 && sum>0){
            b.push(sum) 
        }
       
        i=j-1;
        
    }
}
console.log(b)