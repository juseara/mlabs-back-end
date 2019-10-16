import express from 'express';
import bodyParser from 'body-parser';
import dontenv from 'dotenv';
import cors from 'cors';
import controllers from './controllers';
import makeCallback from './express-callback';

dontenv.config();

const apiRoot = process.env.DM_API_ROOT;
const port = process.env.DM_API_PORT||3000

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get("/",(req, res)=>{
    res.send({
        api:'parking on!'
    });
});

app.post(`${apiRoot}/parking`,makeCallback(controllers.postParking))
app.put(`${apiRoot}/parking/:id/pay`,makeCallback(controllers.putParkingPay))
app.put(`${apiRoot}/parking/:id/out`,makeCallback(controllers.putParkingOut))
app.get(`${apiRoot}/parking/:plate`,makeCallback(controllers.getParkingHistory))
app.use(makeCallback(controllers.notFound))

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

export default app