import express from "express"

const trailRoute = new express.Router()


trailRoute.get("/trail", (req, res) => {
    console.log("yes received!")
})

export default trailRoute