var express = require('express');
var app = express();
var gradesMd = require('./grades_md');
var port = process.env.PORT || 3000;

app.set('port', port);
app.use('/',express.static('./public'));
app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    app.set('json spaces', 4);
    res.set("Content-Type", "application/json");
    next();
});

//geting all students data
app.get('/studsData', function(req,res) {
   gradesMd.getAllStudentsData(function(data) {
       res.json(data);
   });
});

//getting a student grade by id
app.get('/gradeById/:id', function(req,res) {
   gradesMd.getStudGradeById(req.params.id, function(data) {
      res.json(data);
   });
});

//getting all students grades by age
app.get('/gradeByAge/:age', function(req,res) {
   gradesMd.getStudsGradeByAge(req.params.age, function(data) {
      res.json(data);
   });
});

app.listen(port);
console.log('listening on port ' + port);
