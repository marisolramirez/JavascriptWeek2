' use strict'

const massTom = 8;
 const heightTom = 9;
 const massJerry = 45;
 const heightJerry = 10;
 const BMITom = massTom / heightJerry ** 2;
 const BMIJerry = massJerry / (heightJerry * heightJerry);
 const tomHigherBMI = BMITom > BMIJerry;
if(BMIJerry < BMITom){
    console.log(`Tom's BMI ${BMITom} is higher than Jerry's ${BMIJerry}`)
} else{
    console.log(`Jerry's BMI (${BMIJerry}) is higher than Tom's (${BMITom})`)
 }
 console.log(BMITom, BMIJerry, tomHigherBMI);