const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/User");
const connectDB = require("./Connect");
connectDB();

// const app = express();
// const port = process.env.PORT || 3000;

// // Set up middleware and routes
// app.use(express.json());

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// // Connect to the MongoDB database
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       connectTimeoutMS: 30000,
//     });
//     console.log("Connected to the database");
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//   }
// };

// Creating a new user and saving it to the database
const newUser = new User({
  name: "Mohamed",
  email: "mohamed@gmail.com",
  age: 20,
  address: "1010 Tunis",
  gender: "Male",
});

// Save the new person asynchronously
const saveUser = async () => {
  try {
    const savedUser = await newUser.save();
    console.log("Person saved successfully:", savedUser);
  } catch (error) {
    console.error("Error occurred while saving person:", error);
  }
};

saveUser();

const searchName = "Mohamed";

User.find({ name: searchName })
  .then((user) => {
    console.log("People found with the name", searchName + ":", user);
  })
  .catch((err) => {
    console.error("Error occurred while searching:", err);
  });

// // GET: Return all users
// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     console.error("Error retrieving users:", error);
//     res.status(500).json({ error: "Failed to retrieve users" });
//   }
// });

// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const User = require("./models/User");
// require("dotenv").config();

// // Connect to the MongoDB database
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       connectTimeoutMS: 30000,
//     });
//     console.log("Connected to the database");
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//   }
// };

// // Set up middleware and routes
// app.use(express.json());

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// // Creating a new user and saving it to the database
// const createUser = async () => {
//   try {
//     const newUser = new User({
//       name: "Mohamed",
//       email: "mohamed@gmail.com",
//       age: 20,
//       address: "1010 Tunis",
//       gender: "Male",
//     });

//     const savedUser = await newUser.save();
//     console.log("New user created:", savedUser);
//   } catch (error) {
//     console.error("Error creating user:", error);
//   }
// };

// // Call the createUser function to create and save a new user
// createUser();

// // Route: Get all users
// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     console.error("Error retrieving users:", error);
//     res.status(500).json({ error: "Failed to retrieve users" });
//   }
// });
