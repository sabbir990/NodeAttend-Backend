import transporter from "./transporter.util";

interface ArgTypes{
    to: string,
    subject: string,
    html: string
}

const sendEmail = ({to, subject, html}: ArgTypes) => {
    try{

        const info = transporter.sendMail({
            from: process.env.ADMIN_EMAIL,
            to,
            subject,
            html
        })

        console.log("Email sent: ", info)

        return info;

    }catch(error){
        console.log("Something wrong happened while sending automation, the reason : ", error)

        throw error
    }
}

export default sendEmail;