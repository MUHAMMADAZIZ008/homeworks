import mongoose, { Schema } from "mongoose"

const otpSchema = mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    otp_code: {
        type: String,
        required: true
    },
    expires_at: {
        type: Date,
        default: () => new Date(Date.now() + 60 * 1 * 1000)
    }

}, {timestamps: true})




otpSchema.method("verify", function(userOtp){
    const dateNow = new Date();
    if (userOtp == this.otp_code && dateNow <= new Date(this.expires_at)) {
        return true;
    }
    return false;
})


export const Otp = mongoose.model("otp", otpSchema)