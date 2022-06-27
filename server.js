import app from "./index.js"
const port = process.env.PORT
import errorMiddleware from "./middlewares/error.middleware.js"

console.log(`Node environment: ${process.env.NODE_ENV}`)
app.listen(port, () => {
    console.log(`Example app listening at port http://localhost:${port}`)
})

// Error Handler Middleware
app.use(errorMiddleware)
