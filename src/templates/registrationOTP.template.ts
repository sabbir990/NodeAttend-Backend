const registrationOTPTemplate = (otpCode: string) => {
  return `
    <div style="background-color: #0f1225; padding: 40px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #ffffff; text-align: center;">
      <div style="margin-bottom: 30px;">
        <h1 style="font-size: 28px; font-weight: 700; margin: 0; color: #ffffff; letter-spacing: 1px;">
          at<span style="color: #a78bfa;">·</span>tend
        </h1>
      </div>

      <div style="background-color: #1a1f3d; border-radius: 12px; padding: 30px; max-width: 450px; margin: 0 auto; border: 1px solid #2d345e; box-shadow: 0 10px 20px rgba(0,0,0,0.3);">
        <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 10px; color: #ffffff;">Verify your identity</h2>
        <p style="color: #94a3b8; font-size: 15px; line-height: 1.5; margin-bottom: 25px;">
          To finish registering for <strong>at·tend</strong>, please use the following One-Time Password (OTP).
        </p>

        <div style="background-color: #0f1225; border: 1px dashed #a78bfa; border-radius: 8px; padding: 15px; margin-bottom: 25px;">
          <span style="font-size: 36px; font-weight: 800; letter-spacing: 8px; color: #a78bfa; display: block;">
            ${otpCode}
          </span>
        </div>

        <p style="color: #64748b; font-size: 13px; margin: 0;">
          This code is valid for <strong>5 minutes</strong>. If you didn't request this code, you can safely ignore this email.
        </p>
      </div>

      <div style="margin-top: 30px; color: #64748b; font-size: 12px;">
        <p style="margin: 5px 0;">&copy; 2026 at·tend. All rights reserved.</p>
        <p style="margin: 5px 0;">Chittagong, Bangladesh</p>
      </div>
    </div>
  `;
};

export default registrationOTPTemplate;