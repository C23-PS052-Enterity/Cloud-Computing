const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routes/router');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(`${process.env.BASE_URL}`, router);

app.get('/', (req, res) => {
  res.send('Success Get API ENTERITY');
});

app.listen(PORT, () => {
  console.log(`app listen on port ${PORT}`);
});
