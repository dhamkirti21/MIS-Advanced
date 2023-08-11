const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
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
  experience:{
     type:Number,
     required:true,
     trim: true
  },
  instructorId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  courses :[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
  ]

}, { timestamps: true });

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;
