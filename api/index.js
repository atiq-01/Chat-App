const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const mongoUrl = 'mongodb+srv://chatapp:PAF9HZt49QDxc83L@cluster0.wql0j75.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoUrl);
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));
app.get('/test', (req, res) => {
    res.json('test 2 ok');
});

app.post('/register', async (req,res) =>{
    const {username, password} = req.body;
    try{
        const createdUser = await User.create({username,password});
        jwt.sign({userId:createdUser._id}, sadlkjhgalfsad1a, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).status(201).json('ok');
        });
    } catch(err) {
        if(err) throw err;
    }
    
    
});

app.listen(4040);

// PAF9HZt49QDxc83L
