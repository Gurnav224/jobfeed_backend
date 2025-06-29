
import Job from "../models/job.model.js";

export const createJob = async (req, res) => {

    const { title, company, location, salary, description, type, qualifications } = req.body;

    // Validate request body
    if (!title || !company || !location || !salary || !description || !type || !qualifications) {
        return res.status(400).json({ message: "All fields are required" });
    }   

  try {
    const job = new Job({
      title,
      company,
      location,
      salary,
      description,
      type,
      qualifications
    });
    await job.save();
    res.status(201).json({ message: "Job created successfully", job });
  } catch (error) {
    res.status(400).json({ message: "Error creating job", error: error.message });
  }
}

export const getAllJobs = async (req, res) => {
    const query = {}
    if (req.query.title) {
        query.title = { $regex: req.query.title, $options: 'i' }; 
    }
    console.log(query);
  try {
    const jobs = await Job.find(query).sort({ createdAt: -1 }); 
    if (jobs.length === 0) {
      return res.status(404).json({ message: "No jobs found" });
    }
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error: error.message });
  }
}


export const getJobById = async (req, res) => {
  const { id } = req.params;
  try {
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: "Error fetching job", error: error.message });
  }
} 


export const deleteJob = async (req, res) => {
  const { id } = req.params;
  try {
    const job = await Job.findByIdAndDelete(id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting job", error: error.message });
  }
}