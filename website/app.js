const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');

//parses json request bodies
app.use(express.json());

//mounts routes
app.use('/auth', authRoutes);

app.listen(3000, () => console.log('Server started on port 3000'))