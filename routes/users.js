var express = require('express');
var router = express.Router();
var student = require("../schema/students");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Cannot access this page');
});

router.post('/login', function(req, res, next) {
    // console.log(req);
    console.log(req.body.id);
    console.log(req.body.passwd);
    student.findOne({'id': req.body.id}, function(err, doc){
        console.log(doc);
        if(doc === null) {
            res.json({res:false})
        }
        else if(doc.password === req.body.passwd){
            res.json({res:true, id: doc.id, username: doc.username})
        }
        else{
            res.json({res:false})
        }
    });
    // res.send('respond with a resource');
    // res.json({data:[{name:'abc', quantity:'12', price:'111'},{name:'zxc', quantity:'x', price:'127'}]});
});

router.put('/login', function(req, res, next) {
    console.log(req.body.id);
    console.log(req.body.passwd);
    console.log(req.body.uname);
    student.findOne({'id': req.body.id}, function(err, doc){
        console.log(doc);
        if(doc === null) {
            var student1 = new student({id: req.body.id, username: req.body.uname, password: req.body.passwd});
            student1.save();
            res.json({res:true})
        }
        else{
            res.json({res:false})
        }
    });

});

module.exports = router;
