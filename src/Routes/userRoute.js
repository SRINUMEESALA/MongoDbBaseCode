import express from "express";
import User from "../Models/users.js"

const usersRoute = new express.Router()

usersRoute.get("/users", async (request, response) => {
    try {
        const lst = await User.find()
        response.send({ data: lst })
    } catch (err) {
        response.send({ msg: "Getting Users data failed" })
        response.send(400)
    }

})

usersRoute.get("/user/:id", async (request, response) => {
    try {
        const _id = request.params.id
        const result = await User.find({ _id })
        response.send({ data: result })
    } catch (err) {
        response.status(404)
        response.send({ msg: "Getting User data failed" })
    }
})


usersRoute.post("/register", async (request, response) => {
    const data = request.body
    try {
        const register = await User(data).save()
        response.send({ msg: "Successfully Created", result: register })
    } catch (err) {
        response.status(400)
        response.send({ msg: "User Creation Failed" })
    }

})

usersRoute.put("/update-details/:id", async (request, response) => {
    const data = request.body
    const _id = request.params.id
    try {
        const updated = await User.updateOne({ _id }, data, { new: true })
        response.send({ msg: "Successfully Updated", result: updated })
    } catch (err) {
        response.status(400)
        response.send({ msg: "User Updation Failed" })
    }
})

usersRoute.delete("/remove-user/:id", async (request, response) => {
    const _id = request.params.id
    try {
        const deleted = await User.deleteOne({ _id })
        response.send({ msg: "Successfully Removed.", result: deleted })
    } catch (err) {
        response.status(400)
        response.send({ msg: "User Deletion Failed" })
    }
})


export default usersRoute