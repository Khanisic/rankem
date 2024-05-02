import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, ref: "Games", required: true },
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
}, { timestamps: true });



const Results = mongoose.models.Results || mongoose.model('Results', resultSchema);

export default Results