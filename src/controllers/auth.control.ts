import express, { type Request, type Response } from "express";
import crypto from 'crypto';
import studentRegistrationOtpModel from "../models/studentRegistrationOtp.model";
import { Resend } from "resend";

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
            const resend = new Resend(process.env.RESEND_API_KEY);

            const emailSendingResponse = await resend.emails.send({
                from: `onboarding@resend.dev`,
                to: email,
                subject: "Your student registration OTP for NodeAttend has arrived!",
                html: `<strong>Your OTP is: ${otpCode}</strong>. It expires in 5 minutes.`
            })

            console.log(emailSendingResponse)

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