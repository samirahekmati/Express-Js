const express = require('express');
const app = express();

// express is two things : 1. Router 2. Miidleware that comprises a webframwork
// Middleware F is any F that has access to req, res, next objects

function validateUser(req,res,next){
    res.locals.validated = true; //local: This property is useful for exposing request-level information such as the request path, authenticated user, user settings and so on.
    console.log("VALIDATED RAN!")
    next(); // tells express to hand control off to the next peice of middleware in the cycle
}

//calling middleware
app.use(validateUser) //use validated user at app level,
//so this F (validatedUser) is going to run every time a http req is made


app.get("/", (req, res, next) => {
    res.send("<h1>main page</h1>")
    console.log("CYCLE CONTINUES!")
    console.log(res.locals.validated)
})

app.get("/admin", (req, res, next) => {
    res.send("<h1>ADMIN page</h1>")
    console.log("CYCLE CONTINUES FROM ADMIN PATH!")
    console.log(res.locals.validated)
})


app.listen(3000)