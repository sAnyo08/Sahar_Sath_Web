const express = require("express");
const mongodb = require("./db");

const app = express();

// Connect to the database
mongodb();

// Middleware to handle CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.use("/api", require("./Routes/CreatUser")); // Route for creating users
app.use("/api", require("./Routes/Grievances")); // Route for grievance-related logic    // Modular grievance router

// Start the server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
