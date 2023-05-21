const mongooose = require("mongoose");

const propertyySchema = new mongooose.Schema({
    email:{ type: String, required: true, unique: true },
    purpose:String,
    type:String,
    city:String,
    area:Number,
    unit:String,
    price:Number,
    installment:Boolean,
    description:String,
    image:Buffer,
    panorama:Buffer,
    latitude: Number,
    longitude: Number,
});

const property = mongooose.model('PROPERTIES',propertyySchema);

module.exports = property;