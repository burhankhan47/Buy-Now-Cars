var passStudent = []
var failStudent = []

function CheckPassFail(stud) {

    if (stud >= 50) {
        passStudent.push(stud)
    } else failStudent.push(stud)

}

var Student1 = +prompt('write your percentage')
CheckPassFail(Student1)

var Student2 = +prompt('write your percentage')
CheckPassFail(Student2)

var Student3 = +prompt('write your percentage')
CheckPassFail(Student3)

var Student4 = +prompt('write your percentage')
CheckPassFail(Student4)

console.log(passStudent)
console.log(failStudent)

