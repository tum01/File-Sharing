const express = require('express');
const fileRoute = require('./routes/files');
const showRoute = require('./routes/show');
const downloadRoute = require('./routes/download');
// const cors = require('cors');
const app = express();
const path = require('path');
const connectDB = require('./config/db');
connectDB();
const cors = require('cors');
app.use(cors({
  origin: 'http://127.0.0.1:5500', // Update with your client's origin
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));


app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json())

app.use('/api/files', fileRoute);
app.use("/files", showRoute);
app.use('/files/download', downloadRoute);



const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// app pass = jhfc bant ppgx gted