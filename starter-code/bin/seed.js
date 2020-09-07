const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity')

mongoose.connect('mongodb://localhost/celebrities', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const celebrities = [{
        name: "Dan",
        occupation: "Singer",
        catchPhrase: "There was a red square"
    },
    {
        name: "Yoseob",
        occupation: "Master of hair",
        catchPhrase: "I used to have green hair"
    },
    {
        name: "Bob",
        occupation: "Builder",
        catchPhrase: "Hammer time"
    }
];

Celebrity.insertMany(celebrities)
    .then(data => {
        console.log(`Success! Added ${data.length} celebs to the database`);
        mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
    });