const express = require('express');
const { Calculator } = require('./helpers');
const { ExpressError } = require('./expressError');

const app = express();
const calc = new Calculator()

app.use(express.json());

app.use((req, res, next) => {
    if (!('nums' in req.query)) {
        next(new ExpressError('nums are required', 400))
    }
    try {
        req.query.nums = req.query.nums.split(',').map(num => {
            if (parseInt(num)) {
                return parseInt(num);
            }
            else { throw new ExpressError(`${num} is not a number`, 400); }
        })
    } catch (err) { next(err) }
    next();
})

app.get('/mean', (req, res, next) => {
    try {
        const mean = calc.mean(req.query.nums);
        return res.status(200).json({ response: { 'operation': 'mean', value: mean } });
    }
    catch (err) {
        next(err)
    }
})

app.get('/median', (req, res) => {
    const median = calc.median(req.query.nums);

    return res.status(200).json({ response: { 'operation': 'median', value: median } });
})

app.get('/mode', (req, res) => {
    const mode = calc.mode(req.query.nums);

    return res.status(200).json({ response: { 'operation': 'mode', value: mode } });
})

app.use((error, req, res, next) => {
    return res.status(error.statusCode).send(error.statusCode, error.message);
})

app.listen(3000, function () {
    console.log('Server running on port 3000');
})