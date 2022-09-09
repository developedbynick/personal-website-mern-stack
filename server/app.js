const express = require('express');
const app = express();
// Routers
const authRouter = require('./routers/authRouter')
// Middleware
app.use(express.json())
app.use('/api/users', authRouter)

module.exports = app;