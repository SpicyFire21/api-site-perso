import express from 'express'
// import pool from './database/db.js'
import cors from 'cors'
import bodyParser from "body-parser";
import http from "http";

import discordRoute from './routes/discord.router.js';
import githubRoute from "./routes/github.router.js";
import musicRoute from "./routes/music.router.js";

const PORT = 3000
const apiURL = `http://localhost:${PORT}`
const app = express();
const server = http.createServer(app);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: ['https://spicyfire21.github.io','http://localhost:5173'] }));


app.use('/discord',discordRoute);
app.use('/github',githubRoute);
app.use('/music',musicRoute);


server.listen( PORT,() => {
    console.log(`API lancé sur ${apiURL}`);

});
