
////////////////////////   For in loop - mostly used for objects as it is not possible with for of

const languages={
    "JS": "JavaScript",
    "RB": "Ruby on rails",
    "CPP":"C++"
}


for (const key in languages) {
    console.log(`${key} is shortcut for ${languages[key]}`)
   
    
    
}