import mongoose, {Schema} from "mongoose";
import mongoose_Agregate_Pagination from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
    {
        videoFile:{
            type: String, //cloudnery
            required: true
        },
        thumNail:{
            type: String, //cloudnery
            required: true
        },
        title:{
            type: String, 
            required: true
        },
        description:{
            type: String, 
            required: true
        },
        duration:{
            type: Number, 
            required: true
        },
        views:{
            type: Number, 
            default:0
        },
        isPublished:{
            type: Boolean, 
            default:true
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref:'User'
        },
    },
    {
    timestamps:true
    }
)
videoSchema.plugin(mongoose_Agregate_Pagination)

export const Video = mongoose.model('Video', videoSchema)