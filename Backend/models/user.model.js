import mongoose, {Schema} from mongoose
import bcrypt from "bcrypt"

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: [true, "password is a mandatory field"]
    },
    gender:{
        type: String,
        enum: {
            values: ['M', 'F', 'O'],
        },
        required: true,
    },
    interests:{
        type: [String],
        default: ['cricket']
    },
    history:{
        type: Schema.Types.ObjectId,
        ref: 'Meeting',
    }
}, {timeStamps: true})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

export const User = mongoose.model('User', userSchema)