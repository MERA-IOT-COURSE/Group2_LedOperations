const express = require("express")
const commonOperation = require("./CommonOperations")
const app = express()

//TODO: Add command to toggle gpio
var isOn = false
var currentlyState = "Off"
var curColor = "#fff"
app.set('view engine', 'pug')
app.set('views', './pug-templates')


app.get("/",(req,res) => { commonOperation.mainPage(req,res)})

app.get("/activateLed", (req, res, next) => {commonOperation.activateLed(req, res, next)}, (req, res) => {res.redirect('/')})
app.get("/deactivateLed", (req, res, next) => {commonOperation.deactivateLed(req, res, next)}, (req, res) => { res.redirect('/')})

app.listen("8080","0.0.0.0", () => { console.log("Server started")});
