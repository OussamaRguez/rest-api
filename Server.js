const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./models/User");
require("dotenv").config();

// Set up middleware and routes
app.use(express.json());

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Creating a new user and saving it to the database
const createUser = async () => {
  try {
    const newUser = new User({
      name: "Mohamed",
      email: "mohamed@gmail.com",
      age: 20,
      address: "1010 Tunis",
      gender: "Male",
    });

    const savedUser = await newUser.save();
    console.log("New user created:", savedUser);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

// Call the createUser function to create and save a new user
createUser();

// Route: Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});
