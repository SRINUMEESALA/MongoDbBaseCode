import mongoose from "mongoose"
const dB = "mongodb+srv://SrinuMeesala:SrinuMeesala@cluster0.kwazf2v.mongodb.net/krishna?retryWrites=true&w=majority"
const connectRemoteDBAtlas = async () => {
    try {
        const connRemoteDb = await mongoose.connect(dB, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Remote Db connection Success!")
    } catch (err) {
        console.log("Remote Db connection failed", err)
    }
}
export default connectRemoteDBAtlas