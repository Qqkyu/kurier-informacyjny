import mongoose from "mongoose";
const CounterSchema = new mongoose.Schema({
    seq: { type: Number, default: 0 },
});

export const Counter = mongoose.model("counters", CounterSchema);

export const incSourceIdValue = async () => {
    var idObj = await Counter.findOneAndUpdate(
        {},
        { $inc: { seq: 1 } },
        { new: true }
    );
    return idObj.seq;
};
