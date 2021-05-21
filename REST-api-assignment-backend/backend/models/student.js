const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    studentid: {
        type: String,
        require: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
