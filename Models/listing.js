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
           default: "https://unsplash.com/photos/a-motel-sign-on-a-building-surrounded-by-green-trees-6YiBGJMb998",
            set: (v) => v === "" ? "https://unsplash.com/photos/a-motel-sign-on-a-building-surrounded-by-green-trees-6YiBGJMb998": v,
        },
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;