import mongoose from "mongoose";

const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: Date,
    recieved: Boolean,
})

export default mongoose.model('messagecontents', whatsappSchema)