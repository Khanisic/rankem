import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Games",
        required: true,
        unique: true,
    },
    published: {
        type: Boolean,
        required: true
    },
    results: [{
        category: { type: String, required: true },
        category_results: [{
            friend: { type: String, required: true },
            points: { type: Number, required: true }
        }]
    }],
    user_entries: [{
        user_id: { type: String, required: true },
        rankings: [{
            friend: { type: String },
            points: { type: Number }
        }]
    }]
}, { timestamps: true });



const Result = mongoose.model('Result', resultSchema);