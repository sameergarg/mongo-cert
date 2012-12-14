use students;

db.scores.find({score:{$gte:65}}).sort(score:1).limit(1);