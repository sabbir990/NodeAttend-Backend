export default interface StudentRegistrationOTPType{
    email: string,
    code: string,
    createdAt: {
        type: Date,
        default: Date,
        expires: number
    }
}