// o/p 4 ocurs 6 times
list=[1,1,2,4,3,2,1,3,4,1,4,4,4,4,8];
let output={};
//let output=[];

let prevCount=-1;
let a=[];
let b=null;
for(let i=0;i<list.length;i++){
    
    let count=0
    if(!a.includes(list[i])){
    //console.log("hi");
        
    for(let j=i+1;j<list.length;j++){
        if(list[i]==list[j]){
            count=count+1
        }
    }
    count=count+1
   // output.push({[list[i]]:count})
   Object.assign(output,{[list[i]]:count})
    count=count-1;
    if(prevCount<count){
        prevCount=count
        b=list[i]
    }
    a.push(list[i])
    }
}
console.log(b,prevCount+1)
console.log(output)