import express from 'express';
import Doctor from './modles/test.js';
import router from './routes/doctor.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
Doctor.sync()
app.use('/doctors', router)
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});