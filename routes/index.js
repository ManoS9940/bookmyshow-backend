var express = require('express');
var router = express.Router();
var {theatreModel,seatModel,movieModel} = require ("../dbSchema")

router.get('/getmovies', async(req,res)=>{
  try {
    const movies = await movieModel.find({});
    if (movies) {
        res.json(movies)
    }
} catch (err) {
    console.log(err)
}
})

router.post('/createmovies', async(req,res)=>{
  try {
    const movies = new movieModel({
        movieUrl: req.body.movieUrl,
        movieName: req.body.movieName
    })
    const createMovie = await movies.save();
    if(createMovie){
        res.send(createMovie)
    }
        } catch (err) {
            console.log(err)
        }
})

router.get('/getseats',async(req,res)=>{
  try {
    const seats = await seatModel.find({});
    if (seats) {
        res.json(seats)
    }
} catch (err) {
    console.log(err)
}
})

router.post('/createseats',async(req,res)=>{
  try {
    const seats = new seatModel({
        rowName: req.body. rowName,
        seatNumber1: req.body.seatNumber1,
        seatNumber2: req.body.seatNumber2,
        seatNumber3: req.body.seatNumber3,
        seatNumber4: req.body.seatNumber4,
        seatNumber5: req.body.seatNumber5,
        seatNumber6: req.body.seatNumber6,
        seatNumber7: req.body.seatNumber7,
        seatNumber8: req.body.seatNumber8,
        seatNumber9: req.body.seatNumber9,
        seatNumber10: req.body.seatNumber10,
    })
    const createSeat = await seats.save();
    if(createSeat){
        res.send(createSeat)
    }
        } catch (err) {
            console.log(err)
        }
})

router.get('/gettheatres',async(req,res)=>{
  try {
    const theatres = await theatreModel.find({});
    if (theatres) {
        res.json(theatres)
    }
} catch (err) {
    console.log(err)
}
})

router.get('/createtheatres',async(req,res)=>{
  try {
    const theatres = new theatreModel({
        theatreName: req.body.theatreName,
        showTime1: req.body.showTime1,
        showTime2: req.body.showTime2,
        showTime3: req.body.showTime3,
    })
    const createTheatre = await theatres.save();
    if(createTheatre){
        res.send(createTheatre)
    }
        } catch (err) {
            console.log(err)
        }
})

module.exports = router;
