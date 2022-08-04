const sgMail = require ("@sendgrid/mail");
sgMail.setApiKey("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");
require("dotenv").config();

const sendEmail = (to, from, subject, text) =>{
const msg={
   to,
   from,
   subject,
   text

}
sgMail.send(msg, function(err,result){
if(err){

console.log(" Not sent");
}else{

    console.log("Email was sent");
}


});

};

module.exports = sendEmail;