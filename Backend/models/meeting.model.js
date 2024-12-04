import mongoose, { Schema } from "mongoose";

const meetingSchema = new Schema(
    {
        topic: {
            type: String,
            required: True,
        },
        participants: [
            {
                type: Schema.Types.ObjectId,
                ref: User,
            },
        ],
        time: {
            type: Date,
            required: True,
        },
        status: {
            type: String,
            enum: ["Scheduled", "Completed", "Cancelled"],
            default: "Scheduled",
        },
    },
    { timestamps: true },
);

export const Meeting = mongoose.model("Meeting", meetingSchema);
