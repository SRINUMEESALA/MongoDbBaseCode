import dotenv from "dotenv"
import express from "express"
import DatabaseConnLocal from "./src/Database/localDbCon.js"
import connectRemoteDBAtlas from "./src/Database/remoteDbCon.js"
import User from "./src/Models/users.js"
import usersRoute from "./src/Routes/userRoute.js"
import trailRoute from "./src/Routes/trailRoute.js"

dotenv.config()
const port = process.env.PORT || process.env.serverRunningPortNumber

const app = express()
app.use(express.json())
app.listen(port, () => console.log(`..........Server running successfully at ${port}..........`))
// DatabaseConnLocal()


connectRemoteDBAtlas()


app.use(express.static("../backend/public"))

app.use(usersRoute)
app.use(trailRoute)












// app.get("/users", async (request, response) => {
//     try {
//         const lst = await User.find()
//         response.send({ data: lst })
//     } catch (err) {
//         response.send({ msg: "Getting Users data failed" })
//         response.send(400)
//     }

// })

// app.get("/user/:id", async (request, response) => {
//     try {
//         const _id = request.params.id
//         const result = await User.find({ _id })
//         response.send({ data: result })
//     } catch (err) {
//         response.status(404)
//         response.send({ msg: "Getting User data failed" })
//     }

// })


// app.post("/register", async (request, response) => {
//     const data = request.body
//     try {
//         const register = await User(data).save()
//         response.send({ msg: "Successfully Created", result: register })
//     } catch (err) {
//         response.status(400)
//         response.send({ msg: "User Creation Failed" })
//     }

// })

// app.put("/update-details/:id", async (request, response) => {
//     const data = request.body
//     const _id = request.params.id
//     try {
//         const updated = await User.updateOne({ _id }, data, { new: true })
//         response.send({ msg: "Successfully Updated", result: updated })
//     } catch (err) {
//         response.status(400)
//         response.send({ msg: "User Updation Failed" })
//     }
// })

// app.delete("/remove-user/:id", async (request, response) => {
//     const _id = request.params.id
//     try {
//         const deleted = await User.deleteOne({ _id })
//         response.send({ msg: "Successfully Removed.", result: deleted })
//     } catch (err) {
//         response.status(400)
//         response.send({ msg: "User Deletion Failed" })
//     }
// })





