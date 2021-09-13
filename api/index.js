//archivo onde o servidor roda

import express from 'express';
import cors from 'cors';
import winston from 'winston';
import clientRouter from './routes/client.route.js';


// const { combine, timestamp, label, printf } = winston.format;
// const myFormat = printf(({ level, message, label, timestamp }) => {
//   return `${timestamp} [${label}] ${level} ${message}`;
// });
// global.logger = winston.createLogger({
//   level: 'silly',
//   transports: [
//     new (winston.transports.Console)(),
//     new (winston.transports.File)({ filename: '' })
//   ],
//   format: combine(
//     label({ label: 'store-api' }),
//     timestamp(),
//     myFormat
//   )
// });

const app = express();
app.use(cors());
app.use(express.json());

app.use('/client', clientRouter);
app.use((err, req, res, next) => {
logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
res.status(400).send({ error: err.message });
})

app.listen(3000, () => console.log('Api Started!'));

// const connection = mysql.createConenction({
//     host: 'localhost',
//     user: 'root',
//     database: 'test',
// })

// connection.query(
//   'SELECT * FROM `table` WHERE `name` ="Page" AND `age` >45'
// )


// app.post("/create", (req, res) => {
//     const location = req.body.location

//     db.query(
//         "INSERT INTO fcamara (location) VALUES(?,?)",
//         [location],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send('Inserido com sucesso');
//             }
//         }
//     );
// });


// app.get("/location", (req, res) => {
//     db.query("SELECT * FROM schedule", (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     });
//   });
  

  

app.listen(3000, () => {
    console.log("Rodando na porta 3000");
});