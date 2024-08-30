const mongoose=require('mongoose')
const EmployeeSchema=new mongoose.Schema({
    name:String,
    email:String,
    pwd:String
})

const EmployeeModel=mongoose.model('employees',EmployeeSchema) //employees is the table we created
module.exports=EmployeeModel