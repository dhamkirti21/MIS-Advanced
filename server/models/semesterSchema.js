const mongoose = require('mongoose');

const semesterSchema = new mongoose.Schema({
  semester: {
    type: Number,
    required: true,
    trim: true
  },
  year: {
    type: Number,
    required: true,
    trim: true
  },
  degreeName: {
    type: String,
    required: true,
    trim: true
  },
  coursesList : [{  
     type:mongoose.Schema.Types.ObjectId,
     ref:'Course'
  }]
 
}, { timestamps: true });

const Semester = mongoose.model('Semester', semesterSchema);

module.exports = Semester;
