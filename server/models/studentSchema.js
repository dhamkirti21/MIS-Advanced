const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  rollno: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  degree: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  major: {
    type: String,
    required: true,
    trim: true
  },
  semester:{
    type: Number,
    trim: true
  }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
