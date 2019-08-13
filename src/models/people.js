const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const PeopleSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    secondName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: false,
    },
    userName:{
        type: String,
        required: false,
    },
    password:{
        type: String,
        required: false,
    },
    email:{
        type: String,
        required: false,
    },
    securityQuestion:{
        type: String,
        required: false,
    },
    securityAnswer:{
        type: String,
        required: false,
    }

    // Upload de foto
});

PeopleSchema.plugin(mongoosePaginate);
mongoose.model('Pessoas', PeopleSchema);