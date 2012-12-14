var s = db.grades.find({}).sort({student_id:1,score:1}).pretty();
var filteredStudents = [];
var studentId =-1;
for(i=0;s.hasNext();i++){
    var student = s.next();
    if(student.student_id!=studentId){
        studentId=student.student_id;
        db.grades.remove({_id:student._id});
    }else{
        filteredStudents.push(student)
    }
}

print("filtered students are "+filteredStudents.length)

for (var i=0; i < filteredStudents.length; i++){
    printjson(filteredStudents[i]);
}

