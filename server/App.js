const uri = "mongodb+srv://umarakhtar:blackshoulder123@cluster0.4c1zkvg.mongodb.net/ESTATE?retryWrites=true&w=majority";

// Install the required packages:
// npm install express mongoose cors

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const authRoutes = require('./routes/login');
const jwt = require('jsonwebtoken');
const config = require('./config');

const app = express();
const port = 3001;

// Connect to MongoDB Atlas
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

// Create a data schema
const User = require('./models/user');

// Express middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// API endpoint to store data in the database
app.post('/signup', async (req, res) => {
  console.log("INSIDE");
  const { email } = req.body;
  User.findOne({ email }, async function (err, user) {
    if (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (!user) {
      try {
        const newData = new User(req.body); // Use the User model
        await newData.save();
        res.status(200).json({ message: 'Data stored successfully' });
      } catch (error) {
        console.error('Error storing data:', error);
        res.status(500).json({ message: 'Failed to store data' });
      }
    }
    else{
      return res.status(401).json({ message: 'Authentication failed. User not found.' });
    }
  });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  // Find the user by email
  User.findOne({ email }, function (err, user) {
    if (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed. User not found.' });
    }

    // Compare password
    console.log(user);
    user.comparePassword(password, function (err, isMatch) {
      if (err) {
        return res.status(500).json({ message: 'Internal server error' });
      }
      if (!isMatch) {
        console.log(password);
        return res.status(401).json({ message: 'Authentication failed. Invalid password.' });
      }

      // Create and sign a JWT token
      const token = jwt.sign({ userEmail: email }, config.secretKey, { expiresIn: '1h' });
      res.json({ message: 'Authentication successful', token });
    });
  });
  /*User.findOne({ email })
  .then((user) => {
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed. User not found.' });
    }

    return user.comparePassword(password)
      .then((isMatch) => {
        if (!isMatch) {
          return res.status(401).json({ message: 'Authentication failed. Invalid password.' });
        }

        const token = jwt.sign({ userEmail: email }, config.secretKey, { expiresIn: '1h' });
        res.json({ message: 'Authentication successful', token });
      })
      .catch((err) => {
        return res.status(500).json({ message: 'Internal server error' });
      });
  })
  .catch((err) => {
    return res.status(500).json({ message: 'Internal server error' });
  });*/

});

//app.use("/login",authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
