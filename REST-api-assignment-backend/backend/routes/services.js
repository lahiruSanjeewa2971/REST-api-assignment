const serviceRouter = require('express').Router();
let Service = require('../models/service');

serviceRouter.route("/addnewservice").post((req, res) => {
    const serviceid = req.body.serviceid;
    const servicename = req.body.servicename;
    const imgurl = req.body.imgurl;
    const category = req.body.category;
    const price = Number(req.body.price);

    const newService = new Service({
        serviceid,
        servicename,
        imgurl,
        category,
        price
    })

    newService.save().then(() => {
        res.json("Service added..!")
    }).catch((err) => {
        console.log(err);
    })

})

serviceRouter.route("/").get((req, res) => {
    Service.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})
/*
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
*/

serviceRouter.route("/getservice").post(async (req, res) => {
    Service.find({serviceid:req.body.serviceid}, (docs, err) => {
        if(!err){
            res.send(docs);
        }
        else{
            res.send(err);
        }
    })
})

serviceRouter.route("/update").post(async (req, res) => {
    Service.findOneAndUpdate({serviceid: req.body.serviceid}, {

        servicename: req.body.servicename,
        imgurl: req.body.imgurl,
        category: req.body.category,
        price: req.body.price

    }, (err) => {

        if(!err){
            res.send("Item updated.....")
        }
        else{
            res.send(err)
        }

    })
})

serviceRouter.post("/delete", (req, res) => {
    Service.findOneAndDelete({serviceid: req.body.serviceid}, (err)=> {
        if(!err){
            res.send("Post deleted...")
        }
        else{
            res.send(err)
        }
    })
})


module.exports = serviceRouter;