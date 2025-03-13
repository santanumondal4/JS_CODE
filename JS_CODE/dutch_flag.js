list=[0,1,0,1,2,1,2]
let mid=0;
let high=list.length-1;
let low=0;
function swap(id1,id2){
    temp=list[id2]
    list[id2]=list[id1]
    list[id1]=temp

}
while(mid<=high){
    if(list[mid]==2){
        swap(mid,high)
        high=high-1;

    }
    else if(list[mid]==0){
       swap(mid,low)
        low=low+1;
        mid=mid+1
    }
    else if (list[mid]==1){
        mid=mid+1
    }
}
console.log(" sorted list:-",list)