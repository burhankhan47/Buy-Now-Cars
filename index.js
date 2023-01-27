       // Alert

alert ("Java Script Practice")

//Time code

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

// Time Code 

// User Info Get

var FirstName=prompt("Enter Your First Name Here ")

var LastName=prompt("Enter Your Last Name Here")

var FullName=FirstName + LastName

console.log(FullName)
// User Info Get

// java math use 

 var Car=prompt("We Have One deal For You ( Buy 2 Cars) If You Take A Deal We Are Discount Rupees 1,00,000 Please Answer Only 'Yes' or 'No' and One Car Is Only 10,00,000 Type Okay To Next Step " )

console.log(Car)

var Deal=50000

var OneCarPrice=1000000

var EachCarPrice= OneCarPrice - Deal

var CountityOfCars=prompt("How Many Cars You Want")

var TotalCarAmount= EachCarPrice * CountityOfCars
console.log(TotalCarAmount)

var MembersOfCar=prompt("How Many Partners With You")

var totalCarPartners = TotalCarAmount / MembersOfCar

console.log(totalCarPartners)
// java math use


// If And Else Use 

var percentage=prompt("please rate the web in percentage")

if(percentage > 0 && percentage < 50){
    console.log("Avarage")
}
if(percentage >= 50 && percentage < 60){
    console.log("Normal")
}
if(percentage >= 60 && percentage < 70){
    console.log("Nice")
}
if(percentage >= 70 && percentage < 80){
    console.log("Best")
}
if(percentage >= 80 && percentage < 90){
    console.log("Awesome")
}
if(percentage >= 90 && percentage <= 100){
    console.log("Superb")
}
if(percentage > 100){
    console.log( "Percentage Error")
}
// If And Else Use 
