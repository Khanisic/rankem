import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, ref: "Games", required: true, unique: true, },
    published: { type: Boolean, required: true },
    results: [{
        category: {
            name: { type: String, required: true },
            results: [{
                friend: { type: String, required: true },
                points: { type: Number, required: true }
            }]
        },
    }],
    user_entries: [{
        category: {
            name: { type: String, required: false },
            results: [{
                friend: { type: String, required: false },
                points: { type: Number, required: false }
            }]
        },
    }]
}, { timestamps: true });



const Result = mongoose.model('Result', resultSchema);