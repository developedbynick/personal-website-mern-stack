require('dotenv').config() // Read environment variables
const mongoose = require('mongoose');
const app = require('./app')

// Defining PORT
const port = process.env.PORT || 3000;

const connectToDatabase = async () => {
    // Connect to database
    console.log('Attempting to connect to database...')
    const { connection } = await mongoose.connect(process.env.MONGO);
    console.log(`Successfully connected to "${connection.name}" database`)
    // Starting server
    app.listen(port, console.log.bind(this, `Server listening on port ${port}`));
}
connectToDatabase()

// Error Handling
