var express = require('express');
var router = express.Router();
var nodemailer= require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/enquiry', (req, res) => {
  const output = `
    <p>You have a  New Enquiry</p>
    <h3>Enquiry Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.subject}</li>
     
     
     
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;
 
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'rishikabisht_1234@zoho.com', // generated ethereal user
        pass: 'Rishika@01'  // generated ethereal password
    },
    // tls:{
    //   rejectUnauthorized:false
    // }
  });
 
  // setup email data with unicode symbols
  let mailOptions = {
    from: 'rishikabisht_1234@zoho.com', // sender address
      to: '11akansha1999@gmail.com', // list of receivers
    subject: 'New Enquiry', // Subject line
      text: 'From Brandzia Website', // plain text body
      html: output // html body
  };
 
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);  
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
 
      res.send(`<body style="background-color:gray;"><div style="position:absolute; width : 100%;  height:5rem; text-align:center; font-size:2rem;top:50%;transform:
      translateY(-50%);">We Saved Your Enquiry. We will get in touch with you soon </div></body>`);
  });
});




module.exports = router;
