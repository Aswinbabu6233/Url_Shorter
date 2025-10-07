import mongoose from "mongoose";

const urlSchema= new mongoose.Schema({
    originalUrl:{
        type: String,
        required: true
    },
    shorturl:{
        type: String,
        required: true
    },
    shortcode:{
        type: String,
        required: true
    },
    visits :{
        type: Number,
        default: 0}
   
});

const Url= mongoose.model("Url", urlSchema);
export default Url;
