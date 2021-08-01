require("./db/connection")
const express = require ("express");
const app = express();
const cors = require('cors');
const userRoute = require("./users/users.routes")
const movieRoute = require("./users/movie.routes")
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(userRoute);
app.use(movieRoute);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
