
import express from 'express';
import { createJob , deleteJob, getAllJobs , getJobById } from '../controllers/job.controller.js';


const router = express.Router();

router.post('/jobs', createJob);
router.get('/jobs', getAllJobs);
router.get('/jobs/:id', getJobById);
router.delete('/jobs/:id', deleteJob);

export default router;