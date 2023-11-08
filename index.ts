import express from "express";
import bodyParser from "body-parser";

// Initialize express application
const app = express();

// Use body-parser middleware to parse JSON input
app.use(bodyParser.json());

// Define POST endpoint '/reverse'
app.post("/reverse", (req, res) => {
  // Get the input string from the request body
  const inputString = req.body.input;

  // Reverse the input string
  const reversedString = inputString.split("").reverse().join("");

  // Send the reversed string as the response
  res.send({ reversed: reversedString });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
