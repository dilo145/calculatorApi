import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/add', (req, res) => {
    const { a, b } = req.query;
    const result = Number(a) + Number(b);
    res.send({ result });
});

app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    const result = Number(a) - Number(b);
    res.send({ result });
});

app.get('/multiply', (req, res) => {
    const { a, b } = req.query;
    const result = Number(a) * Number(b);
    res.send({ result });
});

app.get('/divide', (req, res) => {
    const { a, b } = req.query;
    if (Number(b) === 0) {
        res.status(400).send({ error: 'Division by zero' });
    } else {
        const result = Number(a) / Number(b);
        res.send({ result });
    }
});

app.listen(port, () => {
    console.log(`Calculator API is running at http://localhost:${port}`);
});

export default app;