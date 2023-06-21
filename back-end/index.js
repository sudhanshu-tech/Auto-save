// server.js
const express = require('express');
require('./db/config');
const cors = require("cors");
const app = express();
const Users =require('./db/Users')
app.use(cors());
app.use(express.json());



// Define API endpoints
app.post('/api',async (req, resp) => {

  // Create a new blog post
  let user = new Users(req.body);
  let result = await user.save();
  resp.send(result); 
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
