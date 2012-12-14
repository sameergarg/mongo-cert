var students = db.students.find();

for(var i = 0;students.hasNext();i++){
    var student = students.next();
    var initialScore = 10000;
    for(var j=0; j<student.scores.length; j++){
        if(student.scores[j].type == "homework" && student.scores[j].score<initialScore){
            //print("swapping "+initialScore+" with "+student.scores[j].score);
            initialScore = student.scores[j].score;
        }
    }
    print("minimum score for id:"+student._id+",name:"+student.name+" homework is:"+initialScore);
    db.students.update({_id:student._id},{$pull:{scores:{score:initialScore, type:'homework'}}})
}
