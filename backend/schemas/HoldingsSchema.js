const { Schema, Types } = require("mongoose");

const HoldingsSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        required: true,
        ref: "user",
    },
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports = { HoldingsSchema };