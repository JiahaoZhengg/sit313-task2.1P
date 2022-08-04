//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
const express = require("express");
const app = express();
const sendEmail = require("./utils/sendEmail");

const path = require("path");
const { text } = require("express");
app.use(express.urlencoded({extended: false}));
app.use('/public', express.static(path.join(__dirname,'public')));
app.set("view engine" ,"ejs");
app.get("/", (req,res) => {

res.render("contact");

});

app.get("/sent", (req,res) =>{

res.render("sent")

});

app.post("/sendemail",(req,res) => {

const{email}= req.body;

const from = "zjiahao777@gmail.com";
const to = `${email}`;
const subject ="node.js";
const text ="welcome to SIT313";



sendEmail(to,from ,subject,text);
res.redirect("/sent");



});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))




