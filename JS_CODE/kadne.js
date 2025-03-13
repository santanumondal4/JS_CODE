console.log('kadnes algorithm')
list=[1,2,3,4]

let e=[];
for(let i=0;i<list.length;i++){
    for(let j=i;j<list.length;j++){
        let b=[]
        for(k=i;k<=j;k++){
            //console.log(list[k])
            b.push(list[k])
        }
        e.push([...b])
       
    }
}
console.log(e)
