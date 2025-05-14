const mongoose = require('mongoose');

exports.clientPromise = mongoose.connect('mongodb+srv://alex:qwe@cluster0.urutrq8.mongodb.net/tweeter?retryWrites=true&w=majority&appName=Cluster0')
        .then( (m) => {
        console.log('connexion db ok !');
        return m;
        }
        )
        .catch( err => console.log(err));