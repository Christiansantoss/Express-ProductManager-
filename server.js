


// ============ Express ============ 
const express = require('express');
const app = express();
// =================================



// ============ Body Parser ============ 
// Will require: express/app
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// =====================================



// ============ View Engine ============ 
// Will require: express/app
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// =====================================



// ============ Session ============ 
// Will require: express/app
// const session = require('express-session');
// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 600000 }
// }))
// =================================



// ============ Flash ============ 
// Will require: express/app, express-session
// const flash = require('express-flash');
// app.use(flash());
// ===============================



// ============ Mongoose ============ 
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/tasks") //change

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, "Title must exist."],
        minlength: [3, "Title must be at least 3 characters long"]
    },
    description: { 
        type: String, 
        required: [true, "Description must exist."],
        minlength: [3, "Description must be at least 3 characters long"]
    },
    completed: { 
        type: Boolean, 
        default: false
    },
}, { timestamps: true });
const Product = mongoose.model('Product', ProductSchema); //change
// ==================================

// ============ Various Helper Libraries ============ 
const path = require('path');
// =================================================
// ============ Static Routes ============ 
// Will use: path 
app.use(express.static(path.join(__dirname, "angular-products/dist/angular-products"))); //change
// =======================================

app.listen(8000, function () {
    console.log('listening on port 8000')
});

app.all("*",(req,res,next) => {
    res.sendFile(path.resolve("./angular-products/dist/angular-products/index.html"))
});