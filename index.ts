import express from 'express';
import cors from 'cors';
import { consumer } from './consumer/consumer';
import { mongodbConnection } from './config/mongo_config';


const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({message: "Mail Server is running"});
})

//server setup
app.listen(8001, () => {
    console.log('Mail Server is running on port 8001');
    mongodbConnection();
    consumer();
});