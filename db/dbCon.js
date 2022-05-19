const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb+srv://NaimBiswas:Admin1234@cluster0.3q8lg.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded..................')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
