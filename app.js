var createError = require('http-errors');
var express = require('express');
var path = require('path');
const mongoose= require('mongoose');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.connect(
    "mongodb+srv://Mano9940:Dan09940@cluster0.eurlw.mongodb.net/test",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("Database connected successfully")
    })
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmPassword:String
})

const User = new mongoose.model("User", userSchema)

app.post("/login", (req, res) => {
    const { email, password } = req.body
    User.findOne({email: email}, (err, user) => {
       if(user) {
          if(password === user.password){
              res.send({message: "Logged in successfully", user: user})
          }else{
              res.send({message: "Password did not match"})
          }
       }else{
           res.send({message:"User not registered"})
       }
    })
})

app.post("/register", (req, res) => {
    const { name, email, password, confirmPassword } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User Already Registered" })
        } else {

            const user = new User({
                name,
                email,
                password,
                confirmPassword
            })
            
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Registered successfully" })
                }
            })
        }
    })
})

module.exports = app;
