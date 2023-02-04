//        // Alert

// alert ("Java Script Practice")
console.log("Make A Bill")

// //Time code

var Time=prompt("Hello User Tell Me Current time In Your Device")
if (Time >=0 && Time <6){
    console.log("Dreaming Time")
}
if(Time >=6 && Time <12){
    console.log("Good Morning")
}
if(Time >=12 && Time <16){
    console.log("Good After Noon")
}
if(Time >=16 && Time <22){
    console.log("Good Evening")
}
if(Time >=22 && Time <24){
    console.log("Good Night")
}
if(Time >24)
{
    console.log("There Is Only 24 Hour in  Whole Day ")
}

// // Time Code 

// // User Info Get

var FirstName=prompt("Enter Your First Name Here ")

var LastName= prompt(" Enter Your Last Name Here")

var FullName=FirstName + LastName

console.log("Hello" , FullName )
// User Info Get

// java math use 

var Car=prompt("Enter Car Name Whould You Want To Buy")
console.log(Car)

var OneCarPrice=prompt("Enter Car Price Here")
console.log(OneCarPrice , "Each Car Price")

var QauntityOfCars=prompt("How Many Cars You Want")
console.log(QauntityOfCars , "Your Cars Qauntity")

var TotalCarAmount= OneCarPrice * QauntityOfCars
console.log(TotalCarAmount , "Total Car Amount")

var percentage=prompt("Discount in Percentage")
console.log(percentage,"%")

var DiscountAmount=(TotalCarAmount*percentage)/100
console.log(DiscountAmount ,  "Discount Percentage Amount")

var AfterDiscountCarPrice=TotalCarAmount-DiscountAmount
console.log(AfterDiscountCarPrice , "After (SUB) Your Percentage Amount")

var PartnersOfCar=prompt("How Many Partners With You")
console.log(PartnersOfCar , "Number Of Car Partners ")
var TotalCarPartners = AfterDiscountCarPrice / PartnersOfCar
console.log(TotalCarPartners ,"Total Bill For Each Person")
