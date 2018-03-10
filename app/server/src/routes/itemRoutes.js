const express = require('express');

const app = express();
const itemRouter = express.Router();
const emailRouter = require('./emailRouter');
const passwordHash = require('password-hash');
const mongoose = require('mongoose');
const db = mongoose.connection;
// Require Item model in our routes module
const Item = require('../models/Item');
//const nodeCookie = require('node-cookie');

itemRouter.route('/user/:id').get(function (req, res) {
    let id = req.params.id;
    Item.findById(id, function (err, item) {
        res.json(item);
    });
});


itemRouter.post('/login',(req, res) => {
    
    
    let a = req.body.item;
    let email = a.email;
    let password = a.password;


    Item.findOne({email: email}).then((item) =>{
        if (item) {

            if (passwordHash.verify(password, item.code)) {
                req.session.authorized = true;
                req.session.user_id = item._id;
                // //req.session.username = email;
                // res.cookie('cookie', 'monster');
                console.log(req.session.user_id);
                res.send(item._id);

            } else {

                console.log("jjj");
            }
        } else {

            console.log('hop');

        }

    });

});


// Defined store route
itemRouter.route('/add/post').post((req, res) => {
    let a = req.body.item;
    let firstName = a.firstName;
    let lastName = a.lastName;
    let username = a.username;
    let email = a.email;
    let phone = a.phone;
    //let password = a.password;

    if (firstName.match(/^[a-zA-Z]+$/) && lastName.match(/^[a-zA-Z]+$/) && username.length >= 5 && email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && phone.length >= 5 && phone.match(/^[0-9]+$/)) {

        let getRandomCode = () => {
            let letters = '0123456789ABCDEF';
            let cod = '';
            for (let i = 0; i < 6; i++) {
                cod += letters[Math.floor(Math.random() * 16)];
            }

            return a.code = cod;
        };
        getRandomCode();

        let zzz = a.code;

        let assword = passwordHash.generate(a.code);
        a.code = assword;

        let item = new Item(a);
        console.log(a);

        item.save()

            .then(item => {
                res.status(200).json({Item: 'Item added successfully'});
                emailRouter(email, zzz);
            })
            .catch(err => {
                res.status(400).send("unable to save to database");
            });
    } else {
        console.log('erooooooooooooooooorrrrrrrrr');
    }

});

// Defined get data(index or listing) route
itemRouter.route('/').get(function (req, res) {
    Item.find((err, itms) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(itms);
        }
    });

});

// Defined edit route
itemRouter.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Item.findById(id, function (err, item) {
        res.json(item);
    });
});

//  Defined update route
itemRouter.route('/update/:id').post(function (req, res) {
    Item.findById(req.params.id, function (err, item) {
        if (!item)
            return next(new Error('Could not load Document'));
        else {
            // do your updates here
            item.item = req.body.item;

            item.save().then(item => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });

});

// Defined delete | remove | destroy route
itemRouter.route('/delete/:id').get(function (req, res) {
    Item.findByIdAndRemove({_id: req.params.id},
        function (err, item) {
            if (err) res.json(err);
            else res.json('Successfully removed');
        });

});

module.exports = itemRouter;
