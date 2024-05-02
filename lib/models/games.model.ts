import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true, },
    created_by: { type: String, required: true, alias: 'user_email' },
    friends: [{ type: String, required: true },],
    categories: [{ type: String, required: true }],
    usersRanked: [{ type: String, required: true }],
}, { timestamps: true });

const Games = mongoose.models.Games || mongoose.model('Games', gameSchema);

export default Games