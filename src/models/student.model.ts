import mongoose from "mongoose";
import type Student from "../interfaces/student.interface";

const studentSchema = new mongoose.Schema<Student>({
    studentName: {type: String, trim: true, required: [true, "studentName is a required field!"]},
    boardRoll: {type: Number, required: [true, "boardRoll is a required field!"]},
    registrationNumber: {type: Number, required: [true, "registrationNumber is a required field!"]},
    polytechnicName: {type: String, required: [true, "polytechnicName is a required field!"]},
    session: {type: String, required: [true, "session is a required field!"]},
    phone: {type: Number, required: [true, "phone is a required field!"]},
    email: {type: String, required: [true, "email is a required field!"]},
    hashedPassword: {type: String, required: [true, "hashedPassword is a required field!"]},
    userRole: {type: String, required: [true, "userRole is a required field!"]},
    dept: {type: String, required: [true, "dept is a required field!"]}
}, {
    timestamps: true,
})

const StudentModel = mongoose.model("Students", studentSchema);

export default StudentModel;