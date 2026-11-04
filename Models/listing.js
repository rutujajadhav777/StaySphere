const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: {
            type: String,
        },
        url:{
            type:String,
            default: "https://images.unsplash.com/photo-1793559141197-6f3526020346?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            set: (v) => v === "" ? "https://images.unsplash.com/photo-1793559141197-6f3526020346?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D": v,
        },
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;