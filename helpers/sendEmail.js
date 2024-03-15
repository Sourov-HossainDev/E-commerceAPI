const nodemailer = require("nodemailer");

async function sendEmail(email) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "sourovhossain2326@gmail.com",
            pass: "vaktngejexxlpvuu",
        },
    });

    const info = await transporter.sendMail({
        from: 'ORIBI',
        to: email, 
        subject: "Welcome ✔", 
        html: `<div style=margin-top:100px><div style=text-align:center;font-family:Arial,Helvetica,sans-serif;padding-top:50px;padding-bottom:50px;padding-left:50px;padding-right:50px;box-sizing:border-box;background-color:#2c3e50;color:#fff;width:700px;margin:auto;border-top-left-radius:100px;border-bottom-right-radius:100px><h1 style=font-weight:900;font-size:48px>ORIBI</h1><h1>Welcome to roibi_e-commerce</h1><p style=font-size:18px;font-family:Arial,Helvetica,sans-serif,>please vrify your email<div style=margin-top:50px><a href=""style="background-color:#2ecc71;padding:10px 20px;color:#fff;font-size:18px;text-decoration:none;border-radius:8.6px">Confrim your email</a></div></div></div>`, // html body
      });
}

module.exports = sendEmail;