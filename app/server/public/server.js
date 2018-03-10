//server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieSession = require('cookie-session');
const path = require('path');
const cors = require('cors');
const db = mongoose.connection;

const MongoClient = require('mongodb').MongoClient;

const bodyParser = require('body-parser');
let app = express();

const multer  = require('multer');
const Item = require('../src/models/Item');

const port = process.env.PORT || 8000;

// Mongoose connection with mongodb
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/yes')
    .then(() => { // if all is ok we will be here
        console.log('Start');
    })
    .catch(err => { // if error we will be here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });
// Required application specific custom router module
let itemRouter = require('../src/routes/itemRoutes');


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('trust proxy', 1);


app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}));
// const Item = require('../src/models/Item');
app.use(express.static(path.join(__dirname, '../../../build')));



//
// app.get('/', (req, res)=> {
//   res.send('Express server is up and running.');
// })
//
// //GET request to server
// app.get('/api', (req, res)=> {
//
// });
//
// //POST request to server
// app.post('/api', (req, res)=> {
//
// })
//
// //DELETE request to server
// app.delete('/api', (req, res)=> {
//
// })
//
// //PUT request to server
// app.put('/api', (req, res)=> {
//
// // });
let i = 0;

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null,'app/client/src/images/avatar/' )
    },

    filename: function (req, file, cb) {
        let fom = file.originalname.substr(file.originalname.length - 4);
        file.originalname='avatar'+ i++ ;
         let name = file.originalname +(fom.toLowerCase());
        file.originalname=name;
        cb(null, name)

    }
});


const upload = multer({ storage: storage });

// let upo=(req,x)=> {
//     Item.update({_id: req.session.user_id}, {$set: {photos: x}});
// };

    app.post('/user', upload.single('filetoupload'), function (req, res) {
        // console.log(req.session.user_id);
        //  res.send("File upload sucessfully.");
        // console.log(file.originalname);
console.log(req.file.originalname);

    // Item.update({_id: req.session.user_id}, {$set: {photos:req.file.path }});
    //     res.end("ok");

            Item.findById(req.session.user_id, function (err, item) {
                if (!item)
                    return next(new Error('Could not load Document'));
                else {
                    // do your updates here
console.log(item);
                   item.photos =req.file.originalname;

                    item.save().then(item => {
                        res.json('Update complete');
                    })
                        .catch(err => {
                            res.status(400).send("unable to update the database");
                        });
                }
            });


    });

    app.use('/items', itemRouter);

    app.get('*', (req, res) => {

        res.sendFile(path.resolve(__dirname, '../../../build', 'index.html'));

    });

app.listen(port, _=> console.log(`The server is listening on port ${port}`));