const gpio = require("onoff").Gpio
var pin = new gpio(17, "out")

class CommonOperations
{
  constructor()
  {
    this.colorByState = {"On": "rgba(0, 255, 0, 0.4);", "Off": "rgba(255, 0, 0, 0.4);"}
    this.state = "Off"
  }
  activateLed(req, res, next)
  {
    console.log("Led Activated!")
    this.state = "On"
    pin.write(gpio.HIGH, (err,value) => {})
    next();
  }

  deactivateLed(req, res, next)
  {
    console.log("Led Deactivated!")
    this.state = "Off"
    pin.write(gpio.LOW, (err,value) => {})
    next();
  }

  mainPage (req, res)
  {
    res.render('template', {state: this.state, curColor: this.colorByState[this.state]})
  }
}

module.exports = new CommonOperations()
