const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, () => {
    console.log(`Server is runing at port no:3000`);
})

// 


mongoose.connect('mongodb+srv://mehtabalam:W9MvbIMM74F9GDhh@justfit.scime5k.mongodb.net/Users' , {useNewUrlParser: true} , {useUnifiedTopology:true}).then(
    () => {
        console.log('Connection Sucess');
    }
).catch(
    (err) => {
        console.log('Not Connected with Server');
    }
);

//
const userSchema = new mongoose.Schema({
    Name:{
        type:String,
    },
    Phone:{
        type:Number,
    },
    Email:{
        type:String,
    },
    Age:{
        type:Number,
    },
    Gender:{
        type:String,
    },
    Package:{
        type:String,
    },
    Address:{
        type:String,
    },
})

const User = mongoose.model('REGISTRATION', userSchema);
//

const static_path = path.join(__dirname, "../Frontend");
app.use(express.static(static_path));

app.post("/", (req, res)=>{

    let newUser = new User({
        Name:req.body.name,
        Phone:req.body.phoneNumber,
        Email:req.body.email,
        Age:req.body.age,
        Gender:req.body.gender,
        Package:req.body.package,
        Address:req.body.address
    });

    newUser.save();
    res.redirect('/');
})