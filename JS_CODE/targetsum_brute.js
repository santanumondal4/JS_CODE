list=[2,11,3,15,7,4,5,-2,6]
let c=[]
for(let i=0;i<list.length;i++){
    for(let j=i+1;j<list.length;j++){
        let b=[]
        if(list[i]+list[j]==9){
            //console.log([list[i],list[j]])
            b.push(list[i],list[j])
            c.push([...b])
            
        }
    }
}
console.log(c)
