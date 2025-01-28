const express = require("express");
const cors = require("cors");

const app = express();
const port = 5003;


// Middleware
app.use(cors());
app.use(express.json());


// Start Server
app.listen(port, () => {
	console.log(`Backend server is running at http://localhost:${port}`);
});
