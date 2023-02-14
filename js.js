var Maths=+prompt("Enter Maths Marks")
var Urdu=+prompt("Enter Urdu Marks")
var English=+prompt("Enter English Marks")

document.getElementById("MathsMarks").innerHTML=Maths
document.getElementById("UrduMarks").innerHTML=Urdu
document.getElementById("EnglishMarks").innerHTML=English

var Totalarks=Maths+Urdu+English
var Percentage=(Totalarks*100)/300

document.getElementById("Total").innerHTML=Totalarks
document.getElementById("Percentage").innerHTML=Percentage


function Grades(){
    if(Percentage >=0 && Percentage <50){
    document.getElementById("Grade").innerHTML=("fail")}
    
    if(Percentage >=50 && Percentage < 60){
    document.getElementById("Grade").innerHTML=("D")}
    
    if(Percentage >=60 && Percentage < 70){
    document.getElementById("Grade").innerHTML=("C")}
    
    if(Percentage >=70 && Percentage < 80){
    document.getElementById("Grade").innerHTML=("B")}
    
    if(Percentage >=80 && Percentage < 90){
    document.getElementById("Grade").innerHTML=("A")}
    
    if(Percentage >=90 && Percentage <= 100){
    document.getElementById("Grade").innerHTML=("A+")}
    else if (Percentage >100){
    document.getElementById("Grade").innerHTML=("Error")}
}


Grades()

