// For loop
for(let index=0; index <10; index++){
    const element=index;
    // console.log(element)

}


for(let i=2; i<=20;i++){
    const element1=i;
    // console.log(element1)

}

let myArr=["Batman", "superman", "green goblin"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element)
    
}

for (let index = 1; index <=10; index++) {
    if(index==5){
        console.log("detected")
        break
    }
    
    // console.log(`Value of i is: ${index}`)
    
}
for (let index = 1; index <=10; index++) {
    if(index==5){
        console.log("detected")
        continue
    }
    
    console.log(`Value of i is: ${index}`)
    
}