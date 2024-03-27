// Please don't change the pre-written code
// Import the necessary modules here
import { fstat } from 'fs';
import nodemailer from 'nodemailer';
import readline from 'readline';

export const Solution = () => {

  const qInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  

  // 1. Create an email transporter.
  // SMTP (Simple Mail Transfer Protocol)

  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth : {
          user: 'codingninjas2k16@gmail.com',
          pass: 'slwvvlczduktvhdj',
      }
  })
   
  qInterface.question("Enter the Receipint's email: ", (n1) => {
    const mailOptions = {
      from: 'codingninjas2k16@gmail.com',
      to: n1,
      subject: 'Welcome to NodeJS',
      text: 'This is an email using nodemailer in NodeJS',
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Success:Email sent to ${n1}`);
    }

  });
    qInterface.close();
  });

}

export default Solution;
