import express from 'express';
const router = express.Router();
import userRouter from '../routes/users.routes.js';
import adminRouter from '../routes/adminRouter.js';
import { insertData, login } from '../controllers/userregistration.js';


//router.post('/create',userreg.insertData)

 router.post("/create",(req,res)=>{
     console.log(req.body);
 })


// router.put("/update", updateData);

 router.get("/",(req,res)=>{
  res.render("index")
 });

router.get("/about",(req,res)=>{
     res.render("about")
    });

   router.get("/service",(req,res)=>{
     res.render("service")
    });

  router.get("/package",(req,res)=>{
     res.render("package")
    });

   router.get("/destination",(req,res)=>{
    res.render("destination")
    });

   router.get("/booking",(req,res)=>{
    res.render("booking")
   });

   router.get("/team",(req,res)=>{
    res.render("team")
    });

    router.get("/testimonial",(req,res)=>{
     res.render("testimonial")
    });

    router.get("/404 page",(req,res)=>{
     res.render("404 page")
    });

    router.get("/contact",(req,res)=>{
     res.render("contact")
    });

   router.post("/register",insertData);

    router.get("/register",(req,res)=>{
     res.render("registration",{'msg':""})
    });

   router.post("/login",login);

   router.get("/login",(req,res)=>{
     res.render("login",{'msg':""})
    });

    // User and Admin routes
router.use('/user', userRouter);
router.use('/admin', adminRouter);

   export default router
//module.exports = router