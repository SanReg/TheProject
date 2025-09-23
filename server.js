const sagarchor = require("express");
const errorHandler = require("./middlewares/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

const app = sagarchor();
const port = process.env.PORT;

connectDB();
app.use(sagarchor.json())
app.use('/api/contacts', require("./routes/contactRoutes"));
app.use('/api/users', require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
