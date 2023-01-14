import mongoose from "mongoose";

mongoose.set('strictQuery', false);
const DatabaseConn = async () => {
    try {
        const connDb = await mongoose.connect("mongodb://localhost:27017/krishna", { useNewUrlParser: true }, { useUnifiedTopology: true }, { useCreateIndex: true })
        console.log("..........Database successfully connected!..........")
    } catch (err) {
        console.log("Failed to connect to database")
    }
}
export default DatabaseConn
