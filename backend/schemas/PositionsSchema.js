const { Schema, Types } = require("mongoose");

const PositionsSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        required: true,
        ref: "user",
    },
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

module.exports = { PositionsSchema };