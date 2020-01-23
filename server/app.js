import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes/index';

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v3', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
