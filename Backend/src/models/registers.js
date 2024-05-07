const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema( {
    email: {
            type: String,
            required: true
          },
    username: {
            type: String,
            required: true
          },
    password: {
            type: String,
            required: true
          }
        
})
const Register = new mongoose.model("Registers", employeeSchema)
module.exports = Register;