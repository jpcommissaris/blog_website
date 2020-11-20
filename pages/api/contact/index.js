import nextConnect from 'next-connect';
import nodemailer from 'nodemailer';
import cors from '../../../actions/cors';

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jpcommissaris@gmail.com',
      pass: process.env.EMAIL_PASSWORD
    }
});

const handler = nextConnect();
handler.use(cors)

handler.post(async (req, res) => {
    console.log(req.body)
    let {name, email, subject, body} = req.body
    let mailOptions = {
        from: email,
        to: 'jpcommissaris@gmail.com',
        subject: subject,
        text: `${body} \n\n sent by ${name}`
    };
    console.log(mailOptions)
    transporter.sendMail(mailOptions, (error, info) => {
        console.log(error)
        console.log(info)
        res.json({error, info})
    });
}); 


export default handler;