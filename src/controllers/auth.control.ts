import express, { type Request, type Response } from "express";
import crypto from 'crypto';
import studentRegistrationOtpModel from "../models/studentRegistrationOtp.model";
import sendEmail from "../utils/emailSender.utils";
import registrationOTPTemplate from "../templates/registrationOTP.template";

const authRouter = express.Router();

authRouter.get("/", (req: Request, res: Response) => {
    res.send("Welcome to auth router!")
})

authRouter.post("/create-student-registration-otp", async (req: Request, res: Response) => {
    try {

        const { email } = req.body;
        const otpCode = crypto.randomInt(100000, 999999).toString();
        const otpCreationResponse = await studentRegistrationOtpModel.create({ email, code: otpCode });

        if (otpCreationResponse._id) {

            await sendEmail({
                to: email,
                subject: "Your one time password ( OTP ) has arrived. Use the OTP and register to the app!",
                html: registrationOTPTemplate(otpCode)
            })

            return res.status(200).json({
                success: true,
                message: "OTP is sent to the user successfully!",
            })
        } else {
            res.json({
                success: false,
                message: "Failed to send the OTP. There's something wrong!",
            })
        }

    } catch (err) {
        res.json({
            success: false,
            message: "Failed to send the OTP. There's something wrong!",
            error: err
        })
    }
})

authRouter.post('/register-student', async (req: Request, res: Response) => {
    try {
        const studentInformation = req.body;


    } catch (err) {
        res.json({
            success: false,
            message: "Something went wrong with the student registration!",
            error: err
        })
    }
})

export default authRouter;