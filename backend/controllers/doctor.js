import Doctor from "../modles/test.js";

export const addDoctor = async (req, res) => {
  const { name, available, salary } = req.body;
  try {
    const newDoctor = await Doctor.create({ name, available, salary });
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(500).json({ message: "Error creating doctor", error });
  }
}
export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.findAll();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching doctors", error });
  }
}