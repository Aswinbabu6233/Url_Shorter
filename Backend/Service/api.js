import express from 'express';
import { geturl, Shorturl } from '../controller/apicontroller.js';

const router= express.Router();

router.post("/shorten",Shorturl);
router.get("/:shortcode",geturl);

export default router;