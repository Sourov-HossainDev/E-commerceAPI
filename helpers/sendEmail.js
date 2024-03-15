const nodemailer = require("nodemailer");

async function sendEmail(email, subject, template) {
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
        subject: subject+ "✔",
        html: template, // html body
      });
}

module.exports = sendEmail;