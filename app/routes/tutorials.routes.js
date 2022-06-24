 module.exports= app => {
    const tutorials =require("../controllers/tutorial.controllers");
   
   
   app.get("/",(req,res)=>{
    res.json({message:"Welcome to my backend application"})
});
    app.post("/",tutorials.create);

    app.get("/all",tutorials.findAll);

    app.get("/published",tutorials.findAllPusblished);

    app.get("/:id",tutorials.findOne);

    app.put("/:id",tutorials.update);

    app.delete("/:id",tutorials.delete);

    app.delete("/",tutorials.deleteAll);

    // app.use("/api/tutorials",app)
};
 
 