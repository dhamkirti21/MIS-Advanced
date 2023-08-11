const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseCode: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  courseName: {
    type: String,
    required: true,
    trim: true
  },
  department: {
    type: String,
    required: true,
    trim: true
  },
  credits: {
    type: Number,
    required: true
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    }
  ],
  instructors:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Instructor'
    }
  ]
 
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
