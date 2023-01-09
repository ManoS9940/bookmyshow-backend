const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    movieUrl: String,
    movieName: String
})

const seatingSchema = mongoose.Schema({
    rowName: String,
    seatNumber1: Number,
    seatNumber2: Number,
    seatNumber3: Number,
    seatNumber4: Number,
    seatNumber5: Number,
    seatNumber6: Number,
    seatNumber7: Number,
    seatNumber8: Number,
    seatNumber9: Number,
    seatNumber10: Number,
})

const theatreSchema = mongoose.Schema({
    theatreName: String,
    showTime1: String,
    showTime2: String,
    showTime3: String,
})

const theatreModel = mongoose.model("theatres", theatreSchema);
const seatModel = mongoose.model("seats", seatingSchema);
const movieModel = mongoose.model("movies", movieSchema);

module.exports = {theatreModel,seatModel,movieModel};
