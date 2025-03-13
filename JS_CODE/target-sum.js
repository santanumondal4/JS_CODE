list=[2,11,3,15,7,4,5,-2,6]
list.sort((a,b)=>a-b)
console.log(list)
let start=0;
let end=list.length-1;
let b=[]
while(start<=end){
    if(list[start]+list[end]==9){
       // console.log(list[start],list[end])
        b.push([list[start],list[end]])
        start=start+1;
        end=end-1;
    }
    else if(list[start]+list[end]>9){
        end=end-1
    }else{
        start=start+1
    }
}
console.log(b)