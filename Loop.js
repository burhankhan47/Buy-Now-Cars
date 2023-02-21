// LOOP 

// Loops are handy, if you want to run the same code over and over again, each time with a different value

        
// for - loops
// var cities = ["karachi" , "lahore", "peshawar", "islamabad"]
// for(var i =0 ; i <=cities.length; i++){

// console.log(i)
// console.log(cities[i])
// }

// for (var x = 0; x <= 100; x++){
//     console.log(cities[x])
// }

// for(var i =1 ; i <= 10; i++){
// console.log('10 * ' + i + ' = ' + i * 10)
// }
    

// var TableNumber = prompt('type table number')
//  for( var x = 1;x <= 10; x++){
//     console.log(TableNumber + ' * ' + x + ' = ' +x * TableNumber)
// }

// document.getElementById("tablenum").innerHTML = TableNumber;

// document.getElementById("table").innerHTML=TableNumber + ' * ' + x + ' = ' +x * TableNumber;


// var num1 =[10, 20, 35, 40, 60]
// var num2 =[14, 25, 27, 42, 33]
// var total = 0
// var total2 = 0

// for( var i = 0 ; i < num1.length  ; i++){
//     total = total +num1[i]
//     total2 = total2 +num2[i]
//     console.log(total)
// }

// console.log(total , total2)
// for( var i = 0 ; i < num1.length; i++){
//     total2 = total2 +num2[i]
//     console.log(total2)
// }

// if (total > total2){
// alert(total + " is grater than total2")}
// if (total2 > total)
// {alert(total2 + " is grater than total")}


// // loop for add string
// var string=["1","2","3","4","5","6","7","8","9","0"]
// var total = ""
// for( var x = 0; x <string.length ; x++){
//     var total =total + string[x]
//     console.log(total)
// }


// // loop for add string
// var pattern = ""
// for( var x = 1; x < 11; x++){
//     pattern = pattern + x
//     console.log(pattern)
// }

// // loop for even numbers 
// var pattern = ""
// for( var x = 1; x <= 100; x++){
//     pattern = pattern + x
//    if( x %2==0 ){
//     console.log(x)
// }
// }

// // loop for odd numbers 
// var pattern = ""
// for( var x = 1; x <= 100; x++){
//     pattern = pattern + x
//    if( x %2 ){
//     console.log(x)
// }
// }

// var num =[1, 23 ,423, 54 ,6 ,7786 ,090 ,678, 43 ,234 ]
// var largestnum=0
// for(x = 0; x < num.length; x++){
//     if(largestnum<num[x]){
//         largestnum=num[x]
//         }
// }
// console.log(largestnum)


// var numbers1 = [12, 13, 14, 15, 17, 18, 20, 22]
// var numbers2 = [112, 113, 114, 14, 18, 202, 105, 105]

// var samenumbers =[]
// for(var i=0; i < numbers1.length; i++){
//     for(var x=0; x < numbers2.length; x++){
//     console.log(numbers1[i] , numbers2[x])
//     if(numbers1[i] === numbers2[x]){
//         samenumbers.push(numbers1[i])
//         }
//     }
// }
// console.log(samenumbers)
    
// var numbers1 = [12, 13, 14, 15, 17, 18, 20, 22 ,24,44]
// var numbers2 = [112, 113, 114, 14, 18, 202, 105, 105,]

// var multiple4 =[]
// for(var i=0; i < numbers1.length; i++){
//     for(var x=0; x < numbers2.length; x++){
//     // console.log(numbers1[i] , numbers2[x])      
//     if(numbers1[i] %4==0 && numbers2[x] %4==0){
//         multiple4.push(numbers1[i])
//         }
//     }
// }
// console.log(multiple4)   
    
var areas = ["liyari" , "nagan" , "surjani" , "north" , "golimar" , "ner karachi"]
var userarea = prompt("in which area you live")

for(var x = 0; x < areas.length;x++){
    console.log(areas[x])
    if (userarea.toLowerCase() == areas[x]){
        alert("areafound")
        break;
      
    }
}