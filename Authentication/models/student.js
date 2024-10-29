const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const StudentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    }
})
StudentSchema.pre('save',async function(next){
    const student=this;
   if(!student.isModified('password')) return next();
   try {
    const salt=await bcrypt.genSalt(10);
    const hashedpassword=await bcrypt.hash(student.password,salt);
    student.password=hashedpassword;
    next();
   } catch (error) {
    return next(error);
   }
})

StudentSchema.methods.comparePassword=async function(StudentPassword){
    try {
        const isMatch=await bcrypt.compare(StudentPassword,this.password)
        return isMatch;
    } catch (error) {
        throw error;
    }
}

const studentData=mongoose.model('studentcrendtial',StudentSchema);
module.exports=studentData;