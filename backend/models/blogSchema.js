import mongoose from 'mongoose';

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minLength: [10,"blog title should contain atleast 10 characters"],
        maxLength: [30,"blog title cannot exceed 30 characters"],
    },
    mainImage:{
        public_id:{
            type:String,
        required:true,
        },
        url:{
            type:String,
        required:true,
        }
    },
    intro:{
        type:String,
        required:true,
        minLength:[250,"blog intro must contain at least 250 characters"],
    },
    paraOneImage:{
        public_id:{
            type:String,
        required:true,
        },
        url:{
            type:String,
        required:true,
        }
    },
    paraOneDescription:{
        type:String,
        minLength:[50,"blog intro must contain at least 250 characters"],
    },
    paraOneTitle:{
        type:String,
        minLength:[50,"blog title must contain st least 50 characters"]
    },
    paraTwoImage:{
        public_id:{
            type:String,
        required:true,
        },
        url:{
            type:String,
        required:true,
        }
    },
    paraTwoDescription:{
        type:String,
        minLength:[50,"blog intro must contain at least 250 characters"],
    },
    paraTwoTitle:{
        type:String,
        minLength:[50,"blog title must contain st least 50 characters"]
    },
    paraThreeImage:{
        public_id:{
            type:String,
        required:true,
        },
        url:{
            type:String,
        required:true,
        }
    },
    paraThreeDescription:{
        type:String,
        minLength:[50,"blog intro must contain at least 250 characters"],
    },
    paraThreeTitle:{
        type:String,
        minLength:[50,"blog title must contain st least 50 characters"]
    },
    category:{
        type:String,
        required:true,
    },
    createdBy:{
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },
    authorName:{
        type:String,
        required:true,
    },
    authorAvatar:{
        type:String,
        required:true,
    }

});
export const Blog = mogoose.model("Blog",blogSchema);