import express from 'express';
import * as githubController from "../controller/github.controller.js";

let router = express.Router();


router.get('/repos',githubController.getRepos);


export default router;
