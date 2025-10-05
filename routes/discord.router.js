import express from 'express';
import * as discordController from "../controller/discord.controller.js";

let router = express.Router();


router.post('/send',discordController.sendMessage);


export default router;
