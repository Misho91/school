const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Items
let Item = new Schema({
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        username: {type: String, unique: true, required: true},
        email: {type: String, unique: true, sparse: true, email: true, required: true},
        phone: {type: String, index: {unique: true}, required: true},
       // photo: {type: String, required: true},
        code:{type:String},

        // followers: [{
        //     type: Schema.ObjectId, ref: 'users', index: true
        // }],
        // following: [{
        //     type: Schema.ObjectId, ref: 'users', index: true
        // }],
        // role: {
        //     type: String,
        //     enum: configs.USER_ROLE_ENUM,
        //     default: configs.USER_ROLE.user
        // },

        photos: {
            type: String, default:"ghyy"

        }


    },
    {
        collection: 'items'
    });

module.exports = mongoose.model('Item', Item);
