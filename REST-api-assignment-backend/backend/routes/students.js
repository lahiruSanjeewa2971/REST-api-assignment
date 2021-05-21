const router = require('express').Router();
let Student = require('../models/student');

router.route("/add").post((req, res)=>{
    const studentid = req.body.studentid;
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        studentid,
        name,
        age,
        gender
    })

    newStudent.save().then(()=>{
        res.json("Student added..!")
    }).catch((err)=>{
        console.log(err);
    })
})

/*router.route("/").get((req, res)=> {
    Student.find().then((students)=>{
        //res.json(students)
        console.log(res.data)
    }).catch((err)=>{
        console.log(err)
    })
}) */

router.route("/").get((req, res) => {
    Student.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})

/*
router.route("/update/:id").put(async (req, res) =>{
    let userid = req.params.id;
    const {name, age, gender} = req.body;

    const updatedStudent = {
        name,
        age, 
        gender
    }

    const update = await Student.findByIdAndUpdate(userid, updatedStudent)
    .then(()=> {
        res.status(200).send({status: "Student updated...!"})
    }).catch((err) => {
        console.log(err);
        req.status(500).send({status: "Error with updating..!"});
    })
}) */

router.route("/getstudent").post(async (req, res) => {
    Student.find({studentid:req.body.studentid}, (docs, err) => {
        if(!err){
            res.send(docs);
        }
        else{
            res.send(err);
        }
    })
})

router.route("/update").post(async (req, res) => {
    Student.findOneAndUpdate({studentid: req.body.studentid}, {

        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender

    }, (err) => {

        if(!err){
            res.send("Student updated.....")
        }
        else{
            res.send(err)
        }

    })
})

/*
router.route("/delete/:id").delete(async (req, res) => {
    let userid = req.params.id;

    await Student.findByIdAndDelete(userid)
        .then(() => {
            res.status(200).send({status: "Student deleted..!"});
        }).catch((err) => {
            console.log(err);
            req.status(500).send({status: "Error with deleting..!"});
        })
}) */



router.post("/delete", (req, res) => {
    Student.findOneAndDelete({studentid: req.body.studentid}, (err)=> {
        if(!err){
            res.send("Post deleted...")
        }
        else{
            res.send(err)
        }
    })
})

router.route("/get/:id").get(async (req, res) => {
    let userid = req.params.id;

    const user  = await Student.findById(userid)
        .then((student) => {
            res.status(200).send({status: "Student find", student})
        }).catch((err) => {
            console.log(err);
            req.status(500).send({status: "Error with finding..!"});
        })
})


module.exports =  router;