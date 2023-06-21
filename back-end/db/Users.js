const mongoose = require('mongoose');

// Define blog post schema and model
const blogPostSchema = new mongoose.Schema({
    title: String,
    content: String,
  });
  
  module.exports = mongoose.model("BlogPost", blogPostSchema);