import  express  from "express";
const app= express()
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
// import postsRoutes from "./routes/ posts.js";
// import likesRoutes from "./routes/ likes.js";
// import commentsRoutes from "./routes/ comments.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

app.use(express.json())

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Credentials", true)
    next()
})
app.use(cors({
    origin:"http://localhost:3000"
})) // i missed this "()" and wasted a week over a single error
app.use(cookieParser())


app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
// app.use("/api/posts",postsRoutes)
// app.use("/api/likes",likesRoutes)
// app.use("/api/comments",commentsRoutes)


app.listen( 8800, ()=>{
    console.log("API WORKING")
})

// server.timeout = 60000; 



//jsonwebtoken, cookie-parse, cors