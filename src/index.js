import express from 'express';
import bodyParser from 'body-parser';
import dontenv from 'dotenv';
import cors from 'cors';
import controllers from './controllers';
import makeCallback from './express-callback';

dontenv.config();

const apiRoot = process.env.DM_API_ROOT;


const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get("/",(req, res)=>{
    res.send({
        api:'parking on!'
    });
});

app.post(`${apiRoot}/parking`,makeCallback(controllers.postParking))

app.use(makeCallback(controllers.notFound))

app.listen(process.env.DM_API_PORT, () => {
    console.log(`Server is listening on port ${process.env.DM_API_PORT}`)
})

export default app