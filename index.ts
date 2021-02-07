import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({origin: true, credentials: true}));

app.get('/',(req: Request, res: Response)=>{
    res.status(200).json({
        ok: true,
        msg: `API NODEJS funcionando OK`
    });
});

app.listen(3000,()=>{
    console.log('Servidor express corriendo en pto 3000');
});