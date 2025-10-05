import express from 'express';
import * as musicController from "../controller/music.controller.js";

let router = express.Router();


router.get('/:name',musicController.getMusicByName);


export default router;
