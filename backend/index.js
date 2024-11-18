const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const studentRoutes = require('./routes/student');
const teacherRoutes = require('./routes/teacher');

app.use('/api/student', studentRoutes);
app.use('/api/teacher', teacherRoutes);


const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('MongoDB connected'))
   .catch(err => console.error(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
