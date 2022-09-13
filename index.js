import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 1000;

app.use(bodyParser.json());

app.use("/people", usersRoutes);
app.get("/", (req, res) =>{ 
res.send("Welcome to the Users API!")
console.log("HIII")
}
);

app.all("*", (req, res) =>{
res.send("You've tried reaching a route that doesn't exist.");
console.log("Hello");
}
);


app.listen(PORT, () =>
console.log(`Server running on port: http://localhost:${PORT}`));
