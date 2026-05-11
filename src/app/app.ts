import express, {type Application} from 'express';
import authRouter from '../controllers/auth.control';

const app: Application = express();

app.use(express.json());

app.use("/auth", authRouter)

app.get('/', (req, res) => {
    res.send("Welcome to NodeAttend backend!")
})

export default app;