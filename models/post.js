import mongoose, { Schema } from "mongoose";

const postschema = new Schema(
    {
        name: String,
        series: String,
        picture: String
    },
    {
        timestamps: true
    }
)

const Post = mongoose.models.Post || mongoose.model("Post", postschema);
export default Post;