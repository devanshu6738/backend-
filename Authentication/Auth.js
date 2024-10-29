const passport=require("passport");
const localStrategy=require("passport-local").Strategy;
const StudentSchema=require("./models/student");

passport.use(new localStrategy(
    async(username,password,done)=>{
        try {
            const user=await StudentSchema.findOne({username:username});
            if(!user){
                return done(null,false,{msg:"Input correct username"});
            }
            const isPasswordMatch=user.password===password ?true:false;
            if(isPasswordMatch){
                return done(null,user)
            }else{
                return done(null,false,{msg:"Incoorect password"})
            }
        } catch (error) {
            return done(error);
        }
    }
))

module.exports=passport;