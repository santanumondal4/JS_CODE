let list=[5,4,3,2,1];//10
 let highestNum=list[0];//3
 let secondhigh=list[1]//1
 if(list[1]>highestNum){
     highestNum=list[1];
     secondhigh=list[0]
     
 }
 for(let i=2;i<list.length;i++){
     if(list[i]>secondhigh && list[i]>highestNum){
         secondhigh=highestNum
         highestNum=list[i]
     }
     else if(list[i]>secondhigh){
         secondhigh=list[i]
     }
     
    
     
 }
 console.log(secondhigh)