import mongoose from "mongoose";
import type StudentRegistrationOTPType from "../interfaces/studentRegistrationOtp.interface";

const studentRegistrationOtpSchema = new mongoose.Schema<StudentRegistrationOTPType>({
    email: {type: String, toLowerCase: true, required: [true, "email is a required field!"]},
    code: {type: String, required: [true, "code is a required field!"]},
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 300
    }
})

const studentRegistrationOtpModel = mongoose.model("Student_Registration_OTPs", studentRegistrationOtpSchema);

export default studentRegistrationOtpModel;