const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "claymicholaz@gmail.com",
    pass: "rwvr merx wbuo uuca",
  },
});

async function sendMail(to, token) {
  const mailOptions = {
    from: '"EduCourse App" <youremail@gmail.com>',
    to,
    subject: "Email Verifikasi Akun Vidio Belajar",
    html: `<p>Klik link berikut untuk verifikasi akun:</p>
           <a href="http://localhost:5173/verifikasi-email?token=${token}">Verifikasi Email</a>`,
  };

  await transporter.sendMail(mailOptions);
}

module.exports = sendMail;