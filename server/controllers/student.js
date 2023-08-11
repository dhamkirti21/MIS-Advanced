import {Student} from "../models/studentSchema.js";

export const addStudent = async(req,res) =>{
  
    try{
        const {
            fistName,
            lastName,
            dateOfBirth,
            email,
            degree,
            major
            
        } = req.body
     
        const newStudent = new Student({
         firstName:fistName,
         lastName :lastName ,
         dateOfBirth  :dateOfBirth,
         email:email,
         degree:degree,
         major:major
        })
     
        const savedStudent = await newStudent.save();
     
        res.status(201).json(savedStudent);
    }
    catch(err){
        res.status(500).json({"Error Message":err});
    }
}